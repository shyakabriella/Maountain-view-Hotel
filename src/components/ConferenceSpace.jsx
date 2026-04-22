import React from "react";

const hall =
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200";
const meeting =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200";
const wedding =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200";

export default function ConferenceSpace() {
  return (
    <section className="py-20 px-6 bg-hotel-light-gray">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">

        {/* Conference Hall */}
        <div className="relative h-[350px] rounded-2xl overflow-hidden group">
          <img
            src={hall}
            alt="Conference hall"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
            <h3 className="text-xl font-semibold mb-2">Main Conference Hall</h3>
            <p className="text-sm text-white/80">
              Ideal for large events, seminars, and corporate gatherings.
            </p>
          </div>
        </div>

        {/* Meeting Room */}
        <div className="relative h-[350px] rounded-2xl overflow-hidden group">
          <img
            src={meeting}
            alt="Meeting room"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
            <h3 className="text-xl font-semibold mb-2">Meeting Rooms</h3>
            <p className="text-sm text-white/80">
              Perfect for business meetings and private discussions.
            </p>
          </div>
        </div>

        {/* Wedding/Event */}
        <div className="relative h-[350px] rounded-2xl overflow-hidden group md:col-span-2">
          <img
            src={wedding}
            alt="Wedding event"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
            <h3 className="text-xl font-semibold mb-2">
              Weddings & Celebrations
            </h3>
            <p className="text-sm text-white/80">
              Celebrate unforgettable moments in a beautiful and elegant setting.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}