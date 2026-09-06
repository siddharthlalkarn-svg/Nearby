export const mockExperiences = [
  {
    id: 'exp-001',
    name: 'Street Food Crawl',
    description: 'Taste the best local street food with an expert guide.',
    category: 'Food',
    tags: ['food', 'culture', 'nightlife'],
    location: { lat: 19.0607, lng: 72.8362, name: 'Downtown Market' },
    price: 800,
    durationMinutes: 90,
    rating: 4.8,
    reviewsCount: 124,
    openingHours: { start: 16, end: 23 }, // 4 PM to 11 PM
    availableSlots: ['4:00 PM', '6:00 PM', '8:30 PM'],
    capacity: 10,
    accessibility: ['kidFriendly'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    providerId: 'prov-1'
  },
  {
    id: 'exp-002',
    name: 'Hidden Temple Walk',
    description: 'Discover ancient temples hidden in the modern city.',
    category: 'Culture',
    tags: ['culture', 'adventure'],
    location: { lat: 19.0550, lng: 72.8400, name: 'Old City' },
    price: 400,
    durationMinutes: 120,
    rating: 4.6,
    reviewsCount: 89,
    openingHours: { start: 8, end: 18 }, // 8 AM to 6 PM
    availableSlots: ['8:00 AM', '10:30 AM', '2:00 PM'],
    capacity: 15,
    accessibility: ['kidFriendly', 'wheelchair'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
    providerId: 'prov-2'
  },
  {
    id: 'exp-003',
    name: 'Sunset Kayaking',
    description: 'Paddle through calm waters and watch the sunset.',
    category: 'Adventure',
    tags: ['adventure'],
    location: { lat: 19.1020, lng: 72.8260, name: 'Juhu Beach' },
    price: 1500,
    durationMinutes: 60,
    rating: 4.9,
    reviewsCount: 201,
    openingHours: { start: 16, end: 19 }, // 4 PM to 7 PM
    availableSlots: ['4:30 PM', '5:30 PM', '6:30 PM'],
    capacity: 6,
    accessibility: [],
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    providerId: 'prov-3'
  },
  {
    id: 'exp-004',
    name: 'Artisanal Coffee Tasting',
    description: 'Sample 5 local roasts and learn brewing techniques.',
    category: 'Food',
    tags: ['food', 'culture'],
    location: { lat: 19.0650, lng: 72.8300, name: 'Arts District' },
    price: 1200,
    durationMinutes: 45,
    rating: 4.5,
    reviewsCount: 56,
    openingHours: { start: 9, end: 15 }, 
    availableSlots: ['9:00 AM', '11:00 AM', '1:00 PM'],
    capacity: 8,
    accessibility: ['wheelchair', 'kidFriendly'],
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
    providerId: 'prov-4'
  },
  {
    id: 'exp-005',
    name: 'Neon Night Market',
    description: 'Explore the bustling night market for trinkets and snacks.',
    category: 'Shopping',
    tags: ['shopping', 'nightlife', 'food'],
    location: { lat: 19.0500, lng: 72.8500, name: 'East Plaza' },
    price: 300,
    durationMinutes: 180,
    rating: 4.3,
    reviewsCount: 432,
    openingHours: { start: 18, end: 24 }, 
    availableSlots: ['6:00 PM', '8:00 PM', '10:00 PM'],
    capacity: 100,
    accessibility: ['wheelchair'],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&q=80',
    providerId: 'prov-5'
  },
  {
    id: 'exp-006',
    name: 'Secret Cocktail Bar',
    description: 'Exclusive mixology experience behind a hidden door.',
    category: 'Nightlife',
    tags: ['nightlife'],
    location: { lat: 19.0620, lng: 72.8350, name: 'Downtown Market' },
    price: 2500,
    durationMinutes: 120,
    rating: 4.9,
    reviewsCount: 78,
    openingHours: { start: 20, end: 26 }, // 8 PM to 2 AM
    availableSlots: ['8:30 PM', '10:00 PM', '11:30 PM'],
    capacity: 20,
    accessibility: [],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    providerId: 'prov-6'
  },
  {
    id: 'exp-007',
    name: 'Pottery Workshop',
    description: 'Create your own clay masterpiece with local artisans.',
    category: 'Culture',
    tags: ['culture'],
    location: { lat: 19.0700, lng: 72.8450, name: 'Arts District' },
    price: 1800,
    durationMinutes: 150,
    rating: 4.7,
    reviewsCount: 42,
    openingHours: { start: 10, end: 17 }, 
    availableSlots: ['10:00 AM', '1:30 PM', '3:00 PM'],
    capacity: 12,
    accessibility: ['kidFriendly', 'wheelchair'],
    image: 'https://images.unsplash.com/photo-1610719875143-df9c104e760c?w=800&q=80',
    providerId: 'prov-7'
  },
  {
    id: 'exp-008',
    name: 'Boutique Thrift Shopping',
    description: 'A curated tour of the best vintage clothing spots.',
    category: 'Shopping',
    tags: ['shopping'],
    location: { lat: 19.0520, lng: 72.8420, name: 'Old City' },
    price: 500,
    durationMinutes: 90,
    rating: 4.4,
    reviewsCount: 31,
    openingHours: { start: 11, end: 19 }, 
    availableSlots: ['11:00 AM', '2:00 PM', '4:30 PM'],
    capacity: 5,
    accessibility: [],
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80',
    providerId: 'prov-8'
  },
  {
    id: 'exp-009',
    name: 'Cliffside Hike',
    description: 'A challenging hike with breathtaking ocean views.',
    category: 'Adventure',
    tags: ['adventure'],
    location: { lat: 19.1170, lng: 72.9060, name: 'Powai Lake' },
    price: 0,
    durationMinutes: 240,
    rating: 4.8,
    reviewsCount: 167,
    openingHours: { start: 6, end: 18 }, 
    availableSlots: ['6:00 AM', '8:00 AM', '3:00 PM'],
    capacity: 30,
    accessibility: [],
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    providerId: 'prov-9'
  }
];

export function addExperience(newExp) {
  const id = 'exp-custom-' + Date.now();
  mockExperiences.push({
    ...newExp,
    id,
    rating: 5.0, // newly added, default to 5
    reviewsCount: 0,
    providerId: 'prov-me', // User's provider id
    isProviderCreated: true
  });
}

export function getProviderExperiences() {
  // Return the user's custom created ones, plus one mock one so dashboard isn't empty
  const custom = mockExperiences.filter(e => e.isProviderCreated);
  const mock = mockExperiences.find(e => e.id === 'exp-004'); // Artisanal Coffee Tasting
  return [mock, ...custom].filter(Boolean);
}

// --- Bookmarks State ---
const savedIds = new Set();

export function toggleSave(id) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
  } else {
    savedIds.add(id);
  }
}

export function isSaved(id) {
  return savedIds.has(id);
}
