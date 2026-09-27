import { Link } from "react-router-dom";

// Material Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

import logo from "../assets/images/compressed_rhs_logo.png";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "All Equipment", path: "/machine" },
  { label: "Surgical Lasers", path: "/urology-surgical-laser" },
  { label: "Healthcare Blogs", path: "/blogs" },
  { label: "Contact & Support", path: "/contact" },
];

const specialtyLinks = [
  { label: "Urology Surgical Lasers", path: "/urology-surgical-laser" },
  { label: "ENT CO2 Surgical Laser", path: "/ent-laser" },
  { label: "Gastro Laser & Endoscopy", path: "/gastro-laser" },
  { label: "ESWL Lithotripsy Systems", path: "/vibrolith" },
  { label: "Urodynamics & Bladder Scanners", path: "/bladder-scanner" },
];

const Footer = () => {
  return (
    <footer className="relative bg-background px-3 pt-12 pb-6 md:px-5">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_12px_45px_rgba(25,168,232,0.08)] ring-1 ring-primary/10">

        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}
        <div className="px-6 py-12 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            {/* COLUMN 1: BRAND & MISSION (4 COLS) */}
            <div className="space-y-6 lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt="Reinforce Healthcare Services"
                  className="h-14 w-auto object-contain"
                />

                <div className="leading-tight">
                  <h2 className="text-[18px] font-extrabold tracking-tight text-primary-dark">
                    REINFORCE
                  </h2>

                  <p className="text-[10px] font-bold tracking-widest text-primary">
                    HEALTHCARE SERVICES
                  </p>
                </div>
              </Link>

              <p className="max-w-sm text-[13.5px] leading-relaxed text-slate-600">
                Reinforce Healthcare Services delivers premium medical equipment
                leasing, advanced surgical laser solutions, and reliable biomedical
                support designed for hospitals and healthcare professionals across India.
              </p>

              {/* 24/7 Live Support Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200/80 bg-emerald-50/70 px-4 py-2 text-xs font-semibold text-emerald-800 shadow-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span>24/7 Technical & Rental Support Available</span>
              </div>

              {/* Social Media Links */}
              <div>
                <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Connect With Us
                </p>

                <div className="flex items-center gap-2.5">
                  <SocialButton
                    href="https://facebook.com"
                    icon={<FacebookIcon sx={{ fontSize: 17 }} />}
                    label="Facebook"
                  />
                  <SocialButton
                    href="https://linkedin.com"
                    icon={<LinkedInIcon sx={{ fontSize: 17 }} />}
                    label="LinkedIn"
                  />
                  <SocialButton
                    href="https://instagram.com"
                    icon={<InstagramIcon sx={{ fontSize: 17 }} />}
                    label="Instagram"
                  />
                  <SocialButton
                    href="https://youtube.com"
                    icon={<YouTubeIcon sx={{ fontSize: 17 }} />}
                    label="YouTube"
                  />
                </div>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINKS (2 COLS) */}
            <div className="space-y-4 lg:col-span-2">
              <FooterHeading title="Quick Links" />

              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1.5 text-[13.5px] font-medium text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      <KeyboardArrowRightIcon
                        sx={{ fontSize: 16 }}
                        className="text-slate-400 transition-colors group-hover:text-primary"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: SPECIALTIES & DEVICES (3 COLS) */}
            <div className="space-y-4 lg:col-span-3">
              <FooterHeading title="Specialties & Solutions" />

              <ul className="space-y-2.5">
                {specialtyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-1.5 text-[13.5px] font-medium text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      <KeyboardArrowRightIcon
                        sx={{ fontSize: 16 }}
                        className="text-slate-400 transition-colors group-hover:text-primary"
                      />
                      <span className="truncate">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: OFFICES & DIRECT CONTACT (3 COLS) */}
            <div className="space-y-5 lg:col-span-3">
              <FooterHeading title="Get In Touch" />

              {/* Head Office Card */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F9FBFF] p-3.5 transition-colors hover:border-primary/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold text-slate-800">
                    Corporate Office
                  </p>

                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500">
                    324, 3<sup>rd</sup> Floor, Vipul Business Park, Sector-48,
                    Sohna Road, Gurgaon - 122004
                  </p>
                </div>
              </div>

              {/* Service Center Card */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-[#F9FBFF] p-3.5 transition-colors hover:border-primary/20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-dark/10 text-primary-dark">
                  <BusinessCenterOutlinedIcon sx={{ fontSize: 19 }} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold text-slate-800">
                    Service Hub
                  </p>

                  <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500">
                    119, 1<sup>st</sup> Floor, Vipul Business Park, Sector-48,
                    Sohna Road, Gurgaon - 122004
                  </p>
                </div>
              </div>

              {/* Contact Actions (Email & Phone) */}
              <div className="space-y-2 pt-1">
                <a
                  href="mailto:info@rhscare.org"
                  className="group flex items-center gap-2.5 text-[12.5px] text-slate-600 transition-colors hover:text-primary"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <EmailOutlinedIcon sx={{ fontSize: 15 }} />
                  </div>
                  <span className="font-medium">info@rhscare.org</span>
                </a>

                <a
                  href="tel:+918860086232"
                  className="group flex items-center gap-2.5 text-[12.5px] text-slate-600 transition-colors hover:text-primary"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <PhoneOutlinedIcon sx={{ fontSize: 15 }} />
                  </div>
                  <span className="font-medium">+91 8860086232 / +91 8448385864</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM COPYRIGHT BAR
        ===================================================== */}
        <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 px-6 py-5 text-white sm:px-8 lg:px-12">
          {/* Subtle Ambient Highlights */}
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-center md:text-left">
              <PrivacyTipOutlinedIcon
                sx={{
                  fontSize: 18,
                  color: "var(--color-primary)",
                }}
              />

              <p className="text-[12px] leading-5 text-slate-300">
                © {new Date().getFullYear()} Reinforce Healthcare Services. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[12px] text-slate-400">
              <Link to="/contact" className="transition-colors hover:text-white">
                Equipment Rental Terms
              </Link>

              <span className="h-3 w-px bg-white/20" />

              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>

              <span className="h-3 w-px bg-white/20" />

              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterHeading = ({ title }) => {
  return (
    <div className="relative pb-2">
      <h3 className="text-[15px] font-bold text-slate-900">{title}</h3>
      <span className="absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
    </div>
  );
};

const SocialButton = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white hover:shadow-sm"
    >
      {icon}
    </a>
  );
};

export default Footer;
