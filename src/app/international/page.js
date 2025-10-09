"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InternationalPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16 px-6 relative">
        <button
          onClick={() => router.back()}
          className="absolute cursor-pointer flex items-center top-6 left-6 bg-white text-blue-900 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
        >
          <MoveLeft className="pr-1" /> Back
        </button>
        <h1 className="text-5xl font-bold text-center">International Tours</h1>
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-200">
          Discover global destinations with luxurious travel packages.
        </p>
      </div>

      <div className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Tour cards */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Turkey</h2>
          <p className="text-sm text-gray-600">
            Istanbul, Cappadocia, and historical marvels await you.
          </p>
        </div>
      </div>
    </div>
  );
}
