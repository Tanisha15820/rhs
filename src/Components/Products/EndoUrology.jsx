import endoUrologyBg from "../../assets/images/endo_urology_banner.jpg";
import cystoscopeImg from "../../assets/images/cystoscope.png";
import morcescopeImg from "../../assets/images/morcescope.png";
import endoVisionImg from "../../assets/images/endo_vision_set.png";
import bipolarPlasmaImg from "../../assets/images/bipolar_plasma_generator.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const EndoUrology = () => {
  const products = [
    {
      name: "RZ Medizintechnik Cystoscopy",
      image: cystoscopeImg,
      link: "/cystoscopy",
    },
    {
      name: "RZ Slim Laser Enucleation System",
      image: morcescopeImg,
      link: "/morcescope",
    },
    {
      name: "Endo Vision System",
      image: endoVisionImg,
      link: "/cystoscopy",
    },
    {
      name: "Bipolar Plasma Generator",
      image: bipolarPlasmaImg,
      link: "/cystoscopy",
    },
  ];

  return (
    <>
      <SEO
        title="Endo Urology UMD Endoscopy Equipment Rental | Reinforce Healthcare Services"
        description="Explore our advanced Endo Urology and UMD Endoscopy solutions, including RZ Cystoscopes, Slim Laser Enucleation systems, Endo Vision sets, and plasma generators."
        keywords="endo urology equipment, RZ cystoscopy rental, morcescope, urology endoscopy rental, laser enucleation system, endourology machines"
      />
      <ProductsPage
        categoryName="Endo Urology UMD Endoscopy"
        bannerImage={endoUrologyBg}
        description="High-definition endoscopic visualization, optical cystoscopes, resectoscopes, and slim laser enucleation systems designed for minimally invasive endourological procedures."
        products={products}
      />
    </>
  );
};

export default EndoUrology;
