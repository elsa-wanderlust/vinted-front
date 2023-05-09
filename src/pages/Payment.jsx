import { loadStripe } from "@stripe/stripe-js"; // as per Stripe pkd documentation
import { Elements } from "@stripe/react-stripe-js"; // as per Stripe pkd documentation
import { useLocation } from "react-router-dom";

// IMPORT COMPONENT(S)
import CheckoutForm from "../components/CheckoutForm";
// STRIPE PROCESS
// stripePromise: to connect to StripeAccount using public key
// Elements: the whole process goes in between those tags
// sensitive info, use Stripes method i/o states to get info
const stripePromise = loadStripe(
  "pk_test_51N5omcCPMdGbUzjjbJvOmP0Ng33wy84GXwvyg7zyGrIBEsWbJA2VwwbFEJCwBA26M9HD6YrgaVUpg4xxFO0nvq3r009nfm7StQ"
);

const Payment = ({ userId }) => {
  const location = useLocation();
  const { description } = location.state;
  const { price } = location.state;
  const { productId } = location.state;

  return (
    <div>
      <Elements stripe={stripePromise}>
        {/* STEP 1 : create form*/}
        <CheckoutForm
          userId={userId}
          description={description}
          price={price}
          productId={productId}
        />
      </Elements>
    </div>
  );
};

export default Payment;
