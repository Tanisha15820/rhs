import morcellatorBg from "../../assets/images/morcellator_banner.jpg";
import cyberBlade from "../../assets/images/cyberblade.png";
import raykeen from "../../assets/images/raykeen.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const Morcellator = () => {
  const products = [
    {
      name: "Cyber BLADE™ Morcellator",
      image: cyberBlade,
      link: "/cyber-blade",
    },
    {
      name: "Raykeen Morcellator System",
      image: raykeen,
      link: "/raykeen-morcellator",
    },
  ];

  return (
    <>
      <SEO
        title="Urology Morcellator Systems Equipment Rental | Reinforce Healthcare Services"
        description="Rent state-of-the-art tissue morcellator systems including Cyber BLADE and Raykeen Morcellator for HoLEP and ThuLEP endourological procedures."
        keywords="morcellator system rental, Cyber Blade morcellator, Raykeen morcellator, HoLEP morcellation, urology tissue morcellator, prostate enucleation"
      />
      <ProductsPage
        categoryName="Morcellator System"
        bannerImage={morcellatorBg}
        description="High-efficiency tissue morcellation systems and oscillating cutters for rapid, safe, and controlled tissue retrieval during laser enucleation and endourological surgery."
        products={products}
      />
    </>
  );
};

export default Morcellator;