export const PersonCard = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-48 h-48 rounded-full border-4 border-best-cyan overflow-hidden mb-6 shadow-md">
        <img src={image} className="w-full h-full object-cover" alt={name} />
      </div>

      <div className="w-48 border-b-2 border-best-teal text-center pb-1 mb-2">
        <h3 className="text-best-red text-2xl font-semibold uppercase tracking-tight">
          {name}
        </h3>
      </div>

      <p className="text-gray-900 text-lg">{role}</p>
    </div>
  );
};
