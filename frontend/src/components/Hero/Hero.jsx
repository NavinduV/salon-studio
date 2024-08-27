const Hero = () => {
  return (
    <>
      {/* <div className="hero container">
        <div className="banner">
          <h1>Welcome to The Elite</h1>
          <p>
            Welcome to Salon Studio, where beauty meets artistry. Our
            expert stylists are here to create a personalized experience
            tailored to your unique style. Whether it is a fresh cut, a vibrant
            color, or a rejuvenating spa treatment, we are committed to making
            you feel and look your best.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div> */}

      <div className="hero container">
        <section className="section banner banner-section">
          <div className="hero-container banner-column">
            <img className="banner-image animated-image" src="/hero.png" alt="Illustration" />
            <div className="banner-inner">
              <h1 className="heading-xl">Be the Who you want</h1>
              <h1 className="heading-xl logo-text">The Salon Studio</h1>
              <p className="paragraph">
                Welcome to Salon Studio, where beauty meets artistry. Our expert
                stylists are here to create a personalized experience tailored
                to your unique style.
              </p>
              <button className="btn btn-darken btn-inline">
                Make Appointment<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
