"use client";

import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const destinations = [
  {
    city: "Makkah",
    places: [
      {
        name: "Masjid al-Haram",
        image: "/images/des1.png",
        description: "The holiest mosque in Islam surrounding the Kaaba.",
      },
      {
        name: "Safa & Marwah",
        image: "/images/des2.png",
        description: "The two hills walked between during Sa’i.",
      },
      {
        name: "Jabal al-Noor",
        image: "/images/des1.png",
        description:
          "The mountain where Prophet Muhammad (PBUH) received revelation.",
      },
    ],
  },
  {
    city: "Madinah",
    places: [
      {
        name: "Masjid an-Nabawi",
        image: "/images/des2.png",
        description: "The Prophet’s Mosque, second holiest in Islam.",
      },
      {
        name: "Quba Mosque",
        image: "/images/des1.png",
        description: "First mosque built in Islam.",
      },
      {
        name: "Mount Uhud",
        image: "/images/des2.png",
        description: "Historic site of the Battle of Uhud.",
      },
    ],
  },
];

export default function DestinationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <div className="bg-[#03406D] text-white py-16 px-6 relative">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute cursor-pointer flex items-center top-6 left-6 bg-white text-blue-900 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
        >
          <MoveLeft className="pr-1" /> Back
        </button>

        <h1 className="text-5xl font-extrabold mb-4 text-center">
          Explore Our Umrah Destinations
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto text-center">
          Discover the most sacred places in Makkah and Madinah that are
          included in our spiritual journeys.
        </p>
      </div>

      {/* Destinations Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {destinations.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-4 border-[#03406D] inline-block">
              {section.city}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {section.places.map((place, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                >
                  <div className="relative w-full h-56">
                    <Image
                      src={place.image}
                      alt={place.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {place.name}
                    </h3>
                    <p className="text-sm text-gray-600">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
