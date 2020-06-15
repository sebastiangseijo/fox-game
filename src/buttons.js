import { ICONS } from './constants';

const toggleHighlighted = (icon, show) =>
  document.querySelector(`${ICONS[icon]}-icon`).classList.toggle('highlighted', show);

const clearSelectedIcon = (selectedIcon) => toggleHighlighted(selectedIcon, false);

export default function initButtons(handleUserAction) {
  // Default value 0
  let selectedIcon = 0;

  function buttonClick({ target }) {
    if (target.classList.contains('left-btn')) {
      clearSelectedIcon(selectedIcon);
      selectedIcon = (2 + selectedIcon) % ICONS.lenght;
      toggleHighlighted(selectedIcon, true);
    } else if (target.classList.contains('right-btn')) {
      clearSelectedIcon(selectedIcon);
      selectedIcon = (1 + selectedIcon) % ICONS.lenght;
    } else {
      handleUserAction(selectedIcon);
    }

    document.querySelector('.buttons').addEventListener('click', buttonClick);
  }
}
