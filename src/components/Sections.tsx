import { FormEvent, useState, ReactNode } from 'react'
import { Star, Instagram, Facebook, Youtube } from 'lucide-react'
import { products } from '../data/products'
import { ingredients } from '../data/ingredients'
import { testimonials } from '../data/testimonials'
import ProductCard from './ProductCard'
import { Img, Label, Reveal } from './Reveal'
const H=({children}:{children:ReactNode})=><h2 className="font-serif text-4xl leading-tight text-espresso md:text-6xl">{children}</h2>
const scroll=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})

export const BrandIntro=()=><section className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
 <Reveal><Img src="/images/lifestyle/intro.jpg" alt="Vanity with glass bottles" className="aspect-[4/5]"/></Reveal>
 <Reveal delay={.15} className="lg:pl-16"><Label>The house</Label><div className="mt-5"><H>Skincare, <em>elevated</em> to an art.</H></div>
  <p className="mt-8 max-w-md text-charcoal/75">Every formula begins with intention. Every ingredient has a purpose. Every ritual is an invitation to care for your skin with a little more thought.</p></Reveal></section>

export function FeaturedProducts(){
 const cats=['All',...Array.from(new Set(products.map(p=>p.category)))];const [c,setC]=useState('All')
 return <section id="shop" className="bg-cream py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-12">
  <Reveal className="flex flex-wrap items-end justify-between gap-6"><div><Label>Shop</Label><div className="mt-4"><H>The essentials</H></div><p className="mt-4 text-charcoal/70">A considered collection for your everyday ritual.</p></div>
   <div className="flex flex-wrap gap-5">{cats.map(x=><button key={x} onClick={()=>setC(x)} className={`pb-1 text-[11px] uppercase tracking-[0.25em] ${c===x?'border-b border-espresso text-espresso':'text-taupe'}`}>{x}</button>)}</div></Reveal>
  <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">{products.filter(p=>c==='All'||p.category===c).map((p,i)=><Reveal key={p.id} delay={i*.08}><ProductCard p={p}/></Reveal>)}</div></div></section>
}

export const Ingredients=()=><section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
 <Reveal><Label>Signature ingredients</Label><div className="mt-4 max-w-xl"><H>Nature, refined by <em>science.</em></H></div></Reveal>
 <div className="mt-14 grid gap-10 md:grid-cols-3">{ingredients.map((g,i)=><Reveal key={g.name} delay={i*.12} className={i===1?'md:mt-16':''}><Img src={g.image} alt={g.name} className="aspect-[3/4]"/><h3 className="mt-5 font-serif text-3xl">{g.name}</h3><p className="mt-1 text-sm text-charcoal/70">{g.text}</p></Reveal>)}</div></section>

export const Philosophy=()=><section id="philosophy" className="relative isolate overflow-hidden bg-espresso">
 <Img src="/images/lifestyle/philosophy.jpg" alt="Morning light on linen" className="absolute inset-0 -z-10 opacity-60"/>
 <Reveal className="mx-auto max-w-3xl px-6 py-40 text-center text-ivory"><Label>Our philosophy</Label><h2 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">Beauty is not a routine. <em>It is a ritual.</em></h2>
  <p className="mx-auto mt-8 max-w-xl text-ivory/80">We make fewer, better things, formulated slowly and designed to be savoured.</p>
  <button className="mt-10 border border-ivory px-8 py-4 text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 hover:bg-ivory hover:text-espresso" onClick={()=>scroll('journal')}>Discover our story</button></Reveal></section>

export const Bestsellers=()=><section id="bestsellers" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
 <Reveal><Label>Collections</Label><div className="mt-4"><H>Most <em>loved</em></H></div></Reveal>
 <div className="mt-14 space-y-6">{products.slice(0,3).map((p,i)=><Reveal key={p.id}><div className={`grid items-center bg-cream md:grid-cols-2 ${i%2?'md:[&>*:first-child]:order-2':''}`}>
  <Img src={p.hover} alt={p.name} className="aspect-[4/3]"/><div className="p-8 md:p-16"><span className="text-[10px] tracking-[0.25em] text-taupe">{p.badge}</span><h3 className="mt-3 font-serif text-4xl">{p.name}</h3><p className="mt-3 max-w-sm text-charcoal/70">{p.description}</p><p className="mt-4">${p.price}</p></div></div></Reveal>)}</div></section>

