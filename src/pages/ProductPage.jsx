import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { getProduct, product } = useContext(ProductContext);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  return (
    <>
      <section className="row">
        <article className="col">
          {product && (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        {product.price}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default ProductPage;
