// Page Loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
      setTimeout(function(){
        document.getElementById('interactive');
        document.getElementById('loader').style.visibility="hidden";
      },1000);
    }
  }

// Navbar Scroll
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('active')
  } else if (navbar.classList.contains('active')) {
    navbar.classList.remove('active')
  } else {
    navbar.classList.remove('active')
  }
})

// Hero-Animation code
document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
// Hero-Animation end

//common reveal options to create reveal animations
ScrollReveal({
    //reset: true,
    distance: '60px',
    duration: 1200,
    delay: 700
    });

    //target elements, and specify options to create reveal animations
    ScrollReveal().reveal('nav',{ delay: 100, origin: 'top'});
    ScrollReveal().reveal('.hero .content > *',{ delay:400, origin: 'left',interval: 150});
    ScrollReveal().reveal('.hero .hero-img',{ delay:400, origin: 'right'});
    //ScrollReveal().reveal('section .heading > *',{delay:300, origin: 'left'});
    ScrollReveal().reveal('.nav-tabs .nav-link',{ delay:300, origin: 'bottom',interval:150});
    ScrollReveal().reveal('.tab-content .active .row > *',{ delay:300, origin: 'bottom',interval:150});
    ScrollReveal().reveal('.apps',{ delay:300, origin: 'bottom'});

    ScrollReveal().reveal('.fadein-up',{ delay:300, origin: 'bottom',interval:150});
    ScrollReveal().reveal('.fadein-left',{ delay:300, origin: 'left',interval:150});
    ScrollReveal().reveal('.fadein-right',{ delay:300, origin: 'right',interval:150});
    ScrollReveal().reveal('.fadein-down',{ delay:300, origin: 'top',interval:150});
    ScrollReveal().reveal('.fadeup-all > *',{ delay:300, origin: 'bottom',interval:150});
    ScrollReveal().reveal('.faderight-all > *',{ delay:300, origin: 'right',interval:150});
    //ScrollReveal().reveal('.tab-pane.active',{ delay:400, origin: 'bottom',interval:100});

    // Scroll Animation end