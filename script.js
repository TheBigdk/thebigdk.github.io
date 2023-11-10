$(document).ready(function() {
    const $carousel = $(".carousel");
    const $slides = $(".menufoto-item");
    const slideWidth = $slides.width(); // Largura de cada slide
    let currentIndex = 0;

    function goToSlide(index) {
      currentIndex = index;
      const translateX = -currentIndex * slideWidth;
      $carousel.css("transform", `translateX(${translateX}px)`);
    }

    function nextSlide() {
      if (currentIndex < $slides.length - 1) {
        goToSlide(currentIndex + 1);
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
      }
    }

    $(".carousel-controls .next").click(nextSlide);
    $(".carousel-controls .prev").click(prevSlide);
  });


  $(document).ready(function() {
    const $carousel = $(".carousel");
    const $slides = $(".menufoto-item");
    let currentIndex = 0;
    let autoScrollInterval;
    let reverse = false;

    function goToSlide(index) {
        currentIndex = index;
        const translateX = -currentIndex * 100 + "%";
        $carousel.css("transform", `translateX(${translateX})`);
    }

    function nextSlide() {
        if (!reverse) {
            if (currentIndex < $slides.length - 1) {
                goToSlide(currentIndex + 1);
            } else {
                reverse = true;
                goToSlide(currentIndex - 1);
            }
        } else {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            } else {
                reverse = false;
                goToSlide(currentIndex + 1);
            }
        }
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            nextSlide();
        }, 4000);
    }

    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 600) {
        startAutoScroll();
    }
});
