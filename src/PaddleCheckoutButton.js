// CheckoutButton.js
import React from "react";

const CheckoutButton = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;

    script.onload = () => {
      window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({
        token: "test_eb3735e1002625d14eb6b1879d0", // Replace with your client token
      });
    };

    document.body.appendChild(script);
  }, []);

  const handleClick = async () => {
    try {
      await window.Paddle.Checkout.open({
        settings: {
          displayMode: "popup",
          frameStyle:
            "width: 100%; min-width: 312px; background-color: transparent;",
          frameInitialHeight: 450,
        },
        items: [
          {
            priceId: "pri_01jbtwwrj5432x6wrrk79dzqkz", // Replace with your price ID
            quantity: 1,
          },
        ],

        customData: {
          returnUrl: "https://r9c3f8hz-3001.inc1.devtunnels.ms/", // Replace with your actual domain
          userId: "671b3eec6989b6e552d209d8",
        },
        closeCallback: () => console.log("Checkout closed"),
        successCallback: () => console.log("Checkout successful"),
      });
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return <button onClick={handleClick}>Purchase Product</button>;
};

export default CheckoutButton;
