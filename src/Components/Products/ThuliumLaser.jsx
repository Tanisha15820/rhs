import thuliumYagBg from "../../assets/images/thulium_yag_banner.jpg";
import cyberTmImg from "../../assets/images/cybertm_machine.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const ThuliumLaser = () => {
  const products = [
    {
      name: "Cyber TM 150 WATT",
      image: cyberTmImg,
      link: "/cyber-tm-150",
    },
    {
      name: "Cyber TM 200 WATT",
      image: cyberTmImg,
      link: "/cyber-tm-200",
    },
  ];

  return (
    <>
      <SEO
        title="Thulium YAG Laser Systems Equipment Rental | Reinforce Healthcare Services"
        description="High-power Thulium YAG surgical laser systems offering continuous wave emission for rapid prostate enucleation (ThuLEP), ablation, and tissue resection."
        keywords="Thulium YAG laser, Cyber TM 150W, Cyber TM 200W, ThuLEP laser, prostate enucleation laser, urology thulium laser rental"
      />
      <ProductsPage
        categoryName="Thulium YAG Laser"
        bannerImage={thuliumYagBg}
        description="Continuous wave Thulium:YAG surgical laser systems designed for optimal hemostasis, rapid prostate enucleation (ThuLEP), and soft tissue resection."
        products={products}
      />
    </>
  );
};

export default ThuliumLaser;
