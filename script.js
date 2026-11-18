const waitlistForm = document.querySelector('.waitlist-form');
const formNote = document.querySelector('.form-note');
const formSuccess = document.querySelector('.form-success');
const searchInput = document.querySelector('#card-search');

waitlistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.hidden = true;
  formSuccess.hidden = false;
  waitlistForm.reset();
});

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});
