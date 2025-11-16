// Dynamic sidebar loader + search + active link highlight
function initSidebarFeatures() {
  const searchInput = document.getElementById('searchVlogs');
  const items = document.querySelectorAll('.vlog-item');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      items.forEach(item => {
        const titleEl = item.querySelector('h3');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        item.style.display = title.includes(term) ? 'flex' : 'none';
      });
    });
  }

  const currentPage = location.pathname.split('/').pop();
  items.forEach(item => {
    const link = item.tagName === 'A' ? item : item.querySelector('a');
    const href = link ? link.getAttribute('href') : null;
    if (href && href === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const sidebarContainer = document.getElementById('sidebarContainer');
  if (sidebarContainer) {
    fetch('sidebar.html')
      .then(r => r.text())
      .then(html => {
        sidebarContainer.outerHTML = html; // replace placeholder with actual sidebar markup
        initSidebarFeatures();
      })
      .catch(err => console.error('Sidebar load failed:', err));
  } else {
    // If page already has sidebar (e.g., legacy), just init features
    initSidebarFeatures();
  }
});
