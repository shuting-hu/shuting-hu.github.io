const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel-btn--left');
const rightButton = document.querySelector('.carousel-btn--right');
const nav = document.querySelector('.carousel-nav');
const navItems = Array.from(nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

// arrange slides horizontally
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// move slide accordingly
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// update nav indicators to match current slide
const updateIndicator = (currentItem, targetItem) => {
    currentItem.classList.remove('current-slide');
    targetItem.classList.add('current-slide');
}

// hide traversal arrows at each end of carousel
const displayArrows = (slides, leftButton, rightButton, targetIndex) => {
    if (targetIndex === 0) { // first slide
        leftButton.classList.add('is-hidden');
        rightButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1 ) { // last slide
        leftButton.classList.remove('is-hidden');
        rightButton.classList.add('is-hidden');
    } else { // in between slide
        leftButton.classList.remove('is-hidden');
        rightButton.classList.remove('is-hidden');
    }
}

// click left - move to left slide
leftButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentItem = nav.querySelector('.current-slide');
    const targetItem = currentItem.previousElementSibling;

    const targetIndex = slides.findIndex(i => i === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateIndicator(currentItem, targetItem);
    displayArrows(slides, leftButton, rightButton, targetIndex);
});

// click right - move to right slide
rightButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    const currentItem = nav.querySelector('.current-slide');
    const targetItem = currentItem.nextElementSibling;

    const targetIndex = slides.findIndex(i => i === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateIndicator(currentItem, targetItem);
    displayArrows(slides, leftButton, rightButton, targetIndex);
});

// click nav indicator - move to corresponding slide
nav.addEventListener('click', e => {
    const targetItem = e.target.closest('button');

    if (!targetItem) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentItem = nav.querySelector('.current-slide');
    const targetIndex = navItems.findIndex(i => i === targetItem);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateIndicator(currentItem, targetItem);
    displayArrows(slides, leftButton, rightButton, targetIndex);
})