import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8001/api").replace(/\/$/, "");
const APP_URL = API_URL.replace(/\/api$/, "");
const STORAGE_URL = (import.meta.env.VITE_STORAGE_URL || `${APP_URL}/storage`).replace(/\/$/, "");

const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("/storage/")) return `${APP_URL}${path}`;
  if (path.startsWith("storage/")) return `${APP_URL}/${path}`;
  return `${STORAGE_URL}/${path}`;
};

const Services = () => {
  const [pageHero, setPageHero] = useState({
    title: null,
    background_image: null
  });
  const [welcomeHero, setWelcomeHero] = useState({
    title: null,
    subtitle: null,
    description: null
  });
  const [cards, setCards] = useState([]);
  const [cta, setCta] = useState({
    title: null,
    description: null,
    button_text: null,
    button_link: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Fetch Page Hero
      const pageHeroRes = await fetch(`${API_URL}/services-page-hero`);
      const pageHeroData = await pageHeroRes.json();
      if (pageHeroData.success && pageHeroData.data) {
        setPageHero({
          title: pageHeroData.data.title,
          background_image: getImageUrl(pageHeroData.data.background_image)
        });
      }

      // Fetch Welcome Hero
      const welcomeHeroRes = await fetch(`${API_URL}/services-welcome-hero`);
      const welcomeHeroData = await welcomeHeroRes.json();
      if (welcomeHeroData.success && welcomeHeroData.data) {
        setWelcomeHero({
          title: welcomeHeroData.data.title,
          subtitle: welcomeHeroData.data.subtitle,
          description: welcomeHeroData.data.description
        });
      }

      // Fetch Services Cards
      const cardsRes = await fetch(`${API_URL}/services-cards`);
      const cardsData = await cardsRes.json();
      if (cardsData.success && cardsData.data && cardsData.data.length > 0) {
        setCards(cardsData.data.map(card => ({
          id: card.id,
          title: card.title,
          description: card.description,
          image_url: getImageUrl(card.image_url)
        })));
      }

      // Fetch CTA
      const ctaRes = await fetch(`${API_URL}/services-cta`);
      const ctaData = await ctaRes.json();
      if (ctaData.success && ctaData.data) {
        setCta({
          title: ctaData.data.title,
          description: ctaData.data.description,
          button_text: ctaData.data.button_text,
          button_link: ctaData.data.button_link
        });
      }
    } catch (err) {
      console.error("Error fetching services data:", err);
      setError("Failed to load services data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="overflow-x-hidden bg-background">
        <div className="flex items-center justify-center h-screen">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
        </div>
      </div>
    );
  }

  // Don't render if no data
  if (!pageHero.title && !welcomeHero.title && cards.length === 0 && !cta.title) {
    return null;
  }

  return (
    <div className="overflow-x-hidden bg-background">

      {/* HERO */}
      {pageHero.title && (
        <section className="relative h-[98vh] min-h-[420px] flex items-end">
          {pageHero.background_image ? (
            <img
              src={pageHero.background_image}
              alt="Mountain View Hotel services"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />
          )}
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 container mx-auto px-6 pb-14 text-white text-center">
            <p className="text-xs tracking-[0.18em] uppercase text-white/80 mb-4">
              <Link to="/" className="hover:text-primary">Home</Link> / {pageHero.title}
            </p>
            <h1 className="text-3xl md:text-5xl">{pageHero.title}</h1>
          </div>
        </section>
      )}

      {/* INTRO / WELCOME SECTION */}
      {(welcomeHero.title || welcomeHero.subtitle || welcomeHero.description) && (
        <section className="py-10 px-6">
          <div className="container mx-auto max-w-3xl text-center">
            {welcomeHero.subtitle && (
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4">
                {welcomeHero.subtitle}
              </p>
            )}
            {welcomeHero.title && (
              <h2 className="text-3xl md:text-4xl mb-6">
                {welcomeHero.title}
              </h2>
            )}
            {welcomeHero.description && (
              <p className="text-sm text-muted-foreground">
                {welcomeHero.description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* SERVICES CARDS */}
      {cards.length > 0 && (
        <section className="bg-hotel-light-gray py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cards.map((service, index) => (
                <div
                  key={service.id || index}
                  className="relative h-[300px] rounded-2xl overflow-hidden group shadow-md"
                >
                  {service.image_url ? (
                    <img
                      src={service.image_url}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800" />
                  )}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      {(cta.title || cta.description || cta.button_text) && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-2xl text-center">
            {cta.title && (
              <h2 className="text-3xl md:text-4xl mb-4">
                {cta.title}
              </h2>
            )}
            {cta.description && (
              <p className="text-sm text-muted-foreground mb-8">
                {cta.description}
              </p>
            )}
            {cta.button_text && (
              <Link
                to={cta.button_link || "/"}
                className="inline-block text-sm uppercase bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition"
              >
                {cta.button_text}
              </Link>
            )}
          </div>
        </section>
      )}

    </div>
  );
};

export default Services;