import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        label:"Options",
        submenu:[
          {label:"Preferences"},
          {label:"Background Color"},
        ]
    }
    object_apply(menu,apply)
    return menu
}