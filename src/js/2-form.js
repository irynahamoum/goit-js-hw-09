const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const userEmail = form.elements.email.value.trim();
  const userMessage = form.elements.message.value.trim();

  const data = {
    email: userEmail,
    message: userMessage,
  };

  saveToLS(STORAGE_KEY, data);
});

form.addEventListener('submit', e => {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (email === '' || message === '') {
    alert('Please fill in all the fields');
    e.preventDefault();
  } else {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    form.reset();
  }
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function restoreData() {
  const data = loadFromLS(STORAGE_KEY) || {};

  form.elements.email.value = data.email || '';
  form.elements.message.value = data.message || '';
}

restoreData();
