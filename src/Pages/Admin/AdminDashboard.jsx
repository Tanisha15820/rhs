import { useState, useEffect, useRef } from "react";
import AdminLayout from "../../Components/Admin/AdminLayout";
import SEO from "../../Components/SEO";

// Storage utilities
import {
  getAllBanners,
  addBannerSlide,
  updateBannerSlide,
  deleteBannerSlide,
  resetBanners,
} from "../../utils/bannerStorage";

import {
  getMachineProducts,
  addMachineProduct,
  updateMachineProduct,
  deleteMachineProduct,
  resetMachineProducts,
  THEME_PRESETS,
} from "../../utils/machineStorage";

// Image assets
import homeBannerDefault from "../../assets/images/home.png";
import homeBg1Default from "../../assets/images/home_bg1.png";
import bipolarImg from "../../assets/images/bipolar_plasma_generator.png";
import diodeImg from "../../assets/images/diode_laser.png";
import cyberImg from "../../assets/images/cyber_blade.png";
import bladderImg from "../../assets/images/bladder_scanner.png";
import ursImg from "../../assets/images/flexible_video_urs.png";
import endoImg from "../../assets/images/endo_vision_set.png";

// Material Icons
import ViewCarouselOutlinedIcon from "@mui/icons-material/ViewCarouselOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseIcon from "@mui/icons-material/Close";

