// import React from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Navigation,
//   ShieldCheck,
//   Lock,
//   Send,
//   User,
// } from "lucide-react";

// import contactBannerBg from "../assets/images/contact_banner.png";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Contact Banner */}
//       <section
//         className="relative h-[190px] w-full overflow-hidden sm:h-[220px] md:h-[250px]"
//         style={{
//           backgroundImage: `url(${contactBannerBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
//           <div className="max-w-xl">
//             <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
//               Contact{" "}
//               <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
//                 Us
//               </span>
//             </h1>

//             <p className="mt-3 max-w-md text-xs leading-5 text-slate-600 sm:text-sm">
//               Get in touch with our team for product inquiries, expert support,
//               and the right healthcare solutions for your needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Main Contact Section */}
//       <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 pb-10 sm:-mt-10 md:px-6">
//         <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(30,80,140,0.12)] sm:p-5 lg:grid-cols-[270px_1fr]">
//           {/* Left Side */}
//           <div className="space-y-3">
//             {/* Call Us */}
//             <div className="rounded-lg border border-blue-100 bg-white p-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]">
//                   <Phone size={22} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0e78f9]">
//                     Call Us
//                   </h3>

//                   <p className="mt-1 text-xs font-semibold text-slate-700">
//                     99999999
//                   </p>

//                   <p className="mt-1 text-[11px] text-slate-500">
//                     Monday to Friday
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Email Us */}
//             <div className="rounded-lg border border-blue-100 bg-white p-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]">
//                   <Mail size={22} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0e78f9]">
//                     Email Us
//                   </h3>

//                   <p className="mt-1 text-xs font-semibold text-slate-700">
//                     email
//                   </p>

//                   <p className="mt-1 text-[11px] text-slate-500">
//                     We'll respond within 24 hours
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Office Address */}
//             <div className="rounded-lg border border-blue-100 bg-white p-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]">
//                   <MapPin size={22} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0e78f9]">
//                     Office Address
//                   </h3>

//                   <p className="mt-1 text-xs leading-4 text-slate-600">
//                     Gurugram
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="rounded-lg border border-blue-100 bg-white p-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]">
//                   <Clock size={22} />
//                 </div>

//                 <div>
//                   <h3 className="text-sm font-semibold text-[#0e78f9]">
//                     Business Hours
//                   </h3>

//                   <p className="mt-1 text-xs leading-4 text-slate-600">
//                     Monday - Friday
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Office Map */}
//             <div className="relative h-[110px] overflow-hidden rounded-lg border border-blue-100 bg-slate-100">
//               <iframe
//                 title="Office Location"
//                 src="https://www.google.com/maps?q=Delhi,India&z=14&output=embed"
//                 className="absolute inset-0 h-full w-full border-0 grayscale contrast-[0.9] opacity-80"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />

//               <div className="pointer-events-none absolute inset-0 bg-blue-50/10" />

//               <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-blue-100">
//                   <MapPin
//                     size={25}
//                     className="text-[#0e78f9]"
//                     fill="currentColor"
//                   />
//                 </div>
//               </div>

//               <div className="absolute right-2 top-2 rounded-lg bg-white px-3 py-2 shadow-md">
//                 <p className="text-xs font-bold text-[#0e78f9]">
//                   Visit Our Office
//                 </p>

//                 <p className="mt-0.5 text-[10px] text-slate-500">
//                   We'd love to meet you.
//                 </p>

//                 <button
//                   type="button"
//                   className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-[#0e78f9]"
//                 >
//                   Get Directions
//                   <Navigation size={12} />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Contact Form */}
//           <div>
//             {/* Form Heading */}
//             <div className="mb-5 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]">
//                   <User size={18} />
//                 </div>

//                 <h2 className="text-base font-bold text-[#102d68] sm:text-lg">
//                   Please provide your complete contact details.
//                 </h2>
//               </div>

//               <p className="hidden text-[12px] text-[#0e78f9] sm:block">
//                 * Required field
//               </p>
//             </div>

//             {/* Contact Form */}
//             <form className="space-y-4">
//               {/* Title */}
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Title
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Title"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     First Name<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Last Name<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>
//               </div>

//               {/* Job Title */}
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Job Title
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Job Title"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Hospital / Business / University
//                     <span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Hospital / Business / University"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>
//               </div>

//               {/* Department / Address */}
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Department<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Department"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Address<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Address"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>
//               </div>

//               {/* Country / State / City / Zip */}
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Country<span className="text-red-500">*</span>
//                   </label>

//                   <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-500 outline-none focus:border-[#0e78f9]">
//                     <option>Select Country</option>
//                     <option>India</option>
//                     <option>Italy</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     State<span className="text-red-500">*</span>
//                   </label>

//                   <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-500 outline-none focus:border-[#0e78f9]">
//                     <option>Select State</option>
//                     <option>Delhi</option>
//                     <option>Gurugram</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     City<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="City"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Post / Zip Code<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Post / Zip Code"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>
//               </div>

//               {/* Mobile / Email */}
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Mobile<span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex h-10 overflow-hidden rounded-md border border-slate-200">
//                     {/* <select className="w-20 border-r border-slate-200 bg-white px-2 text-xs outline-none">
//                       <option>🇺🇸 +1</option>
//                       <option>🇮🇳 +91</option>
//                       <option>🇬🇧 +44</option>
//                     </select> */}

//                     <input
//                       type="tel"
//                       placeholder="Mobile Number"
//                       className="min-w-0 flex-1 px-3 text-xs outline-none placeholder:text-slate-400"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                     Email<span className="text-red-500">*</span>
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="mb-1.5 block text-xs font-semibold text-slate-700">
//                   Medical Equipment (Please briefly describe your requirements)
//                   <span className="text-red-500">*</span>
//                 </label>

