import {object_apply, ApplyFunction} from "../../common/utils";
import {MenuItemConstructorOptions} from 'electron';


export const menu = (apply:ApplyFunction):MenuItemConstructorOptions =>
{
    const menu:MenuItemConstructorOptions = {
        label:"Insert",
        submenu: [
          {label:"Plot"},
          {label:"Godley Table"},
          {
            label:"Variable",
            submenu:[
              {label: "---------"}, //popout/float menu
              {label:"variable"},
              {label:"constant"},
              {label:"parameter"},
            ]
          },
          {
            label:"Fundamental constants",
            submenu:[
              {label:"euler"},
              {label:"pi"},
              {label:"zero"},
              {label:"one"},
              {label:"inf"},
            ]
          },
          {
            label:"Binary Ops",
            submenu:[
              {label:"add"},
              {label:"subtract"},
              {label:"multiply"},
              {label:"divide"},
              {label:"min"},
              {label:"max"},
              {label:"and"},
              {label:"or"},
              {label:"log"},
              {label:"pow"},
              {label:"polygamma"},
              {label:"lt"},
              {label:"le"},
              {label:"eq"},
            ]
          },
          {
            label:"Functions",
            submenu:[
              {role:"copy"},
              {label:"sqrt"},
              {label:"exp"},
              {label:"ln"},
              {label:"sin"},
              {label:"cos"},
              {label:"tan"},
              {label:"asin"},
              {label:"acos"},
              {label:"atan"},
              {label:"sinh"},
              {label:"cosh"},
              {label:"tanh"},
              {label:"abs"},
              {label:"floor"},
              {label:"frac"},
              {label:"not"},
              {label:"percent"},
              {label:"gamma"},
              {label:"fact"},
            ]
          },
          {
            label:"Reductions",
            submenu:[
              {label:"sum"},
              {label:"product"},
              {label:"infimum"},
              {label:"supremum"},
              {label:"any"},
              {label:"all"},
              {label:"infIndex"},
              {label:"supIndex"},
            ]
          },
          {
            label:"Scans",
            submenu:[
              {label:"runningSum"},
              {label:"runningProduct"},
              {label:"difference"},
            ]
          },
          {
            label:"Tensor operations",
            submenu:[
              {label:"innerProduct"},
              {label:"outerProduct"},
              {label:"index"},
              {label:"gather"},
            ]
          },
          {label:"time"},
          {label:"integrate"},
          {label:"differentiate"},
          {label:"data"},
          {label:"ravel"},
        ]
    }
    object_apply(menu,apply)
    return menu
}