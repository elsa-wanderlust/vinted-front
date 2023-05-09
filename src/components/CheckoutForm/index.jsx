import "./checkoutForm.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"; // as per Stripe pkd documentation
// import axios from "axios";
// import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe(); // as per Stripe pkd documentation, to send CC details to stripe (and if valid, get a token back)
  const elements = useElements(); // as per Stripe pkd documentation, to get the CC details entered in CardElement components

  // DECLARE FUNCTION TO HANDLE PAYMENT
  const handlePaySubmit = async (event) => {
    event.preventDefault();
    try {
      // STEP 1.5: recuperate CC details entered in form
      const cardElement = elements.getElement(CardElement);

      // STEP 2: send CC info to stripe to check validity
      //   const stripeResponse = await stripe.createToken(cardElement, {
      //     name: { userId },
      //   });
      //   console.log(stripeResponse);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="payment-page">
      <section>
        <h2>Résumé de la commande</h2>
        <div>
          <p>Commande</p>
        </div>
        <div>
          <p>Frais protection acheteur</p>
        </div>
        <div>
          <p>Frais de port</p>
        </div>
      </section>
      <section>
        <div>
          <p>Total</p>
        </div>
        <div>
          <p>
            Il ne reste plus qu'une étape pour votre offre l'article{" "}
            <span>XXX</span>. Vous allez payer XXX (frais de protection et de
            port inclus).
          </p>
        </div>
      </section>
      <section>
        <form onSubmit={handlePaySubmit}>
          <CardElement />
        </form>
        <button type="submit">Paiement</button>
      </section>
    </div>
  );
};

export default CheckoutForm;
