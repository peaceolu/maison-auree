import { Star } from 'lucide-react'
import { Product } from '../types'
import { useCart } from '../context/CartContext'
import { Img } from './Reveal'
export default function ProductCard({p}:{p:Product}){
 const {add}=useCart()
 return <article className="group">
  <div className="relative aspect-[4/5] bg-cream overflow-hidden">
   <Img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full transition-opacity duration-700 group-hover:opacity-0"/>
   <Img src={p.hover} alt="" className="absolute inset-0 h-full w-full opacity-0 scale-105 transition-all duration-[1200ms] group-hover:opacity-100 group-hover:scale-100"/>
   {p.badge&&<span className="absolute left-4 top-4 bg-ivory px-3 py-1 text-[10px] tracking-[0.2em]">{p.badge}</span>}
   <button onClick={()=>add(p)} className="absolute inset-x-0 bottom-0 bg-espresso py-4 text-[11px] uppercase tracking-[0.25em] text-ivory translate-y-full group-hover:translate-y-0 max-md:translate-y-0 transition-transform duration-500">Quick add</button>
  </div>
  <div className="mt-5 flex justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.25em] text-taupe">{p.category}</p><h3 className="font-serif text-2xl text-espresso">{p.name}</h3></div><p className="text-espresso">${p.price}</p></div>
  <p className="mt-2 text-sm text-charcoal/70">{p.description}</p>
  <p className="mt-2 flex items-center gap-1 text-xs text-taupe"><Star size={12} fill="currentColor"/>{p.rating}</p>
 </article>
}
