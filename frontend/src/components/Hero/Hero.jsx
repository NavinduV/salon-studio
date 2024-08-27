const Hero = ({ imageUrl }) => {
  return (
    <>
      <div className="hero container">
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
      </div>
    </>
  );
};

export default Hero;
