
document.querySelector('.form-more').addEventListener('submit', function(event) {
  event.preventDefault();
  const select = document.getElementById('pages');
  const selectedPage = select.options[select.selectedIndex].value;
  window.location.href = selectedPage;
});
