const ourLocationBtn = document.getElementById('our-location-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');

if (ourLocationBtn) {
  ourLocationBtn.addEventListener('click', () => {
    openTab('location.html');
  });
}


if (backToHomeBtn) {
  backToHomeBtn.addEventListener('click', () => {
    openTab('index.html');
  });
}




function openTab(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
