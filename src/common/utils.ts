export type FilterFunction = (item:{[index:string] : any}) => boolean
export type ApplyFunction = (item:{[index:string] : any}) => void
export type Readonly<T> = {readonly [P in keyof T]: T[P];};

export const object_apply = (obj:{[index:string] : any}, lambda:ApplyFunction):void => {
    if (obj === {}) return;
    lambda(obj)
    Object.keys(obj)
      .forEach(k => 
        Array.isArray(obj[k]) ?
          obj[k].forEach((a:{[index:string] : any})=>object_apply(a,lambda)): 
          obj[k] instanceof Object ? object_apply(obj[k],lambda):
          object_apply({},lambda)
      );
}

export const object_flatten =  (obj:{[index:string] : any}, acc:{[index:string] : any}[]):void=>{
    acc.push(obj)
    Object.keys(obj)
      .filter((key)=>obj[key] instanceof Object).map(key => 
        Array.isArray(obj[key])?
        obj[key].forEach((a:{[index:string] : any})=>object_flatten(a,acc)):
        object_flatten(obj[key],acc)
      );
}


