const dark = document.getElementById('dark');
const light = document.getElementById('light');

dark.addEventListener('click', () => {
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#f0f0f0';
    dark.style.display = 'none';
    light.style.color = 'black';
    light.style.display = 'block';
});

light.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    light.style.display = 'none';
    dark.style.color = 'white';
    dark.style.display = 'block';
});
