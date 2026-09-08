import { useEffect } from "react";

/**
 * Simple, beginner-friendly SEO component.
 * Sets the browser page title and basic meta tags for search engines.
 */
export default function SEO({
  title = "Medical Equipment Rental",
  description = "Reinforce Healthcare Services provides high-grade medical equipment, urology devices, and hospital machinery on rent for healthcare professionals and medical centers.",
  keywords = "medical equipment rental, hospital machinery, healthcare equipment leasing, Reinforce Healthcare Services",
}) {
  const siteName = "Reinforce Healthcare Services";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  // Update browser tab title whenever the title prop changes
  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  return (
    <>
      {/* Browser Tab Title */}
      <title>{fullTitle}</title>

      {/* Basic Search Engine Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Social Media Sharing Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
