import ENTLaserBg from "../../assets/images/ent-laser-banner.png";
import multimed from "../../assets/images/multimed.png";
import vibrolithMachine from "../../assets/images/vibrolith_machine.png";
import vibrolithOrthoHero from "../../assets/images/vibrolith_ortho_hero.png";
import vibrolithPlusHero from "../../assets/images/vibrolith_plus_hero.png";

import ProductsPage from "../../Pages/ProductsPage";

const Elmed = () => {
  const products = [
    {
      name: "Multimed",
      image: multimed,
    },
    {
      name: "Vibrolith",
      image: vibrolithMachine,
    },
    {
      name: "Vibrolith Ortho",
      image: vibrolithOrthoHero,
    },
    {
      name: "Vibrolith Plus",
      image: vibrolithPlusHero,
    },
  ];

  return (
    <ProductsPage
      categoryName="ELMED"
      bannerImage={ENTLaserBg}
      description="Explore our advanced ELMED surgical systems engineered for precision, reliability and everyday clinical excellence."
      products={products}
      otherCategories={[
        "ENT Laser",
        "ENT Head & Neck Oncology",
        "RZ",
        "Morcellator",
      ]}
    />
  );
};

export default Elmed;