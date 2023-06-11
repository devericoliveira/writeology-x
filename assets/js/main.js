function Menu() {
  const container = document.querySelector('.menu__list');
  
  function init() {
    const isActive = container.classList.toggle('active');
    replaceIconButton(isActive);   
    animation();
  }

  function replaceIconButton(isActive) {
    isActive = isActive ?? false;

    const element = document.querySelector('.menu__button-mobile i');
    
    if(isActive) {
      element.classList.add('ph-x');
      element.classList.remove('ph-list');
    } else {
      element.classList.add('ph-list');
      element.classList.remove('ph-x');
    }
  }

  function animation() {
    const on = () => container.classList.add('animation-from-top');
    const off = () => container.classList.remove('animation-from-top');
    
    on()
    setTimeout(() => { off() }, 500);
  }

  return {
    init,
    replaceIconButton
  }
}

const menu = Menu();
menu.replaceIconButton()
document.querySelector('.menu__button-mobile').addEventListener('click', menu.init);