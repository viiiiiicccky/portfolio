import React from 'react';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Hi, I'm Vicky Chen</h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate developer specializing in web development and software engineering.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
