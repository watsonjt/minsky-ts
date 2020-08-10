import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        label:"Runge Kutta",
        submenu:[
          {label:"Runge Kutta"}
        ]
    }
    object_apply(menu,apply)
    return menu
}