import { useNavigate } from "react-router-dom";
import { PhoneCall, ShieldCheck } from "lucide-react";

import { saveEnquiryProduct } from "../../utils/enquiryStorage";

/**
 * ProductInquireCTA Component
 * Clean, beginner-friendly call-to-action placed at the end of product pages.
 * Displays a rental overview card and an "Inquire" button that saves the
 * product into the enquiry cart and redirects to the product enquiry page.
 */
export default function ProductInquireCTA({
  productName = "this Medical Equipment",
  productImage = "",
  subtitle = "Available for flexible daily, monthly, and per-procedure rental with certified technical and clinical support.",
}) {
  const navigate = useNavigate();

  const handleInquire = () => {
    saveEnquiryProduct({ name: productName, image: productImage });
    navigate("/product-enquiry");
  };

  return (
    <section className="bg-[#F8FAFE] py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border border-blue-100 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#102A43]">
                Rent {productName}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 max-w-2xl">
                {subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleInquire}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:opacity-95 transition whitespace-nowrap cursor-pointer"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Inquire</span>
          </button>
        </div>
      </div>
    </section>
  );
}