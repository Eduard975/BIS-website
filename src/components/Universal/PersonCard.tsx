export const PersonCard = ({
  lastName = "",
  name = "",
  role,
  image = "",
  isMain = false,
  index = 0,
  isAdd = false,
  onClick,
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
  // Logic to ensure the "Add" card is always last
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
      className={`flex flex-col items-center w-full transition-transform duration-300 hover:scale-105 ${orderClasses} ${
        isAdd ? "cursor-pointer" : ""
      }`}
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
          <span className="text-primary text-6xl font-light mb-1">+</span>
        ) : (
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`${lastName} ${name}`}
          />
        )}
      </div>

      {/* Name/Label Area - Red Bar */}
      {/* Removed whitespace-nowrap and <br/> hacks. 
          The text will now naturally center and wrap if it exceeds the max-width. */}
      <div className="w-full max-w-[160px] md:max-w-[175px] border-b-2 border-primary text-center pb-2 mb-2">
        <h3 className="text-accent text-base md:text-lg font-bold uppercase tracking-tight leading-tight flex flex-col justify-center min-h-[2.5rem]">
          {isAdd ? (
            <span>Become a Speaker</span>
          ) : (
            /* By rendering distinct spans or just allowing wrap, we get the stack effect */
            <span className="px-1">
              {lastName} {name}
            </span>
          )}
        </h3>
      </div>

      {/* Role/Instruction Area */}
      <p className="text-darkTxt text-xs md:text-sm font-medium text-center w-full px-2">
        {role}
      </p>
    </div>
  );
};
