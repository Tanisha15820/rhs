import holmiumLaserBg from "../../assets/images/holmium_laser_banner.jpg";
import dk30Img from "../../assets/images/dk30.png";
import litho35Img from "../../assets/images/litho35_machine.png";
import lithoEvoImg from "../../assets/images/Litho_evo.png";
import cyberHo100Img from "../../assets/images/cyber-ho-150.png";
import cyberHo150Img from "../../assets/images/cyber_ho_150_machine.jpg";
import magnetoImg from "../../assets/images/magneto.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const HolmiumLaser = () => {
  const products = [
    {
      name: "DK 30 WATT",
      image: dk30Img,
      link: "/dk30watt",
    },
    {
      name: "LITHO 35 WATT",
      image: litho35Img,
      link: "/litho35watt",
    },
    {
      name: "LITHO EVO 35 WATT",
      image: lithoEvoImg,
      link: "/lithoevo35watt",
    },
    {
      name: "CYBER HO 100 WATT",
      image: cyberHo100Img,
      link: "/cyberho100watt",
    },
    {
      name: "CYBER HO 150 WATT",
      image: cyberHo150Img,
      link: "/cyberho150watt",
    },
    {
      name: "CYBER HO MAGNETO FAMILY",
      image: magnetoImg,
      link: "/cyber-ho-magneto-family",
    },
  ];

  return (
    <>
      <SEO
        title="Holmium YAG Laser Systems Equipment Rental | Reinforce Healthcare Services"
        description="Explore our high-performance Holmium YAG surgical lasers for lithotripsy stone dusting, fragmentation, and soft tissue enucleation."
        keywords="Holmium YAG laser, lithotripsy laser rental, Cyber Ho 150W, Litho 35W, DK 30W, kidney stone laser, HoLEP laser rental"
      />
      <ProductsPage
        categoryName="Holmium YAG Laser"
        bannerImage={holmiumLaserBg}
        description="High-powered Holmium:YAG laser systems engineered for superior lithotripsy dusting, fragmenting, and precise soft tissue ablation."
        products={products}
      />
    </>
  );
};

export default HolmiumLaser;
