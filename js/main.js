{
  let index = 0;
  let newIndex = 0;

  const arrowLeft = document.querySelector('.carousel__arrow-left');
  const arrowRight = document.querySelector('.carousel__arrow-right');
  const imgCarousel = document.querySelectorAll('.carousel__item');
  const indicators = document.querySelectorAll('.indicator');

  const getLeft = () => {
    return newIndex == 0 ? (newIndex = imgCarousel.length - 1) : --newIndex;
  };

  const getRight = () => {
    return newIndex == imgCarousel.length - 1 ? (newIndex = 0) : ++newIndex;
  };

  const swipeImage = fn => {
    let currentIndex = fn;
    index = currentIndex;
    activeImage();
    activeIndicator();
  };

  arrowLeft.addEventListener('click', e => {
    swipeImage(getLeft());
  });

  arrowRight.addEventListener('click', e => {
    swipeImage(getRight());
  });

  const controller = (nodeObject, domValue) => {
    nodeObject.forEach((el, i) => {
      if (el.classList.contains(domValue)) {
        el.classList.remove(domValue);
      }

      if (index == i) el.classList.add(domValue);
    });
  };

  const activeImage = () => {
    controller(imgCarousel, 'carousel__item--active');
  };

  const activeIndicator = () => {
    controller(indicators, 'indicator--active');
  };

  const automateCarousel = () => {
    setInterval(() => {
      newIndex = index;
      activeImage();
      activeIndicator();
      index++;
      if (index == imgCarousel.length) {
        index = 0;
      }
    }, 5000);
  };

  automateCarousel();
}
// TODO work on the renaissance team
// TODO and a background gif in the header