const PRESET_PRODUCTS = [
  {
    key: "bipolar_plasma_generator",
    name: "Bipolar Plasma Generator",
    img: bipolarImg,
  },
  { key: "diode_laser", name: "Diode Laser", img: diodeImg },
  { key: "cyber_blade", name: "CyberBlade", img: cyberImg },
  { key: "bladder_scanner", name: "Bladder Scanner", img: bladderImg },
  { key: "flexible_video_urs", name: "Flexible Video URS", img: ursImg },
  { key: "endo_vision_set", name: "Endo Vision Set", img: endoImg },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("banners");

  // ================= DATA STATES =================
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);

  // Toast / notification feedback
  const [notification, setNotification] = useState(null);

  // Active edit / modal states for Banners
  const [editingBanner, setEditingBanner] = useState(null);
  const [isNewBannerModalOpen, setIsNewBannerModalOpen] = useState(false);
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  // Active edit / modal states for Machine Products
  const [editingProduct, setEditingProduct] = useState(null);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  // File input refs
  const bannerFileRef = useRef(null);
  const productFileRef = useRef(null);

  // Load all initial state
  useEffect(() => {
    setBanners(getAllBanners());
    setProducts(getMachineProducts());
  }, []);

  const showNotify = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4500);
  };

  // Convert File to Base64
  const readFileAsBase64 = (file, callback) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      showNotify("Please select an image file (PNG, JPG, WebP)", "error");
      return;
    }
    if (file.size > 3.5 * 1024 * 1024) {
      showNotify(
        "Image size is over 3.5MB. Please choose a smaller file.",
        "error",
      );
      return;
    }
    const reader = new FileReader();
    reader.onload = () => callback(reader.result);
    reader.onerror = () => showNotify("Failed to read image file.", "error");
    reader.readAsDataURL(file);
  };

  // ========================================================
  // 1. BANNER OPERATIONS (ADD, EDIT, DELETE, RESET)
  // ========================================================
  const handleSaveBanner = (e) => {
    e.preventDefault();
    if (!editingBanner) return;

    if (editingBanner.id === "new") {
      const updated = addBannerSlide(editingBanner);
      setBanners(updated);
      setIsNewBannerModalOpen(false);
      showNotify("New homepage banner slide added successfully!");
    } else {
      const updated = updateBannerSlide(editingBanner.id, editingBanner);
      setBanners(updated);
      showNotify("Banner slide updated successfully!");
    }
    setEditingBanner(null);
  };

  const handleDeleteBanner = (id) => {
    if (window.confirm("Are you sure you want to delete this banner slide?")) {
      const res = deleteBannerSlide(id);
      if (res.success) {
        setBanners(res.slides);
        if (editingBanner?.id === id) setEditingBanner(null);
        showNotify("Banner slide deleted successfully.");
      } else {
        showNotify(res.message, "error");
      }
    }
  };

  const handleResetBanners = () => {
    if (
      window.confirm("Reset all banner slides to the original factory default?")
    ) {
      const defaults = resetBanners();
      setBanners(defaults);
      setEditingBanner(null);
      showNotify("Banner slides have been reset to original default.");
    }
  };

  const openNewBannerModal = () => {
    setEditingBanner({
      id: "new",
      image: "",
      smallHeading: "Trusted Healthcare Services",
      headingLine1: "Advanced Medical Equipment",
      headingHighlight: "Better Care.",
      singleLine: false,
      description:
        "Reinforce Healthcare Services provides high-grade medical systems and clinic solutions.",
      primaryBtnText: "Book an Appointment",
      primaryBtnLink: "/contact",
      secondaryBtnText: "Explore Products",
      secondaryBtnLink: "/machine",
      isActive: true,
    });
    setIsNewBannerModalOpen(true);
  };

  // ========================================================
  // 2. MACHINE PRODUCTS & CONTENT OPERATIONS
  // ========================================================
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (editingProduct.id === "new") {
      const updated = addMachineProduct(editingProduct);
      setProducts(updated);
      setIsNewProductModalOpen(false);
      showNotify("New medical machine product added to catalog!");
    } else {
      const updated = updateMachineProduct(editingProduct.id, editingProduct);
      setProducts(updated);
      showNotify("Medical machine product updated!");
    }
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    if (
      window.confirm("Are you sure you want to delete this medical machine?")
    ) {
      const res = deleteMachineProduct(id);
      if (res.success) {
        setProducts(res.products);
        if (editingProduct?.id === id) setEditingProduct(null);
        showNotify("Machine product deleted from catalog.");
      } else {
        showNotify(res.message, "error");
      }
    }
  };

  const handleResetProducts = () => {
    if (window.confirm("Reset medical machines to factory default list?")) {
      const defaults = resetMachineProducts();
      setProducts(defaults);
      setEditingProduct(null);
      showNotify("Machine catalog reset to original defaults.");
    }
  };

  const openNewProductModal = () => {
    setEditingProduct({
      id: "new",
      name: "Precision Surgical Laser",
      category: "Laser Surgery",
      image: "",
      presetImageKey: "diode_laser",
      themeId: "teal",
      description:
        "State-of-the-art medical laser technology for operating theaters and specialized clinics.",
    });
    setIsNewProductModalOpen(true);
  };

  // Visual image helper
  const getProductDisplayImage = (prod) => {
    if (prod.image) return prod.image;
    const found = PRESET_PRODUCTS.find((p) => p.key === prod.presetImageKey);
    return found ? found.img : bipolarImg;
  };

  // Active banner simulation image
  const previewBanner = banners[activeBannerIndex] || banners[0] || {};
  const currentBannerImage =
    previewBanner.image ||
    (activeBannerIndex === 1 ? homeBg1Default : homeBannerDefault);

  return (
    <AdminLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      counts={{
        banners: banners.length,
        products: products.length,
      }}
    >
      <SEO
        title="Admin Content Portal | Reinforce Healthcare Services"
        description="Comprehensive dashboard to add, edit, and delete homepage banners, and medical machine images and content."
      />

      {/* Floating Notification Toast */}
      {notification && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl px-5 py-3.5 shadow-2xl backdrop-blur-md transition-all animate-fade-in border ${
            notification.type === "error"
              ? "bg-rose-50 border-rose-200 text-rose-800"
              : "bg-emerald-50 border-emerald-200 text-emerald-800"
          }`}
        >
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl font-bold ${
              notification.type === "error"
                ? "bg-rose-100 text-rose-600"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            {notification.type === "error" ? (
              "!"
            ) : (
              <CheckCircleOutlinedIcon style={{ fontSize: 20 }} />
            )}
          </div>
          <div>
            <p className="text-xs font-bold">{notification.message}</p>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="ml-2 rounded-lg p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
          >
            <CloseIcon style={{ fontSize: 16 }} />
          </button>
        </div>
      )}

      {/*  HOMEPAGE BANNERS TAB (ADD, EDIT, DELETE) */}
      {activeTab === "banners" && (
        <div className="space-y-8">
          {/* Top Bar with Add and Reset actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-2xs">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ViewCarouselOutlinedIcon className="text-primary" />
                Homepage Hero Banner Slides
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage the slides shown on the live homepage hero slider. Add,
                edit, or delete slides anytime.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleResetBanners}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
              >
                <RestartAltOutlinedIcon style={{ fontSize: 18 }} />
                <span>Reset Defaults</span>
              </button>
              <button
                type="button"
                onClick={openNewBannerModal}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:shadow-lg transition cursor-pointer"
              >
                <AddCircleOutlineIcon style={{ fontSize: 18 }} />
                <span>Add Banner Slide</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* List of slides (left column) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Current Slides ({banners.length})
                </h3>
                <span className="text-[11px] text-slate-400">
                  Click a slide to preview or edit
                </span>
              </div>

              {banners.map((slide, index) => {
                const isSelected = activeBannerIndex === index;
                const slideImg =
                  slide.image ||
                  (index === 1 ? homeBg1Default : homeBannerDefault);

                return (
                  <div
                    key={slide.id || index}
                    onClick={() => setActiveBannerIndex(index)}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border p-5 transition-all cursor-pointer ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-md shadow-primary/10 ring-2 ring-primary/20"
                        : "border-slate-200/80 bg-white hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    {/* Thumbnail & Info */}
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs">
                        <img
                          src={slideImg}
                          alt="Slide preview"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute bottom-1 right-1 rounded-md bg-slate-900/70 px-1.5 py-0.2 text-[9px] font-bold text-white backdrop-blur-xs">
                          #{index + 1}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary-dark">
                            {slide.smallHeading || "Badge"}
                          </span>
                          {slide.singleLine && (
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">
                              Compact Line
                            </span>
                          )}
                        </div>
                        <h4 className="mt-1 truncate text-sm font-bold text-slate-900">
                          {slide.headingLine1}{" "}
                          <span className="text-primary font-extrabold">
                            {slide.headingHighlight}
                          </span>
                        </h4>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingBanner({ ...slide });
                        }}
                        className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition shadow-2xs cursor-pointer"
                      >
                        <EditNoteOutlinedIcon style={{ fontSize: 16 }} />
                        <span>Edit</span>
                      </button>

                      <button
                        type="button"
                        disabled={banners.length <= 1}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteBanner(slide.id);
                        }}
                        title={
                          banners.length <= 1
                            ? "At least one slide must remain"
                            : "Delete slide"
                        }
                        className="rounded-xl border border-rose-200 bg-rose-50/50 p-1.5 text-rose-600 hover:bg-rose-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <DeleteOutlinedIcon style={{ fontSize: 18 }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Preview & Quick Edit (right column) */}
            <div className="lg:col-span-6">
              <div className="sticky top-28 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <VisibilityOutlinedIcon
                      className="text-primary"
                      style={{ fontSize: 20 }}
                    />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Live Hero Banner Simulator (Slide #{activeBannerIndex + 1}
                      )
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEditingBanner({ ...previewBanner })}
                    className="flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    <EditNoteOutlinedIcon style={{ fontSize: 16 }} />
                    <span>Edit Selected Slide</span>
                  </button>
                </div>

                {/* Simulated Homepage Hero Banner */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-xl min-h-[360px] flex items-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-40"
                    style={{ backgroundImage: `url(${currentBannerImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />

                  <div className="relative z-10 p-6 sm:p-8 max-w-lg">
                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm backdrop-blur-md">
                      <ShieldOutlinedIcon
                        className="text-primary"
                        style={{ fontSize: 15 }}
                      />
                      <span>
                        {previewBanner.smallHeading ||
                          "Trusted Healthcare Services"}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl text-white">
                      {previewBanner.headingLine1 || "Quality Equipment."}
                      {previewBanner.singleLine ? " " : <br />}
                      <span className="bg-gradient-to-r from-primary to-sky-300 bg-clip-text text-transparent">
                        {previewBanner.headingHighlight || "Better Healthcare."}
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-slate-300 line-clamp-3">
                      {previewBanner.description ||
                        "Reinforce Healthcare Services delivers quality equipment..."}
                    </p>

                    {/* 4 Feature mini tags */}
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                      <div className="flex items-center gap-1.5 rounded-lg bg-white/10 p-1.5 backdrop-blur-xs">
                        <ShieldOutlinedIcon
                          className="text-primary shrink-0"
                          style={{ fontSize: 13 }}
                        />
                        <span className="truncate">Specialized</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg bg-white/10 p-1.5 backdrop-blur-xs">
                        <CategoryOutlinedIcon
                          className="text-primary shrink-0"
                          style={{ fontSize: 13 }}
                        />
                        <span className="truncate">Multi Specialties</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg bg-white/10 p-1.5 backdrop-blur-xs">
                        <LocalHospitalOutlinedIcon
                          className="text-primary shrink-0"
                          style={{ fontSize: 13 }}
                        />
                        <span className="truncate">Quality Products</span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-lg bg-white/10 p-1.5 backdrop-blur-xs">
                        <LocalHospitalOutlinedIcon
                          className="text-primary shrink-0"
                          style={{ fontSize: 13 }}
                        />
                        <span className="truncate">Expert Support</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-primary to-primary-dark px-3.5 py-2 text-xs font-bold text-white shadow-md">
                        {previewBanner.primaryBtnText || "Book an Appointment"}
                        <ArrowForwardIcon style={{ fontSize: 14 }} />
                      </span>
                      <span className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-sm">
                        {previewBanner.secondaryBtnText || "Explore Products"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 text-xs text-slate-500 shadow-2xs">
                  <p className="font-bold text-slate-700">
                    ⚡ Instant Synchronization
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed">
                    When you save a banner, changes are stored in browser
                    localStorage and immediately broadcast to the live homepage
                    without reloading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. MACHINE PRODUCTS & CONTENT TAB                         */}
      {/* ========================================================= */}
      {activeTab === "machines" && (
        <div className="space-y-8">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-2xs">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Inventory2OutlinedIcon className="text-primary" />
                Medical Machine Products & Content ({products.length})
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage the medical machinery cards and images displayed in the
                Healthcare Products carousel on the Homepage.
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleResetProducts}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition cursor-pointer"
              >
                <RestartAltOutlinedIcon style={{ fontSize: 18 }} />
                <span>Reset Defaults</span>
              </button>
              <button
                type="button"
                onClick={openNewProductModal}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:shadow-lg transition cursor-pointer"
              >
                <AddCircleOutlineIcon style={{ fontSize: 18 }} />
                <span>Add Medical Machine</span>
              </button>
            </div>
          </div>

          {/* Machine Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((prod) => {
              const displayImg = getProductDisplayImage(prod);

              return (
                <div
                  key={prod.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-2xs hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary-dark">
                      {prod.category || "Medical Equipment"}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setEditingProduct({ ...prod })}
                        className="rounded-lg border border-slate-200 bg-white p-1 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition cursor-pointer"
                        title="Edit Machine"
                      >
                        <EditNoteOutlinedIcon style={{ fontSize: 18 }} />
                      </button>
                      <button
                        type="button"
                        disabled={products.length <= 1}
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="rounded-lg border border-rose-200 bg-rose-50/50 p-1 text-rose-600 hover:bg-rose-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                        title="Delete Machine"
                      >
                        <DeleteOutlinedIcon style={{ fontSize: 18 }} />
                      </button>
                    </div>
                  </div>

                  {/* Machine Image Preview */}
                  <div
                    className={`mt-4 flex h-44 w-full items-center justify-center rounded-2xl ${prod.bg || "bg-sky-50/50"} p-3 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute h-32 w-32 rounded-full ${prod.iconBg || "bg-sky-100"} opacity-60 blur-xs`}
                    />
                    <img
                      src={displayImg}
                      alt={prod.name}
                      className="relative z-10 max-h-36 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="mt-4">
                    <h4 className="text-base font-bold text-slate-900 line-clamp-1">
                      {prod.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {prod.description ||
                        "High-precision medical machinery designed for clinical efficiency."}
                    </p>
                  </div>

                  {/* Footer status */}
                  <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Live in Homepage Carousel</span>
                    <span className="font-semibold text-emerald-600">
                      ● Active
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: EDIT / ADD BANNER SLIDE                            */}
      {/* ========================================================= */}
      {(editingBanner !== null || isNewBannerModalOpen) && editingBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {editingBanner.id === "new"
                    ? "Add New Homepage Banner Slide"
                    : "Edit Banner Slide"}
                </h3>
                <p className="text-xs text-slate-500">
                  Changes will immediately sync to the homepage hero carousel.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditingBanner(null);
                  setIsNewBannerModalOpen(false);
                }}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                <CloseIcon style={{ fontSize: 20 }} />
              </button>
            </div>

            <form onSubmit={handleSaveBanner} className="mt-6 space-y-5">
              {/* Badge & Headings */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Small Heading Badge
                </label>
                <input
                  type="text"
                  required
                  value={editingBanner.smallHeading}
                  onChange={(e) =>
                    setEditingBanner((prev) => ({
                      ...prev,
                      smallHeading: e.target.value,
                    }))
                  }
                  placeholder="e.g. Trusted Healthcare Services"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Main Heading (Line 1)
                  </label>
                  <input
                    type="text"
                    required
                    value={editingBanner.headingLine1}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        headingLine1: e.target.value,
                      }))
                    }
                    placeholder="e.g. Quality Equipment."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Highlighted Heading (Gradient)
                  </label>
                  <input
                    type="text"
                    required
                    value={editingBanner.headingHighlight}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        headingHighlight: e.target.value,
                      }))
                    }
                    placeholder="e.g. Better Healthcare."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Single line toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="singleLine"
                  checked={Boolean(editingBanner.singleLine)}
                  onChange={(e) =>
                    setEditingBanner((prev) => ({
                      ...prev,
                      singleLine: e.target.checked,
                    }))
                  }
                  className="h-4 w-4 rounded-md border-slate-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="singleLine"
                  className="text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  Display title on a single line (like "LithoPulse 35W") instead
                  of breaking
                </label>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Hero Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingBanner.description}
                  onChange={(e) =>
                    setEditingBanner((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter descriptive text..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                />
              </div>

              {/* Buttons info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Primary Button Label & Link
                  </label>
                  <input
                    type="text"
                    value={editingBanner.primaryBtnText}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        primaryBtnText: e.target.value,
                      }))
                    }
                    placeholder="Book an Appointment"
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 px-3 text-xs text-slate-900 mb-2"
                  />
                  <input
                    type="text"
                    value={editingBanner.primaryBtnLink}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        primaryBtnLink: e.target.value,
                      }))
                    }
                    placeholder="/contact"
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 px-3 text-xs text-slate-900 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Secondary Button Label & Link
                  </label>
                  <input
                    type="text"
                    value={editingBanner.secondaryBtnText}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        secondaryBtnText: e.target.value,
                      }))
                    }
                    placeholder="Explore Products"
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 px-3 text-xs text-slate-900 mb-2"
                  />
                  <input
                    type="text"
                    value={editingBanner.secondaryBtnLink}
                    onChange={(e) =>
                      setEditingBanner((prev) => ({
                        ...prev,
                        secondaryBtnLink: e.target.value,
                      }))
                    }
                    placeholder="/machine"
                    className="w-full rounded-lg border border-slate-200 bg-white py-1.5 px-3 text-xs text-slate-900 font-mono"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Banner Background Image
                </label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <img
                      src={editingBanner.image || homeBannerDefault}
                      alt="Banner Preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-primary-dark transition">
                      <CloudUploadOutlinedIcon style={{ fontSize: 16 }} />
                      <span>Upload New Image</span>
                      <input
                        ref={bannerFileRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            readFileAsBase64(file, (base64) => {
                              setEditingBanner((prev) => ({
                                ...prev,
                                image: base64,
                              }));
                            });
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    {editingBanner.image && (
                      <button
                        type="button"
                        onClick={() =>
                          setEditingBanner((prev) => ({ ...prev, image: "" }))
                        }
                        className="block text-xs font-semibold text-rose-600 hover:underline cursor-pointer"
                      >
                        Reset to default photo
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditingBanner(null);
                    setIsNewBannerModalOpen(false);
                  }}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-2 text-xs font-bold text-white shadow-md shadow-primary/20 hover:shadow-lg transition cursor-pointer"
                >
                  Save Banner Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: EDIT / ADD MEDICAL MACHINE PRODUCT                 */}
      {/* ========================================================= */}
      {(editingProduct !== null || isNewProductModalOpen) && editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-fade-in">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {editingProduct.id === "new"
                    ? "Add Medical Machine to Catalog"
                    : "Edit Medical Machine"}
                </h3>
                <p className="text-xs text-slate-500">
                  Displayed in the Healthcare Products carousel on the Homepage.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditingProduct(null);
                  setIsNewProductModalOpen(false);
                }}
                className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                <CloseIcon style={{ fontSize: 20 }} />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Machine Product Name
                </label>
                <input
                  type="text"
                  required
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g. Diode Laser"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Category / Specialization
                </label>
                <input
                  type="text"
                  required
                  value={editingProduct.category}
                  onChange={(e) =>
                    setEditingProduct((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  placeholder="e.g. Urology, Surgical, Laser"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Brief Technical Description
                </label>
                <textarea
                  rows={3}
                  value={editingProduct.description || ""}
                  onChange={(e) =>
                    setEditingProduct((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter medical equipment details..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-primary focus:bg-white focus:outline-hidden"
                />
              </div>

              {/* Color Theme Preset */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Card Color Palette
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {THEME_PRESETS.map((preset) => {
                    const isSelected = editingProduct.themeId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() =>
                          setEditingProduct((prev) => ({
                            ...prev,
                            themeId: preset.id,
                          }))
                        }
                        className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left text-xs font-semibold transition cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 text-primary-dark ring-2 ring-primary/20"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span
                          className="h-4 w-4 rounded-full shadow-xs"
                          style={{ backgroundColor: preset.badgeBg }}
                        />
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Machine Image: Upload or choose preset */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 space-y-3">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Machine Photo
                </label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 shrink-0 rounded-xl border border-slate-200 bg-white p-1 flex items-center justify-center">
                    <img
                      src={getProductDisplayImage(editingProduct)}
                      alt="Product Preview"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-primary px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-primary-dark transition">
                      <CloudUploadOutlinedIcon style={{ fontSize: 16 }} />
                      <span>Upload Image</span>
                      <input
                        ref={productFileRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            readFileAsBase64(file, (base64) => {
                              setEditingProduct((prev) => ({
                                ...prev,
                                image: base64,
                                presetImageKey: "",
                              }));
                            });
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[11px] text-slate-400">
                      Or pick a built-in medical preset below:
                    </p>
                  </div>
                </div>

                {/* Presets picker */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {PRESET_PRODUCTS.map((preset) => (
                    <button
                      key={preset.key}
                      type="button"
                      onClick={() =>
                        setEditingProduct((prev) => ({
                          ...prev,
                          presetImageKey: preset.key,
                          image: "",
                        }))
                      }
                      className={`flex items-center gap-1.5 rounded-lg border p-1.5 text-[10px] font-semibold transition cursor-pointer ${
                        editingProduct.presetImageKey === preset.key &&
                        !editingProduct.image
                          ? "border-primary bg-primary/10 text-primary-dark"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <img
                        src={preset.img}
                        alt={preset.name}
                        className="h-5 w-5 object-contain"
                      />
                      <span className="truncate">{preset.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setEditingProduct(null);
                    setIsNewProductModalOpen(false);
                  }}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-primary to-primary-dark px-6 py-2 text-xs font-bold text-white shadow-md shadow-primary/20 hover:shadow-lg transition cursor-pointer"
                >
                  Save Medical Machine
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminDashboard;
