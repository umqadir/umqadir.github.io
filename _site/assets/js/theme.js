// Theme system - currently forced to light mode
// Dark theme code preserved for future use
(function() {
  const root = document.documentElement;
  
  // Force light theme for now
  root.setAttribute('data-theme', 'light');
  
  /* Vestigial dark theme code for future use:
  
  const storageKey = 'theme-preference';
  const media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  
  function apply(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme'); // use system preference
    }
  }
  
  function currentPref() {
    try { return localStorage.getItem(storageKey) || 'auto'; } catch(e) { return 'auto'; }
  }
  
  function setPref(theme) {
    try { localStorage.setItem(storageKey, theme); } catch(e) {}
    apply(theme);
  }
  
  */
})();
