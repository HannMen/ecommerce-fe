import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const App = () => {
  return (
    <>
      <AuthState>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Ae4ea5_zWeK7JZ8RW2kq0iMR8lr75bDqUqwhLyaEut6lr1uzZsS-9XIxVoBITDqri2N_CNJOvRvyFcYE",
          }}
        >
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
