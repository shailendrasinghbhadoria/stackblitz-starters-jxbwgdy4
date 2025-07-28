'use client';

import React from 'react';
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

interface CourseType {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
  const featuredCourse = courseData.courses.filter(
    (course: CourseType) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED COURSES
        </h1>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn with the Best
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((item: CourseType) => (
            <div key={item.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm overflow-hidden h-full bg-white dark:bg-zinc-900">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={item.image}
                    alt={item.title}
                    height="400"
                    width="400"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {item.title}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                  <Link href={`/courses/${item.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={'/courses'}
          className="px-4 py-2 rounded-md border border-neutral-600 text-neutral-600 bg-white 
        hover:bg-gray-300 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
