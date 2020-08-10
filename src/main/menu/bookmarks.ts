import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        label:"Bookmarks",
        submenu: [
          {label:"Bookmark this position"},
          {label:"Delete"}, //this has submenu but dependent on bookmarks?
          {type:"separator"}
        ]
    }
    object_apply(menu,apply)
    return menu
}