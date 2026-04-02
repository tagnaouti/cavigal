import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Toutes les actualités du Cavigal Nice Cyclisme.",
};

const articleImages: Record<string, string> = {
  "course-printaniere-2026": "/images/photos/photo1.jpg",
  "stage-paques-jeunes": "/images/photos/photo2.jpg",
  "assemblee-generale-2026": "/images/photos/photo3.jpg",
  "nouveaux-maillots": "/images/photos/photo4.jpg",
};

export default function ActualitesPage() {
  return (
    <>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/photo6.jpg"
            alt="Actualités Cavigal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cavigal-dark-deep/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">Actualités</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Suivez les dernières nouvelles du club, les résultats et la vie
            associative.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/actualites/${article.id}`}
                className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition group overflow-hidden"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={articleImages[article.id] || "/images/photos/photo1.jpg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-cavigal-red bg-cavigal-red/10 px-2.5 py-1 rounded-full">
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
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-cavigal-red transition mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-cavigal-red font-medium text-sm mt-4">
                    Lire la suite
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
