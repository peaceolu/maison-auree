import { Product } from '../types'
const p=(id:number,slug:string,name:string,category:string,price:number,description:string,rating:number,badge?:string):Product=>({id,name,category,price,description,rating,badge,image:`/images/products/${slug}.jpg`,hover:`/images/products/${slug}-alt.jpg`})
export const products:Product[]=[
 p(1,'renewal-serum','The Renewal Serum','Serum',86,'A weightless serum for visibly smoother, clearer skin.',4.9,'BESTSELLER'),
 p(2,'velvet-cream','The Velvet Cream','Moisturiser',112,'Rich, cushioning comfort that melts into skin.',4.8,'CUSTOMER FAVOURITE'),
 p(3,'cleansing-balm','The Cleansing Balm','Cleanser',64,'A silken balm that dissolves the day without stripping.',4.7,'NEW ARRIVAL'),
 p(4,'radiance-elixir','The Radiance Elixir','Treatment',98,'A luminous elixir for a lit-from-within finish.',4.9),
]
