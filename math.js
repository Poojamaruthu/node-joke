const add= (a,b)=>a+b;
// exports.add =(a,b)=>a+b;
const sub= (a,b)=>a-b;
const mul= (a,b)=>a*b;
const div= (a,b)=>a/b;

const func=(arr)=>{ return arr.map((e)=>console.log(e))}

const filter=(arr)=>{ return arr.filter((a)=>{ return a%2==0})}


module.exports={add,sub,mul,div,func,filter}