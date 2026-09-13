import React, { useState } from "react";

import { motion } from "framer-motion";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

import productEnquiryBanner from "../assets/images/product_enquiry_banner.png";

const ProductEnquiry = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("enquiryCart");

    if (savedProducts) {
      return JSON.parse(savedProducts);
    }

    return [
      {
        id: 1,
        name: "Diode Laser",
        image: "",
        quantity: 1,
      },
    ];
  });

  const [formData, setFormData] = useState({
    hospital: "",
    name: "",
    email: "",
    contact: "",
    address: "",
    country: "INDIA",
    state: "",
    city: "",
    pinCode: "",
    details: "",
  });

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);

    setProducts(updatedProducts);

    localStorage.setItem("enquiryCart", JSON.stringify(updatedProducts));
  };

  const emptyCart = () => {
    setProducts([]);
    localStorage.removeItem("enquiryCart");
  };

  const changeQuantity = (id, value) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: value,
        };
      }

      return product;
    });

    setProducts(updatedProducts);

    localStorage.setItem("enquiryCart", JSON.stringify(updatedProducts));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({
      hospital: "",
      name: "",
      email: "",
      contact: "",
      address: "",
      country: "INDIA",
      state: "",
      city: "",
      pinCode: "",
      details: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Products:", products);
    console.log("Enquiry Details:", formData);

    alert("Your enquiry has been submitted successfully.");
  };

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* Banner */}
      <section className="relative w-full overflow-hidden">
        <img
          src={productEnquiryBanner}
          alt="Product Enquiry"
          className="
            h-[180px]
            w-full
            object-cover
            sm:h-[210px]
            md:h-[240px]
            lg:h-[270px]
          "
        />

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-5 md:px-8">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Product{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Enquiry
              </span>
            </motion.h1>

            <motion.p
              className="mt-3 max-w-md text-xs leading-5 text-slate-600 sm:text-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Share your product requirements with our team and get the right
              healthcare solutions for your needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-[1100px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Selected Products */}
          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-[#dce9f5]
              bg-white
              shadow-[0_4px_20px_rgba(15,23,42,0.05)]
            "
          >
            {/* Section Header */}
            <div
              className="
                flex
                items-center
                gap-3
                border-b
                border-[#e6eef6]
                bg-[#f7fbff]
                px-5
                py-3
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-md
                  bg-primary/10
                  text-primary
                "
              >
                <ShoppingCartOutlinedIcon fontSize="small" />
              </div>

              <div>
                <h2 className="text-[18px] font-semibold text-primary-dark">
                  Selected Products
                </h2>

                <p className="text-[12px] text-gray-400">
                  Review your selected products before submitting your enquiry.
                </p>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
              <div className="min-w-[650px]">
                {/* Table Header */}
                <div
                  className="
                    grid
                    grid-cols-[80px_1fr_120px_90px]
                    border-b
                    border-[#e6eef6]
                    bg-[#f9fcff]
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    text-[#51657d]
                  "
                >
                  <div>Image</div>
                  <div>Product Name</div>
                  <div>Quantity</div>
                  <div className="text-center">Remove</div>
                </div>

                {/* Products */}
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="
                        grid
                        grid-cols-[80px_1fr_120px_90px]
                        items-center
                        border-b
                        border-[#edf2f7]
                        px-4
                        py-3
                      "
                    >
                      {/* Product Image */}
                      <div
                        className="
                          flex
                          h-[48px]
                          w-[58px]
                          items-center
                          justify-center
                          overflow-hidden
                          rounded-md
                          bg-[#f5f9fd]
                        "
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <ShoppingCartOutlinedIcon
                            className="text-[#b8c9da]"
                            fontSize="small"
                          />
                        )}
                      </div>

                      {/* Product Name */}
                      <div>
                        <h3 className="text-[14px] font-semibold text-slate-700">
                          {product.name}
                        </h3>
                      </div>

                      {/* Quantity */}
                      <div>
                        <input
                          type="number"
                          min="1"
                          value={product.quantity || 1}
                          onChange={(e) =>
                            changeQuantity(product.id, Number(e.target.value))
                          }
                          className="
                            w-[70px]
                            rounded-md
                            border
                            border-[#dce7f1]
                            bg-white
                            px-2
                            py-1.5
                            text-[13px]
                            text-gray-600
                            outline-none
                            focus:border-primary
                          "
                        />
                      </div>

                      {/* Remove */}
                      <div className="flex justify-center">
                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-md
                            text-red-400
                            transition
                            hover:bg-red-50
                            hover:text-red-500
                          "
                        >
                          <DeleteOutlineOutlinedIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <ShoppingCartOutlinedIcon
                      className="text-[#c8d7e6]"
                      fontSize="large"
                    />

                    <p className="mt-2 text-[14px] text-gray-400">
                      No products selected.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Empty Cart Button */}
            {products.length > 0 && (
              <div className="flex justify-end px-4 py-3">
                <button
                  type="button"
                  onClick={emptyCart}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-red-200
                    bg-white
                    px-3
                    py-1.5
                    text-[12px]
                    font-medium
                    text-red-500
                    transition
                    hover:bg-red-50
                  "
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: 14 }} />
                  Empty Cart
                </button>
              </div>
            )}
          </div>

          {/* Enquiry Form */}
          <form onSubmit={handleSubmit}>
            <div
              className="
                overflow-hidden
                rounded-xl
                border
                border-[#dce9f5]
                bg-white
                shadow-[0_4px_20px_rgba(15,23,42,0.05)]
              "
            >
              {/* Form Header */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-[#e6eef6]
                  bg-[#f7fbff]
                  px-5
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-md
                    bg-primary/10
                    text-primary
                  "
                >
                  <DescriptionOutlinedIcon fontSize="small" />
                </div>

                <div>
                  <h2 className="text-[18px] font-semibold text-primary-dark">
                    Enquiry Details
                  </h2>

                  <p className="text-[12px] text-gray-400">
                    Please fill in your details and we will get back to you
                    soon.
                  </p>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-5">
                {/* First Row */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <FormInput
                    label="Hospital/Clinic/Company"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleChange}
                    placeholder="Hospital/Clinic/Company"
                    icon={<LocationOnOutlinedIcon />}
                  />

                  <FormInput
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    icon={<PersonOutlineOutlinedIcon />}
                  />

                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    icon={<EmailOutlinedIcon />}
                  />

                  <FormInput
                    label="Contact No."
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact No."
                    icon={<PhoneOutlinedIcon />}
                  />
                </div>

                {/* Second Row */}
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                  <FormInput
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    icon={<LocationOnOutlinedIcon />}
                  />

                  <FormSelect
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    options={["INDIA", "Canada", "USA", "UK"]}
                    icon={<PublicOutlinedIcon />}
                  />

                  <FormInput
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    icon={<LocationOnOutlinedIcon />}
                  />

                  <FormInput
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    icon={<LocationOnOutlinedIcon />}
                  />
                </div>

                {/* Third Row */}
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                  <FormInput
                    label="Pin Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="Pin Code"
                    icon={<PinDropOutlinedIcon />}
                  />
                </div>

                {/* Details */}
                <div className="mt-4">
                  <label className="mb-1.5 block text-[13px] font-medium text-[#51657d]">
                    Details
                  </label>

                  <div className="relative">
                    <DescriptionOutlinedIcon
                      sx={{
                        fontSize: 15,
                        color: "#9fb0c2",
                      }}
                      className="absolute left-3 top-3"
                    />

                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Details"
                      rows="3"
                      className="
                        w-full
                        resize-none
                        rounded-md
                        border
                        border-[#dce7f1]
                        bg-white
                        py-2.5
                        pl-10
                        pr-3
                        text-[13px]
                        text-gray-600
                        outline-none
                        placeholder:text-[#aebdcb]
                        focus:border-primary
                      "
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex justify-end gap-3">
                  <button
                    type="submit"
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      bg-gradient-to-r
                      from-primary
                      to-primary-dark
                      px-6
                      py-2.5
                      text-[13px]
                      font-medium
                      text-white
                      shadow-sm
                      transition
                      hover:opacity-90
                    "
                  >
                    <SendOutlinedIcon sx={{ fontSize: 14 }} />
                    Submit
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-md
                      border
                      border-primary/40
                      bg-white
                      px-6
                      py-2.5
                      text-[13px]
                      font-medium
                      text-primary
                      transition
                      hover:bg-primary/5
                    "
                  >
                    <RestartAltOutlinedIcon sx={{ fontSize: 14 }} />
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

// Input Component
const FormInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
}) => {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-[#51657d]">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 flex -translate-y-1/2 text-[#9fb0c2]">
          {React.cloneElement(icon, {
            sx: {
              fontSize: 16,
            },
          })}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            h-[38px]
            w-full
            rounded-md
            border
            border-[#dce7f1]
            bg-white
            pl-9
            pr-3
            text-[13px]
            text-gray-600
            outline-none
            placeholder:text-[#aebdcb]
            focus:border-primary
          "
        />
      </div>
    </div>
  );
};

// Select Component
const FormSelect = ({ label, name, value, onChange, options, icon }) => {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-[#51657d]">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 z-10 flex -translate-y-1/2 text-[#9fb0c2]">
          {React.cloneElement(icon, {
            sx: {
              fontSize: 16,
            },
          })}
        </span>

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="
            h-[38px]
            w-full
            appearance-none
            rounded-md
            border
            border-[#dce7f1]
            bg-white
            pl-9
            pr-3
            text-[13px]
            text-gray-600
            outline-none
            focus:border-primary
          "
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductEnquiry;
