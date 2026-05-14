'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, BookOpen, ArrowLeft, Menu, X, ChevronRight } from 'lucide-react';
import { chapters, getChapter, getNextChapter, getPrevChapter } from '@/app/data/chapters';
import { useState, useEffect } from 'react';

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return { isVisible };
}

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const chapterId = parseInt(params.chapterId as string);
  const chapter = getChapter(chapterId);
  const prevChapter = getPrevChapter(chapterId);
  const nextChapter = getNextChapter(chapterId);
  
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);
  const { isVisible } = useScrollAnimation();

  if (!chapter) {
    return (
      <div className="relative min-h-screen bg-gradient-to-l from-[var(--background)] to-[var(--button-from)] flex items-center justify-center">
        <div className="text-center">
          
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Глава не найдена</p>
          <Link href="/StoryReader" className="text-blue-400 hover:text-blue-300">
            Вернуться к списку глав
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[var(--background)] to-[var(--button-from)] overflow-x-hidden">
      
      <div className='fixed inset-0 w-full h-full bg-no-repeat z-0 pointer-events-none opacity-30'>
        <Image
          className='object-cover object-center'
          alt='background'
          src="/images/about/AboutGrass.png"
          fill
        />
      </div>

      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md p-4 ">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <Link
              href="/StoryReader"
              className="
                flex items-center gap-2 px-4 py-2 
                bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)] 
                border border-white/10 
                rounded-xl 
                hover:scale-105 transition-all duration-300"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline text-sm">К главам</span>
            </Link>

            <button
              onClick={() => setIsChaptersOpen(!isChaptersOpen)}
              className="
                flex items-center gap-2 px-4 py-2 
                bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)] 
                border border-white/10 
                rounded-xl 
                hover:scale-105 transition-all duration-300
                lg:hidden 
                cursor-pointer">
              <Menu size={18} />
              <span className="text-sm">Главы</span>
            </button>

            <div className="hidden lg:flex gap-2">
              {chapters.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/StoryReader/${ch.id}`}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm cursor-pointer ${
                    ch.id === chapterId
                      ? 'bg-gradient-to-r from-[var(--button-to)] to-[var(--button-light)] text-white'
                      : 'bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)]  hover:bg-blue-950 text-gray-300'
                  }`}
                >
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isChaptersOpen && (
        <div className="
            fixed inset-0 z-30 bg-black/80 backdrop-blur-md 
            lg:hidden 
            animate-fade-in" 
            onClick={() => setIsChaptersOpen(false)}
          >
          <div className="
              absolute top-20 inset-x-4 
              bg-gradient-to-b from-[var(--button-to)] to-[#01031f] 
              border border-white/10 
              rounded-xl p-6 
              max-h-[80vh] overflow-y-auto
              flex flex-col gap-4
              " 
              onClick={(e) => e.stopPropagation()}
            >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Оглавление</h3>
              <button onClick={() => setIsChaptersOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-2">
              {chapters.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/StoryReader/${ch.id}`}
                  onClick={() => setIsChaptersOpen(false)}
                  className={`block w-full text-left p-3 rounded-lg transition-all duration-300 border border-white/10 ${
                    ch.id === chapterId
                      ? 'bg-gradient-to-r from-[var(--button-to)] to-[var(--button-light)] text-white'
                      : 'bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)]  hover:bg-blue-950 text-gray-300'
                  }`}
                >
                  {ch.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-[clamp(20px,4vw,30px)] md:text-3xl font-bold ">
              {chapter.title}
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--button-to)] to-transparent mt-6" />
          </div>

          <div className="space-y-6">
            {chapter.content.map((paragraph, idx) => (
              <p 
                key={idx}
                className="text-gray-200 leading-relaxed text-base sm:text-lg text-white-80"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
            
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--button-to)] to-transparent mt-6" />
         
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 ">
            
            {prevChapter ? (
              <Link
                href={`/StoryReader/${prevChapter.id}`}
                className="
                  flex items-center justify-center gap-2 
                  py-3 px-6
                  bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)] 
                  border border-white/10 
                  rounded-xl 
                  hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft size={18} />
                Предыдущая глава
              </Link>
            ) : (
              <div />
            )}
            
            {nextChapter ? (
              <Link
                href={`/StoryReader/${nextChapter.id}`}
                className="
                  flex items-center justify-center gap-2 
                  py-3 px-6
                  bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)] 
                  border border-white/10 
                  rounded-xl 
                  hover:scale-105 transition-all duration-300"  >
                Следующая глава
                <ChevronRight size={18}  />
              </Link>
            ) : (
              <Link
                href="/StoryReader"
                className="
                group
                flex items-center justify-center gap-2 
                  py-3 px-6
                  bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)] 
                  border border-white/10 
                  rounded-xl 
                  hover:scale-105 transition-all duration-300"  >
                <BookOpen size={18} className='group-hover:rotate-12'/>
                К списку глав
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}