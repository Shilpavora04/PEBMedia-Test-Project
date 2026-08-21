/*--------Mobile Menu-------*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active");
}

/*--------Fixed Header-------*/
$(window).scroll(function () {
 if ($(window).scrollTop() >= 78) {
  $("header").addClass("fixed-header");
 } else {
  $("header").removeClass("fixed-header");
 }
});

/*--------Counter-------*/
$(window).scroll(function () {
 $(".count").each(function () {
  $(this)
   .prop("Counter", 0)
   .animate(
    {
     Counter: $(this).attr("data-number"),
    },
    {
     duration: 2000,
     easing: "swing",
     step: function (now) {
      $(this).text(Math.ceil(now));
     },
    },
   );
 });
});

/*--------Projects Slider-------*/
$(document).ready(function () {
 $(".projects_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  focusOnSelect: false,
  focusOnChange: false,
  accessibility: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: true,
  cssEase: "linear",
  prevArrow: ".slick-prev",
  nextArrow: ".slick-next",
  appendDots: $(".custom_dots"),
 });
});

/*--------Testimonials Slider-------*/
$(document).ready(function () {
 $(".testimonial_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  focusOnSelect: false,
  focusOnChange: false,
  accessibility: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
   {
    breakpoint: 992,
    settings: {
     slidesToShow: 2,
    },
   },
   {
    breakpoint: 631,
    settings: {
     slidesToShow: 1,
    },
   },
  ],
 });
 $(".testimonial-card").matchHeight();
});

/*--------Animation-------*/
new WOW().init();

/*--------Smooth Scroll-------*/
$("a[href^='#']").click(function () {
 if (
  location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") ||
  location.hostname == this.hostname
 ) {
  var target = $(this.hash);
  target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
  var scrolltop = target.offset().top - 70; // minus fixed header height
  if (target.length) {
   $("html,body").animate(
    {
     scrollTop: scrolltop,
    },
    1000,
   );
   return false;
  }
 }
});
