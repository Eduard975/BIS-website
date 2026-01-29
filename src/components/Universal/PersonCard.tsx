export const PersonCard = ({
  lastName = "",
  name = "",
  role,
  image = "",
  isMain = false,
  index = 0,
  isAdd = false, // New prop for the placeholder state
  onClick, // Function to handle the external link
}: {
  lastName?: string;
  name?: string;
  role: string;
  image?: string;
  isMain?: boolean;
  index?: number;
  isAdd?: boolean;
  onClick?: () => void;
}) => {
  // Logic to ensure the "Add" card is always last, regardless of index
  const orderClasses = isAdd
    ? "order-last"
    : isMain
      ? "order-first md:order-2"
      : index === 1
        ? "md:order-1"
        : "md:order-3";

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center w-full transition-transform duration-300 hover:scale-105 ${orderClasses} ${isAdd ? "cursor-pointer" : ""}`}
    >
      {/* Circle Container */}
      <div
        className={`
        relative aspect-square w-full max-w-[160px] md:max-w-[200px] 
        rounded-full border-secondary overflow-hidden mb-4 shadow-sm flex items-center justify-center
        ${isMain ? "border-[5px]" : "border-[3px]"}
        ${isAdd ? "bg-[#EAE6D9]" : ""} 
      `}
      >
        {isAdd ? (
          /* Plus icon for the "Add New" state */
          <span className="text-primary text-6xl font-light mb-1">+</span>
        ) : (
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`${lastName} ${name}`}
          />
        )}
      </div>

      {/* Name/Label Area */}
      <div className="w-full max-w-[130px] md:max-w-[175px] border-b-2 border-primary text-center pb-1 mb-2">
        <h3 className="text-accent text-base md:text-lg font-bold uppercase tracking-tight leading-tight flex flex-col justify-center">
          {isAdd ? (
            <span className="whitespace-nowrap">
              <br />
              Become a Speaker
            </span>
          ) : name.includes("-") ? (
            <>
              <span className="whitespace-nowrap">{lastName}</span>
              <span className="whitespace-nowrap">{name}</span>
            </>
          ) : (
            <span className="whitespace-nowrap">
              <br />
              {lastName} {name}
            </span>
          )}
        </h3>
      </div>

      {/* Role/Instruction Area */}
      <p className="text-darkTxt text-xs md:text-sm font-medium text-center">
        {role}
      </p>
    </div>
  );
};
