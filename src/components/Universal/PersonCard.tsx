export const PersonCard = ({
  lastName,
  name,
  role,
  image,
  isMain = false,
  index,
}: {
  lastName: string;
  name: string;
  role: string;
  image: string;
  isMain?: boolean;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col items-center w-full 
        transition-transform duration-300 hover:scale-105
        ${isMain ? "order-first md:order-2" : index === 1 ? "md:order-1" : "md:order-3"}
      `}
    >
      {/* Scalable Circle with Border */}
      <div
        className={`
        relative aspect-square w-full max-w-[160px] md:max-w-[200px] 
        rounded-full border-secondary overflow-hidden mb-4 shadow-sm
        ${isMain ? "border-[5px]" : "border-[3px]"}
      `}
      >
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={`${lastName} ${name}`}
        />
      </div>

      <div
        className="w-full max-w-[130px] 
      md:max-w-[175px] border-b-2 border-primary text-center pb-1 mb-2"
      >
        <h3
          className="text-accent text-base md:text-lg
        font-bold uppercase tracking-tight leading-tight flex flex-col justify-center gap-x-1"
        >
          {name.includes("-") ? (
            <>
              <span className="whitespace-nowrap">{lastName}</span>
              <span className="whitespace-nowrap">{name}</span>
            </>
          ) : (
            <>
              <span className="whitespace-nowrap">
                <br />
                {lastName} {name}
              </span>
            </>
          )}
        </h3>
      </div>

      {/* Role */}
      <p className="text-darkTxt text-xs md:text-sm font-medium text-center">
        {role}
      </p>
    </div>
  );
};
