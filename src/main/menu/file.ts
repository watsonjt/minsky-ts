import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {    
        label: "File",
        submenu : [
        {label: "About Minsky"},
        {label: "Upgrade"},
        {label: "New System"},
        {label: "Open"},
        {label: "Recent Files"},
        {label: "Library"},
        {label: "Save"},
        {label: "SaveAs"},
        {label: "Insert File as Group"},
        {label: "Dimensional Analysis"},
        {label: "Export Canvas"},
        {
            label: "Export Plots",
            submenu: [
            {label: "As SVG"},
            {label: "As CSV"}
            ]
        },
        {label:"Log simulation"},
        {label:"Recording"},
        {label:"Replay recording"},
        {role:"quit"},
        {type:"separator"},
        {label:"Debugging Use", enabled:false},
        {label:"Redraw"},
        {label:"Object Browser"},
        {label:"Select items"},
        {label:"Command"}
        ]
    }
    object_apply(menu,apply)
    return menu
}