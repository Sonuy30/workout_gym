import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Registration() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-6 bg-gradient-to-r from-green-200 to-blue-200">
        <h1 className="text-4xl text-blue-800 font-bold text-center mb-6">
          Registration
        </h1>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-400">
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
