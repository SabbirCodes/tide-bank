const Card = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-card p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      <div className="flex flex-col items-start">
        <Icon className="h-16 w-16 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-grayDark">{title}</h3>
      </div>
      <p className="mt-2 text-gray-600 text-start">{description}</p>
    </div>
  );
};

export default Card;
