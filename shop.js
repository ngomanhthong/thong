$(document).ready(function() {
  // Initialize variables
  var currentIndex = 0,
      sliderImages = $('.slider-image'),
      sliderImagesCount = sliderImages.length;

  // Set the first image as active
  sliderImages.eq(currentIndex).addClass('active');

  // Define function to move to next slide
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderImagesCount) {
      currentIndex = 0;
    }
    sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
    sliderImages.eq(currentIndex).css('left', '100%').animate({'left': '0'});
    sliderImages.eq((currentIndex + sliderImagesCount - 1) % sliderImagesCount).animate({'left': '-100%'});
  }

  // Set up interval to move to next slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Add click event handlers to the buttons
  $('.prev-slide').click(function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = sliderImagesCount - 1;
    }
    sliderImages.eq(currentIndex).addClass('active').siblings().removeClass('active');
    sliderImages.eq(currentIndex).css('left', '-100%').animate({'left': '0'});
    sliderImages.eq((currentIndex + 1) % sliderImagesCount).animate({'left': '100%'});
  });

  $('.next-slide').click(nextSlide);
});
