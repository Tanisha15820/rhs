import urologyBg from "../../assets/images/urology_banner_1.png";
import bipolarPlasmaGenerator from "../../assets/images/bipolar_plasma_generator.png";
import diodeLaser from "../../assets/images/diode_laser.png";
import multimedImg from "../../assets/images/multimed.png";
import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const Urology = () => {
  const products = [
    {
      name: "Surgical Laser",
      image: bipolarPlasmaGenerator,
    },
    {
      name: "Urodynamic System & Uroflowmetry System",
      image: diodeLaser,
    },
    {
      name: "ESWL Extracorporeal Shock Wave Lithotripsy",
      image: multimedImg,
    },
    {
      name: "Endo Urology UMD Endoscopy",
      image: diodeLaser,
    },
    {
      name: "Endo-Vision Set",
      image: bipolarPlasmaGenerator,
    },
    {
      name: "Flexible Video Ureterorenoscope & Flexible Video Cystoscope",
      image: diodeLaser,
    },
    {
      name: "Bipolar (Emed & Simai)",
      image: diodeLaser,
    },
    {
      name: "Rocamed Comsumables",
      image: diodeLaser,
    },
  ];

  const urologySchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Urology Medical Machine & Equipment Rental",
    description:
      "High-quality urology medical instruments, surgical lasers, urodynamic systems, ESWL lithotripsy, and flexible video cystoscopes available for hospital and doctor rental.",
    brand: {
      "@type": "Brand",
      name: "Reinforce Healthcare Services",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      offerCount: "8",
      description:
        "Flexible daily, monthly, and long-term rental plans for hospitals and doctors.",
    },
  };

  return (
    <>
      <SEO
        title="Urology Medical Machine & Equipment Rental for Hospitals & Doctors"
        description="Rent advanced urology medical equipment including surgical lasers, ESWL lithotripsy, urodynamic systems, and video cystoscopes from Reinforce Healthcare Services."
        keywords="urology machine rental, surgical laser rental, ESWL lithotripsy machine rent, video cystoscope rental, hospital urology equipment"
        canonical="/urology"
        jsonLd={urologySchema}
      />
      <ProductsPage
        categoryName="Urology"
        bannerImage={urologyBg}
        description="Explore our wide range of high-quality urology instruments and equipment available for rental."
        products={products}
        otherCategories={["Ortho"]}
      />
    </>
  );
};

export default Urology;
