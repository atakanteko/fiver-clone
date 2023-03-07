import React, { useRef } from "react";

// tabler icons
import { IconSearch } from "@tabler/icons-react";

// images
import bgHero1 from "../../assets/images/bg-hero-1.png";
import bgHero2 from "../../assets/images/bg-hero-2.png";
import bgHero3 from "../../assets/images/bg-hero-3.png";
import bgHero4 from "../../assets/images/bg-hero-4.png";
import bgHero5 from "../../assets/images/bg-hero-5.png";

// project imports
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const images = [
  {
    name: "Andrea",
    profession: "Fashion Designer",
    img: bgHero1,
  },
  {
    name: "Moon",
    profession: "Marketing Expert",
    img: bgHero2,
  },
  {
    name: "Ritika",
    profession: "Shoemaker and Designer",
    img: bgHero3,
  },
  {
    name: "Zach",
    profession: "Bar Owner",
    img: bgHero4,
  },
  {
    name: "Gabrielle",
    profession: "Video Maker",
    img: bgHero5,
  },
];

const Heros = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = React.useState(images[0]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      const currentIndex = images.findIndex((x) => x === backgroundImage);
      console.log(currentIndex);
      const nextIndex = (currentIndex + 1) % images.length;
      setBackgroundImage(images[nextIndex]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [backgroundImage]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div
      className={"hero-backgrounds fade-animation"}
      style={{
        backgroundImage: `url(${backgroundImage.img})`,
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      //   onTransitionEnd={handleTransitionEnd}
    >
      {children}
      <section className="hero-content">
        <div className="left">
          <div className="hero-title">
            <h2>
              Find the perfect <span className="handwriting">freelance</span>{" "}
              services for your business
            </h2>
          </div>
          <div className="hero-search">
            <IconSearch />
            <input type="text" placeholder="Try building mobile app" />
            <div className="button-search">
              <span>Search</span>
            </div>
          </div>
          <div className="tags">
            <h1>Populer</h1>
          </div>
        </div>
        <div className="right">
          <span className="name">{backgroundImage.name}, </span>
          <span className="profession">{backgroundImage.profession}</span>
        </div>
      </section>
    </div>
  );
};

export default Heros;
