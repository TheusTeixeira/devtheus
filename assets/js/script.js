const mode = document.getElementById('mode');
mode.addEventListener('click', () => {
    const form = document.getElementById('form');
    const body = document.getElementById('body');
  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');
    form.classList.add('dark')
    body.classList.add('bdark')
    return;
  }
  mode.classList.remove('fa-sun');
  mode.classList.add('fa-moon');
  form.classList.remove('dark')
  body.classList.remove('bdark')
});
