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
  // ========== ПЕРСОНАЖИ (characters) ==========
  {
    id: 1,
    title: "Козетта",
    description: "Главная героиня. Новый дизайн.",
    category: "characters",
    image: "/images/gallery/characters/Kozetta_new.png",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 2,
    title: "Рихард",
    description: "Герцог восточных земель",
    category: "characters",
    image: "/images/gallery/characters/rihard.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 3,
    title: "Семья Рихарда",
    description: "Семья Рихарда",
    category: "characters",
    image: "/images/gallery/characters/familirih.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== АРТЫ (arts) ==========
  {
    id: 4,
    title: "Козетта с мячом",
    description: "Козетта с мячом",
    category: "artworks",
    image: "/images/gallery/arts/kozettaball.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 5,
    title: "Раненая Козетта",
    description: "Момент, когда Козетта получает ранение",
    category: "artworks",
    image: "/images/gallery/arts/kozettahurt.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 6,
    title: "Грустная Козетта",
    description: "Эмоциональный момент грусти главной героини",
    category: "artworks",
    image: "/images/gallery/arts/kozettasad.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 7,
    title: "Арт Козетты",
    description: "Художественное изображение Козетты",
    category: "artworks",
    image: "/images/gallery/arts/photo_2026-05-13_23-35-11.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 8,
    title: "Рихард",
    description: "Арт герцога Рихарда",
    category: "artworks",
    image: "/images/gallery/arts/rihard.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== ЛОКАЦИИ (locations) ==========
  {
    id: 9,
    title: "Рабочий стол",
    description: "Рабочее место или сцена за столом",
    category: "locations",
    image: "/images/gallery/locations/desk.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 10,
    title: "Лес первой крови",
    description: "Лес, где по легенде богиня Тия принесла себя в жертву",
    category: "locations",
    image: "/images/gallery/locations/forest.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 11,
    title: "Карта мира",
    description: "Карта мира вселенной",
    category: "locations",
    image: "/images/gallery/locations/map.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 12,
    title: "Заточение Тии",
    description: "Место, где была заточена богиня Тия",
    category: "locations",
    image: "/images/gallery/locations/Tree.jpg",
    date: "2026",
    author: "Hiteruu",
  },

  // ========== СКЕТЧИ (scetches) ==========
  {
    id: 13,
    title: "Козетта ",
    description: "Концепт Козетты в голубом платье",
    category: "sketches",
    image: "/images/gallery/scetches/bluedresskos.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 14,
    title: "Сцена ночью",
    description: "Взрыв сосуда",
    category: "sketches",
    image: "/images/gallery/scetches/boom.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 15,
    title: "Blue & pink?",
    description: "Скетч платья на балл",
    category: "sketches",
    image: "/images/gallery/scetches/dressbluepink.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 16,
    title: "Элизабет",
    description: "Скетч персонажа Элизабет",
    category: "sketches",
    image: "/images/gallery/scetches/elisabettt.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 17,
    title: "Элис и Луис",
    description: "Скетч персонажей Элис и Луис",
    category: "sketches",
    image: "/images/gallery/scetches/ElisLuis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 18,
    title: "Семья Рихарда",
    description: "Семья Рихарда",
    category: "sketches",
    image: "/images/gallery/scetches/familiirih.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 19,
    title: "Первый дизайн Козетты",
    description: "Ранний концепт-арт Козетты",
    category: "sketches",
    image: "/images/gallery/scetches/firstkozettadis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 20,
    title: "Хунис",
    description: "Скетч персонажа Хунис",
    category: "sketches",
    image: "/images/gallery/scetches/hunis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 21,
    title: "Первый дизайн Хунис",
    description: "Ранний концепт персонажа Хунис",
    category: "sketches",
    image: "/images/gallery/scetches/hunisfirstdis.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 22,
    title: "Иса",
    description: "Скетч персонажа Иса",
    category: "sketches",
    image: "/images/gallery/scetches/isa.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 23,
    title: "Козетта 1",
    description: "Скетч Козетты вариант 1",
    category: "sketches",
    image: "/images/gallery/scetches/kozetta1.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 24,
    title: "Козетта 2",
    description: "Скетч Козетты вариант 2",
    category: "sketches",
    image: "/images/gallery/scetches/kozetta2.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 25,
    title: "Козетта 3",
    description: "Скетч Козетты вариант 3",
    category: "sketches",
    image: "/images/gallery/scetches/kozetta3.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 26,
    title: "Рихард (скетч)",
    description: "Скетч Рихарда",
    category: "sketches",
    image: "/images/gallery/scetches/rihard.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 27,
    title: "Рихард ",
    description: " Скетч Рихарда",
    category: "sketches",
    image: "/images/gallery/scetches/rihard2.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 28,
    title: "Рихард скетч",
    description: "Скетч Рихарда",
    category: "sketches",
    image: "/images/gallery/scetches/rihardsctch.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 29,
    title: "Священники",
    description: "Скетч священников/жрецов",
    category: "sketches",
    image: "/images/gallery/scetches/svyasheniki.jpg",
    date: "2026",
    author: "Hiteruu",
  },
  {
    id: 30,
    title: "Водяные цветы",
    description: "Красивый скетч с водяными цветами",
    category: "sketches",
    image: "/images/gallery/scetches/watterflowers.jpg",
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

// Получить количество элементов по категориям
export function getCategoryCount(): Record<string, number> {
  const counts: Record<string, number> = {
    all: galleryItems.length,
    characters: 0,
    locations: 0,
    artworks: 0,
    sketches: 0,
  };
  
  galleryItems.forEach(item => {
    counts[item.category]++;
  });
  
  return counts;
}