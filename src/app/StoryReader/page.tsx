'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { chapters, getAllChapters } from '@/app/data/chapters';

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export default function StoryPage() {
  const allChapters = getAllChapters();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[var(--background)] to-[var(--button-from)] overflow-x-hidden">
      
      <div className='fixed inset-0 w-full h-full bg-no-repeat z-0 pointer-events-none'>
        <Image
          className='object-cover object-center'
          alt='background'
          src="/images/about/AboutGrass.png"
          fill
          priority
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md py-4 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="
                flex items-center gap-2 
                px-4 py-2 
                bg-gradient-to-b from-[var(--button-from)] to-[var(--button-to)]
                border border-white/20 
                rounded-xl 
                hover:scale-105 transition-all duration-300"
            >
              <ChevronLeft size={18} />
              <span className="text-sm">На главную</span>
            </Link>

          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto my-24">
        <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl w-full text-center font-bold text-white mb-12'>
          Сюжет
        </h2>

        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-3">
            {allChapters.map((chapter, index) => (
              <ChapterItem key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

function ChapterItem({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Link
      ref={ref as any}
      href={`/StoryReader/${chapter.id}`}
      className={`
        group cursor-pointer
        p-6 rounded-2xl
        bg-gradient-to-b from-[var(--button-from)] to-blue-950/20
        backdrop-blur-sm
        border border-white/10
        hover:border-blue-900
        transition-all duration-400
        hover:scale-105 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 100}ms`, display: 'block' }}
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="text-white font-bold text-lg mb-1">{chapter.title}</div>
          <div className="text-white/40 text-sm">{chapter.description}</div>
          <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <Clock size={12} />
            {chapter.duration}
          </div>
        </div>
        <ChevronRight/>
      </div>
    </Link>
  );
}