import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

const Checkout = ({ price, url }) => {
  const [ loading, setLoading ] = useState(false);
  const redirectToCheckout = async (event) => {
    event.preventDefault();
    setLoading(true);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [ { price, quantity: 1 } ],
      successUrl: `${url}/payment-success`,
      cancelUrl: `${url}/bookkeeping`,
    });
    if (error) {
      console.warn('Error:', error);
      setLoading(false);
    }
  };
  return (
    <button
      disabled={loading}
      className={`mt-6 inline-block px-12 py-3 font-bold tracking-tight text-black bg-grey-200 hover:bg-grey-300 ${loading
        ? 'opacity-50 cursor-not-allowed'
        : ''}`}
      onClick={redirectToCheckout}
    >
      Get Started Now
    </button>
  );
};
export default Checkout;
