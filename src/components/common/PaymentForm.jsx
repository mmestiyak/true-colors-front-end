import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MyPaymentForm from "./MyPaymentForm";

const PaymentForm = ({ serviceName, price, setCurrentComponent }) => {
  const stripePromise = loadStripe(
    "pk_test_51Ih33JFyVd8APIf4AWZpB3luZuFKhrp5nk10FHXrk2UC1t08e3RmnZWwyKiADnmX0yte7RAUDsb8X4erBZ0GG0IM009A7p0JvU"
  );

  return (
    <Elements stripe={stripePromise}>
      <MyPaymentForm
        setCurrentComponent={setCurrentComponent}
        price={price}
        serviceName={serviceName}
      />
    </Elements>
  );
};

export default PaymentForm;
