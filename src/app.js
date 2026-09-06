import { renderOnboarding } from './components/Onboarding.js';
import { renderRecommendationFeed } from './components/RecommendationFeed.js';
import { renderExperienceDetail } from './components/ExperienceDetail.js';
import { renderProviderForm } from './components/ProviderForm.js';
import { renderProviderDashboard } from './components/ProviderDashboard.js';
import { addExperience } from './data/mockExperiences.js';

const appContainer = document.getElementById('app');

// State holding user constraints
let globalConstraints = null;

function startApp() {
  setupNavigation();
  showOnboarding();
}

function updateNavState(activeId) {
  document.querySelectorAll('.nav-link, .mobile-nav-item').forEach(el => el.classList.remove('active'));
  if (activeId) {
    document.querySelectorAll(activeId).forEach(el => el.classList.add('active'));
  }
}

function setupNavigation() {
  // Desktop Nav
  document.getElementById('navHome').addEventListener('click', () => showOnboarding());
  document.getElementById('navExplore').addEventListener('click', () => showFeed(globalConstraints || { interests: [], budget: 5000, availableMinutes: 240, groupType: 'solo' }));
  document.getElementById('navProvider').addEventListener('click', () => showProviderDashboard());
  document.getElementById('footerProviderLink').addEventListener('click', (e) => { e.preventDefault(); showProviderDashboard(); });

  // Mobile Nav
  document.getElementById('mobNavExplore').addEventListener('click', () => showFeed(globalConstraints || { interests: [], budget: 5000, availableMinutes: 240, groupType: 'solo' }));
  document.getElementById('mobNavProvider').addEventListener('click', () => showProviderDashboard());
  
  // Expose global hook for internal links
  window.onGoToProvider = () => showProviderDashboard();
}

function showOnboarding() {
  updateNavState(null); // home isn't specifically highlighted
  appContainer.innerHTML = '';
  
  // Attach global callback for the provider link (kept for legacy if used in views)
  window.onGoToProvider = () => showProviderDashboard();

  renderOnboarding(
    appContainer, 
    // onComplete (recommendation flow)
    (constraints) => {
      globalConstraints = constraints;
      showFeed(constraints);
    },
    // onSelectExperience (direct map exploration)
    (experience) => {
      showDetail(experience);
    }
  );
}

function showFeed(constraints) {
  updateNavState('#navExplore, #mobNavExplore');
  appContainer.innerHTML = '';
  renderRecommendationFeed(appContainer, constraints, 
    // onReplan callback
    () => {
      showOnboarding();
    },
    // onSelectExperience callback
    (experience) => {
      showDetail(experience);
    }
  );
}

function showDetail(experience) {
  appContainer.innerHTML = '';
  renderExperienceDetail(appContainer, experience, () => {
    // Back button clicked, go to feed
    if (globalConstraints) {
      showFeed(globalConstraints);
    } else {
      showOnboarding();
    }
  });
}

function showProviderDashboard() {
  updateNavState('#navProvider, #mobNavProvider');
  appContainer.innerHTML = '';
  renderProviderDashboard(appContainer, (nextView) => {
    if (nextView === 'ONBOARDING') showOnboarding();
    if (nextView === 'PROVIDER_FORM') showProviderForm();
  });
}

function showProviderForm() {
  appContainer.innerHTML = '';
  renderProviderForm(appContainer, 
    // onPublish
    (listingData) => {
      addExperience(listingData);
      // Redirect back to dashboard instead of feed
      showProviderDashboard();
    },
    // onCancel
    () => {
      showProviderDashboard();
    }
  );
}

// Initialize
startApp();
