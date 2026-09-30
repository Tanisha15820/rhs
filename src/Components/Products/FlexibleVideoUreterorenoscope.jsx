import flexUreterorenoscopeBg from "../../assets/images/flexible_ureterorenoscope_banner.jpg";
import reusableURSImg from "../../assets/images/reusable-ureterorenoscope.png";
import hu30mImg from "../../assets/images/hu30m6.3.png";
import hu30m75Img from "../../assets/images/hu30m_75_scope.png";
import disposableCystoImg from "../../assets/images/disposable_cystoscope.jpg";
import huv01Img from "../../assets/images/huv01.png";
import huv02Img from "../../assets/images/huv02.png";
import accessSheathImg from "../../assets/images/access-shealth.png";
import avicennaImg from "../../assets/images/roboflex_avicenna.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const FlexibleVideoUreterorenoscope = () => {
  const products = [
    {
      name: "Reusable Ureterorenoscope",
      image: reusableURSImg,
      link: "/reusable-ureterorenoscope",
    },
    {
      name: "Disposable HU30M 6.3/6 Fr",
      image: hu30mImg,
      link: "/disposable-hu30m-6-3fr",
    },
    {
      name: "Disposable HU30M 7.5 Fr",
      image: hu30m75Img,
      link: "/disposable-hu30m-7-5fr",
    },
    {
      name: "Disposable Cystoscope",
      image: disposableCystoImg,
      link: "/disposable-cystoscope",
    },
    {
      name: "HUV01 Medical Image Processor",
      image: huv01Img,
      link: "/huv01",
    },
    {
      name: "HUV02 FHD Medical Image Processor",
      image: huv02Img,
      link: "/huv02",
    },
    {
      name: "Ureteral Access Sheath",
      image: accessSheathImg,
      link: "/access-sheath",
    },
    {
      name: "Roboflex Avicenna",
      image: avicennaImg,
      link: "/avicenna",
    },
  ];

  return (
    <>
      <SEO
        title="Flexible Video Ureterorenoscope Systems Rental | Reinforce Healthcare Services"
        description="High-resolution digital flexible video ureterorenoscopes, single-use and reusable scopes, HUV image processors, and access sheaths for hospital rental."
        keywords="flexible video ureterorenoscope rental, digital URS rental, single-use ureterorenoscope, HUV01, HUV02, reusable ureteroscope, urology endoscopy"
      />
      <ProductsPage
        categoryName="Flexible Video Ureterorenoscope"
        bannerImage={flexUreterorenoscopeBg}
        description="Digital flexible video ureterorenoscopes, single-use and reusable scopes, image processors, and robotic manipulation systems providing supreme visualization and access across the upper urinary tract."
        products={products}
      />
    </>
  );
};

export default FlexibleVideoUreterorenoscope;
