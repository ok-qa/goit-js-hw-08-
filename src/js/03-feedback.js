import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const feedbackFormStateKey = 'feedback-form-state';

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', onSubmit);

controlFormState();

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackFormStateKey, JSON.stringify(formState));
}

function controlFormState() {
  const savedFormState = localStorage.getItem(feedbackFormStateKey);
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Form can not be submitted with empty fields!');
    return;
  }
  localStorage.removeItem(feedbackFormStateKey);
  form.reset;
}
