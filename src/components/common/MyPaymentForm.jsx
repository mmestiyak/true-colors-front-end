import React, { useMemo } from "react";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useServices } from "../../contexts/ServicesContext";

const useOptions = () => {
  const options = useMemo(() => ({
    style: {
      base: {
        color: "#424770",
        letterSpacing: "0.025em",
        fontFamily: "Source Code Pro, monospace",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }));

  return options;
};
const MyPaymentForm = ({ serviceName, price, setCurrentComponent }) => {
  const { currentUser } = useAuth();
  const { setSelectedServiceId } = useServices();
  const { displayName: name, email } = currentUser;

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      console.log("[error]", error);
      alert("Correct Card Info");
    } else {
      const data = {
        paymentMethod: paymentMethod.type,
        serviceName,
        servicePrice: price,
        customerName: name,
        customerEmail: email,
      };
      (async () => {
        try {
          const response = await axios.post(
            "http://localhost:8888/orders",
            data
          );
          alert("Thank you, Order Completed!");
          setCurrentComponent("Orders List");
          setSelectedServiceId("");
        } catch (e) {
          console.log(e);
        }
      })();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <label>
        Service
        <input
          type="text"
          disabled
          value={serviceName}
          required
          className="StripeElement "
        />
      </label>
      <label>
        Card number
        <CardNumberElement options={options} />
      </label>
      <label>
        Expiration date
        <CardExpiryElement options={options} />
      </label>
      <label>
        CVC
        <CardCvcElement options={options} />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default MyPaymentForm;
