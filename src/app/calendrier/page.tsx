"use client";

import { useState } from "react";
import Image from "next/image";
import { events } from "@/lib/data";

const typeColors: Record<string, string> = {
  sortie: "bg-green-100 text-green-700 border-green-200",
  competition: "bg-red-50 text-cavigal-red border-red-200",
  evenement: "bg-gray-100 text-cavigal-dark border-gray-200",
};

const typeLabels: Record<string, string> = {
  sortie: "Sortie",
  competition: "Compétition",
  evenement: "Événement",
};

const typeDots: Record<string, string> = {
  sortie: "bg-green-500",
  competition: "bg-cavigal-red",
  evenement: "bg-cavigal-dark",
};

type FilterType = "all" | "sortie" | "competition" | "evenement";

export default function CalendrierPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered =
    filter === "all" ? events : events.filter((e) => e.type === filter);

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "Tous" },
    { key: "sortie", label: "Sorties" },
    { key: "competition", label: "Compétitions" },
    { key: "evenement", label: "Événements" },
  ];

  return (
    <>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photos/photo8.jpg"
            alt="Calendrier Cavigal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cavigal-dark-deep/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">Calendrier</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Retrouvez toutes les sorties, compétitions et événements du club.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === f.key
                    ? "bg-cavigal-red text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="flex gap-6 mb-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              Sortie
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cavigal-red" />
              Compétition
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cavigal-dark" />
              Événement
            </div>
          </div>

          {/* Events list */}
          <div className="space-y-4">
            {filtered.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Date block */}
                  <div className="flex items-start gap-4 sm:w-52 shrink-0">
                    <div className="text-center bg-cavigal-red text-white rounded-xl px-4 py-3 min-w-[70px] shadow-sm">
                      <div className="text-3xl font-black leading-none">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs uppercase mt-1 font-medium text-white/80">
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          month: "short",
                        })}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      <div className="font-medium text-gray-700">
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          weekday: "long",
                        })}
                      </div>
                      <div>{event.time}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[event.type]}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${typeDots[event.type]}`}
                        />
                        {typeLabels[event.type]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                    <p className="text-gray-500 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              Aucun événement trouvé pour ce filtre.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
