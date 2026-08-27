import ENTBg from "../../assets/images/ENT_banner.png";
import diodeLaser from "../../assets/images/diode_laser.png";
import SmartXide2Trio from "../../assets/images/SmartXide2Trio.png";
import SmartXideTouchSurgiCO from "../../assets/images/SmartXideTouchSurgiCO.png";

import ProductsPage from "../../Pages/ProductsPage";

const ENT = () => {
  const products = [
    {
      name: "Smartxide2 Trio",
      image: SmartXide2Trio,
    },
    {
      name: "SmartXide Touch SurgiCO",
      image: SmartXideTouchSurgiCO,
    },
  ];

  return (
    <>
      <ProductsPage
        categoryName="ENT"
        bannerImage={ENTBg}
        description="Explore our wide range of high-quality urology instruments and equipment available for rental."
        products={products}
        otherCategories={["ENT Laser", "ENT HEAD & NECK ONCOLOGY"]}
      />
    </>
  );
};

export default ENT;
