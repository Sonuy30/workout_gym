import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="bg-gradient-to-r from-green-200 to-blue-200 min-h-screen p-6">
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold text-blue-800">About Workout Hub</h1>
          <p className="text-xl text-green-700 mt-4">
            We are committed to helping you achieve your fitness goals with the
            best facilities, trainers, and plans.
          </p>
        </section>
        <section className="flex justify-center mt-10">
          <img src="/about-gym.jpg" alt="About Gym" className="rounded-lg shadow-lg w-3/4" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
