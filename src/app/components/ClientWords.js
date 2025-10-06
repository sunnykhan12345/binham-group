"use client";
import Image from "next/image";

// Mock testimonial data
const testimonials = [
  {
    name: "Emma Rodriguez",
    review:
      "Fantastic service! They really went above and beyond. Highly recommend.",
    rating: 5,
  },
  {
    name: "Liam Johnson",
    review:
      "Very professional and timely. The team was responsive and helpful.",
    rating: 4,
  },
  {
    name: "Olivia Smith",
    review: "A smooth experience from start to finish. Will use again!",
    rating: 5,
  },
  {
    name: "Noah Brown",
    review:
      "I faced a few issues initially, but support helped resolve them quickly.",
    rating: 4,
  },
  {
    name: "Ava Martinez",
    review: "Super impressed with the design and functionality. Great job!",
    rating: 5,
  },
  {
    name: "Elijah Garcia",
    review: "Affordable and effective. Great value for money.",
    rating: 3,
  },
  {
    name: "Sophia Lee",
    review: "Team communication was top-notch. Everything was well explained.",
    rating: 5,
  },
  {
    name: "James Davis",
    review: "Love the UI/UX experience. Will definitely recommend to peers.",
    rating: 4,
  },
];

// Optional margin class for staggered layout
const getMarginClass = (index) => {
  const marginClasses = [
    "", // index 0
    "mt-20", // index 1
    "-mt-10", // index 2
    "mt-10", // index 3
    "mt-20", // index 4
    "-mt-10", // index 5
    "mt-10", // index 6
    "mt-20", // index 7
  ];
  return marginClasses[index] || "";
};

export default function ClientWords() {
  return (
    <section className="pt-20 max-w-[1296px] mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[38px] font-semibold">What’s Our Client’s Words</h1>
        <a href="#" className="text-blue-600 hover:underline">
          View More
        </a>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-md max-w-[300px] h-fit ${getMarginClass(
              index
            )}`}
          >
            {/* User Info */}
            <div className="flex items-center gap-3">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="User"
                width={48}
                height={48}
                className="rounded-full object-cover"
                unoptimized
              />
              <div>
                <p className="text-lg font-semibold m-0">{testimonial.name}</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 24 24"
                      className="w-3 h-3 fill-[#ff6b11] mr-1"
                    >
                      <path d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="mt-4 text-gray-600 text-sm">{testimonial.review}</p>

            {/* Show images only on the last card (index === 7) */}
            {index === 7 && (
              <div className="flex gap-2 mt-3">
                {/* Two stacked small images */}
                <div className="flex flex-col gap-2">
                  <Image
                    src="/images/review.png"
                    alt="Review"
                    width={100}
                    height={93}
                    className="rounded-md object-cover"
                  />
                  <Image
                    src="/images/review1.png"
                    alt="Review"
                    width={100}
                    height={93}
                    className="rounded-md object-cover"
                  />
                </div>

                {/* One tall image */}
                <Image
                  src="/images/review2.png"
                  alt="Review"
                  width={105}
                  height={197}
                  className="rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
