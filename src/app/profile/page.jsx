"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          You must log in to view this page.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome, {session.user.name}!
        </h1>
        <div className="flex items-center space-x-4">
          <img
            src={session.user.image}
            alt="Profile"
            className="w-20 h-20 rounded-full border"
          />
          <div>
            <p className="text-lg">
              <strong>Email:</strong> {session.user.email}
            </p>
            <p className="text-lg">
              <strong>Member Since:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-blue-500">Your Activities</h2>
          <ul className="mt-4 space-y-2">
            <li className="p-4 bg-gray-200 rounded-lg shadow">Activity 1</li>
            <li className="p-4 bg-gray-200 rounded-lg shadow">Activity 2</li>
            <li className="p-4 bg-gray-200 rounded-lg shadow">Activity 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
