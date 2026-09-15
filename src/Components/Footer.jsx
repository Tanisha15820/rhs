import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

import logo from "../assets/images/compressed_rhs_logo.png";

const quickLinks = ["Home", "Products", "Services", "About Us", "Contact Us"];

const trustItems = [
  {
    icon: <SecurityIcon sx={{ fontSize: 19 }} />,
    title: "Trusted Healthcare",
    description: "Reliable medical technology and healthcare solutions",
  },
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: 19 }} />,
    title: "Patient First",
    description: "Technology focused on better patient outcomes",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 19 }} />,
    title: "Expert Support",
    description: "Dedicated assistance from our experienced team",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 19 }} />,
    title: "Quality Assured",
    description: "International standards and consistent excellence",
  },
];

const Footer = () => {
  return (
    <footer className="bg-background pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_6px_30px_rgba(37,37,184,0.08)] ring-1 ring-primary/10">
        <div className="px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="Reinforce Healthcare Services"
                  className="h-14 w-auto object-contain"
                />

                <div className="leading-tight">
                  <h2 className="text-[17px] font-extrabold tracking-tight text-primary-dark">
                    REINFORCE
                  </h2>

                  <p className="text-[10px] font-bold tracking-wide text-primary">
                    HEALTHCARE
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-[13px] leading-6 text-gray-500">
                Reinforce Healthcare Services is committed to delivering
                advanced healthcare technology and reliable medical solutions
                with a strong focus on quality, innovation and customer support.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <SocialIcon icon={<FacebookIcon sx={{ fontSize: 16 }} />} />
                <SocialIcon icon={<LinkedInIcon sx={{ fontSize: 16 }} />} />
                <SocialIcon icon={<InstagramIcon sx={{ fontSize: 16 }} />} />
                <SocialIcon icon={<YouTubeIcon sx={{ fontSize: 16 }} />} />
              </div>
            </div>

            <div>
              <FooterHeading title="Quick Links" />

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <FooterLink key={link} text={link} />
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading title="Head Office" />

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <LocationOnOutlinedIcon sx={{ fontSize: 19 }} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Corporate Office
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-gray-500">
                    324, 3<sup>rd</sup>Floor, Vipul Business Park
                    <br />
                    Sector-48, Sohna Road, Gurgaon - 122004
                  </p>
                </div>
              </div>
            </div>

            <div>
              <FooterHeading title="Service Center" />

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <BusinessCenterOutlinedIcon sx={{ fontSize: 18 }} />
                </div>

                <div>
                  <p className="text-[13px] font-semibold text-primary-dark">
                    Service Center
                  </p>

                  <p className="mt-1 text-[12px] leading-5 text-gray-500">
                    119, 1<sup>st</sup>Floor, Vipul Business Park
                    <br />
                    Sector-48, Sohna Road, Gurgaon - 122004
                  </p>
                </div>
              </div>
            </div>

            <div>
              <FooterHeading title="Contact Us" />

              <div className="space-y-4">
                <ContactItem
                  icon={<EmailOutlinedIcon sx={{ fontSize: 17 }} />}
                  title="Mail ID"
                  value="info@rhscare.org"
                />

                <ContactItem
                  icon={<SupportAgentOutlinedIcon sx={{ fontSize: 17 }} />}
                  title="Service Support"
                  value="service@rhscare.org"
                />

                <ContactItem
                  icon={<BusinessCenterOutlinedIcon sx={{ fontSize: 17 }} />}
                  title="Sales"
                  value="sales@rhscare.org"
                />

                <ContactItem
                  icon={<PhoneOutlinedIcon sx={{ fontSize: 17 }} />}
                  title="Phone"
                  value="+91 8860086232/+91 8448385864"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 mb-5 overflow-hidden rounded-xl border border-primary/10 bg-white shadow-[0_4px_20px_rgba(25,168,232,0.07)] sm:mx-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => (
              <TrustItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                border={index !== 3}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-r from-primary-dark to-primary px-6 py-5 sm:px-8 lg:px-10">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full border border-white/5" />

          <div className="absolute -bottom-20 -right-4 h-48 w-48 rounded-full border border-white/5" />

          <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <PrivacyTipOutlinedIcon
                sx={{
                  fontSize: 17,
                  color: "var(--color-primary)",
                }}
              />

              <p className="text-[11px] leading-5 text-white/80">
                © 2025 Reinforce Healthcare Services.
                <br className="sm:hidden" /> All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/70 sm:gap-4">
              <a href="#" className="transition hover:text-white">
                Privacy Policy
              </a>

              <span className="h-3 w-px bg-white/20" />

              <a href="#" className="transition hover:text-white">
                Terms of Service
              </a>

              <span className="h-3 w-px bg-white/20" />

              <a href="#" className="transition hover:text-white">
                Cookie Policy
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
    <h3 className="mb-5 text-[14px] font-bold text-primary-dark">{title}</h3>
  );
};

const FooterLink = ({ text }) => {
  return (
    <li>
      <a
        href="#"
        className="group flex items-center gap-1 text-[13px] text-gray-500 transition hover:text-primary"
      >
        <KeyboardArrowRightIcon
          sx={{ fontSize: 15 }}
          className="text-primary transition-transform duration-200 group-hover:translate-x-1"
        />

        <span>{text}</span>
      </a>
    </li>
  );
};

const SocialIcon = ({ icon }) => {
  return (
    <a
      href="#"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/5 text-primary-dark transition duration-200 hover:bg-primary hover:text-white"
    >
      {icon}
    </a>
  );
};

const ContactItem = ({ icon, title, value }) => {
  return (
    <a
      href="#"
      className="flex items-start gap-2.5 border-b border-gray-100 pb-3 last:border-b-0"
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-primary-dark">{title}</p>

        <p className="mt-0.5 break-words text-[12px] leading-5 text-gray-500">
          {value}
        </p>
      </div>
    </a>
  );
};

const TrustItem = ({ icon, title, description, border }) => {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 ${
        border ? "border-b border-gray-100 lg:border-b-0 lg:border-r" : ""
      }`}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
        {icon}
      </div>

      <div>
        <h4 className="text-[13px] font-bold text-primary-dark">{title}</h4>

        <p className="mt-1 max-w-[170px] text-[11px] leading-4 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Footer;
