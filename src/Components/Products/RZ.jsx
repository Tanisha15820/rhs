import ENTLaserBg from "../../assets/images/ent-laser-banner.png";
import cystoscope from "../../assets/images/cystoscope.png";
import morcescope from "../../assets/images/morcescope.png";

import ProductsPage from "../../Pages/ProductsPage";

const RZ = () => {
  const products = [
    {
      name: "RZ Medizintechnik Cystoscopy",
      image: cystoscope,
      link: "/cystoscopy",
    },
    {
      name: "RZ Slim Laser Enucleation System",
      image: morcescope,
      link: "/morcescope",
    },
  ];

  return (
    <ProductsPage
      categoryName="RZ"
      bannerImage={ENTLaserBg}
      description="High-performance RZ Medizintechnik solutions designed for precision and better patient outcomes."
      products={products}
      otherCategories={[
        "ENT Laser",
        "ENT Head & Neck Oncology",
        "ELMED",
        "Morcellator",
      ]}
    />
  );
};

export default RZ;