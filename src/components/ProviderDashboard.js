import { getProviderExperiences } from '../data/mockExperiences.js';

export function renderProviderDashboard(container, navigateTo) {
  const experiences = getProviderExperiences();

  container.innerHTML = `
    <div class="onboarding-layout" style="align-items: flex-start;">
      <!-- Left Column: Header and Active Listings -->
      <div style="flex: 2; max-width: 800px;">
        <div class="onboarding-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px;">
          <div>
            <span style="font-weight: 700; color: var(--color-primary); text-transform: uppercase; font-size: 12px; letter-spacing: 0.05em;">Host Hub</span>
            <h1 class="headline-md" style="margin-top: 4px; margin-bottom: 8px;">Welcome back, Mumbai Locals.</h1>
            <p>Manage your local experiences and monitor performance.</p>
          </div>
          <button id="createListingBtn" class="btn btn-primary" style="width: auto;">
            + New Listing
          </button>
        </div>

        <div>
          <h3 style="margin-bottom: 24px; font-weight: 700; font-size: 20px;">Your Active Experiences</h3>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            ${experiences.map(exp => {
              const views = Math.floor(Math.random() * 500) + 50;
              const saves = Math.floor(views * 0.15);
              return `
                <div style="background: var(--color-surface); border: 1px solid rgba(30, 30, 36, 0.08); border-radius: var(--radius-lg); padding: 20px; display: flex; gap: 24px; box-shadow: var(--shadow-level-1);">
                  <img src="${exp.image}" style="width: 140px; height: 140px; border-radius: 12px; object-fit: cover;">
                  <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                      <h4 style="font-size: 20px; margin-bottom: 4px; font-weight: 700;">${exp.name}</h4>
                      <p style="color: var(--color-text-light); font-size: 14px; margin-bottom: 16px;">₹${exp.price} • ${exp.durationMinutes} mins • ${exp.category}</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: rgba(30, 30, 36, 0.03); padding: 12px; border-radius: 8px;">
                      <div>
                        <div style="font-size: 11px; font-weight: 700; color: var(--color-text-light); text-transform: uppercase;">Views</div>
                        <div style="font-size: 16px; font-weight: 800;">${views}</div>
                      </div>
                      <div>
                        <div style="font-size: 11px; font-weight: 700; color: var(--color-text-light); text-transform: uppercase;">Saves</div>
                        <div style="font-size: 16px; font-weight: 800;">${saves}</div>
                      </div>
                      <div>
                        <div style="font-size: 11px; font-weight: 700; color: var(--color-text-light); text-transform: uppercase;">Rating</div>
                        <div style="font-size: 16px; font-weight: 800;">${exp.rating}</div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
            ${experiences.length === 0 ? '<p>You have no active listings. Start by creating one!</p>' : ''}
          </div>
        </div>
      </div>

      <!-- Right Column: Live Activity Mock -->
      <div style="flex: 1; background: var(--color-surface); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-level-2); border: 1px solid rgba(30, 30, 36, 0.05); min-width: 320px;">
        <h3 style="margin-bottom: 24px; font-weight: 700; font-size: 18px;">Live Activity</h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="padding-bottom: 16px; border-bottom: 1px solid rgba(30,30,36,0.05);">
            <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
              <span style="font-weight:700; font-size:14px;">New Request</span>
              <span style="color:var(--color-text-light); font-size:12px;">2m ago</span>
            </div>
            <p style="font-size:13px; color:var(--color-text-light);">Arjun requested a slot for Juhu Beach Picnic.</p>
          </div>

          <div style="padding-bottom: 16px; border-bottom: 1px solid rgba(30,30,36,0.05);">
            <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
              <span style="font-weight:700; font-size:14px;">Review Added</span>
              <span style="color:var(--color-text-light); font-size:12px;">1h ago</span>
            </div>
            <p style="font-size:13px; color:var(--color-text-light);">5 stars received for Bandra Food Walk.</p>
          </div>

          <div>
            <div style="display:flex; justify-content:space-between; margin-bottom: 4px;">
              <span style="font-weight:700; font-size:14px;">Trending</span>
              <span style="color:var(--color-text-light); font-size:12px;">Today</span>
            </div>
            <p style="font-size:13px; color:var(--color-text-light);">Searches for "nightlife" are up 24% in your area.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Removed closeBtn as we now use global nav to navigate around

  container.querySelector('#createListingBtn').addEventListener('click', () => {
    navigateTo('PROVIDER_FORM');
  });
}
