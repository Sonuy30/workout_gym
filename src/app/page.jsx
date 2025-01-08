// import Navbar from '../components/Navbar';

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <main className="bg-gradient-to-r from-green-200 to-blue-200 min-h-screen p-6">
//         <section className="text-center py-10">
//           <h1 className="text-4xl font-bold text-blue-800">
//             Welcome to Workout Hub
//           </h1>
//           <p className="text-xl text-green-700 mt-4">
//             Your one-stop solution to fitness and well-being.
//           </p>
//         </section>

//         {/* Gym Poster */}
//         <section className="flex justify-center my-10">
//           <img
//             src="/gym-poster.jpg"
//             alt="Gym Poster"
//             className="rounded-lg shadow-lg w-3/4"
//           />
//         </section>

//         {/* Features */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-blue-800">State-of-the-Art Equipment</h3>
//             <p className="mt-2 text-green-700">
//               Access the latest and greatest fitness machines.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-blue-800">Experienced Trainers</h3>
//             <p className="mt-2 text-green-700">
//               Get guidance from certified professionals.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-2xl font-bold text-blue-800">Customized Plans</h3>
//             <p className="mt-2 text-green-700">
//               Tailored workouts to meet your goals.
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }
// <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-10">
//   {[
//     { title: "State-of-the-Art Equipment", icon: "🏋️", description: "Access the latest and greatest fitness machines." },
//     { title: "Experienced Trainers", icon: "👨‍🏫", description: "Get guidance from certified professionals." },
//     { title: "Customized Plans", icon: "📋", description: "Tailored workouts to meet your goals." },
//   ].map((feature, index) => (
//     <div
//       key={index}
//       className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//     >
//       <div className="text-4xl mb-4">{feature.icon}</div>
//       <h3 className="text-2xl font-bold text-blue-800">{feature.title}</h3>
//       <p className="mt-2 text-green-700">{feature.description}</p>
//       <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">
//         Learn More
//       </button>
//     </div>
//   ))}
// </section>
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-6">
        {/* Existing Content */}
        <section className="text-center py-6">
          <h1 className="text-4xl font-bold">Welcome to Our Gym</h1>
          <p className="text-lg mt-2">Get fit with us!</p>
        </section>

        {/* New Features Section */}
        <section className="text-center py-10">
          <h1 className="text-5xl font-bold text-blue-800">Welcome to Workout Hub</h1>
          <p className="text-xl text-green-700 mt-4">
            Achieve your fitness goals with the best facilities and trainers.
          </p>
        </section>
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
      </main>
      <Footer />
    </div>
  );
}