//                 <textarea
//                   rows="4"
//                   maxLength="2000"
//                   placeholder="Type your requirements here..."
//                   className="w-full resize-none rounded-md border border-slate-200 px-3 py-3 text-xs outline-none placeholder:text-slate-400 focus:border-[#0e78f9]"
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0967d8]"
//                 >
//                   <Send size={16} />
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Send,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

import contactBannerBg from "../assets/images/contact_banner.png";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Banner */}
      <section
        className="relative h-[190px] w-full overflow-hidden sm:h-[220px] md:h-[250px]"
        style={{
          backgroundImage: `url(${contactBannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
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
              Contact{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Us
              </span>
            </motion.h1>

            <motion.p
              className="mt-3 max-w-md text-xs leading-5 text-slate-600 sm:text-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get in touch with our team for product inquiries, expert support,
              and the right healthcare solutions for your needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 pb-10 sm:-mt-10 md:px-6">
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(30,80,140,0.12)] sm:p-5 lg:grid-cols-[270px_1fr]">
          {/* Left Side */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Call Us */}
            <motion.div
              className="rounded-lg border border-blue-100 bg-white p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(14,120,249,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone size={22} />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-[#0e78f9]">
                    Call Us
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    99999999
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Monday to Friday
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email Us */}
            <motion.div
              className="rounded-lg border border-blue-100 bg-white p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(14,120,249,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={22} />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-[#0e78f9]">
                    Email Us
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-700">
                    email
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Office Address */}
            <motion.div
              className="rounded-lg border border-blue-100 bg-white p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(14,120,249,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin size={22} />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-[#0e78f9]">
                    Office Address
                  </h3>

                  <p className="mt-1 text-xs leading-4 text-slate-600">
                    Gurugram
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="rounded-lg border border-blue-100 bg-white p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 25px rgba(14,120,249,0.12)",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock size={22} />
                </motion.div>

                <div>
                  <h3 className="text-sm font-semibold text-[#0e78f9]">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-xs leading-4 text-slate-600">
                    Monday - Friday
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Office Map */}
            <motion.div
              className="relative h-[110px] overflow-hidden rounded-lg border border-blue-100 bg-slate-100"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <iframe
                title="Office Location"
                src="https://www.google.com/maps?q=Delhi,India&z=14&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale contrast-[0.9] opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="pointer-events-none absolute inset-0 bg-blue-50/10" />

              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-full"
                animate={{
                  y: [-4, 0, -4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-blue-100">
                  <MapPin
                    size={25}
                    className="text-[#0e78f9]"
                    fill="currentColor"
                  />
                </div>
              </motion.div>

              <motion.div
                className="absolute right-2 top-2 rounded-lg bg-white px-3 py-2 shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-xs font-bold text-[#0e78f9]">
                  Visit Our Office
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  We'd love to meet you.
                </p>

                <button
                  type="button"
                  className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-[#0e78f9]"
                >
                  Get Directions
                  <Navigation size={12} />
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Form Heading */}
            <motion.div
              className="mb-5 flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#0e78f9]"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <User size={18} />
                </motion.div>

                <h2 className="text-base font-bold text-[#102d68] sm:text-lg">
                  Please provide your complete contact details.
                </h2>
              </div>

              <p className="hidden text-[12px] text-[#0e78f9] sm:block">
                * Required field
              </p>
            </motion.div>

            {/* Contact Form */}
            <form className="space-y-4">
              {/* Title / First Name / Last Name */}
              <motion.div
                className="grid grid-cols-1 gap-4 md:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Title
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Title"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    First Name<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="First Name"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Last Name<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Last Name"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/* Job Title */}
              <motion.div
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Job Title
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Job Title"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Hospital / Business / University
                    <span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Hospital / Business / University"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/* Department*/}
              <motion.div
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Department<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Department"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Address<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Address"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/*Country*/}
              <motion.div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Country<span className="text-red-500">*</span>
                  </label>

                  <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-500 outline-none focus:border-[#0e78f9]">
                    <option>Select Country</option>
                    <option>India</option>
                    <option>Italy</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    State<span className="text-red-500">*</span>
                  </label>

                  <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs text-slate-500 outline-none focus:border-[#0e78f9]">
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Gurugram</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    City<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="City"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Post / Zip Code<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="text"
                    placeholder="Post / Zip Code"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/* Mobile*/}
              <motion.div
                className="grid grid-cols-1 gap-4 md:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Mobile<span className="text-red-500">*</span>
                  </label>

                  <motion.div
                    className="flex h-10 overflow-hidden rounded-md border border-slate-200"
                    whileFocus={{ borderColor: "#0e78f9" }}
                  >
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="min-w-0 flex-1 px-3 text-xs outline-none placeholder:text-slate-400"
                    />
                  </motion.div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Email<span className="text-red-500">*</span>
                  </label>

                  <motion.input
                    type="email"
                    placeholder="Email Address"
                    whileFocus={{
                      scale: 1.01,
                      borderColor: "#0e78f9",
                    }}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs outline-none placeholder:text-slate-400"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Medical Equipment (Please briefly describe your requirements)
                  <span className="text-red-500">*</span>
                </label>

                <motion.textarea
                  rows="4"
                  maxLength="2000"
                  placeholder="Type your requirements here..."
                  whileFocus={{
                    scale: 1.005,
                    borderColor: "#0e78f9",
                  }}
                  className="w-full resize-none rounded-md border border-slate-200 px-3 py-3 text-xs outline-none placeholder:text-slate-400"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 20px rgba(14,120,249,0.25)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-7 py-3 text-sm font-semibold text-white shadow-md"
                >
                  <Send size={16} />
                  Submit
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
