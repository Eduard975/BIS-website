import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { seoConfig } from "../../data/seoConfig";

export const MetaManager = () => {
  const { pathname } = useLocation();

  // Find the config for the current path, or fallback to 404
  const currentMeta =
    seoConfig[pathname as keyof typeof seoConfig] || seoConfig["404"];

  return (
    <Helmet>
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />

      {/* Open Graph / Facebook (Good for social sharing) */}
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:type" content="website" />

      {/* Optional: Add NoIndex for 404 pages */}
      {pathname === "/404" || !seoConfig[pathname as keyof typeof seoConfig] ? (
        <meta name="robots" content="noindex" />
      ) : null}
    </Helmet>
  );
};
