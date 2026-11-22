export interface Product { id:number; name:string; category:string; price:number; description:string; rating:number; image:string; hover:string; badge?:string }
export interface CartItem extends Product { qty:number }
export interface Testimonial { name:string; product:string; text:string }
export interface Ingredient { name:string; text:string; image:string }
