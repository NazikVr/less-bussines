export const defaultListImg = [
  {path: '/img/news/10.png', id: '0'},
  {path: '/img/news/1.png', id: '1'},
  {path: '/img/news/2.png', id: '2'},
  {path: '/img/news/3.png', id: '3'},
  {path: '/img/news/4.png', id: '4'},
  {path: '/img/news/5.png', id: '5'},
  {path: '/img/news/6.png', id: '6'},
  {path: '/img/news/7.png', id: '7'},
  {path: '/img/news/8.png', id: '8'},
  {path: '/img/news/9.png', id: '9'},
]

export const clearContent = (text) => {
  const imgRegex = /<img\b[^>]*>/g;
  const brRegex = /<br\s*[/]?>/gi;
  
  const images = text.match(imgRegex);
  if (!images) return text;
  
  images.forEach(img => {
    const imgIndex = text.indexOf(img);
    const imgEndIndex = imgIndex + img.length;
    const brIndex = text.indexOf('<br', imgEndIndex);
    if (brIndex !== -1) {
      const brEndIndex = text.indexOf('>', brIndex) + 1;
      text = text.substring(0, brIndex) + text.substring(brEndIndex);
    }
  });
  
  return text.replace(brRegex, '');
}

export const setDeafaultImg = (id) => {
const [search]= defaultListImg.filter(item=>item.id === id);
return search;
}

export const getLastImg = (html) => {
  const imgRegex = /<img[^>]+src="(.*?)"[^>]*>/g;
  const validRegex = /^https?:\/\//i;

  let match;
  let lastValidImg = null;
  while ((match = imgRegex.exec(html)) !== null) {
    const imageUrl = match[1];
    if (validRegex.test(imageUrl)) {
      lastValidImg = imageUrl;
    }
  }
  return lastValidImg;
}

export const orderServices = (arr) => {
  return arr.sort((a,b) => a.orders - b.orders);
}
