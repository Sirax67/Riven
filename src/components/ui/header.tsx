'use client'

import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Header () {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Блокируем скролл body когда меню открыто
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Функция для плавной прокрутки к секции
    const scrollToSection = (sectionId: string) => {
        setIsOpen(false) // Закрываем мобильное меню
        const element = document.getElementById(sectionId)
        if (element) {
            const headerOffset = 80 // Высота шапки
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <header className={`
            fixed top-0 z-50 w-full transition-all duration-300
            ${isOpen 
                ? 'bg-black' 
                : scrolled 
                    ? 'bg-black/40 backdrop-blur-2xl' 
                    : 'bg-transparent'
            }
        `}>
            <div className="flex justify-between w-full items-center px-4 sm:px-6 lg:px-12 py-2">
                <Link href="/" className="relative z-50" onClick={() => scrollToSection('welcome')}>
                    <Image 
                        alt="Riven Logo"
                        width={60}
                        height={60}
                        src="/images/logo.svg"
                        className="w-12 h-12 lg:w-[60px] lg:h-[60px]"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6 text-white text-sm">
                    <button 
                        onClick={() => scrollToSection('about')}
                        className="hover:underline transition cursor-pointer"
                    >
                        О мире
                    </button>
                    <button 
                        onClick={() => scrollToSection('characters')}
                        className="hover:underline transition cursor-pointer"
                    >
                        Персонажи
                    </button>
                    <button 
                        onClick={() => scrollToSection('history')}
                        className="hover:underline transition cursor-pointer"
                    >
                        История
                    </button>
                    <button 
                        onClick={() => scrollToSection('footer')}
                        className="hover:underline transition cursor-pointer"
                    >
                        Контакты
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}                
                    className="relative z-50 bg-white rounded p-2 text-black lg:hidden cursor-pointer transition hover:bg-gray-100"
                    aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
                    aria-expanded={isOpen}
                >
                    <Menu className={`
                        w-4 h-4 transition
                        ${isOpen ? 'hidden' : 'block'}
                    `}/>
                    <X className={`
                        w-4 h-4 transition
                        ${isOpen ? 'block' : 'hidden'}
                    `}/>
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="
                    fixed inset-0 top-0
                    w-full min-h-screen
                    bg-black/95 backdrop-blur-md
                    pt-30
                    flex flex-col items-center
                    lg:hidden
                ">
                    <div className="flex flex-col gap-8 text-center text-xl">
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="hover:underline transition hover:text-gray-300 cursor-pointer"
                        >
                            О мире
                        </button>
                        <button 
                            onClick={() => scrollToSection('characters')}
                            className="hover:underline transition hover:text-gray-300 cursor-pointer"
                        >
                            Персонажи
                        </button>
                        <button 
                            onClick={() => scrollToSection('history')}
                            className="hover:underline transition hover:text-gray-300 cursor-pointer"
                        >
                            История
                        </button>
                        <button 
                        onClick={() => scrollToSection('footer')}
                        className="hover:underline transition cursor-pointer"
                    >
                        Контакты
                    </button>
                    </div>
                </nav>
            )}
        </header>
    )
}