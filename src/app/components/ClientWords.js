"use client";
import Image from "next/image";

// ✅ Testimonial Card Component
function TestimonialCard({
  name,
  review,
  rating,
  image,
  extraClass = "",
  showReviewImages = false,
}) {
  return (
    <div
      className={`bg-white rounded-xl p-6 [box-shadow:0px_9px_20px_0px_#00000040] h-fit ${extraClass}`}
    >
      <div className="flex space-x-3.5 mb-4">
        {/* User Image */}
        {image && (
          <div className="mb-3">
            <Image
              src={image}
              alt={name}
              width={33}
              height={33}
              className="rounded-full object-cover"
            />
          </div>
        )}

        {/* Name and Stars */}
        <div className="">
          <p className="text-lg font-semibold m-0">{name}</p>
          <div className="flex mt-1">
            {[...Array(rating)].map((_, i) => (
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
      <p className="text-gray-600 text-sm mb-4">{review}</p>

      {/* Optional Review Images */}
      {showReviewImages && (
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Image
              src="/images/review.png"
              alt="Review 1"
              width={100}
              height={93}
              className="rounded-md object-cover"
            />
            <Image
              src="/images/review1.png"
              alt="Review 2"
              width={100}
              height={93}
              className="rounded-md object-cover"
            />
          </div>
          <Image
            src="/images/review2.png"
            alt="Review Tall"
            width={105}
            height={197}
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
}

// ✅ Main ClientWords Section
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

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <TestimonialCard
          name="Emma Rodriguez"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={5}
          image="/images/user.png"
          showReviewImages={true}
        />
        <TestimonialCard
          name="Liam Johnson"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={4}
          image="/images/user.png"
          extraClass="mt-20"
          showReviewImages={true}
        />
        <TestimonialCard
          name="Olivia Smith"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={5}
          image="/images/user.png"
          extraClass="-mt-10"
        />
        <TestimonialCard
          name="Noah Brown"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={4}
          image="/images/user.png"
          extraClass="mt-10"
          showReviewImages={true}
        />
        <TestimonialCard
          name="Ava Martinez"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={5}
          image="/images/user.png"
          extraClass="mt-20"
        />
        {/* <TestimonialCard
          name="Elijah Garcia"
          review="Affordable and effective. Great value for money."
          rating={3}
          image="/images/user.png"
          extraClass="-mt-10"
        /> */}
        <TestimonialCard
          name="Sophia Lee"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={5}
          image="/images/user.png"
          extraClass="mt-10"
        />
        
        <TestimonialCard
          name="James Davis"
          review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          rating={4}
          image="/images/user.png"
          extraClass="-mt-82"
          showReviewImages={true}
        />
      </div>
    </section>
  );
}
