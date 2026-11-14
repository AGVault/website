const waitlistForm = document.querySelector('.waitlist-form');
const formNote = document.querySelector('.form-note');
const formSuccess = document.querySelector('.form-success');

waitlistForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.hidden = true;
  formSuccess.hidden = false;
  waitlistForm.reset();
});
