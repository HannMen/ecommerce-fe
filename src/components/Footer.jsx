import React from "react";

const Footer = () => {
  return (
    <>
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

export default Footer;
