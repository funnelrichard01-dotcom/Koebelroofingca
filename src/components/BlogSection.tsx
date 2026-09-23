import React, { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, X, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/koebelData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onOpenConsultation: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenConsultation }) => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="guides" className="py-20 bg-[#faf9f6] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-500 mb-2">
            <span>Knowledge Base &amp; Advice</span>
            <span aria-hidden="true">·</span>
            <span>By Lloyd Koebel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight text-balance">
            Homeowner Roofing Guides.
          </h2>
          <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed">
            Your go-to guide for expert tips, seasonal advice, and everything you need to know about protecting your roof in Ontario's climate.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
            >
              {post.image && (
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#1d232c]/85 text-stone-200 text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-semibold text-[#434c59]">
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#434c59] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">
                    By {post.author}
                  </span>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="text-xs font-bold text-[#434c59] hover:text-neutral-900 inline-flex items-center gap-1 group/link"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More Articles preview list */}
        <div className="mt-8 bg-white rounded-xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Additional Published Articles
            </span>
            <div className="text-sm font-semibold text-neutral-900">
              "How to Know When It’s Time to Replace Your Roof" &amp; "Koebel’s Roofing: Raising the Standard"
            </div>
          </div>
          <button
            onClick={() => setActiveArticle(BLOG_POSTS[3])}
            className="px-4 py-2 text-xs font-semibold rounded-md border border-stone-300 text-neutral-800 hover:bg-stone-50 shrink-0"
          >
            Read More Articles
          </button>
        </div>
      </div>

      {/* Full Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200">
            <div className="sticky top-0 bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <span>{activeArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeArticle.date}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {activeArticle.image && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                  <img
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1d232c]/85 text-stone-200 text-xs font-semibold px-3 py-1 rounded backdrop-blur-sm">
                    {activeArticle.category}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-extrabold text-neutral-900">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-stone-600">
                  <User className="w-3.5 h-3.5 text-stone-500" />
                  <span>Written by {activeArticle.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {activeArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-5 bg-stone-50 rounded-lg border border-stone-200 space-y-3">
                <h4 className="text-sm font-bold text-neutral-900">
                  Have questions about your roof in Kitchener-Waterloo?
                </h4>
                <p className="text-xs text-neutral-600">
                  Lloyd Koebel is happy to review your roof's condition and provide honest, pressure-free advice.
                </p>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenConsultation();
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#434c59] hover:bg-[#323943] rounded-md transition-colors"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
