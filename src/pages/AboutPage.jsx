import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/footer.css";

const AboutPage = () => {
  return (
    <>
      <Header title="About Page" />
      <main className="row">
        <article className="col">
          <p>Contenido de la pagina acerca de</p>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
