
// components/Hero Section/HeroSection.js

// import heroimage from '../../public/assets/heroimage.jpg';
// import Image from 'next/image';
import './HeroSection.css';

const HeroSection = () => {
 
  return (
    <section className='hero-section'>
      <h1 className='title-text'>
        the <br /> future <br /> is <br /> 
        <span> bright.</span>
      </h1>
    
       {/* <Image
       
          src={heroimage}
          alt="three girls smiling"
          media="all and (max-width:1201px)"
        />
        <Image
          src={heroimage}
          alt="three girls"
          media="all and (min-width:600px)"
        />
       
        <Image
          src={heroimage}
          alt="three girls"
          width={1200} // specifica la larghezza desiderata
          height={800} 
        />
       */}

    
    </section>
  );
};

export default HeroSection;
