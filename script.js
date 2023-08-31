const buttons = document.getElementsByClassName('likeBtn');

for (const button of buttons) {
  button.addEventListener('click', () => {
    button.classList.toggle('red');
  });
}
