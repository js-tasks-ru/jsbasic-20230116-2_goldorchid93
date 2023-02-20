function initCarousel() {
  // ваш код...

  const left = document.querySelector('.carousel__arrow.carousel__arrow_left');
  const right = document.querySelector('.carousel__arrow.carousel__arrow_right');

  const slider = document.querySelector('.carousel__inner');
  const images = document.querySelectorAll('.carousel__slide .carousel__img');

  let counter = 0;
  const step = images[0].clientWidth 

  slider.classList.add('transformAnimation')

  left.style.display = 'none'

  right.addEventListener('click', function() { 
    counter++
    //left.classList.remove('carousel__arrow_hidden')
    left.style.display = ''

    if (counter >= images.length - 1) {
      right.style.display = 'none'
      // right.classList.add('carousel__arrow_hidden')
     // скрыть стрелочку справа
    } 
     
    slider.style.transform = `translateX(-${step * counter}px)`
  })
  
  left.addEventListener('click', function() {
    counter--
    right.style.display = ''
    // right.classList.remove('carousel__arrow_hidden')

    if (counter <= 0) {
      //left.classList.add('carousel__arrow_hidden')
      //скрыть стрелочку слева
      left.style.display = 'none'
    } 
    
    slider.style.transform = `translateX(-${step * counter}px)`
  })
  

  /* right.addEventListener('click', function() {
    if (counter >= images.length - 1) {
      right.style.display = 'none'
     //скрыть стрелочку справа 
    } else {
     counter++
     right.style.display = 'flex'
     slider.style.transform = `translateX(-${step * counter}px)`
    }
  })

  left.addEventListener('click', function() {
    if (counter <= 0) {
      left.style.display = 'none'
      // скрыть стрелочку слева 
    } else {
      counter--
      left.style.display = 'flex'
      slider.style.transform = `translateX(-${step * counter}px)`
    }
  }) */
}




