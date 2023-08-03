import Header from "../components/Header";
import "../styles/homepage.css";
import "../styles/courses.css";

const HomePage = () => {
  return (
    <>
      {/* <Header title="Home Page" /> */}
      <main className="row">
        <article className="col">
          <section className="banner">
            <article>
              <div className="banner-image">
                <img src="./src/assets/banner2.jpg" alt="Banner Image" />
              </div>
            </article>
          </section>

          <div
            id="infoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1>¡Bienvenido a las Clases de Inglés Online!</h1>
                <p className="lead">
                  Donde el aprendizaje se combina con la diversión. Estamos
                  dedicados a brindarte una experiencia excepcional en el
                  aprendizaje del inglés.
                </p>
              </div>
              <div className="carousel-item">
                <h1>Sumérgete en un Mundo de Inglés</h1>
                <p>
                  Nuestros talentosos profesores te guiarán para que domines el
                  inglés, utilizando los mejores métodos y materiales de
                  enseñanza.
                </p>
              </div>
              <div className="carousel-item">
                <h1>Descubre las Maravillas del Inglés</h1>
                <p>
                  Desde clases interactivas para niños hasta programas
                  especializados para adultos, tenemos algo que se adapta a
                  todas las edades y niveles.
                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#infoCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#infoCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </article>
      </main>
      <section className="cursos">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card card-image">
              <img
                src="./src\assets\completamentevirtual.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card card-image">
              <img
                src="./src\assets\mejortrabajo.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card card-image">
              <img
                src="./src\assets\dejalosmiedos.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="video-section">
        <h2 className="video-title">
          Certificaciones validas dentro del marco comun europeo
        </h2>
        <div className="video-wrapper">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/UB_ndSkrquw"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <footer class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <p class="text-center text-md-start">
                &copy;2023 Elephant Institute. Todos los derechos reservados.
              </p>
            </div>
            <div class="col-12 col-md-6">
              <ul class="list-inline text-center text-md-end">
                <li class="list-inline-item">
                  <a
                    href="https://www.facebook.com/elephantinstituteCol/"
                    target="_blank"
                  >
                    <i class="bi bi-facebook"></i>
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

export default HomePage;
