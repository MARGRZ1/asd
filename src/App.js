import { MainProvider } from "src/providers/MainProvider";
import { Routes, Route } from "react-router-dom";
import { Home } from "src/views/Home";
import { Order } from "src/views/Order";
import { Payment } from "src/views/Payment";
import { useState } from "react";

function App() {
  const [paymentPrice, setPaymentPrice] = useState(0);

  return (
    <>
      <MainProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/order"
            element={<Order handlePaymentPrice={setPaymentPrice} />}
          />
          <Route path="/payment" element={<Payment price={paymentPrice} />} />
        </Routes>
      </MainProvider>
    </>
  );
}

export default App;
