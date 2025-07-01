type CardProps = {
  title: string;
  description: string;
  buttonText?: string;
  backgroundImage?: string; // Image from /public folder
};

const Card = ({
  title,
  description,
  buttonText = "Learn More",
  backgroundImage = "/bg.jpg",
}: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto transform transition duration-300 hover:shadow-2xl hover:scale-105">
      {/* Top Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
