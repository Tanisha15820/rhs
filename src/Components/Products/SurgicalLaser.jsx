import urologyBg from "../../assets/images/urology_banner_1.png";
import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const SurgicalLaser = () => {
  return (
    <>
      <SEO
        title="Surgical Laser"
        description="Explore our advanced surgical laser systems designed for precise and minimally invasive procedures."
        keywords="surgical laser rental, laser machine rental, Reinforce Healthcare Services"
      />
      <ProductsPage
        categoryName="Surgical Laser"
        bannerImage={urologyBg}
        description="Explore our advanced surgical laser systems designed for precise, safe and minimally invasive procedures."
        products={[]}
        otherCategories={[
          "Urodynamic System & Uroflowmetry",
          "ESWL Lithotripsy",
          "Endo Urology UMD Endoscopy",
        ]}
      />
    </>
  );
};

export default SurgicalLaser;