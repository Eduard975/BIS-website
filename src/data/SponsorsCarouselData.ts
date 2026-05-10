import * as LINKS from "./Links";

const logoModules = import.meta.glob(
  "../assets/logos/partners/barter/*.{png,svg,webp,jpg}",
  {
    eager: true,
    import: "default",
  },
);

const LOGOS = Object.entries(logoModules).reduce(
  (acc, [path, src]) => {
    const name = path.split("/").pop()?.split(".")[0].toUpperCase();
    if (name) acc[name] = src as string;
    return acc;
  },
  {} as Record<string, string>,
);

export const ES_CAROUSEL_ITEMS = Object.keys(LOGOS).map((name, index) => {
  const linkKey = `${name}_LINK`;
  console.log(linkKey);
  const targetUrl = (LINKS as any)[linkKey];

  return {
    id: index + 1,
    imageSrc: LOGOS[name],
    altText: `${name.charAt(0) + name.slice(1).toLowerCase()} logo`,
    Url: targetUrl || "#",
    isRedirect: Boolean(targetUrl),
  };
});
