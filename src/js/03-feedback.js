import throttle from 'lodash.throttle';
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const feedbackFormStateKey = 'feedback-form-state';

  // controlFormState();

  //check the form state
  const savedFormState = JSON.parse(localStorage.getItem(feedbackFormStateKey));
  if (savedFormState) {
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }

  console.log(localStorage);

  //save the form state to the localStorage
  const saveFormState = throttle(function () {
    const currentFormState = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(
      feedbackFormStateKey,
      JSON.stringify(currentFormState)
    );
  }, 500);

  //add event listeners and ave the form state
  emailInput.addEventListener('input', saveFormState);
  messageInput.addEventListener('textarea', saveFormState);

  //submit the form after submit and clear after submit
  form.addEventListener('submit', function (onSubmit) {
    onSubmit.preventDefault();
    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Form can not be submitted with empty fields!');
      return;
    }
    console.log({ email: emailInput.value, message: messageInput.value });
    localStorage.removeItem(feedbackFormStateKey);
    emailInput.value = '';
    messageInput.value = '';
  });
});
