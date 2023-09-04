type Obj={
    height:number;
    weight:number;
    gender?:boolean;
}

const obj:Obj={
    height:3434,
    weight:34,
    gender:true
}
const obj2:Obj={
    height:67,
    weight:94,
    gender:false
}

type FuncType=(n:number,m:number,l?:number)=>number

const func:FuncType=(n,m,l)=>{
    if(typeof l==="undefined") return n*m
    return n * m* l;
};

func(25,23)