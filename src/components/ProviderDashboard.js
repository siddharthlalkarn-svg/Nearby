import { getProviderExperiences } from '../data/mockExperiences.js';

export function renderProviderDashboard(container, navigateTo) {
  const experiences = getProviderExperiences();

  container.innerHTML = `
    <div class="onboarding-screen" style="max-width: 800px;">
      <div class="onboarding-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
        <div>
          <h1 style="margin-bottom: 8px;">Provider Dashboard</h1>
          <p>Manage your local experiences and see how they are performing.</p>
        </div>
        <button id="closeBtn" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--color-text-light);">×</button>
      </div>

      <button id="createListingBtn" class="btn btn-primary" style="margin-bottom: 32px; max-width: 200px;">
        + Create New Listing
      </button>

      <div>
        <h3 style="margin-bottom: 16px; font-weight: 700;">Your Active Listings</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${experiences.map(exp => {
            // Generate some mock stats
            const views = Math.floor(Math.random() * 500) + 50;
            const saves = Math.floor(views * 0.15);
            return `
              <div style="background: var(--color-surface); border: 1px solid rgba(30, 30, 36, 0.08); border-radius: var(--radius-lg); padding: 16px; display: flex; gap: 16px; box-shadow: var(--shadow-level-1);">
                <img src="${exp.image}" style="width: 100px; height: 100px; border-radius: 8px; object-fit: cover;">
                <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                  <h4 style="font-size: 18px; margin-bottom: 4px; font-weight: 700;">${exp.name}</h4>
                  <p style="color: var(--color-text-light); font-size: 14px; margin-bottom: 12px;">₹${exp.price} • ${exp.durationMinutes} mins • ${exp.category}</p>
                  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <span class="stat-chip">👀 ${views} Views</span>
                    <span class="stat-chip">❤️ ${saves} Saves</span>
                    <span class="stat-chip">⭐ ${exp.rating} Rating</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
          ${experiences.length === 0 ? '<p>You have no active listings.</p>' : ''}
        </div>
      </div>
    </div>
  `;

  container.querySelector('#closeBtn').addEventListener('click', () => {
    navigateTo('ONBOARDING');
  });

  container.querySelector('#createListingBtn').addEventListener('click', () => {
    navigateTo('PROVIDER_FORM');
  });
}
