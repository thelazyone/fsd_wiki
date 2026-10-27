const box = document.querySelector('.search');
const navigation = document.querySelector('.navigation');
if (matchMedia('(max-width: 640px)').matches) navigation.open = false;
if (box) {
  box.hidden = false;
  const input = box.querySelector('input');
  const results = document.querySelector('#search-results');
  const status = document.querySelector('#search-status');
  let indexPromise;
  let revision = 0;
  input.addEventListener('input', async () => {
    const current = ++revision;
    const query = input.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    status.textContent = '';
    if (!query) return;
    status.textContent = 'Searching…';
    try {
      indexPromise ||= fetch(box.dataset.index).then(response => {
        if (!response.ok) throw new Error('Search unavailable');
        return response.json();
      }).catch(error => { indexPromise = undefined; throw error; });
      const index = await indexPromise;
      if (current !== revision) return;
      const terms = query.split(/\s+/);
      const matches = index.filter(entry => terms.every(term => `${entry.title} ${entry.body}`.toLocaleLowerCase().includes(term)));
      matches.sort((a, b) => Number(b.title.toLocaleLowerCase().includes(query)) - Number(a.title.toLocaleLowerCase().includes(query)));
      status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'}` : 'No matching entries.';
      for (const entry of matches) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = entry.url;
        link.textContent = entry.title;
        item.append(link);
        results.append(item);
      }
    } catch {
      if (current === revision) status.textContent = 'Search is unavailable. Browse the archive using the navigation above.';
    }
  });
}
