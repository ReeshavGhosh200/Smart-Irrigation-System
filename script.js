const dark = document.getElementById('dark');
const light = document.getElementById('light');
const page = document.querySelector('.page');
const loader = document.querySelector('.loader');

dark.addEventListener('click', () => {
    document.body.style.backgroundColor = '#1D2A35';
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

setTimeout(() => {
    loader.style.display = 'none';
    page.style.display = 'block';
}, 3000)
