import ProductsPage from "../../Pages/ProductsPage";

const SurgicalLaser = () => {
  return (
    <ProductsPage
      categoryName="SurgicalLaser"
      bannerImage={urologyBg}
      description="Explore our wide range of high-quality urology instruments and equipment available for rental."
      products={products}
      otherCategories={["Ortho"]}
    />
  );
};

export default SurgicalLaser;
