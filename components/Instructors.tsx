'use client';
import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Vocal Coach',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.36&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Marcus Lee',
    designation: 'Music Producer',
    image:
      'https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
  },
  {
    id: 3,
    name: 'Aisha Khan',
    designation: 'Piano Instructor',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.36&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Daniel Cruz',
    designation: 'Sound Engineer',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000',
  },
  {
    id: 5,
    name: 'Sophie Turner',
    designation: 'Choir Director',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.36&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    name: 'Raj Malhotra',
    designation: 'Tabla Maestro',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.36&auto=format&fit=crop&w=800&q=60',
  },
];

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-5 z-10">Meet Our Instructors</h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talent professionals who will guide your musical journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
