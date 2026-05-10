// app/gallery/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Calendar, User, Heart } from 'lucide-react';

// Компонент для анимации появления при скролле
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
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
  }, []);

  return { ref, isVisible };
}

// Категории изображений
const categories = [
  { id: 'all', name: 'Все' },
  { id: 'characters', name: 'Персонажи' },
  { id: 'locations', name: 'Локации' },
  { id: 'artworks', name: 'Арты' },
  { id: 'sketches', name: 'Скетчи' },
];

// Данные галереи
const galleryItems = [
  {
    id: 1,
    title: "Няша",
    description: "Главная героиня - маленькая коза с большим сердцем",
    category: "characters",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 2,
    title: "Волшебный лес",
    description: "Таинственный лес, где происходит действие",
    category: "locations",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 3,
    title: "Хранительница",
    description: "Древняя хранительница леса",
    category: "characters",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 4,
    title: "Цветущая поляна",
    description: "Место, где растёт волшебный цветок",
    category: "locations",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 5,
    title: "Встреча",
    description: "Первая встреча с зайцем",
    category: "artworks",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 6,
    title: "Эскиз Няши",
    description: "Ранний концепт главной героини",
    category: "sketches",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 7,
    title: "Испытание",
    description: "Момент прохождения испытания",
    category: "artworks",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 8,
    title: "Друзья",
    description: "Няша и её новые друзья",
    category: "characters",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  },
  {
    id: 9,
    title: "Закат в лесу",
    description: "Красивый закат над волшебным лесом",
    category: "locations",
    image: "/images/gallery/Group 6 copy.svg",
    date: "2026",
    author: "Hiteruu",
    
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Фильтрация изображений по категории
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Функции для модального окна
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

  // Обработка клавиш
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#001220] to-[#000713] overflow-x-hidden">
      {/* Фоновый слой с травой */}
      <div className='fixed inset-0 w-full h-full bg-no-repeat z-0 pointer-events-none'>
        <Image
          className='object-cover object-center'
          alt='background'
          src="/images/about/AboutGrass.png"
          fill
          priority
        />
      </div>

      {/* Верхняя панель навигации */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#000713] to-transparent backdrop-blur-md pt-4 pb-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">На главную</span>
            </Link>

            <div className="w-20"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20">
        {/* Заголовок */}
        <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl w-full text-center font-bold text-white mb-8'>
          Галерея
        </h2>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-2 rounded-lg transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#005c7a] to-[#00394b] text-white border border-[#00a8c6]'
                  : 'bg-gradient-to-r from-[#00394b70] to-[#000713] text-gray-300 border border-[#002b47] hover:border-[#005c7a]'
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item, index) => (
            <GalleryItem 
              key={item.id} 
              item={item} 
              index={index}
              onClick={() => openModal(item, index)}
            />
          ))}
        </div>

        {/* Сообщение, если нет изображений */}
        {filteredItems.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            Нет изображений в этой категории
          </div>
        )}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center animate-fade-in"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 p-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
          >
            <X size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 p-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-full hover:scale-105 transition-all duration-300"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 p-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-full hover:scale-105 transition-all duration-300"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          <div 
            className="relative max-w-5xl w-full mx-4 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#002b47]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="mt-6 p-6 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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

// Компонент элемента галереи
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
        bg-gradient-to-r from-[#00394b70] to-[#000713]
        backdrop-blur-sm
        border border-[#002b47]
        hover:border-[#005c7a]
        transition-all duration-500
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
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
          
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {item.date}
          </div>
        </div>
      </div>
    </div>
  );
}

// Добавьте эти стили в ваш глобальный CSS файл
const styles = `
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

.animate-scale-up {
  animation: scale-up 0.3s ease-out forwards;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}