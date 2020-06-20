export const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector(".popup_is-opened");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};
