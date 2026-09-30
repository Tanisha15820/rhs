import uroflowmetersBg from "../../assets/images/uroflowmeters_banner.jpg";
import danflowWaveImg from "../../assets/images/danflow_wave_machine.jpg";
import danflowCordImg from "../../assets/images/danflow_cord_machine.jpg";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const Uroflowmeters = () => {
  const products = [
    {
      name: "Danflow Wave",
      image: danflowWaveImg,
      link: "/danflow-wave",
    },
    {
      name: "Danflow Cord",
      image: danflowCordImg,
      link: "/danflow-cord",
    },
  ];

  return (
    <>
      <SEO
        title="Uroflowmeter Systems Equipment Rental | Reinforce Healthcare Services"
        description="Wireless and compact digital uroflowmetry systems (Danflow Wave & Cord) for accurate, non-invasive urinary flow rate evaluation and clinical diagnostics."
        keywords="uroflowmeter rental, Danflow Wave, Danflow Cord, wireless uroflowmetry, urology flow meter, urinary flow test machine"
      />
      <ProductsPage
        categoryName="Uroflowmeters"
        bannerImage={uroflowmetersBg}
        description="High-precision digital uroflowmeters featuring wireless connectivity, automatic flow detection, and integrated thermal printers for fast urinary flow diagnostics."
        products={products}
      />
    </>
  );
};

export default Uroflowmeters;
