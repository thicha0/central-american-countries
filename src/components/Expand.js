export default function ExpandComponent({ items = [], width = '90vw', height = '80vh' }) {
  let activeIndex = null;

  const container = document.createElement('div');
  container.className = 'containerExpand';
  container.style.width = width;

  items.forEach((item, index) => {
    const panel = document.createElement('div');
    panel.className = 'panel';
    panel.style.height = height;
    panel.addEventListener('click', () => {
      activeIndex === index ? activeIndex = null : activeIndex = index
    });

    const background = document.createElement('div');
    background.className = 'background';
    background.style.backgroundImage = item.background;
    background.title = item.alt;

    const gradient = document.createElement('div');
    gradient.className = 'gradient';

    const title = document.createElement('h1');
    title.className = 'title';
    title.textContent = item.title;

    const text = document.createElement('p');
    text.className = 'text';
    text.innerHTML = item.text;

    panel.append(background, gradient, title, text);
    container.append(panel);
  });

  return container;
}
