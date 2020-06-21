import "./index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForms from "../scripts/PopupWithForm"; // надо исправить: ошибка в названии, скорее всего: PopupWithForm
import PopupWithImage from "../scripts/PopupWithImage";
import Section from "../scripts/Section";
import UserInfo from "../scripts/UserInfo";
import PopupWithForm from "../scripts/PopupWithForm";
import {
  initialCards,
  placesWrap,
  editFormModalWindow,
  cardFormModalWindow,
  imageModalWindow,
  openEditFormButton,
  openCardFormButton,
  profileTitle,
  profileDescription,
  titleInputValue,
  descriptionInputValue,
  cardNameInputValue,
  cardLinkInputValue,
  cardSelector,
  defaultFormConfig,
} from "../constants"; // хорошая практика 

// Инициализация
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userInfoSelector: profileDescription,
});
const imgPreviewPopup = new PopupWithImage(imageModalWindow);
const renderCard = (data, wrap) => { // можно лучше: функцию renderCard можно реализовать в классе Section
  const card = new Card(data, cardSelector, (img, src, alt) =>
    imgPreviewPopup.open(img, src, alt)
  );
  wrap.prepend(card.getView());
};
const placesCards = new Section(
  { items: initialCards, renderer: renderCard },
  placesWrap
);
const formSubmitHandler = (evt) => {
  userInfo.setUserInfo(titleInputValue.value, descriptionInputValue.value);
};
const cardFormSubmitHandler = (evt) => {
  renderCard(
    {
      name: cardNameInputValue.value,
      link: cardLinkInputValue.value,
    },
    placesWrap
  );
};
const userPopup = new PopupWithForm(editFormModalWindow, formSubmitHandler);
const placePopup = new PopupWithForm(
  cardFormModalWindow,
  cardFormSubmitHandler
);
const editFormValidator = new FormValidator(
  defaultFormConfig,
  editFormModalWindow
);
const cardFormValidator = new FormValidator(
  defaultFormConfig,
  cardFormModalWindow
);

// EventListeners
openEditFormButton.addEventListener("click", () => {
  const { name, info } = userInfo.getUserInfo();
  titleInputValue.value = name;
  descriptionInputValue.value = info;
  userPopup.open();
});
openCardFormButton.addEventListener("click", () => {
  placePopup.open();
});
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

// Отрисовка
placesCards.draw();


/** 
  * Хороший проект с кодом выполненном в одном стиле. 
     Отдельно хочу похвалить за вынесение констант в отдельные файлы, функцию isEscEvent, которая вынесена в отдеьный файл, а так же за код 
     выполненный в одном стиле.
     Сборка webpack работает корректно, без ошибок. СSS и JS бандлы минифицированы и оптимизированы. 
  
  * Структура проекта выполнена верно, есть несколько недочетов, которые необходимо исправить.
    1. Файлы скриптов: Card.js, FormValidator.js, UserInfo.js, Section.js, Popup.js, PopipWithForm.js, PicturePopup.js вынести в отдельную
      директоррию Components
    2. Файлы: constans.js и utils.js вынести в отдельную дирректорию

  * В файле index.html необходимо удалить комментарии кода, который не используется.
  
  * Webpack настроен верно, сборки build и dev, работают без ошибок, скрипты созданы. 
    Но можно лучше: чтобы не удалять из вложенный css из html, а именно стили из тега div с классом '.profile__image' необходимо 
    использовать дополнительный плагин CopyWebpackPlugin, подробнее о плагине: https://clck.ru/P8Nsw

  * В прямых зависимостях должен быть только corejs. Все остальные пакеты должны быть в dev.dep

  * Молодец, функционал выполнен весь и работает корректно, единственное не работает валидация на "ввод пустой строки", 
    при повторном добавлении карточки, количество пустых карточек увеличивается вдвое при каждом добавлении.

  * Следуя условию задания нужно добавить файл README.md, в котором описать сам проект, его функционал, 
    список используемых технологий, ссылку на gh-pages, а так же как инициализировать проект.

  * Необходимо исправить вышеуказанные недочеты и проект будет готов!
*/
