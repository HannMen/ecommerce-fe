import { useContext, useState, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import PaypalCheckoutButton from "../components/PayPalButton";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, deleteCartProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  const [ammount, setAmmount] = useState(0);

  const handleDeleteProduct = (id) => {
    deleteCartProduct(id);
  };

  useEffect(() => {
    setAmmount(cart.reduce((acc, product) => acc + product.price, 0));
  }, [cart]);

  return (
    <>
      <main className="row">
        <article className="col">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {item.price}
                      </small>
                    </p>
                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(item.id)}
                      >
                        Eliminar del carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
      <section className="row pb-5">
        <article className="col">
          {cart.length > 0 ? (
            <>
              <p className="fs-1">Total</p>
              <p className="fs-2">{ammount}</p>
              {user.user_name ? (
                <>
                  <PaypalCheckoutButton
                    currency="MXN"
                    amount={ammount}
                    showSpinner={false}
                  />
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-success">
                    Iniciar sesion
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <p className="fs-1">No hay productos en el carrito</p>
            </>
          )}
        </article>
      </section>
      <footer className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="text-center text-md-start">
                &copy;2023 Elephant Institute. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="list-inline text-center text-md-end">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/elephantinstituteCol/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CartPage;
