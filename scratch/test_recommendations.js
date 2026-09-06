import { mockExperiences } from '../src/data/mockExperiences.js';
import { getRecommendations } from '../src/lib/recommendationEngine.js';

const constraints = {
  interests: ['food', 'nightlife'],
  budget: 1500,
  availableMinutes: 120,
  location: { lat: 19.05, lng: 72.84 },
  groupType: 'solo'
};

const results = getRecommendations(constraints);
console.log(JSON.stringify(results, null, 2));
