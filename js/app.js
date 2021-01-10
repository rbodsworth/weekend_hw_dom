
const formSubmitHandler = function(event) {
  event.preventDefault();
  const form = event.target
  renderListItemFromForm(form)
  form.reset();
};

const renderListItemFromForm = function(form) {
const film = formValues(form);
const listItem = createListItem(film);
addListItem(listItem);
}

const formValues = (form) => ({
  name: form.name.value,
  director: form.director.value,
  rating: form.rating.value
});

const createListItem = function(film) {
const li = document.createElement('li')
  li.textContent = film.name;

  const directorSpan = document.createElement('span')
  directorSpan.classList.add('director');
  directorSpan.textContent = film.director
  li.appendChild(directorSpan)

  const ratingSpan = document.createElement('span')
  ratingSpan.textContent = film.rating;
  ratingSpan.classList.add('rating');
  li.appendChild(ratingSpan)

  return li;
};

const addListItem = function(listItem) {
  const listContainer = document.querySelector('#list');
listContainer.appendChild(listItem)
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', formSubmitHandler)

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleDeleteAllClick)

  forEach((film) => {
  const li = createListItem(film)
  addListItem(li)
    
  });
});

const handleDeleteAllClick = function (event) {
  const listContainer = document.querySelector('#list');
  listContainer.innerHTML = '';}


