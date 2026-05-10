// app/story/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Clock, ArrowLeft, Menu, BookOpen, X } from 'lucide-react';

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

// Главная страница читалки (список глав)
export default function StoryReader() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  // Если выбрана глава - показываем текст
  if (selectedChapter) {
    return (
      <ChapterReader 
        chapterId={selectedChapter} 
        onBack={() => setSelectedChapter(null)}
        onChapterSelect={(id) => setSelectedChapter(id)}
      />
    );
  }

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

            

            <div className="w-20"></div> {/* Пустой div для баланса */}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20">
        {/* Заголовок */}
        <h2 className='text-[clamp(20px,4vw,30px)] md:text-3xl w-full text-center font-bold text-white mb-12'>
          Дополнительный сюжет
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Оглавление */}
          <div className="space-y-3">
            <ChaptersList onSelectChapter={setSelectedChapter} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Компонент списка глав
function ChaptersList({ 
  onSelectChapter
}: { 
  onSelectChapter: (id: number) => void;
}) {
  const chapters = [
    { id: 1, title: "Пролог", description: "Начало пути", duration: "5 мин" },
    { id: 2, title: "Глава 1", description: "Первая встреча", duration: "15 мин" },
    { id: 3, title: "Глава 2", description: "Тайны прошлого", duration: "18 мин" },
    { id: 4, title: "Глава 3", description: "Новые знакомые", duration: "20 мин" },
    { id: 5, title: "Глава 4", description: "Испытание", duration: "22 мин" },
    { id: 6, title: "Глава 5", description: "Откровение", duration: "25 мин" },
    { id: 7, title: "Эпилог", description: "Новое начало", duration: "8 мин" },
    { id: 8, title: "Эпилог", description: "Новое начало", duration: "8 мин" },
  ];

  return (
    <>
      {chapters.map((chapter, index) => (
        <ChapterItem
          key={chapter.id}
          chapter={chapter}
          index={index}
          onSelect={() => onSelectChapter(chapter.id)}
        />
      ))}
    </>
  );
}

