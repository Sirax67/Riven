'use client'
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';

const characters = [
    {
        id: 1, src: '/images/characters/persons/Kozetta_new.png', alt: 'Козетта',
        
        describtion1: 
        `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,

        describtion2: 
            `Пол - Женский
            Возраст - 17 лет
            Рост - 161 см
            Телосложение - Худощавое
            Цвет волос - Пепельно-русый
            Длина и тип волос - Длинные, волнистые
            Цвет глаз - Тёмно-карие
            Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height:'165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures:'Родинка под глазом, веснушки, механическая левая рука'

    },
    
   {
        id: 2, src: '/images/characters/persons/Kozetta_new.png', alt: 'Козетта',
        
        describtion1: 
        `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,

        describtion2: 
            `Пол - Женский
            Возраст - 17 лет
            Рост - 165 см
            Телосложение - Худощавое
            Цвет волос - Пепельно-русый
            Длина и тип волос - Длинные, волнистые
            Цвет глаз - Тёмно-карие
            Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height:'165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures:'Родинка под глазом, веснушки, механическая правая рука'

    },

   {
        id: 3, src: '/images/characters/persons/Kozetta_new.png', alt: 'Козетта',
        
        describtion1: 
        `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,

        describtion2: 
            `Пол - Женский
            Возраст - 17 лет
            Рост - 165 см
            Телосложение - Худощавое
            Цвет волос - Пепельно-русый
            Длина и тип волос - Длинные, волнистые
            Цвет глаз - Тёмно-карие
            Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height:'165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures:'Родинка под глазом, веснушки, механическая правая рука'

    },
    {
        id: 4, src: '/images/characters/persons/Kozetta_new.png', alt: 'Козетта',
        
        describtion1: 
        `Семнадцатилетняя девушка из глухой деревни, затерянной среди холмов и леса. 
        Она энергична, любопытна и обладает той особенной настойчивостью, которая помогает 
        выживать в суровых условиях.`,

        describtion2: 
            `Пол - Женский
            Возраст - 17 лет
            Рост - 165 см
            Телосложение - Худощавое
            Цвет волос - Пепельно-русый
            Длина и тип волос - Длинные, волнистые
            Цвет глаз - Тёмно-карие
            Особые приметы - Маленькая родинка под левым глазом`,
        gender: 'Женский',
        age: '17 лет',
        height:'165 см',
        bodyType: 'Атлетическое',
        hairColor: 'Пшеничные',
        hairLengthAndType: 'Короткие, волнистые',
        eyeColor: 'Серо-голубые',
        specialFeatures:'Родинка под глазом, веснушки, механическая правая рука'

    },
];

