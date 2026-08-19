const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const search = document.getElementById('command-search');
if (search) {
  const commands = [...document.querySelectorAll('.command')];
  const groups = [...document.querySelectorAll('.command-group')];
  const count = document.getElementById('command-count');
  const noResults = document.getElementById('no-results');

  const filter = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    commands.forEach((command) => {
      const match = command.textContent.toLowerCase().includes(query);
      command.style.display = match ? '' : 'none';
      if (match) visible += 1;
    });
    groups.forEach((group) => {
      const hasVisible = group.querySelector('.command:not([style*="display: none"])');
      group.style.display = hasVisible ? '' : 'none';
    });
    if (count) count.textContent = `${visible} command${visible === 1 ? '' : 's'}`;
    if (noResults) noResults.classList.toggle('hidden', visible !== 0);
  };

  search.addEventListener('input', filter);
}
