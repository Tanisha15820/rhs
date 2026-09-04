import GastroBg from "../../assets/images/gastro_banner.png";
import diodeLaser from "../../assets/images/diode_laser.png";
import Litho35 from "../../assets/images/litho35_machine.png";
import LithoEVO from "../../assets/images/Litho_evo.png";
import ProductsPage from "../../Pages/ProductsPage";

const Gastro = () => {
  const products = [
    {
      name: "LITHO 35 WATT",
      image: Litho35,
    },
    {
      name: "LITHO EVO 35 WATT",
      image: LithoEVO,
    },
  ];

  return (
    <>
      <ProductsPage
        categoryName="GASTRO"
        bannerImage={GastroBg}
        description="Explore our wide range of high-quality urology instruments and equipment available for rental."
        products={products}
        otherCategories={["GASTRO Laser"]}
      />
    </>
  );
};

export default Gastro;
