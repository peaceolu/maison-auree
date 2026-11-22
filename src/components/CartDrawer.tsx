import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Btn, Img } from './Reveal'
export default function CartDrawer(){
 const {open,setOpen,items,change,remove,total}=useCart()
 return <AnimatePresence>{open&&<>
  <motion.div className="fixed inset-0 z-50 bg-charcoal/40" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
  <motion.aside className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory p-8" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{duration:.6,ease:[.22,1,.36,1]}}>
   <div className="flex items-center justify-between"><h2 className="font-serif text-3xl">Your bag</h2><button aria-label="Close" onClick={()=>setOpen(false)}><X/></button></div>
   <div className="mt-8 flex-1 space-y-6 overflow-y-auto">
    {items.length===0&&<p className="text-taupe">Your bag is empty.</p>}
    {items.map(i=><div key={i.id} className="flex gap-4"><Img src={i.image} alt={i.name} className="h-24 w-20 shrink-0"/>
     <div className="flex-1"><p className="font-serif text-lg">{i.name}</p><p className="text-sm text-taupe">${i.price}</p>
      <div className="mt-2 flex items-center gap-3 text-sm"><button aria-label="Decrease" onClick={()=>change(i.id,-1)}><Minus size={14}/></button>{i.qty}<button aria-label="Increase" onClick={()=>change(i.id,1)}><Plus size={14}/></button><button className="ml-auto text-xs uppercase tracking-widest text-taupe" onClick={()=>remove(i.id)}>Remove</button></div></div></div>)}
   </div>
   <div className="border-t border-champagne pt-6"><div className="mb-2 flex justify-between"><span>Subtotal</span><span>${total}</span></div><p className="mb-4 text-xs text-taupe">{total>=150?'Complimentary shipping applied.':`$${150-total} away from complimentary shipping.`}</p><Btn solid onClick={()=>alert('Demo only: checkout is not connected.')}>Checkout</Btn></div>
  </motion.aside></>}</AnimatePresence>
}
