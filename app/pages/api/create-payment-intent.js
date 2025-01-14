import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Set your secret key in .env.local

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;

      // Create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // Amount in the smallest currency unit (e.g., 1000 = $10.00)
        currency: 'usd', // Change to your preferred currency
        payment_method_types: ['card'], // Payment methods
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
