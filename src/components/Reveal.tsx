import { motion } from 'framer-motion'
import { ReactNode } from 'react'
export const Reveal=({children,delay=0,className=''}:{children:ReactNode;delay?:number;className?:string})=>
 <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:.9,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
export const Img=({src,alt,className=''}:{src:string;alt:string;className?:string})=>
 <div className={`bg-cream overflow-hidden ${className}`}><img src={src} alt={alt} loading="lazy" onError={e=>(e.currentTarget.style.display='none')} className="h-full w-full object-cover"/></div>
export const Label=({children}:{children:ReactNode})=><p className="text-[11px] uppercase tracking-[0.3em] text-taupe">{children}</p>
export const Btn=({children,onClick,solid}:{children:ReactNode;onClick?:()=>void;solid?:boolean})=>
 <button onClick={onClick} className={`px-8 py-4 text-[11px] uppercase tracking-[0.25em] border transition-colors duration-500 ${solid?'bg-espresso text-ivory border-espresso hover:bg-transparent hover:text-espresso':'border-espresso text-espresso hover:bg-espresso hover:text-ivory'}`}>{children}</button>
