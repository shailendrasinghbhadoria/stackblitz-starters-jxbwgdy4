'use clients';
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { cn } from '@/utils/cn';

const testimonials: { quote: string; name: string; title: string }[] = [
  {
    quote:
      'This platform truly helped me discover my musical voice. The guidance was personal and empowering.',
    name: 'Aarav Sharma',
    title: 'Aspiring Music Producer',
  },
  {
    quote:
      "I've taken many music courses before, but none felt as personal and inspiring as this one.",
    name: 'Maya Kapoor',
    title: 'Singer-Songwriter',
  },
  {
    quote:
      'From basic chords to complex compositions, every session felt like a step closer to my dream.',
    name: 'Rohan Mehta',
    title: 'Guitar Enthusiast',
  },
  {
    quote:
      'The mentorship and structure are unmatched. I’ve grown so much in such a short time.',
    name: 'Simran Joshi',
    title: 'Pianist & Music Student',
  },
  {
    quote:
      'What stood out to me was how tailored the journey was. It felt like the curriculum was made just for me.',
    name: 'Kabir Malhotra',
    title: 'Music Hobbyist',
  },
  {
    quote:
      'This was more than just learning music – it was learning about myself through music.',
    name: 'Tanya Verma',
    title: 'Vocal Coach',
  },
  {
    quote:
      'The instructors are incredibly patient and knowledgeable. They really care about your growth.',
    name: 'Dev Patel',
    title: 'Beginner Music Learner',
  },
  {
    quote:
      'A truly transformative experience. I’ve never felt so confident creating my own music.',
    name: 'Ananya Iyer',
    title: 'Indie Music Artist',
  },
  {
    quote:
      'Hands-on, heart-centered, and highly professional. Couldn’t recommend it enough!',
    name: 'Nikhil Rao',
    title: 'DJ & Music Curator',
  },
  {
    quote:
      'Every session inspired me to keep pushing my limits. It’s more than a course — it’s a movement.',
    name: 'Priya Desai',
    title: 'Electronic Music Creator',
  },
];

const TestimonialsCards = () => {
  return (
    <div className="h-[40rem] w-full flex flex-col dark:bg-black dark:bg-grid-white/[0.02] items-center justify-center relative overflow-hidden">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      <h2 className="text-3xl font-bold mb-5 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCards;
