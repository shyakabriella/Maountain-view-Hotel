const BookingSection = () => {
  return (
    <section className="bg-hotel-dark text-white">
      <div className="container mx-auto px-6">
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          <div className="border border-white/10 px-5 py-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2">
              Check-in date
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-sm outline-none border-none p-0 text-white"
              defaultValue="2026-04-15"
            />
          </div>

          <div className="border border-white/10 px-5 py-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2">
              Check-out date
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-sm outline-none border-none p-0 text-white"
              defaultValue="2026-04-16"
            />
          </div>

          <div className="border border-white/10 px-5 py-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2">
              Rooms
            </label>
            <select className="w-full bg-transparent text-sm outline-none border-none p-0 text-white">
              <option className="text-foreground">Classic</option>
              <option className="text-foreground">Family Room</option>
              <option className="text-foreground">Deluxe</option>
              <option className="text-foreground">Superior</option>
            </select>
          </div>

          <div className="border border-white/10 px-5 py-5">
            <label className="block text-[10px] tracking-[0.2em] uppercase text-white/70 mb-2">
              Guests
            </label>
            <select className="w-full bg-transparent text-sm outline-none border-none p-0 text-white">
              <option className="text-foreground">1 Adult</option>
              <option className="text-foreground">2 Adults</option>
              <option className="text-foreground">3 Adults</option>
              <option className="text-foreground">4 Adults</option>
            </select>
          </div>

          <button
            type="button"
            className="bg-primary text-primary-foreground text-xs md:text-sm tracking-[0.15em] uppercase font-semibold px-6 py-7 hover:brightness-110 transition"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
