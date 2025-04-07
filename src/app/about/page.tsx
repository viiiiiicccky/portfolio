import React from 'react';
import Layout from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">About Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Your University</h3>
                  <p className="text-gray-600">Degree in Computer Science</p>
                  <p className="text-sm text-gray-500">2018 - 2022</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Company Name</h3>
                  <p className="text-gray-600">Software Engineer</p>
                  <p className="text-sm text-gray-500">2022 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 