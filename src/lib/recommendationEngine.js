import { mockExperiences } from '../data/mockExperiences.js';

/**
 * Calculates straight line distance roughly. For MVP, we use a simple placeholder distance
 * since we just need to demonstrate constraint-aware ranking.
 */
function getApproxDistance(loc1, loc2) {
  // Mock distance logic returning a random but consistent distance based on IDs or just a fixed value if no user location
  if (!loc1 || !loc2) return Math.random() * 5 + 0.5; // 0.5km to 5.5km
  const dx = loc1.lat - loc2.lat;
  const dy = loc1.lng - loc2.lng;
  return Math.sqrt(dx * dx + dy * dy) * 111; // rough km conversion
}

export function getRecommendations(constraints) {
  const { interests, budget, availableMinutes, location } = constraints;
  
  const scored = mockExperiences.map(exp => {
    let reasons = [];
    let score = 0;
    
    // 1. Time Fit (25%)
    let timeFitScore = 0;
    if (exp.durationMinutes <= availableMinutes) {
      timeFitScore = 1;
      reasons.push(`Fits your ${Math.floor(availableMinutes / 60)}hr window`);
    } else {
      // Strongly penalize if it doesn't fit the time
      timeFitScore = -2; 
    }
    
    // 2. Budget Fit (20%)
    let budgetFitScore = 0;
    if (exp.price <= budget) {
      budgetFitScore = 1;
      const diff = budget - exp.price;
      if (diff > 0) {
        reasons.push(`₹${diff} under budget`);
      } else {
        reasons.push(`Exactly matches your budget`);
      }
    } else {
      // Strongly penalize if over budget
      budgetFitScore = -2;
    }
    
    // 3. Interest Match (35%)
    let interestScore = 0;
    const matchingInterests = exp.tags.filter(t => interests.includes(t));
    if (matchingInterests.length > 0) {
      interestScore = matchingInterests.length / interests.length; // 0 to 1
      reasons.push(`Matches your ${matchingInterests.join(' + ')} interest`);
    }
    
    // 4. Distance Fit (15%)
    // Since we don't have real user location, we'll mock distance.
    const distanceKm = getApproxDistance(location, exp.location).toFixed(1);
    let distanceScore = Math.max(0, 1 - (distanceKm / 10)); // closer is better, up to 10km
    reasons.push(`${distanceKm} km away`);
    
    // 5. Rating Fit (5%)
    let ratingScore = exp.rating / 5;
    
    // Calculate total
    score = (interestScore * 0.35) + 
            (timeFitScore * 0.25) + 
            (budgetFitScore * 0.20) + 
            (distanceScore * 0.15) + 
            (ratingScore * 0.05);
            
    // Convert to percentage, ensuring max 100% and min 0%
    let matchPercent = Math.round(Math.max(0, Math.min(100, score * 100)));
    
    return {
      ...exp,
      matchPercent,
      reasons,
      distanceKm
    };
  });
  
  // Filter out severely penalized items (those over budget or over time)
  // Or just sort them at the bottom. MVP rule: "Experiences that cannot reasonably fit should be strongly penalized or excluded"
  const valid = scored.filter(exp => exp.price <= budget && exp.durationMinutes <= availableMinutes);
  
  // Rank by match percent descending
  valid.sort((a, b) => b.matchPercent - a.matchPercent);
  
  return valid;
}
