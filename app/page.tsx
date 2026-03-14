import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome to <span className="font-semibold">ThoughtSpace</span> —{" "}
            <br className="hidden lg:block" />
            where ideas turn into{" "}
            <span className="font-semibold decoration-primary">
              inspiring stories
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Explore articles on technology, lifestyle, and creativity.{" "}
            <br className="hidden lg:block" />
            Written by passionate writers, crafted for curious minds.
          </p>
          <div className="mt-6 flex gap-3 justify-center lg:justify-start">
            <Link href="/blog">
              <Button
                className="px-6 py-3 text-base bg-blue-500 text-white hover:bg-blue-600 hover:text-white border-blue-500 hover:border-blue-600 cursor-pointer"
                variant="outline"
              >
                Explore Blogs
              </Button>
            </Link>

            <Link href="/about">
              <Button
                className="px-6 py-3 text-base cursor-pointer"
                variant="outline"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>

        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 1
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Link href="/blog">
                    <Button
                      className="px-3 py-2 mt-2 cursor-pointer"
                      variant="outline"
                    >
                       Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 2
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                   <Link href="/blog">
                    <Button
                      className="px-3 py-2 mt-2 cursor-pointer"
                      variant="outline"
                    >
                       Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 3
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                   <Link href="/blog">
                    <Button
                      className="px-3 py-2 mt-2 cursor-pointer"
                      variant="outline"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose the plan that suits your blogging needs
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Starter
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Custom Domain</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>SEO Tools</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    <s>Newsletter Integration</s>
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    5 Blog Posts/month
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-2 border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Pro Blogger
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    Custom Domain
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Advanced SEO Tools
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Newsletter Integration
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Blog Posts
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Publisher
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    Multiple Custom Domains
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Full Monetization Tools
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Advanced Newsletter & Analytics
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited Blog Posts
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Dedicated Support
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Testimonial 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  John Doe
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CEO, Company A
                </p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Jane Smith
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  Marketing Director, Company B
                </p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  "Exceptional service and support. We couldn't be happier with
                  the results."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Michael Brown
                </h3>
                <p className="text-gray-500 dark:text-gray-300">
                  CTO, Company C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
