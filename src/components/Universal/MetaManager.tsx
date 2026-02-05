import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { seoConfig } from "../../data/seoConfig";

export const MetaManager = () => {
  const { pathname } = useLocation();

  // Find the config for the current path, or fallback to 404
  const currentMeta =
    seoConfig[pathname as keyof typeof seoConfig] || seoConfig["404"];

  const siteUrl = "https://eduard975.github.io/BIS-website/";
  const previewImage = `${siteUrl}/preview-thumbnail.png`;

  return (
    <Helmet>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl + pathname} />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={previewImage} />

      {/* Twitter / X / Discord */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentMeta.title} />
      <meta name="twitter:description" content={currentMeta.description} />
      <meta name="twitter:image" content={previewImage} />
    </Helmet>
  );
};
