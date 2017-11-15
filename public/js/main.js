(function () {
  const row = document.querySelector('.row');
  const btn = document.getElementsByTagName('button');

  row.addEventListener('click', handleEvent, false);

  function handleEvent (e) {
    if (e.target === btn[0]) {
      btn[0].classList.toggle('button-danger');
    } else if (e.target === btn[1]) {
      btn[1].innerText = 'you clicked me';
    } else {
      btn[1].innerText = 'button two';
    }
    e.stopPropagation();
  }
})();
