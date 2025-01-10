"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4 text-center">
      <div className="mb-2">© 2025 Workout Hub. All rights reserved.</div>
      <div className="flex justify-center space-x-4">
        <a href="https://youtube.com" target="_blank" className="hover:text-green-300">YouTube</a>
        <a href="https://facebook.com" target="_blank" className="hover:text-green-300">Facebook</a>
        <a href="https://instagram.com" target="_blank" className="hover:text-green-300">Instagram</a>
      </div>
    </footer>
  );
}
