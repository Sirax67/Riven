'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CharactersCarousel from '@/components/carusel';
import { BookImage, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';


export default function Home() {
  return (
    <div className='overflow-hidden min-h-screen '>
      <Header/>
      <Welcome/>
      <About/>
      <Characters/>
      <History/>
      <Footer/>
    </div>
  );
}


function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 0px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return { ref, isVisible };
}

function Welcome() {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          setScrollY(scrollPos);
          document.documentElement.style.setProperty('--scrollTop', `${scrollPos}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const getParallaxValue = (speed: number) => {
    if (isMobile) {
      return scrollY / (speed * 2);
    }
    return scrollY / speed;
  };

  return (
    <section 
      ref={ref as any}
      id="welcome" 
      className={`relative h-screen w-screen overflow-hidden transition-all duration-1000 ease-out will-change-transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ willChange: 'opacity, transform' }}
    >

      <div 
        className="w-full absolute h-full bg-no-repeat z-0 overflow-hidden will-change-transform"
        style={{ 
          transform: `translate3d(0, ${getParallaxValue(1.6)}px, 0)`,
          willChange: 'transform'
        }}
      >
        <Image
          className='object-center object-cover'
          alt='Back'
          src="/images/welcome/Back_2 (2).png"
          fill
          priority
          sizes="100vw"
          quality={isMobile ? 75 : 90}
        />
      </div>

      <div 
        className="w-full absolute h-full bg-no-repeat z-10 overflow-hidden will-change-transform"
        style={{ 
          transform: `translate3d(0, ${getParallaxValue(1.6)}px, 0)`,
          willChange: 'transform'
        }}
      >
        <Image
          className='object-center object-cover'
          alt='middle'
          src="/images/welcome/SecondLayer (2).png"
          fill
          priority
          sizes="100vw"
          quality={isMobile ? 75 : 90}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      <div 
        className="w-full absolute h-full bg-no-repeat z-20 overflow-hidden will-change-transform"
        style={{ 
          transform: `translate3d(0, ${getParallaxValue(2)}px, 0)`,
          willChange: 'transform'
        }}
      >
        <Image
          className='object-center object-cover'
          alt='koza'
          src="/images/welcome/Nyasha (2).png"
          fill
          priority
          sizes="100vw"
          quality={isMobile ? 75 : 90}
        />
      </div>

      <div 
        className="w-full absolute h-full bg-no-repeat z-30 overflow-hidden will-change-transform"
        style={{ 
          transform: `translate3d(0, ${getParallaxValue(4)}px, 0)`,
          willChange: 'transform'
        }}
      >
        <Image
          className='object-center object-cover'
          alt='front'
          src="/images/welcome/Front_2 (3).png"
          fill
          priority
          sizes="100vw"
          quality={isMobile ? 75 : 90}
        />
      </div>
      
      <div className='absolute bottom-0 left-0 aspect-video h-[10vw] max-h-40 min-h-20 z-40 ml-4 md:ml-8 mb-4 md:mb-8'>
        <Image
          className='object-contain object-left-bottom'
          src="/images/logo.svg"
          alt='logo'
          fill
          priority
        />
      </div>
    </section>
  );
}

function About () {
  const { ref, isVisible } = useScrollAnimation();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); 
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseInside) return;
      
      const x = (e.clientX - window.innerWidth / 2) * -0.012;
      const y = (e.clientY - window.innerHeight / 2) * -0.012;
      
      setRotateY(x);
      setRotateX(y);
    };

    const resetRotation = () => {
      setRotateX(0);
      setRotateY(0);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resetRotation();
    };
  }, [isLargeScreen, isMouseInside]);

  return (
    <section 
      ref={ref as any}
      id="about"
      className={`
        relative 
        w-screen
        min-h-screen
        flex 
        justify-center 
        items-start lg:items-center
        overflow-hidden
        transition-all 
        duration-1000 
        ease-out 
        delay-100
        
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ perspective: isLargeScreen ? '3000px' : 'none' }}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => {
        setIsMouseInside(false);
        setRotateX(0);
        setRotateY(0);
      }}
    >
      <div 
        className='w-[115%] absolute h-[115%] bg-no-repeat z-40 overflow-hidden' 
        style={{ 
          transform: isLargeScreen 
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, calc(var(--scrollTop, 0) / 60), 0)`
            : 'translate3d(0, calc(var(--scrollTop, 0) / 60), 0)',
          transformStyle: isLargeScreen ? 'preserve-3d' : 'flat',
          willChange: "transform",
          transition: isLargeScreen && !isMouseInside ? 'transform 0.5s ease-out' : 'none',
        }}
      >
        <Image
          className='object-center object-cover'
          alt='front'
          src="/images/about/AboutGrass.png"
          fill
        />
      </div>

      <div
        className='
          flex gap-12 p-6 sm:p-12 
          w-full h-auto
          z-40 
          rounded-3xl 
          lg:flex-row flex-col
          px-4 sm:px-8 md:px-12
          
          
        '
        style={{ 
          transform: isLargeScreen 
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-125px) scale(1.06)`
            : 'none',
          transition: isLargeScreen && !isMouseInside ? 'transform 0.5s ease-out' : 'none',
        }}
      >
        <div className='
          mx-auto
          p-4 sm:p-10 md:p-12 
          w-full max-w-190
          bg-white rounded-3xl 
          text-[clamp(4px,4vw,16px)] md:text-base
          flex lg:flex-row flex-col 
          gap-4 sm:gap-10 md:gap-12
          items-center justify-center 
          shadow-[0_0_40px_rgba(190,228,255,0.3)]
        '>

          <div className='relative w-full h-50 rounded-3xl lg:w-70 lg:h-70'>
            <Image 
              src="/images/about/Glass (2).png"
              alt="house"
              fill
              className='object-center object-cover rounded-3xl'
            />
          </div>

          <div className='
            flex flex-col 
            gap-4 
            text-blue-950 z-30
          '>
            <h2 className='
              text-[clamp(14px,4vw,24px)] md:text-2xl 
              font-bold text-blue-950
            '> 
              О мире
            </h2>
            <p className='lg:max-w-[40ch] text-sm sm:text-base'>
              Никогда не знаешь, что тебя ждёт и как повернётся твоя жизнь. 
              Ещё вчера Козетта собирала в лесу лечебные травы, а сегодня её мир 
              рухнул в одночасье. Она столкнулась с горем, которое не каждому 
              под силу пережить. Как же она справится? И что будет дальше?
            </p>
            <Link 
              href='/StoryReader'
              className='
                group
                flex items-center justify-between
                p-4
                bg-gradient-to-r from-[var(--button-from)] to-[var(--button-light)]
                bg-[length:200%_auto]
                hover:bg-[position:99%_0]
                backdrop-blur-sm
                border border-white/20
                rounded-xl 
                w-full 
                transition-all 
                duration-500
                hover:scale-105
                lg:hover:scale-110
              '>
              <div className='flex gap-3 items-center text-[clamp(2px,4vw,16px)] text-white font-medium'>
                <BookOpen size={20} className='text-white group-hover:rotate-12 transition-transform duration-300' />
                Читать с первой главы 
              </div>
              <ChevronRight size={24} className='text-white ' /> 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Characters () {
   const { ref, isVisible } = useScrollAnimation();
  return (
    <section 
      ref={ref as any}
      id="characters" 
      className={`
        lg:h-screen w-screen 
        flex flex-col relative justify-center 
         lg:p-0
        transition-all duration-1000 ease-out delay-200
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>

      <div className='w-full absolute h-full bg-no-repeat z-30 pointer-events-none'>
        <Image
          className='object-center object-cover pointer-events-none'
          alt='Grass'
          src="/images/about/AboutGrass.png"
          fill
        ></Image>
      </div>
      
      <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl text-center font-bold text-white mb-6'>
          Персонажи
      </h2>
      
      <div className="overflow-x-hidden"> 
        <CharactersCarousel/>
      </div>
        

    </section>
  )
}