// Компонент элемента главы
function ChapterItem({ 
  chapter, 
  index, 
  onSelect 
}: { 
  chapter: any;
  index: number;
  onSelect: () => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as any}
      onClick={onSelect}
      className={`
        group cursor-pointer
        p-6 rounded-2xl
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
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="text-white font-bold text-lg mb-1">{chapter.title}</div>
          <div className="text-gray-300 text-sm">{chapter.description}</div>
          <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <Clock size={12} />
            {chapter.duration}
          </div>
        </div>
        <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all rotate-180" />
      </div>
    </div>
  );
}

// Компонент чтения главы
function ChapterReader({ 
  chapterId, 
  onBack,
  onChapterSelect
}: { 
  chapterId: number;
  onBack: () => void;
  onChapterSelect: (id: number) => void;
}) {
  const [isChaptersOpen, setIsChaptersOpen] = useState(false);

  const chaptersContent: Record<number, { title: string; content: string[] }> = {
    1: {
      title: "Пролог",
      content: [
        "В далёкой стране, где небо касается земли, а ветер шепчет древние тайны, жила-была маленькая коза по имени Няша.",
        "Однажды утром, когда солнце только начинало золотить вершины холмов, Няша услышала странный звук, доносящийся из леса.",
        "«Кто там?» - спросила она, но в ответ услышала лишь шелест листвы. Любопытство взяло верх, и она отправилась навстречу приключениям.",
        "Тропинка вилась между высокими деревьями, чьи ветви сплетались в причудливый узор, создавая тенистый коридор."
      ]
    },
    2: {
      title: "Глава 1: Первая встреча",
      content: [
        "Няша шла всё дальше и дальше, пока не вышла на поляну, где рос необычный цветок. Он переливался всеми цветами радуги и издавал мелодичный звон.",
        "«Какой красивый!» - воскликнула коза, протягивая к нему копытце.",
        "Вдруг цветок заговорил: «Осторожно, маленькая путешественница! Не каждый, кто встретится на твоём пути, будет другом. Но я чувствую доброе сердце в тебе.»",
        "Няша удивилась: «Ты умеешь говорить?»",
        "«Не только говорить, но и предсказывать судьбу, - ответил цветок. - Скоро ты встретишь того, кто изменит твою жизнь.»"
      ]
    },
    3: {
      title: "Глава 2: Тайны прошлого",
      content: [
        "Поляна, на которой рос волшебный цветок, скрывала в себе древние секреты. Няша заметила странные символы на камнях, окружавших её.",
        "«Это письмена древних! - пояснил цветок. - Они рассказывают историю этого леса и тех, кто жил здесь задолго до нас.»",
        "Няша внимательно всматривалась в знаки. Вдруг один из камней засветился, и перед ней предстало видение: девочка с необычной силой, спасающая лес от великой тьмы.",
        "«Это была хранительница леса, - прошептал цветок. - Говорят, её дух до сих пор живёт здесь и ждёт преемника.»"
      ]
    },
    4: {
      title: "Глава 3: Новые знакомые",
      content: [
        "Продолжая путь, Няша встретила зайца, который никак не мог решить задачку: через какую дверь ему идти, чтобы найти морковку.",
        "«Давай помогу!» - предложила Няша, и вместе они разгадали загадку: дверь с изображением солнца вела к самой сочной моркови.",
        "В благодарность заяц подарил Няше волшебный клубок, который всегда указывал правильный путь.",
        "«Этот клубок принадлежал самой хранительнице леса, - сказал заяц. - Думаю, он будет полезен тебе в твоём путешествии.»"
      ]
    },
    5: {
      title: "Глава 4: Испытание",
      content: [
        "Клубок привёл Няшу к подножию высокой горы. На вершине её виднелся светящийся кристалл - сердце леса.",
        "«Чтобы подняться туда, нужно пройти три испытания: смелости, мудрости и доброты», - эхом разнёсся голос ветра.",
        "Первое испытание: Няша должна была перейти шаткий мост над пропастью. Собрав всю смелость, она сделала первый шаг.",
        "Второе испытание: решить загадку древнего сфинкса. Няша долго думала и нашла ответ, который сфинкс не знал сам.",
        "Третье испытание: помочь раненой птице. Няша не раздумывая перевязала её крыло и накормила."
      ]
    },
    6: {
      title: "Глава 5: Откровение",
      content: [
        "Когда Няша преодолела все испытания, кристалл засиял ярче солнца. Из него вышла девочка - та самая хранительница леса.",
        "«Ты прошла все испытания, Няша. Твоё сердце чисто, а намерения благи. Теперь пришло время передать тебе мою силу и знания.»",
        "Кристалл разделился на две части: одна осталась у хранительницы, вторая вошла в Няшу.",
        "«Отныне ты - новая хранительница леса. Защищай его, оберегай всех живых существ и помни: добро всегда возвращается.»"
      ]
    },
    7: {
      title: "Эпилог: Новое начало",
      content: [
        "Няша вернулась домой, но теперь она была другой. В ней текла магия, а в глазах светилась мудрость.",
        "Она рассказала всем о своём приключении и пообещала защищать лес и его обитателей.",
        "Цветок на поляне зацвёл ещё ярче, а волшебный клубок всегда вел путников правильным путём.",
        "Так началась новая глава в жизни маленькой козы Няши, которая стала великой хранительницей волшебного леса.",
        "И если вы когда-нибудь забредёте в этот лес, прислушайтесь к ветру - возможно, он расскажет вам эту удивительную историю..."
      ]
    },
    8: {
      title: "Эпилог: Новое начало",
      content: [
        "Няша вернулась домой, но теперь она была другой. В ней текла магия, а в глазах светилась мудрость.",
        "Она рассказала всем о своём приключении и пообещала защищать лес и его обитателей.",
        "Цветок на поляне зацвёл ещё ярче, а волшебный клубок всегда вел путников правильным путём.",
        "Так началась новая глава в жизни маленькой козы Няши, которая стала великой хранительницей волшебного леса.",
        "И если вы когда-нибудь забредёте в этот лес, прислушайтесь к ветру - возможно, он расскажет вам эту удивительную историю..."
      ]
    }
  };

  const chapter = chaptersContent[chapterId];
  const chapters = [
    { id: 1, title: "Пролог" },
    { id: 2, title: "Глава 1" },
    { id: 3, title: "Глава 2" },
    { id: 4, title: "Глава 3" },
    { id: 5, title: "Глава 4" },
    { id: 6, title: "Глава 5" },
    { id: 7, title: "Эпилог" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#001220] to-[#000713] overflow-x-hidden">
      {/* Фоновый слой */}
      <div className='fixed inset-0 w-full h-full bg-no-repeat z-0 pointer-events-none opacity-30'>
        <Image
          className='object-cover object-center'
          alt='background'
          src="/images/about/AboutGrass.png"
          fill
        />
      </div>

      {/* Верхняя панель навигации */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#000713] to-transparent backdrop-blur-md pt-4 pb-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline text-sm">К главам</span>
            </button>

            <h2 className="text-[clamp(16px,4vw,20px)] font-bold text-white">
              {chapter?.title}
            </h2>

            <button
              onClick={() => setIsChaptersOpen(!isChaptersOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg lg:hidden hover:scale-105 transition-all duration-300"
            >
              <Menu size={18} />
              <span className="text-sm">Главы</span>
            </button>

            {/* Десктопное переключение глав */}
            <div className="hidden lg:flex gap-2">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => onChapterSelect(ch.id)}
                  className={`px-3 py-1 rounded-lg transition-all duration-300 text-sm ${
                    ch.id === chapterId
                      ? 'bg-[#005c7a] text-white'
                      : 'bg-[#00394b70] hover:bg-[#004d66] text-gray-300'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Мобильное меню глав */}
      {isChaptersOpen && (
        <div className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md lg:hidden animate-fade-in" onClick={() => setIsChaptersOpen(false)}>
          <div className="absolute top-20 left-4 right-4 bg-gradient-to-b from-[#00394b] to-[#000713] border border-[#002b47] rounded-2xl p-6 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Оглавление</h3>
              <button onClick={() => setIsChaptersOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-2">
              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => {
                    onChapterSelect(ch.id);
                    setIsChaptersOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                    ch.id === chapterId
                      ? 'bg-[#005c7a] text-white'
                      : 'bg-[#00394b70] text-gray-300'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Контент главы */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {chapter?.content.map((paragraph, idx) => (
              <p 
                key={idx}
                className="text-gray-200 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Нижняя навигация между главами */}
          <div className="flex justify-between mt-12 pt-8 border-t border-[#002b47]">
            {chapterId > 1 ? (
              <button
                onClick={() => onChapterSelect(chapterId - 1)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft size={18} />
                Предыдущая
              </button>
            ) : (
              <div />
            )}
            
            {chapterId < 8 ? (
              <button
                onClick={() => onChapterSelect(chapterId + 1)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
              >
                Следующая
                <ChevronLeft size={18} className="rotate-180" />
              </button>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00394b70] to-[#000713] backdrop-blur-sm border border-[#002b47] rounded-lg hover:scale-105 transition-all duration-300"
              >
                На главную
                <BookOpen size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

