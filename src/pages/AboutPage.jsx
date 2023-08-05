import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/footer.css";

const AboutPage = () => {
  return (
    <>
      <main className="row">
        <article className="col">
          <section className="py-5">
            <h1 className="display-4 text-center">Acerca de Nosotros</h1>
            <p className="lead text-center">
              Conoce más sobre nuestra escuela de inglés y nuestra dedicación al
              aprendizaje y enseñanza del idioma.
            </p>
          </section>

          <section className="py-5">
            <div className="row">
              <div className="col-md-6">
                <h2>Nuestra Misión</h2>
                <p>
                  En nuestra escuela de inglés, nos esforzamos por proporcionar
                  una educación de calidad y experiencias de aprendizaje
                  excepcionales para todos nuestros estudiantes.
                </p>
              </div>
              <div className="col-md-6">
                <h2>Nuestros Valores</h2>
                <p>
                  Valoramos el compromiso con la excelencia, la creatividad y la
                  diversidad en nuestra comunidad educativa.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
      <section className="py-5 text-center">
        <h2>Conócenos Mejor</h2>
        <p>
          ¿Quieres saber más sobre nuestros profesores y nuestras metodologías?
          ¡Echa un vistazo a nuestro video de presentación!
        </p>
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

      <section className="py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Nuestro Enfoque de Aprendizaje</h2>
            <p>
              Creemos en un enfoque centrado en el estudiante que se enfoca en
              habilidades lingüísticas prácticas y comunicación en situaciones
              reales.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Únete a Nuestra Comunidad</h2>
            <p>
              Forma parte de nuestra comunidad de aprendizaje de idiomas y
              desbloquea nuevas oportunidades de crecimiento personal y
              profesional.
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AboutPage;
