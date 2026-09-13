export const ENQUIRY_CART_KEY = "enquiryCart";

export function saveEnquiryProduct(product) {
  if (!product) return;

  const item = {
    id: Date.now(),
    name: product.name || "Medical Equipment",
    image: product.image || "",
    quantity: 1,
  };

  localStorage.setItem(ENQUIRY_CART_KEY, JSON.stringify([item]));
}