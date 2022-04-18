import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <Image src="https://www.w3schools.com/tags/img_girl.jpg" alt="An image showing me" width={300} height={360} />
      </div>
      <h1>Hi I'm name...</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, facere?</p>
    </section>
  );
};

export default Hero;
