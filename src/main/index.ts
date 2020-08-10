/*if (module.hot != null) {
    module.hot.accept("./ProjectInfoProducer", () => {
      rxIpc.cleanUp() //example if renderer has ipc com
      configureIpc(storeManager)
    })
  }*/
  if (module.hot) {
    module.hot.accept(()=>{
        console.log("errors in main")
    });
  }

import path from 'path'
import { format as formatUrl } from 'url'
import {app, BrowserWindow, Menu, MenuItem , MenuItemConstructorOptions} from 'electron'


const isDevelopment = process.env.NODE_ENV !== 'production'

let mainWindow:BrowserWindow | null = null;

const createWindow =  ()=>{

    

  const window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
  })

  

  if (isDevelopment){
    window.webContents.openDevTools();
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })
  
  return window
}

const hide_unimplemented = (obj:{[index:string]:any})=>{
  if(obj.submenu === undefined
    && obj.label !== undefined
    && obj.click === undefined){
    obj.visible = false
  }
}

app.on('ready', ()=>{

    const template:MenuItemConstructorOptions[] = [
        require('@/menu/file').menu(hide_unimplemented),
        require('@/menu/edit').menu(hide_unimplemented),
        require('@/menu/bookmarks').menu(hide_unimplemented),
        require('@/menu/insert').menu(hide_unimplemented),
        require('@/menu/options').menu(hide_unimplemented),
        require('@/menu/runge_kutta').menu(hide_unimplemented),
        require('@/menu/help').menu(hide_unimplemented),
    ]
    mainWindow = createWindow();
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = createWindow()
  }
})