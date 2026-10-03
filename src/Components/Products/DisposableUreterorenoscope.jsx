import dispUreterorenoscopeBg from "../../assets/images/disposable_ureterorenoscope_banner.jpg";
import hu30m63Img from "../../assets/images/hu30m6.3.png";
import hu30m75Img from "../../assets/images/hu30m_75_scope.png";
import cystonephroscopeImg from "../../assets/images/cystonephroscope.png";
import cystoscopeImg from "../../assets/images/disposable_cystoscope.jpg";
import accessSheathImg from "../../assets/images/access-shealth.png";
import suctionPumpImg from "../../assets/images/suction_pump.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const DisposableUreterorenoscope = () => {
  const products = [
    {
      name: "Disposable HU30M 6.3/6 Fr",
      image: hu30m63Img,
      link: "/disposable-hu30m-6-3fr",
    },
    {
      name: "Disposable HU30M 7.5 Fr",
      image: hu30m75Img,
      link: "/disposable-hu30m-7-5fr",
    },
    {
      name: "Cystonephroscope",
      image: cystonephroscopeImg,
      link: "/cystonephroscope",
    },
    {
      name: "Cystoscope",
      image: cystoscopeImg,
      link: "/disposable-cystoscope",
    },
    {
      name: "Access sheath",
      image: accessSheathImg,
      link: "/access-sheath",
    },
    {
      name: "Suction Pump",
      image: suctionPumpImg,
      link: "/suction-pump",
    },
  ];

  return (
    <>
      <SEO
        title="Disposable Ureterorenoscopes & Access Instruments Rental | Reinforce Healthcare Services"
        description="Explore our complete line of disposable flexible digital video ureterorenoscopes including HU30M 6.3Fr, HU30M 7.5Fr, cystonephroscopes, cystoscopes, ureteral access sheaths, and suction pumps."
        keywords="disposable ureterorenoscope, single-use URS, HU30M 6.3Fr, HU30M 7.5Fr, disposable cystoscope, ureteral access sheath, endourology suction pump, sterile endoscope rental"
      />
      <ProductsPage
        categoryName="Disposable Ureterorenoscope"
        bannerImage={dispUreterorenoscopeBg}
        description="Next-generation single-use flexible video ureterorenoscopes and precision endourology accessories offering superior deflection, crystal-clear digital optics, and guaranteed sterility."
        products={products}
      />
    </>
  );
};

export default DisposableUreterorenoscope;
