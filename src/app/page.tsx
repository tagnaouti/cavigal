import Link from "next/link";
import Image from "next/image";
import { articles, events, partenaires } from "@/lib/data";

function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="Cyclistes Cavigal Nice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cavigal-dark-deep/90 via-cavigal-dark/70 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-36">
        <div className="max-w-2xl">
          <div className="inline-block bg-cavigal-red px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Saison 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Cavigal Nice
            <br />
            <span className="text-cavigal-red">Cyclisme</span>
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
            Depuis 1935, le Cavigal Nice Cyclisme rassemble passionnés et
            compétiteurs sur les plus belles routes de la Côte d&apos;Azur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-cavigal-red hover:bg-cavigal-red-dark text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              Nous rejoindre
            </Link>
            <Link
              href="/calendrier"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition border border-white/30 backdrop-blur-sm"
            >
              Voir le calendrier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActualitesSection() {
  const recentArticles = articles.slice(0, 3);
  const articleImages = [
    "/images/photos/photo1.jpg",
    "/images/photos/photo2.jpg",
    "/images/photos/photo3.jpg",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Actualités</h2>
            <p className="text-gray-500 mt-1">Les dernières nouvelles du club</p>
          </div>
          <Link
            href="/actualites"
            className="text-cavigal-red hover:text-cavigal-red-dark font-medium text-sm transition hidden sm:inline-flex items-center gap-1"
          >
            Tout voir
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/actualites/${article.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition group overflow-hidden"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={articleImages[i]}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-cavigal-red bg-cavigal-red/10 px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-cavigal-red transition mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/actualites" className="text-cavigal-red font-medium text-sm">
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}

function CalendrierSection() {
  const prochains = events
    .filter((e) => new Date(e.date) >= new Date("2026-04-02"))
    .slice(0, 4);

  const typeColors: Record<string, string> = {
    sortie: "bg-green-100 text-green-700",
    competition: "bg-cavigal-red/10 text-cavigal-red",
    evenement: "bg-cavigal-dark/10 text-cavigal-dark",
  };

  const typeLabels: Record<string, string> = {
    sortie: "Sortie",
    competition: "Compétition",
    evenement: "Événement",
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Prochains événements</h2>
            <p className="text-gray-500 mt-1">Sorties, courses et événements à venir</p>
          </div>
          <Link
            href="/calendrier"
            className="text-cavigal-red hover:text-cavigal-red-dark font-medium text-sm transition hidden sm:inline-flex items-center gap-1"
          >
            Calendrier complet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="space-y-3">
          {prochains.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex items-center gap-4 sm:w-48 shrink-0">
                <div className="text-center bg-cavigal-red text-white rounded-lg px-3 py-2 min-w-[60px]">
                  <div className="text-2xl font-bold leading-none">
                    {new Date(event.date).getDate()}
                  </div>
                  <div className="text-xs uppercase mt-0.5">
                    {new Date(event.date).toLocaleDateString("fr-FR", {
                      month: "short",
                    })}
                  </div>
                </div>
                <div className="text-sm text-gray-500">{event.time}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColors[event.type]}`}>
                    {typeLabels[event.type]}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{event.location}</p>
              </div>
              <p className="text-sm text-gray-400 sm:max-w-xs hidden lg:block">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalerieSection() {
  const photos = [
    "/images/photos/photo4.jpg",
    "/images/photos/photo5.jpg",
    "/images/photos/photo6.jpg",
    "/images/photos/photo7.jpg",
    "/images/photos/photo8.jpg",
    "/images/photos/photo9.jpg",
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          La vie du club
        </h2>
        <p className="text-gray-500 mb-10 text-center">
          En images
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Photo du club ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-cavigal-dark/0 group-hover:bg-cavigal-dark/20 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartenairesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Nos partenaires</h2>
        <p className="text-gray-500 mb-10">Ils nous soutiennent au quotidien</p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partenaires.map((partenaire, i) => {
            const imgSrc =
              i < 2
                ? `/images/partenaires/partenaire${i + 1}.jpg`
                : null;
            return (
              <div
                key={partenaire.name}
                className="bg-white rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
              >
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={partenaire.name}
                    width={40}
                    height={40}
                    className="rounded object-contain"
                  />
                ) : null}
                <span className="text-gray-600 font-medium text-sm">
                  {partenaire.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChiffresSection() {
  const stats = [
    { value: "90+", label: "Années d'existence" },
    { value: "250", label: "Licenciés" },
    { value: "52", label: "Sorties par an" },
    { value: "15", label: "Compétitions" },
  ];

  return (
    <section className="bg-cavigal-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-black text-cavigal-red">
                {stat.value}
              </div>
              <div className="text-white/70 mt-2 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ActualitesSection />
      <ChiffresSection />
      <CalendrierSection />
      <GalerieSection />
      <PartenairesSection />
    </>
  );
}
