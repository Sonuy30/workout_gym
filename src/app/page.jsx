"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-6">
        {/* Hero Section */}
        <section className="text-center py-6">
          <h1 className="text-4xl font-bold text-blue-800">Welcome to Workout Hub</h1>
          <p className="text-lg mt-2 text-green-700">Achieve your fitness goals with us!</p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
          {[
            { title: "State-of-the-Art Equipment", icon: "🏋️", description: "Access the latest and greatest fitness machines." },
            { title: "Experienced Trainers", icon: "👨‍🏫", description: "Get guidance from certified professionals." },
            { title: "Customized Plans", icon: "📋", description: "Tailored workouts to meet your goals." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-blue-800">{feature.title}</h3>
              <p className="mt-2 text-green-700">{feature.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
                Learn More
              </button>
            </div>
          ))}
        </section>

        {/* Gym Information Section */}
        <section className="py-10">
          <h2 className="text-3xl font-bold text-center text-blue-800">About Our Gym</h2>
          <p className="text-center text-lg text-green-700 mt-4">
            We offer a wide range of exercises, state-of-the-art equipment, and professional guidance. Explore our products and learn about the best foods for your fitness journey.
          </p>
          <div className="flex justify-center mt-6">
            <button
              className="px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-400"
              onClick={() => window.location.href = "/about"}
            >
              Learn More About Us
            </button>
          </div>
        </section>

        {/* Food and Product Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Food Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-800">Healthy Foods</h3>
            <p className="mt-2 text-green-700">
              Discover the best foods to eat for building muscle and staying fit.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
              onClick={() => window.location.href = "/food-info"}
            >
              Explore Foods
            </button>
          </div>

          {/* Product Section */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-800">Gym Products</h3>
            <p className="mt-2 text-green-700">
              Shop for premium gym equipment and accessories.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
              onClick={() => window.location.href = "/product-info"}
            >
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
