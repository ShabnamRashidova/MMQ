
$('.hero-carousel').owlCarousel({
    responsiveClass: true,
    dots: false,
    margin: 0,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,

        }
    }
})
$('.partners-carousel').owlCarousel({
    responsiveClass: true,
    dots: false,
    margin: 0,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },

        800: {
            items: 3,

        },
        1000: {
            items: 4,

        },
        1200: {
            items: 5,

        }
    }
})
const done = () => {
    $(".preloader-content").hide();
  };
window.onscroll = function () {
    scrollFunc();

}
function scrollFunc() {
    let header = document.querySelector(".general-header");
    if (document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
        header.classList.add("header-fixed");

    } else {
        header.classList.remove("header-fixed");
    }
}


$(window).scroll(() => {
    $(this).scrollTop() >= 120
        ? $(".scroll-btn").addClass("show")
        : $(".scroll-btn").removeClass("show");
});
$(".scroll-btn").on("click", () => {
    $("html").scrollTop(0);
});

let menu_button = document.querySelector(".menu-button");
menu_button.onclick = function () {
    let nav_list = document.querySelector(".nav-list");
    nav_list.classList.toggle('opened');
    let menu_icon=document.querySelector(".menu-button i");
    menu_icon.classList.toggle("fa-bars")
    menu_icon.classList.toggle("fa-times")

}
let open_btn = document.querySelectorAll(".open-btn");
open_btn.forEach(btn => btn.onclick = function () {
    let vacancy_text_box = btn.parentElement.parentElement.parentElement.nextElementSibling;
    if (vacancy_text_box.style.maxHeight) {
        vacancy_text_box.style.maxHeight = null;
    } else {
        vacancy_text_box.style.maxHeight = vacancy_text_box.scrollHeight + 'px'
    }
    let toggle_icon = document.querySelector(".open-btn i");
    toggle_icon.classList.toggle("fa-chevron-right");
    toggle_icon.classList.toggle("fa-chevron-down");
})
!function(window){
    var $q = function(q, res){
          if (document.querySelectorAll) {
            res = document.querySelectorAll(q);
          } else {
            var d=document
              , a=d.styleSheets[0] || d.createStyleSheet();
            a.addRule(q,'f:b');
            for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
              l[b].currentStyle.f && c.push(l[b]);
  
            a.removeRule(0);
            res = c;
          }
          return res;
        }
      , addEventListener = function(evt, fn){
          window.addEventListener
            ? this.addEventListener(evt, fn, false)
            : (window.attachEvent)
              ? this.attachEvent('on' + evt, fn)
              : this['on' + evt] = fn;
        }
      , _has = function(obj, key) {
          return Object.prototype.hasOwnProperty.call(obj, key);
        }
      ;
  
    function loadImage (el, fn) {
      var img = new Image()
        , src = el.getAttribute('data-src');
      img.onload = function() {
        if (!! el.parent)
          el.parent.replaceChild(img, el)
        else
          el.src = src;
  
        fn? fn() : null;
      }
      img.src = src;
    }
  
    function elementInViewport(el) {
      var rect = el.getBoundingClientRect()
  
      return (
         rect.top    >= 0
      && rect.left   >= 0
      && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      )
    }
  
      var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function(){
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {
                  images.splice(i, i);
                });
              }
            };
          }
        ;
      // Array.prototype.slice.call is not callable under our lovely IE8 
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      };
  
      processScroll();
      addEventListener('scroll',processScroll);
  
  }(this);