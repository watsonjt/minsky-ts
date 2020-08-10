import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        role:"help",
        submenu:[
          {
            label:"Minsky Documentation"
          }
        ]
    }
    object_apply(menu,apply)
    return menu
}