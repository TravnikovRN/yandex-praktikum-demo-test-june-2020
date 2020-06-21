import './index.css';
import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import PopupWithForms from '../scripts/PopupWithForm';
import PopupWithImage from '../scripts/PopupWithImage';
import Section from '../scripts/Section';
import UserInfo from '../scripts/UserInfo';
import PopupWithForm from '../scripts/PopupWithForm';

// Константы

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Врапперы
const placesWrap = document.querySelector('.places__list');
const editFormModalWindow = document.querySelector('.popup_type_edit');
const cardFormModalWindow = document.querySelector('.popup_type_new-card');
const imageModalWindow = document.querySelector('.popup_type_image');
// С submit ребята еще плохо работают.

// Кнопки и прочие дом узлы
const openEditFormButton = document.querySelector('.profile__edit-button');
const openCardFormButton = document.querySelector('.profile__add-button');

// DOM узлы профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Данные форм и элементы форм
const titleInputValue = editFormModalWindow.querySelector('.popup__input_type_name');
const descriptionInputValue = editFormModalWindow.querySelector('.popup__input_type_description');
const cardNameInputValue = cardFormModalWindow.querySelector('.popup__input_type_card-name');
const cardLinkInputValue = cardFormModalWindow.querySelector('.popup__input_type_url');
// решение на минималках. Конечно, студент может корректно обобрать велью инпутов в форме.

const cardSelector = '.card-template';
const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Инициализация
const userInfo = new UserInfo({userNameSelector: profileTitle, userInfoSelector: profileDescription});
const imgPreviewPopup = new PopupWithImage(imageModalWindow);

const renderCard = (data, wrap) => {
  const card = new Card(data, cardSelector, (img, src, alt) => imgPreviewPopup.open(img, src, alt) );
  wrap.prepend(card.getView());
};

const placesCards = new Section({ items:initialCards, renderer: renderCard}, placesWrap);

const formSubmitHandler = (evt) => {
  // evt.preventDefault();
  userInfo.setUserInfo(titleInputValue.value, descriptionInputValue.value);
  // closeModalWindow(editFormModalWindow);
};

const cardFormSubmitHandler = (evt) => {
  // evt.preventDefault();
  renderCard({
    name: cardNameInputValue.value,
    link: cardLinkInputValue.value
  }, placesWrap);
  // popup__closeModalWindow(cardFormModalWindows);
};

const userPopup = new PopupWithForm(editFormModalWindow, formSubmitHandler);
const placePopup = new PopupWithForm(cardFormModalWindow, cardFormSubmitHandler);

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);

// EventListeners
editFormModalWindow.addEventListener('submit', formSubmitHandler);
cardFormModalWindow.addEventListener('submit', cardFormSubmitHandler);

openEditFormButton.addEventListener('click', () => {
  const {name, info} = userInfo.getUserInfo();
  titleInputValue.value = name;
  descriptionInputValue.value = info;
  userPopup.open();
});

openCardFormButton.addEventListener('click', () => {
  placePopup.open();
});

placesCards.draw();

editFormValidator.enableValidation();
cardFormValidator.enableValidation();
