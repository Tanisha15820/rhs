import GastroBg from "../../assets/images/gastro_banner.png";
import Litho35 from "../../assets/images/litho35_machine.png";
import LithoEVO from "../../assets/images/Litho_evo.png";
import ProductsPage from "../../Pages/ProductsPage";

const GastroLaser = () => {
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
    <ProductsPage
      categoryName="GASTRO LASER"
      bannerImage={GastroBg}
      description="Explore our wide range of high-quality laser systems designed for precise gastrointestinal procedures."
      products={products}
      otherCategories={["Gastro Endoscopy"]}
    />
  );
};

export default GastroLaser;