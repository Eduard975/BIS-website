import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-12 border-t border-gray-200/20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full max-w-65 flex flex-col gap-6">
          <img
            src="src/assets/logos/Sigla_BEST_alba.png"
            alt="best_logo"
            className="w-full h-auto"
          />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
