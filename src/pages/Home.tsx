import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";

  type Initiative = {
  title: string;
  description: string;
  backgroundImage:string;
};

const Home = () => {

  const [data, setData] = useState<Initiative[]>([]);

  useEffect(() => {
    fetch("/initiatives.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load initiatives", err));
  }, []);
  return (
    <>
    <div className="flex flex-col">
      <div className="relative h-[70vh] w-full overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/cover.png')" }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">
      Alternative Development of Himalayan Region (ADHR)
    </h1>
    <p className="text-lg md:text-xl text-center">
      Preserving the Himalayas, Empowering Communities
    </p>
  </div>
</div>

<div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto p-6   text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center">About Us</h2>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to the official website of Alternative Development of Himalayan Region (ADHR), a registered trust
          dedicated to the conservation of the Himalayas and improving the lives of people in the Himalayan states.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our journey began with a singular focus—to safeguard the fragile ecosystem of the Himalayas and provide
          sustainable livelihood solutions to its communities. Currently, we have chosen Uttarakhand as our model, where
          we strive to create lasting change through multiple impactful projects.
        </p>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Know More About Us
          </Link>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto p-6">
  <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Initiatives</h2>
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {data.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        description={item.description}
        backgroundImage={item.backgroundImage} // ✅ Pass image
      />
    ))}
  </div>
</div>

    <section className="w-full bg-gray-100 py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
  src="https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948675.jpg?semt=ais_hybrid&w=740"
  alt="Join ADHR"
  className="w-full h-64 md:h-full object-cover object-center rounded-lg shadow-md"
/>

        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Us in Making a Difference</h2>
          <p className="text-gray-700 mb-4">
            ADHR is more than just an organization—it's a movement. Whether through your support,
            expertise, or contributions, you can help secure a brighter future for the Himalayas
            and its people.
          </p>
          <p className="text-gray-700 mb-4">
            Explore our website to learn more about our projects, updates, and how you can get
            involved. Together, we can ensure that the Himalayas thrive for generations to come.
          </p>
          <Link
            to="/donate"
            className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 shadow"
          >
            Donate Us
          </Link>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default Home;
