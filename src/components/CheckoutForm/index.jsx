import "./checkoutForm.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"; // as per Stripe pkd documentation
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const CheckoutForm = ({ userId, description, price, productId }) => {
  // DECLARE STATE(S)
  const [paymentStatus, setPaymentStatus] = useState("none");
  // DECLARE VARIABLE(S)
  const stripe = useStripe(); // as per Stripe pkd documentation, to send CC details to stripe (and if valid, get a token back)
  const elements = useElements(); // as per Stripe pkd documentation, to get the CC details entered in CardElement components
  const token = Cookies.get("tokenVinted");

  // DECLARE SUBMIT FUNCTION TO HANDLE PAYMENT
  const handlePaySubmit = async (event) => {
    event.preventDefault();
    try {
      setPaymentStatus("Le paiement est en cours de validation");
      // STEP 1.5: recuperate CC details entered in form
      const cardElement = elements.getElement(CardElement);
      // STEP 2: send CC info to stripe to check validity (STEP 3)
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      // STEP 4: receive token from Stripe
      const stripeToken = stripeResponse.token.id;
      // convert price into an amount in cents
      const amount = price * 100;
      // STEP 5: send token (and other default) to backend
      const serverResponse = await axios.post(
        `http://localhost:3000/payment`,
        { stripeToken, amount, description, productId },
        {
          headers: { authorization: `Bearer ${token}` },
          "Content-Type": "multipart/form-data",
        }
      );
      if (serverResponse.data === "succeeded") {
        setPaymentStatus("Le paiement a bien été effectué");
      } else {
        setPaymentStatus(
          "Il y a eu une erreur lors du paiement, votre carte n'a pas été débitée"
        );
      }
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
        {paymentStatus === "none" ? (
          <button type="submit" onClick={handlePaySubmit}>
            Paiement
          </button>
        ) : (
          <div>
            <p>{paymentStatus}</p>
            <button>Revenir à la page d'accueil</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default CheckoutForm;
