import type { Metadata } from "next";
import Image from "next/image";
import { dirigeants } from "@/lib/data";
import { asset } from "@/lib/utils";

export const metadata: Metadata = {
  title: "L'association",
  description:
    "Découvrez l'histoire, les valeurs et les dirigeants du Cavigal Nice Cyclisme.",
};

export default function AssociationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={asset("/images/photos/photo5.jpg")}
            alt="Cavigal Nice Cyclisme"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cavigal-dark-deep/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-black mb-4">L&apos;association</h1>
          <p className="text-white/70 max-w-2xl text-lg">
            Depuis 1935, le Cavigal Nice Cyclisme est un acteur majeur du
            cyclisme sur la Côte d&apos;Azur.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Notre histoire
              </h2>
              <div className="text-gray-600 space-y-4">
                <p>
                  Fondé en 1935, le Cavigal Nice Cyclisme est l&apos;une des
                  sections historiques de l&apos;Omnisports Cavigal de Nice. Le
                  club a traversé les décennies en formant des générations de
                  cyclistes, des débutants aux compétiteurs de haut niveau.
                </p>
                <p>
                  Implanté au coeur de Nice, le club bénéficie d&apos;un cadre
                  exceptionnel pour la pratique du cyclisme : la Promenade des
                  Anglais, les cols de l&apos;arrière-pays (Turini, Bonette, Col
                  de la Madone), et les routes panoramiques de la Côte
                  d&apos;Azur.
                </p>
                <p>
                  Aujourd&apos;hui, le Cavigal Nice Cyclisme compte plus de 250
                  licenciés et propose des activités pour tous les niveaux :
                  école de vélo, sorties loisirs, cyclosport et compétition FFC.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80">
              <Image
                src={asset("/images/photos/photo10.jpg")}
                alt="Le club Cavigal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Convivialité",
                desc: "Un club où chacun trouve sa place, du débutant au compétiteur. L'esprit d'équipe et le partage sont au coeur de notre ADN.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                ),
              },
              {
                title: "Performance",
                desc: "Des entraînements structurés, un encadrement qualifié et des objectifs ambitieux pour ceux qui veulent se dépasser.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Formation",
                desc: "Une école de vélo reconnue qui accompagne les jeunes depuis l'initiation jusqu'aux compétitions régionales et nationales.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                ),
              },
            ].map((valeur) => (
              <div
                key={valeur.title}
                className="bg-white rounded-xl p-8 shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-cavigal-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-cavigal-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {valeur.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {valeur.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {valeur.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dirigeants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Le bureau
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {dirigeants.map((d) => (
              <div key={d.name} className="text-center">
                <div className="w-20 h-20 bg-cavigal-dark/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-cavigal-dark/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {d.name}
                </div>
                <div className="text-cavigal-red text-xs font-medium">
                  {d.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documents</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
            {[
              "Statuts de l'association",
              "Règlement intérieur",
              "Formulaire d'adhésion",
              "Certificat médical type",
            ].map((doc) => (
              <div
                key={doc}
                className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-3 hover:shadow-sm transition cursor-pointer"
              >
                <div className="w-10 h-10 bg-cavigal-red/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-cavigal-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{doc}</div>
                  <div className="text-gray-400 text-xs">PDF</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
