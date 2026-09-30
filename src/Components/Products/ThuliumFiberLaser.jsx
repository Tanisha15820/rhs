import thuliumFiberBg from "../../assets/images/thulium_fiber_banner.jpg";
import fiberdustImg from "../../assets/images/fiberdust_machine.png";
import vikrantImg from "../../assets/images/vikrant_machine.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const ThuliumFiberLaser = () => {
  const products = [
    {
      name: "Fiber Dust 60 WATT",
      image: fiberdustImg,
      link: "/fiber-dust-60",
    },
    {
      name: "Vikrant - 30/45/70 WATT",
      image: vikrantImg,
      link: "/vikrant-tfl",
    },
  ];

  return (
    <>
      <SEO
        title="Thulium Fiber Laser (TFL) Equipment Rental | Reinforce Healthcare Services"
        description="Next-generation 1940nm Thulium Fiber Laser (TFL) systems delivering ultra-fine stone dusting with minimal retropulsion and versatile soft tissue cutting."
        keywords="Thulium Fiber Laser rental, TFL laser, Fiber Dust 60W, Vikrant TFL, 1940nm laser, stone dusting laser, urology laser rental"
      />
      <ProductsPage
        categoryName="Thulium Fiber Laser"
        bannerImage={thuliumFiberBg}
        description="Revolutionary 1940 nm Thulium Fiber Laser (TFL) technology providing ultra-fine kidney stone dusting with near-zero retropulsion and exceptional versatility."
        products={products}
      />
    </>
  );
};

export default ThuliumFiberLaser;
