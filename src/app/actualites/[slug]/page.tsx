import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/data";
import type { Metadata } from "next";

const articleImages: Record<string, string> = {
  "course-printaniere-2026": "/images/photos/photo1.jpg",
  "stage-paques-jeunes": "/images/photos/photo2.jpg",
  "assemblee-generale-2026": "/images/photos/photo3.jpg",
  "nouveaux-maillots": "/images/photos/photo4.jpg",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={articleImages[article.id] || "/images/photos/photo1.jpg"}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cavigal-dark-deep/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link
            href="/actualites"
            className="inline-flex items-center gap-1 text-white/70 hover:text-white text-sm mb-6 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux actualités
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-cavigal-red px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-white/60">
              {new Date(article.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black">{article.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p>{article.content}</p>
          </div>
        </div>
      </section>
    </>
  );
}
