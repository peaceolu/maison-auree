import { createContext, useContext, useState, ReactNode } from 'react'
import { CartItem, Product } from '../types'
interface Ctx{items:CartItem[];open:boolean;setOpen:(o:boolean)=>void;add:(p:Product)=>void;change:(id:number,d:number)=>void;remove:(id:number)=>void;count:number;total:number}
const C=createContext<Ctx>(null!)
export const useCart=()=>useContext(C)
export function CartProvider({children}:{children:ReactNode}){
 const [items,setItems]=useState<CartItem[]>([]);const [open,setOpen]=useState(false)
 const add=(p:Product)=>{setItems(s=>s.find(i=>i.id===p.id)?s.map(i=>i.id===p.id?{...i,qty:i.qty+1}:i):[...s,{...p,qty:1}]);setOpen(true)}
 const change=(id:number,d:number)=>setItems(s=>s.map(i=>i.id===id?{...i,qty:i.qty+d}:i).filter(i=>i.qty>0))
 const remove=(id:number)=>setItems(s=>s.filter(i=>i.id!==id))
 const count=items.reduce((a,i)=>a+i.qty,0), total=items.reduce((a,i)=>a+i.qty*i.price,0)
 return <C.Provider value={{items,open,setOpen,add,change,remove,count,total}}>{children}</C.Provider>
}
