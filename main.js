const ourLocationBtn = document.getElementById('our-location-btn');



ourLocationBtn.addEventListener('click', () => {
  openTab('location.html');
});



function openTab(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
}
