import "./index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForms from "../scripts/PopupWithForm";
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
} from "../constants";

// Инициализация
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userInfoSelector: profileDescription,
});
const imgPreviewPopup = new PopupWithImage(imageModalWindow);
const renderCard = (data, wrap) => {
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
