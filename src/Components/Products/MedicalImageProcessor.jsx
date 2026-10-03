import medicalImageProcessorBg from "../../assets/images/medical_image_processor_banner.jpg";
import huv01Img from "../../assets/images/huv01.png";
import huv02Img from "../../assets/images/huv02.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const MedicalImageProcessor = () => {
  const products = [
    {
      name: "HUV01",
      image: huv01Img,
      link: "/huv01",
    },
    {
      name: "HUV02",
      image: huv02Img,
      link: "/huv02",
    },
  ];

  return (
    <>
      <SEO
        title="Medical Video Image Processors Equipment Rental | Reinforce Healthcare Services"
        description="Explore our advanced HUV01 and HUV02 medical image processors engineered for high-definition video processing, multi-scope compatibility, and intuitive clinical control in minimally invasive endourology."
        keywords="medical image processor, HUV01, HUV02, video processor rental, endoscopy processor, digital endoscope console, urology imaging equipment"
      />
      <ProductsPage
        categoryName="Medical Image Processor"
        bannerImage={medicalImageProcessorBg}
        description="High-definition medical video image processors engineered for brilliant endoscopic clarity, flexible multi-scope compatibility, and intuitive clinical workflow in modern minimally invasive urology."
        products={products}
      />
    </>
  );
};

export default MedicalImageProcessor;
