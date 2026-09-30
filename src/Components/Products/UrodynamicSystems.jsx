import urodynamicSystemsBg from "../../assets/images/urodynamic_systems_banner.jpg";
import harmonyImg from "../../assets/images/harmony.png";
import melodyImg from "../../assets/images/melody.png";
import symphonyImg from "../../assets/images/uromic_hero_1789984346425.jpg";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const UrodynamicSystems = () => {
  const products = [
    {
      name: "UROMIC Harmony",
      image: harmonyImg,
      link: "/harmony",
    },
    {
      name: "UROMIC Melody",
      image: melodyImg,
      link: "/melody",
    },
    {
      name: "UROMIC Symphony",
      image: symphonyImg,
      link: "/symphony",
    },
  ];

  return (
    <>
      <SEO
        title="Urodynamic Systems Equipment Rental | Reinforce Healthcare Services"
        description="Advanced modular urodynamic diagnostic systems (UROMIC Symphony, Harmony, Melody) for comprehensive cystometry and lower urinary tract evaluations."
        keywords="Urodynamic systems rental, UROMIC Harmony, UROMIC Melody, UROMIC Symphony, cystometry workstation, hospital urodynamic equipment"
      />
      <ProductsPage
        categoryName="Urodynamic Systems"
        bannerImage={urodynamicSystemsBg}
        description="Explore our modular, high-accuracy UROMIC diagnostic workstations offering automated calibration, multi-channel cystometry, and advanced video-urodynamics."
        products={products}
      />
    </>
  );
};

export default UrodynamicSystems;
