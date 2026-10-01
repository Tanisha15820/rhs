import urodynamicsBg from "../../assets/images/urodynamics_banner.jpg";
import melodyImg from "../../assets/images/melody.png";
import danflowWaveImg from "../../assets/images/danflow-wave.png";
import patientCoachImg from "../../assets/images/trytable_patient_coach.png";
import bladderScannerImg from "../../assets/images/bladder_scanner.png";

import ProductsPage from "../../Pages/ProductsPage";
import SEO from "../SEO";

const UrodynamicSystem = () => {
  const products = [
    {
      name: "Urodynamic Systems",
      image: melodyImg,
      link: "/urodynamic-systems",
    },
    {
      name: "Uroflowmeters",
      image: danflowWaveImg,
      link: "/uroflowmeters",
    },
    {
      name: "Patient Coach",
      image: patientCoachImg,
      link: "/patient-couch-details",
    },
    {
      name: "Bladder Scanner",
      image: bladderScannerImg,
      link: "/bladder-scanner-details",
    },
  ];

  return (
    <>
      <SEO
        title="Urodynamic System & Uroflowmeters Equipment Rental | Reinforce Healthcare Services"
        description="Explore our comprehensive urodynamic product lineup including UROMIC workstations, Danflow wireless uroflowmeters, TRYTABLE patient coach, and MMT 3D bladder scanners."
        keywords="urodynamics rental, uroflowmeter rental, UROMIC workstations, Danflow Wave, patient coach, bladder scanner, urology diagnostic equipment"
      />
      <ProductsPage
        categoryName="Urodynamic System & Uroflowmeters"
        bannerImage={urodynamicsBg}
        description="Comprehensive clinical diagnostic solutions for accurate lower urinary tract assessments, cystometry, non-invasive uroflowmetry, motorized patient positioning, and 3D bladder volume scanning."
        products={products}
      />
    </>
  );
};

export default UrodynamicSystem;
