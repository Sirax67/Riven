'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#00061d] to-[#010011] border-t border-[#001827]">
      <div className='absolute inset-0 w-full h-full bg-no-repeat z-0 opacity-30 pointer-events-none'>
        <Image
          className='object-cover object-center'
          alt='background'
          src="/images/about/AboutGrass.png"
          fill
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="relative w-32 h-17">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed ">
              Добро пожаловать в мир магии, тайн и судеб, где обычные 
              люди сталкиваются с необычными событиями. 
              Познакомьтесь с героями и их историями.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#welcome" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  О мире
                </Link>
              </li>
              <li>
                <Link href="/#characters" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  Персонажи
                </Link>
              </li>
              <li>
                <Link href="/#history" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  История
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Страницы</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/StoryReader" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  Читать сюжет
                </Link>
              </li>
              <li>
                <Link href="/AddStory" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  Дополнительный сюжет
                </Link>
              </li>
              <li>
                <Link href="/Gallery" className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 text-sm">
                  Галерея
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Социальные сети</h3>
            <div className="space-y-3">

              <a
                href="https://t.me/Sirax_67"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group hover:translate-x-1"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#000d16] to-[#00040c] border-t border-[#001827] flex items-center justify-center group-hover:border-[#00397a] transition-colors">
                  <Image
                  className='object-cover'
                  alt='telegram'
                  width={15}
                  height={15}
                  src='/images/icons/telegram.svg'
                  ></Image>
                </div>
                <span className="text-sm">@Sirax_67</span>
              </a>

              <a
                href="https://www.tiktok.com/@hiteruu4?_r=1&_t=ZS-96Dou7EqUsc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group hover:translate-x-1"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#000d16] to-[#00040c] border-t border-[#001827] flex items-center justify-center group-hover:border-[#00397a] transition-colors">
                  <Image
                  className='object-cover'
                  alt='telegram'
                  width={15}
                  height={15}
                  src='/images/icons/tiktok.svg'
                  ></Image>
                </div>
                <span className="text-sm">@hiteruu4</span>
              </a>

              <a
                href="https://t.me/hiteruu4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group hover:translate-x-1"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#000d16] to-[#00040c] border-t border-[#001827] flex items-center justify-center group-hover:border-[#00397a] transition-colors">
                  <Image
                  className='object-cover'
                  alt='telegram'
                  width={15}
                  height={15}
                  src='/images/icons/telegram.svg'
                  ></Image>
                </div>
                <span className="text-sm">Канал @hiteruu4</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#001827] flex flex-col sm:flex-row justify-between items-center gap-4" id='footer'>
          <p className="text-gray-500 text-sm ">
            © {currentYear} Спасибо за просмотр
          </p>
          
        </div>
      </div>
    </footer>
  );
}