const steps=[['01','Cleanse','Melt away the day with the Cleansing Balm.'],['02','Treat','Press the Renewal Serum into skin.'],['03','Hydrate','Seal in comfort with the Velvet Cream.']]
export const Ritual=()=><section className="bg-cream py-24"><div className="mx-auto max-w-[1440px] px-6 lg:px-12"><Reveal><Label>The ritual</Label><div className="mt-4"><H>Three <em>quiet</em> steps.</H></div></Reveal>
 <div className="mt-14 grid gap-10 md:grid-cols-3">{steps.map(([n,t,d],i)=><Reveal key={n} delay={i*.12}><Img src={`/images/lifestyle/ritual-${n}.jpg`} alt={t} className="aspect-square"/><p className="mt-5 font-serif text-5xl italic text-champagne">{n}</p><h3 className="font-serif text-3xl">{t}</h3><p className="text-sm text-charcoal/70">{d}</p></Reveal>)}</div></div></section>

export const Testimonials=()=><section id="journal" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12"><Reveal><div className="max-w-xl"><H>Words from our <em>community.</em></H></div></Reveal>
 <div className="mt-14 grid gap-6 md:grid-cols-3">{testimonials.map((t,i)=><Reveal key={t.name} delay={i*.1}><figure className="h-full border border-champagne bg-cream p-8"><div className="flex gap-1 text-espresso">{Array.from({length:5}).map((_,k)=><Star key={k} size={14} fill="currentColor"/>)}</div>
  <blockquote className="mt-6 font-serif text-2xl leading-snug">“{t.text}”</blockquote><figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-taupe">{t.name} · {t.product}</figcaption></figure></Reveal>)}</div></section>

export function Newsletter(){
 const [e,setE]=useState('');const [err,setErr]=useState('');const [done,setDone]=useState(false)
 const sub=(ev:FormEvent)=>{ev.preventDefault();/^\S+@\S+\.\S+$/.test(e)?(setErr(''),setDone(true)):setErr('Please enter a valid email address.')}
 return <section className="bg-espresso py-24 text-center text-ivory"><Reveal className="mx-auto max-w-xl px-6"><h2 className="font-serif text-5xl">A little beauty in your <em>inbox.</em></h2>
  <p className="mt-5 text-ivory/70">Discover thoughtful skincare, new rituals, and exclusive first access to our collections.</p>
  {done?<p className="mt-10 font-serif text-2xl text-champagne">Thank you. Welcome to the ritual.</p>:<form onSubmit={sub} noValidate className="mt-10 flex flex-col gap-3 sm:flex-row"><input value={e} onChange={x=>setE(x.target.value)} type="email" placeholder="Your email address" aria-label="Email" className="flex-1 border border-taupe bg-transparent px-5 py-4 outline-none placeholder:text-taupe focus:border-champagne"/><button className="bg-champagne px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-espresso transition-colors hover:bg-ivory">Subscribe</button></form>}
  {err&&<p className="mt-3 text-sm text-champagne">{err}</p>}</Reveal></section>
}

const cols:Record<string,string[]>={Shop:['Serums','Moisturisers','Cleansers','Treatments'],'Customer care':['Shipping','Returns','Contact','FAQ'],About:['Our story','Ingredients','Journal','Stockists']}
export const Footer=()=><footer className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12"><div className="grid gap-12 md:grid-cols-5">
 <div className="md:col-span-2"><p className="font-serif text-3xl tracking-[0.3em]">MAISON<span className="italic tracking-normal"> Aurée</span></p><p className="mt-5 max-w-xs text-sm text-charcoal/70">Considered skincare for a quieter, more radiant everyday.</p><div className="mt-6 flex gap-5"><Instagram size={18}/><Facebook size={18}/><Youtube size={18}/></div></div>
 {Object.entries(cols).map(([h,l])=><div key={h}><p className="text-[11px] uppercase tracking-[0.25em] text-taupe">{h}</p><ul className="mt-5 space-y-3 text-sm">{l.map(x=><li key={x}><a href="#" className="hover:text-taupe">{x}</a></li>)}</ul></div>)}</div>
 <p className="mt-16 border-t border-champagne pt-6 text-xs text-taupe">© 2026 Maison Aurée. All rights reserved.</p></footer>
