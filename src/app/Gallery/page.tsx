'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, User } from 'lucide-react';
import { galleryItems, categories, getGalleryItemsByCategory } from '@/app/data/gallery';

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

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = getGalleryItemsByCategory(selectedCategory);

  const openModal = (item: typeof galleryItems[0], index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, filteredItems]);

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

      {/* Верхняя панель - ТАК ЖЕ КАК НА СТРАНИЦЕ СЮЖЕТА */}
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md py-4">
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

            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto mt-24 mb-20">
        {/* Заголовок */}
        <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl w-full text-center font-bold text-white mb-12'>
          Галерея
        </h2>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-2 rounded-xl transition-all duration-300 text-sm cursor-pointer
                ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[var(--button-to)] to-[var(--button-light)] text-white border border-white/30'
                  : 'bg-gradient-to-r from-[var(--button-from)] to-blue-950/20 text-gray-300 border border-white/10 hover:border-blue-900'
                }
                backdrop-blur-sm
                hover:scale-105
              `}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Сетка галереи */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {filteredItems.map((item, index) => (
            <GalleryItem 
              key={item.id} 
              item={item} 
              index={index}
              onClick={() => openModal(item, index)}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center text-white/40 py-20">
            Нет изображений в этой категории
          </div>
        )}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-gradient-to-b from-[var(--button-from)] to-[var(--button-to)] border border-white/20 rounded-xl hover:scale-105 transition-all duration-300"
          >
            <X size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 z-10 p-2 bg-gradient-to-b from-[var(--button-from)] to-[var(--button-to)] border border-white/20 rounded-full hover:scale-105 transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 z-10 p-2 bg-gradient-to-b from-[var(--button-from)] to-[var(--button-to)] border border-white/20 rounded-full hover:scale-105 transition-all duration-300"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="mt-6 p-6 bg-gradient-to-b from-[var(--button-from)] to-blue-950/20 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/60 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {selectedImage.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  {selectedImage.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Компонент элемента галереи (СТИЛИ КАК В СТРАНИЦЕ СЮЖЕТА)
function GalleryItem({ 
  item, 
  index, 
  onClick 
}: { 
  item: typeof galleryItems[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as any}
      onClick={onClick}
      className={`
        group cursor-pointer
        rounded-2xl overflow-hidden
        bg-gradient-to-b from-[var(--button-from)] to-blue-950/20
        backdrop-blur-sm
        border border-white/10
        hover:border-blue-900
        transition-all duration-300
        hover:scale-105 hover:-translate-y-1
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-square">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top"
        />
        
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-white/40 text-sm line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-3 text-xs text-white/30">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {item.date}
          </div>
        </div>
      </div>
    </div>
  );
}