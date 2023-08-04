import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const initForm = {
  user_name: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);

  const { user, registrarUsuario } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await registrarUsuario(form);

    setForm(initForm);
  };

  return (
    <>
      <header className="row col">
        <h1>Register Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Crear cuenta
            </button>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <pre>{JSON.stringify(user, null, 2)}</pre>
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

export default RegisterPage;
