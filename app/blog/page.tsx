"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title:
      "The Art of Mindful Writing: How Slowing Down Makes You a Better Blogger",
    description:
      "Discover how embracing a slower, more intentional writing process can dramatically improve the quality of your blog posts and deepen your connection with readers.",
    slug: "art-of-mindful-writing",
    date: "March 5, 2026",
    author: "Sophia Reynolds",
    image:
      "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Writing Tips",
  },
  {
    id: 2,
    title: "10 SEO Strategies Every Blogger Needs to Know in 2026",
    description:
      "Stay ahead of the curve with these proven SEO techniques that will boost your blog's visibility and drive consistent organic traffic to your content.",
    slug: "seo-strategies-bloggers-2026",
    date: "February 28, 2026",
    author: "James Carter",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "SEO",
  },
  {
    id: 3,
    title: "How to Build a Loyal Readership from Scratch",
    description:
      "Building an audience takes more than great content. Learn the community-building strategies that turn casual visitors into devoted, long-term readers.",
    slug: "build-loyal-readership-from-scratch",
    date: "February 20, 2026",
    author: "Aisha Patel",
    image:
      "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Growth",
  },
  {
    id: 4,
    title: "Monetizing Your Blog: From Passion Project to Profitable Business",
    description:
      "Explore the most effective monetization strategies — from affiliate marketing to digital products — and learn how to turn your blog into a sustainable income stream.",
    slug: "monetizing-your-blog",
    date: "February 14, 2026",
    author: "Liam Thompson",
    image:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Monetization",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Writing Headlines That Get Clicked",
    description:
      "Your headline is the first — and sometimes only — chance to grab a reader's attention. Master the science and art of writing irresistible headlines.",
    slug: "guide-to-writing-headlines",
    date: "February 8, 2026",
    author: "Sophia Reynolds",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Writing Tips",
  },
  {
    id: 6,
    title: "Photography for Bloggers: Capture Images That Tell Your Story",
    description:
      "You don't need an expensive camera to take stunning blog photos. Learn composition, lighting, and editing tips to elevate your visual storytelling.",
    slug: "photography-tips-for-bloggers",
    date: "January 30, 2026",
    author: "Nina Brooks",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Photography",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <section className="py-16 text-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <p className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3">
          Our Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Stories, Tips & Insights
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto px-4">
          Thoughtfully written articles to help you write better, grow faster,
          and blog smarter.
        </p>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span>|</span>
                  <span>{blog.author}</span>
                </div>

                <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 leading-snug mb-2 group-hover:text-blue-500 transition-colors duration-200">
                  {blog.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400 flex-1 line-clamp-3">
                  {blog.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-500 hover:text-blue-600 border-blue-500"
                >
                  <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
