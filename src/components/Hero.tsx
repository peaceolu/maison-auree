import { motion, useScroll, useTransform } from 'framer-motion'
import { Btn, Img, Label } from './Reveal'
export default function Hero(){
 const {scrollY}=useScroll();const y=useTransform(scrollY,[0,800],[0,90])
 const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
 return <section className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 pt-10 lg:grid-cols-12 lg:px-12 lg:pt-16">
  <motion.div className="flex flex-col justify-center lg:col-span-5" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.1,ease:[.22,1,.36,1]}}>
   <Label>Skincare · Est. 2026</Label>
   <h1 className="mt-6 font-serif text-6xl leading-[0.95] text-espresso lg:text-8xl">Rituals of beauty.<br/><em className="font-light">Science of skin.</em></h1>
   <p className="mt-8 max-w-md text-charcoal/75">Thoughtfully formulated skincare that restores balance, celebrates your natural radiance, and transforms the everyday into something extraordinary.</p>
   <div className="mt-10 flex flex-wrap gap-4"><Btn solid onClick={()=>go('shop')}>Explore the collection</Btn><Btn onClick={()=>go('philosophy')}>Discover our philosophy</Btn></div>
  </motion.div>
  <div className="relative lg:col-span-7"><motion.div style={{y}} className="h-[70vh] min-h-[460px]"><Img src="/images/hero/hero.jpg" alt="Skincare on travertine in warm light" className="h-full"/></motion.div>
   <Img src="/images/hero/hero-inset.jpg" alt="" className="absolute -bottom-8 -left-4 hidden h-48 w-40 border-8 border-ivory lg:block"/></div>
 </section>
}
