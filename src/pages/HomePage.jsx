import Footer from "../components/Footer";
import "../styles/homepage.css";
import "../styles/courses.css";
import "../styles/footer.css";
import banner from "../assets/banner2.jpg";
import completamentevirtual from "../assets/completamentevirtual.jpg";
import mejortrabajo from "../assets/mejortrabajo.jpg";
import dejalosmiedos from "../assets/dejalosmiedos.jpg";

const HomePage = () => {
  return (
    <>
      {/* <Header title="Home Page" /> */}
      <main className="row">
        <article className="col">
          <section className="banner">
            <article>
              <div className="banner-image">
                <img src={banner} alt="Banner Image" />
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
                src={completamentevirtual}
                className="card-img-top"
                alt="completamentevirtual"
              />
            </div>
          </div>
          <div className="col">
            <div className="card card-image">
              <img
                src={mejortrabajo}
                className="card-img-top"
                alt="mejortrabajo"
              />
            </div>
          </div>
          <div className="col">
            <div className="card card-image">
              <img
                src={dejalosmiedos}
                className="card-img-top"
                alt="dejalosmiedos"
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

      <Footer />
    </>
  );
};

export default HomePage;
