/* src/hooks/AnalyticsProvider.tsx */
import { useEffect } from "react";
import { useLocation } from "react-router";
import ReactGA from "react-ga4";

export const AnalyticsProvider = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search + location.hash,
    });
  }, [location]);

  return null;
};
