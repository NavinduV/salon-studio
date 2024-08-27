import Hero from "../components/Hero/Hero";
import MessageForm from "../components/MessageForm/MessageForm";
// import Gallery from "../components/Gallery/Gallery"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Hero
        imageUrl={"/hero.png"}
      />
      
      <MessageForm />
      <Footer />
    </>
  );
};

export default Home;