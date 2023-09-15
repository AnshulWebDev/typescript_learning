// type Obj={
//     height:number;
//     weight:number;
//     gender?:boolean;
// }

// const obj:Obj={
//     height:3434,
//     weight:34,
//     gender:true
// }
// const obj2:Obj={
//     height:67,
//     weight:94,
//     gender:false
// }

// type FuncType=(n:number,m:number,l?:number)=>number

// const func:FuncType=(n,m,l)=>{
//     if(typeof l==="undefined") return n*m
//     return n * m* l;
// };

// func(25,23)

//function with object 
interface Product{name:String,stock:Number,price:Number,photo:String}
type GetDataType=(product:Product)=>void
const getData:GetDataType=(product)=>{
    console.log(product)
};

const product1={
    name:"Mackbook",stock:46,price:9999,photo:"sample photo url"
};

getData(product1)