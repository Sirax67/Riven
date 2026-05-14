export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: ("characters" | "locations" | "artworks" | "sketches")[]; // Теперь массив
  image: string;
  date: string;
  author: string;
}

export const galleryItems: GalleryItem[] = [
  // ========== ПЕРСОНАЖИ  ==========
  {
    id: 1,
    title: "Козетта",
    description: "Главная героиня. Новый дизайн.",
    category: ["characters", "artworks"],
    image: "/images/gallery/arts/kozetta_new.png",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 2,
    title: "Рихард",
    description: "Герцог восточных земель",
    category: ["characters", "sketches"],
    image: "/images/gallery/characters/rihard.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 3,
    title: "Семья Рихарда",
    description: "Семья Рихарда: мать, отец, брат и сестра, мачеха",
    category: ["characters", "sketches"],
    image: "/images/gallery/characters/familirih.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== АРТЫ (arts) ==========
  {
    id: 4,
    title: "Козетта с сосудом",
    description: "Совсем скоро она не будет так любопытно смотреть",
    category: ["artworks"],
    image: "/images/gallery/arts/kozettaball.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 5,
    title: "Sinking Town-Yoeko Kurahashi",
    description: "Namida no oike wa Dondon dondon fuеteiku",
    category: ["artworks"],
    image: "/images/gallery/arts/kozettahurt.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 6,
    title: "Козетта.",
    description: " ",
    category: ["artworks"],
    image: "/images/gallery/arts/kozettasad.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 7,
    title: "Козетта старый дизайн",
    description: "Старый дизайн",
    category: ["artworks"],
    image: "/images/gallery/arts/photo_2026-05-13_23-35-11.jpg",
    date: "2024",
    author: "Hiteruu",
  },
  {
    id: 8,
    title: "Рихард",
    description: "Рихард арт",
    category: ["artworks"],
    image: "/images/gallery/arts/rihard.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== ЛОКАЦИИ (locations) ==========
  {
    id: 9,
    title: "Рабочий стол",
    description: "Рабочее место и невник козетты (незаполненный)",
    category: ["locations"],
    image: "/images/gallery/locations/desk.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 10,
    title: "Лес первой крови",
    description: "Лес, где по легенде богиня Тия принесла себя в жертву",
    category: ["locations"],
    image: "/images/gallery/locations/forest.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 11,
    title: "Карта мира (скетч)",
    description: "Карта мира вселенной",
    category: ["locations"],
    image: "/images/gallery/locations/map.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 12,
    title: "Заточение Тии",
    description: "Место, где была заточена богиня Тия",
    category: ["locations"],
    image: "/images/gallery/locations/Tree.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== СКЕТЧИ (scetches) ==========
  {
    id: 13,
    title: "Козетта ",
    description: "Концепт Козетты в голубом платье",
    category: ["sketches"],
    image: "/images/gallery/scetches/bluedresskos.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 14,
    title: "Ночь",
    description: "сцена из 2 главы - взрыв сосуда",
    category: ["sketches"],
    image: "/images/gallery/scetches/boom.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 15,
    title: "Blue & pink?",
    description: "Скетч платья на балл в конце первого тома",
    category: ["sketches"],
    image: "/images/gallery/scetches/dressbluepink.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 16,
    title: "Элизабет",
    description: "Скетч Элизабет (мать Козетты)",
    category: ["sketches", "characters"],
    image: "/images/gallery/scetches/elisabett.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 17,
    title: "Элис и Льюс",
    description: "Скетч Элис и Льюиса",
    category: ["sketches", "characters"],
    image: "/images/gallery/scetches/ElisLuis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 19,
    title: "Первый дизайн Козетты",
    description: "Самый первый арт Козетты, с тех пор многое исменилось",
    category: ["sketches"],
    image: "/images/gallery/scetches/firstkozettadis.jpg",
    date: "2024",
    author: "Hiteruu",
  },
  {
    id: 20,
    title: "Ханис",
    description: "Королева Ханис, прозванная тираншей",
    category: ["sketches", "characters"],
    image: "/images/gallery/scetches/hunis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 21,
    title: "Первый дизайн Ханис",
    description: "Ранний концепт Ханис",
    category: ["sketches"],
    image: "/images/gallery/scetches/hunisfirstdis.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 22,
    title: "Иса",
    description: "Исабелла, родная мать Рихарда",
    category: ["sketches"],
    image: "/images/gallery/scetches/isa.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 23,
    title: "Референс Козетты",
    description: "Скетч Козетты 3 дизайн",
    category: ["sketches"],
    image: "/images/gallery/scetches/kozetta1.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 24,
    title: "Референс Козетты",
    description: "Скетч Козетты 2 дизайн",
    category: ["sketches"],
    image: "/images/gallery/scetches/kozetta2.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 25,
    title: "Арт Козетты",
    description: "Арт старого дизайна Зетты",
    category: ["sketches"],
    image: "/images/gallery/scetches/kozetta3.jpg",
    date: "2024",
    author: "Hiteruu",
  },
  {
    id: 27,
    title: "Рихард",
    description: " Скетч Рихарда",
    category: ["sketches"],
    image: "/images/gallery/scetches/rihard2.jpg",
    date: "2025",
    author: "Hiteruu",
  },
  {
    id: 28,
    title: "Рихард скетч",
    description: "Скетч Рихарда",
    category: ["sketches"],
    image: "/images/gallery/scetches/rihardscetch.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 29,
    title: "Священники",
    description: "Скетч главного священника и его приемника",
    category: ["sketches", "characters"],
    image: "/images/gallery/scetches/svyasheniki.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 30,
    title: "Вода смывает воспоминания",
    description: "...",
    category: ["sketches"],
    image: "/images/gallery/scetches/watterflowers.jpg",
    date: "2025",
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

export function getGalleryItemsByCategory(category: string): GalleryItem[] {
  if (category === "all") return galleryItems;
  return galleryItems.filter(item => item.category.includes(category as any));
}

export function getGalleryItemById(id: number): GalleryItem | undefined {
  return galleryItems.find(item => item.id === id);
}

export function getGalleryItemsBySearch(query: string): GalleryItem[] {
  if (!query) return galleryItems;
  const lowerQuery = query.toLowerCase();
  return galleryItems.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.author.toLowerCase().includes(lowerQuery)
  );
}

export function getLatestItems(limit: number = 6): GalleryItem[] {
  return [...galleryItems].slice(-limit).reverse();
}

export function getItemsByAuthor(author: string): GalleryItem[] {
  return galleryItems.filter(item => item.author === author);
}

export function getCategoryCount(): Record<string, number> {
  const counts: Record<string, number> = {
    all: galleryItems.length,
    characters: 0,
    locations: 0,
    artworks: 0,
    sketches: 0,
  };
  
  galleryItems.forEach(item => {
    item.category.forEach(cat => {
      counts[cat]++;
    });
  });
  
  return counts;
}