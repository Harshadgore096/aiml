// Minimal search and active link script for multi-page blog
document.addEventListener('DOMContentLoaded', () => {
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
    // Allow either the item itself to be a link or contain a link
    const link = item.tagName === 'A' ? item : item.querySelector('a');
    const href = link ? link.getAttribute('href') : null;
    if (href && href === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
