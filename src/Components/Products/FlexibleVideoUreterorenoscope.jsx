import flexUreterorenoscopeBg from "../../assets/images/flexible_ureterorenoscope_banner.jpg";
import reusableURSImg from "../../assets/images/reusable-ureterorenoscope.png";
import hu30m75Img from "../../assets/images/hu30m_75_scope.png";
import huv01Img from "../../assets/images/huv01.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const FlexibleVideoUreterorenoscope = () => {
  const products = [
    {
      name: "Medical Image Processor",
      image: huv01Img,
      link: "/medical-image-processor",
    },
    {
      name: "Reusable Ureterorenoscope",
      image: reusableURSImg,
      link: "/reusable-ureterorenoscope",
    },
    {
      name: "Disposable Ureterorenoscope",
      image: hu30m75Img,
      link: "/disposable-ureterorenoscope",
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
