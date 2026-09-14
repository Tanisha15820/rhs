import ENTLaserBg from "../../assets/images/ent-laser-banner.png";
import SmartXide2Trio from "../../assets/images/SmartXide2Trio.png";
import SmartXideTouchSurgiCO from "../../assets/images/SmartXideTouchSurgiCO.png";

import ProductsPage from "../../Pages/ProductsPage";

const ENTLaser = () => {
  const products = [
    {
      name: "Smartxide2 Trio",
      image: SmartXide2Trio,
      link: "/smartxide",
    },
    {
      name: "SmartXide Touch SurgiCO",
      image: SmartXideTouchSurgiCO,
      link: "/smartxide-touch",
    },
  ];

  return (
    <ProductsPage
      categoryName="CO2 Surgical Laser"
      bannerImage={ENTLaserBg}
      description="Explore our advanced ENT laser systems designed for precise, safe, and minimally invasive ENT procedures."
      products={products}
      otherCategories={["ENT, Head & Neck Oncology", "ELMED", "RZ"]}
    />
  );
};

export default ENTLaser;