function ExpandableText({ text, maxLength = 150 }: { text: string; maxLength?: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldTruncate = text.length > maxLength;
    const displayText = isExpanded || !shouldTruncate 
        ? text 
        : text.slice(0, maxLength) + '...';
    
    if (!shouldTruncate) {
        return <div className='text-sm md:text-base leading-relaxed text-white whitespace-pre-line'>{displayText}</div>;
    }
    
    return (
        <div>
            <div className='text-sm md:text-base leading-relaxed text-white whitespace-pre-line'>
                {displayText}
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='text-white/70 hover:text-white text-sm mt-2 font-semibold transition-colors pb-10 mx-auto flex items-center gap-1'
            >
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
        </div>
    );
}

export default function CharactersCarousel () {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        slidesToScroll: 1,
        duration: 30,
        containScroll: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    return(
       <div className='relative group w-screen h-auto overflow-hidden'>
            <div className='h-full overflow-hidden' ref={emblaRef}>
                <div className='flex h-full'>
                    {characters.map((slide, idx) => (
                        <div
                            key={slide.id}
                            className='
                                min-w-full
                                h-full
                                flex-shrink-0
                                relative
                                flex items-center justify-center
                            '
                        >
                            {/* Десктопная версия (lg и выше) */}
                            <div className='hidden lg:flex gap-10 flex-col w-full h-full justify-center '>
                                <div className=''>
                                    <div className='
                                        relative
                                        w-full
                                        h-auto
                                        p-4 rounded-b-2xl
                                        flex gap-16
                                        justify-center 
                                    '>
                                        <div className='flex flex-col gap-4 top-24 relative'>
                                            <h3 className='text-xl font-bold text-white'>
                                                {slide.alt}
                                            </h3>
                                            <p className='max-w-[25ch]  text-white leading-[180%] '>
                                                {slide.describtion1}
                                            </p>
                                        </div>

                                        <div className='relative w-52 h-160'>
                                            <Image
                                                src={slide.src}
                                                alt={slide.alt}
                                                fill
                                                className='object-cover object-center rounded-2xl'
                                            />
                                        </div>
                                        
                                        <p className='max-w-[30ch] text-white top-24 relative leading-[180%]'>
                                            Пол - {slide.age}
                                            <br />  Возраст - {slide.gender}
                                            <br />  Рост - {slide.height}
                                            <br /> Телосложение - {slide.bodyType}
                                            <br />  Цвет волос - {slide.hairColor}
                                            <br />  Длина и тип волос - {slide.hairLengthAndType}
                                            <br />  Цвет глаз - {slide.eyeColor}
                                            <br />  Особые приметы - {slide.specialFeatures}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Мобильная/планшетная версия (на экранах меньше lg) */}
                            <div className='flex lg:hidden flex-col w-full justify-center py-8 px-4'>
                                
                                {/* Описание сверху */}
                                <div className='mb-6'>
                                    <h3 className='text-lg md:text-xl font-bold text-center text-white mb-3'>
                                        {slide.alt}
                                    </h3>
                                    <div className='text-center max-w-[90vw] mx-auto px-2 md:max-w-[70ch]'>
                                        <ExpandableText text={slide.describtion1} maxLength={120} />
                                    </div>
                                </div>

                                {/* Картинка */}
                                <div className='flex justify-center items-center mb-6'>
                                    <div className='relative w-76 h-76 '>
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            className='object-contain object-center'
                                            sizes='(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 256px'
                                        />
                                    </div>
                                </div>

                                {/* Описание снизу */}
                                <div className='text-center max-w-[90vw] md:max-w-[70ch] mx-auto px-2 pb-10'>
                                    <ExpandableText text={slide.describtion2} maxLength={120} />
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Кнопка "Назад" */}
            <button
                onClick={scrollPrev}
                className="
                    z-40
                    absolute left-12 top-1/2 -translate-y-1/2 
                    bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
                    rounded-full p-2 
                    transition-all duration-200
                    cursor-pointer
                    focus:opacity-100
                "
                aria-label="Предыдущий слайд"
            >
                <ChevronLeft className="lg:size-6 size-3 text-gray-800" />
            </button>

            {/* Кнопка "Вперёд" */}
            <button
                onClick={scrollNext}
                className="
                    z-40
                    absolute right-12 top-1/2 -translate-y-1/2 
                    bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] 
                    rounded-full p-2 shadow-lg 
                    transition-all duration-200
                    cursor-pointer
                    focus:opacity-100
                "
                aria-label="Следующий слайд"
            >
                <ChevronRight className="lg:size-6 size-3 text-gray-800" />
            </button>

            <div className="flex justify-center gap-2 mt-8 mb-4">
                {characters.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => emblaApi?.scrollTo(idx)}
                        className={`
                            h-2 rounded-full transition-all duration-300 cursor-pointer
                            ${selectedIndex === idx 
                                ? 'bg-white w-8' 
                                : 'bg-gray-400 hover:bg-gray-300 w-2'
                            }
                        `}
                        aria-label={`Перейти к слайду ${idx + 1}`}
                    />
                ))}
            </div>
            
       </div>
    )
}