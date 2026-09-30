import surgicalLaserBg from "../../assets/images/surgical_laser_banner.jpg";
import cyberHo150Img from "../../assets/images/cyber_ho_150_machine.png";
import cyberTmImg from "../../assets/images/cybertm_machine.png";
import fiberdustImg from "../../assets/images/fiberdust_machine.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const SurgicalLaser = () => {
  const products = [
    {
      name: "Holmium YAG Laser",
      image: cyberHo150Img,
      link: "/holmium-yag-laser",
    },
    {
      name: "Thulium YAG Laser",
      image: cyberTmImg,
      link: "/thulium-yag-laser",
    },
    {
      name: "Thulium Fiber Laser",
      image: fiberdustImg,
      link: "/thulium-fiber-laser",
    },
  ];

  return (
    <>
      <SEO
        title="Urology Surgical Laser Systems Equipment Rental | Reinforce Healthcare Services"
        description="Explore our cutting-edge Holmium YAG, Thulium YAG, and Thulium Fiber surgical lasers engineered for superior lithotripsy dusting, fragmentation, and precise soft tissue ablation."
        keywords="surgical laser rental, Holmium YAG laser, Thulium YAG laser, Thulium Fiber laser, Fiber Dust 60W, Litho 35W, Cyber Ho 150W, DK 30W, urology laser rental"
      />
      <ProductsPage
        categoryName="Surgical Laser"
        bannerImage={surgicalLaserBg}
        description="Explore our industry-leading Holmium YAG, Thulium YAG, and Thulium Fiber surgical laser systems engineered for high-precision lithotripsy, BPH enucleation, and minimally invasive endourology."
        products={products}
      />
    </>
  );
};

export default SurgicalLaser;