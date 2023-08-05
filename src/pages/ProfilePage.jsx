import Footer from "../components/Footer";
import "../styles/footer.css";
import fotoperfil from "../assets/fotoperfil.png";

const ProfilePage = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img src={fotoperfil} alt="fotoperfil Image" />
              <div className="card-body">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Estudiante de Inglés</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Información de Contacto</h5>
                <p className="card-text">
                  Correo Electrónico: jane.smith@example.com <br />
                  Teléfono: (555) 123-4567 <br />
                  Ubicación: Ciudad, País
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pago</h5>
                <p className="card-text">
                  Realiza el pago de tus tarifas mensuales de manera segura.
                </p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="numeroTarjeta" className="form-label">
                      Número de Tarjeta
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="numeroTarjeta"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fechaExpiracion" className="form-label">
                      Fecha de Expiración
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fechaExpiracion"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      placeholder="123"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Pagar Ahora
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default ProfilePage;
