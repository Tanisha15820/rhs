import eswlBg from "../../assets/images/eswl_banner.jpg";
import multimedImg from "../../assets/images/multimed.png";
import vibrolithImg from "../../assets/images/vibrolith_machine.png";
import vibrolithOrthoImg from "../../assets/images/vibrolith_ortho_hero.png";
import vibrolithPlusImg from "../../assets/images/vibrolith_plus_hero.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const ESWLLithotripsy = () => {
  const products = [
    {
      name: "Multimed",
      image: multimedImg,
      link: "/multimed",
    },
    {
      name: "Vibrolith",
      image: vibrolithImg,
      link: "/vibrolith",
    },
    {
      name: "Vibrolith Ortho",
      image: vibrolithOrthoImg,
      link: "/vibrolith-ortho",
    },
    {
      name: "Vibrolith Plus",
      image: vibrolithPlusImg,
      link: "/vibrolith-plus",
    },
  ];

  return (
    <>
      <SEO
        title="ESWL Lithotripsy Systems Equipment Rental | Reinforce Healthcare Services"
        description="State-of-the-art Extracorporeal Shock Wave Lithotripsy (ESWL) systems offering dual fluoroscopy/ultrasound localization and non-invasive stone fragmentation."
        keywords="ESWL machine rental, extracorporeal shock wave lithotripsy, Multimed, Vibrolith, Vibrolith Plus, Vibrolith Ortho, kidney stone shockwave machine"
      />
      <ProductsPage
        categoryName="ESWL Lithotripsy"
        bannerImage={eswlBg}
        description="State-of-the-art extracorporeal shock wave lithotripsy (ESWL) systems offering dual fluoroscopy/ultrasound localization and non-invasive stone fragmentation."
        products={products}
      />
    </>
  );
};

export default ESWLLithotripsy;