function History () {
  const { ref, isVisible } = useScrollAnimation();
  return(
    <section 
      ref={ref as any}
      id="history"
      className={`
        min-h-screen w-screen flex flex-col
        transition-all duration-1000 ease-out delay-300
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{perspective: '3000px'}}
    >
      <div 
        
        className='
          w-full absolute h-full bg-no-repeat z-30 pointer-events-none
        '>
        <Image
          className='object-center object-cover pointer-events-none'
          alt='front'
          src="/images/about/AboutGrass.png"
          fill
        ></Image>
      </div>
      <div className='flex flex-col gap-20 m-auto w-full p-12' 
       
        >
        <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl w-full text-center font-bold'>
          История
        </h2>
        <div className='flex gap-12 lg:flex-row flex-col justify-center items-center'>
          <div className='flex flex-col gap-6 justify-center w-full items-center lg:max-w-70'>
            <Link 
              href='/StoryReader'
              className='
                group
                mt-2
                flex items-center justify-between
                p-4
                bg-gradient-to-r from-[#030a22] to-[#071d64af]
                border-white/20 border
                rounded-xl 
                w-full 
                transition-all 
                duration-500
                hover:scale-105
                lg:hover:scale-110
              '>
              <div className='flex gap-3 items-center text-[clamp(2px,4vw,16px)] text-white font-medium'>
                <BookOpen size={20} className='text-white/80 group-hover:rotate-12 transition-transform duration-300' />
                Читать с первой главы
              </div>
              <ChevronRight size={24} className='text-white/80 ' /> 
            </Link>

            <Link 
              href='/AddStory'
              className='
                group
                mt-2
                flex items-center justify-between
                p-4
                bg-gradient-to-r from-[#030a22] to-[#071d64af]
                border-white/20 border
                rounded-xl 
                w-full 
                transition-all 
                duration-500
                hover:scale-105
                lg:hover:scale-110
              '>
              <div className='flex gap-3 items-center text-[clamp(2px,4vw,16px)] text-white font-medium'>
                <Sparkles size={20} className='text-white/80 group-hover:rotate-12 transition-transform duration-300' />
                Дополнительный сюжет
              </div>
              <ChevronRight size={24} className='text-white/80 ' /> 
            </Link>

            <Link 
              href='/Gallery'
              className='
                group
                flex items-center justify-between
                p-4
                bg-gradient-to-r from-[var(--button-from)] to-[var(--button-to)]
                border-white/20 border
                rounded-xl 
                w-full 
                transition-all 
                duration-500
                hover:scale-105
                lg:hover:scale-110
              '>
                 <div className='flex gap-4 text-[clamp(2px,4vw,16px)]'>
                  <BookImage size={20} className='text-white/80 group-hover:rotate-12 transition-transform duration-300' />
                  Галерея 
                </div>
              
              <ChevronRight size={24} className='text-white/80 ' /> 
            </Link>
          </div>

          <div className='relative rounded-3xl aspect-video w-full lg:w-110 '>
            <Image 
            className='rounded-3xl object-center object-cover'
              src="/images/history/tree.jpg"
              alt="/"
              fill
              ></Image>
          </div>
        </div>
      </div>
      
    </section>
  )
}