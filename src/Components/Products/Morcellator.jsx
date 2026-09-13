import ENTLaserBg from "../../assets/images/ent-laser-banner.png";
import cyberBlade from "../../assets/images/cyberblade.png";
import raykeen from "../../assets/images/raykeen.png";
import avicenna from "../../assets/images/avicenna.png";

import ProductsPage from "../../Pages/ProductsPage";

const Morcellator = () => {
  const products = [
    {
      name: "Cyber BLADE™ Morcellator",
      image: cyberBlade,
    },
    {
      name: "Raykeen Morcellator System",
      image: raykeen,
    },
    {
      name: "Roboflex Avicenna",
      image: avicenna,
    },
  ];

  return (
    <ProductsPage
      categoryName="Morcellator"
      bannerImage={ENTLaserBg}
      description="Advanced morcellation systems for rapid, safe and minimally invasive tissue removal."
      products={products}
      otherCategories={[
        "ENT Laser",
        "ENT Head & Neck Oncology",
        "ELMED",
        "RZ",
      ]}
    />
  );
};

export default Morcellator;