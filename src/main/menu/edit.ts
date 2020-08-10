import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        label:"Edit",
        submenu: [
          {role:"undo"},
          {role:"redo"},
          {role:"cut"},
          {role:"copy"},
          {role:"paste"},
          {label:"Group selection"},
          {label:"Dimensions"},
        ]
    }
    object_apply(menu,apply)
    return menu
}