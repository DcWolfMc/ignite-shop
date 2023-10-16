import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KET!,{
    apiVersion:'2023-08-16',
    appInfo:{name:"Ignite Shop"}
})