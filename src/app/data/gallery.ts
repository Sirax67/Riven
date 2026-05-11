// app/data/gallery.ts
export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: "characters" | "locations" | "artworks" | "sketches";
  image: string;
  date: string;
  author: string;
}

export const galleryItems: GalleryItem[] = [
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
  },
];

export const categories = [
  { id: "all", name: "Все" },
  { id: "characters", name: "Персонажи" },
  { id: "locations", name: "Локации" },
  { id: "artworks", name: "Арты" },
  { id: "sketches", name: "Скетчи" },
];

// Вспомогательные функции
export function getGalleryItemsByCategory(category: string): GalleryItem[] {
  if (category === "all") return galleryItems;
  return galleryItems.filter(item => item.category === category);
}

export function getGalleryItemById(id: number): GalleryItem | undefined {
  return galleryItems.find(item => item.id === id);
}