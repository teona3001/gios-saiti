//---------------------------------------kliki------------------------//
$(document).ready(function(){
    $(".header_burger,.header_button1").click(function (event) {/*მივმართავ .header_burger რომელიც დაკლიკნვის შჰემთხვევაში click */
        $(".body").toggleClass("body1");
        $(".header_button1").toggleClass("active");/*.header_burger,.header_menu დაწკაპების დროს დაემატოს active ამ ფუნქცით .toggleClass დაემატოს და მოეხსნას.*/
        $(".header_menu1").toggleClass("active1");
        $(".wrapper").toggleClass("opacity");
        $(".header_button0").toggleClass("vvvv");
        
       
    });
});

//-------------------------------------heder------------
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("test").className = "test1";
  } else {
    document.getElementById("test").className = "";
  }
}




//--------------------------------------teqstis animacia----------------------//
const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Developer.","Developer.", "Professional Coder.", ];
    const typingDelay = 30;
    const erasingDelay = 30;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });

//---------------------------------------------
// //     window.onscroll = function() {myFunction()};

// // function myFunction() {
// //   if (document.documentElement.scrollTop > 300) {
// //     document.getElementById("ani").className = "ani1";
//    } //else {
// //     document.getElementById("ani").className = "";
// //   }
// }
       //querySelectorAll იპოვოს ყველა კლასი ('._anim-items') //
const animItems = document.querySelectorAll('._anim-items');//shevqmenit cvali(animItems) da vwer satadarigo klas('._anim-items')
if (animItems.length > 0) {//da vamowmeb arsebobs Tu ara aseti klasebi da Shemdeg vqmni funqciebs Tu (animItems.length > 0)tu es bloki sigrzeshi 0 metia esegi shignit ragac aris
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {//და ვქმნით ფუნქციას 
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        } 
    }

function offset(el) {
    const rect = el.getBoundingClintRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document. documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
/*---მიმდევარობით ამოსვლა ბლოკების--------------------*/
const boxess = document.querySelectorAll('.ss')
window.addEventListener('scroll',checkBoxes1);

checkBoxes1();

function checkBoxes1() {
    const triggerBottom = window.
        innerHeight / 5 * 4;

    boxess.forEach((anim) =>{
        const shadowTop = anim.
        getBoundingClientRect().top;
        if(shadowTop < triggerBottom){
           anim.classList.add('anim1');
         } //else {
        //      anim.classList.remove('anim1');
        //  }
    });
}
//--------------------meniu gadasvla 4--------------------------------//


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("tabcontent");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//--------------------meniu gadasvla 5--------------------------------//
let slideIndex5 = 1;
showSlides5(slideIndex5);
function plusSlides5(a) {
  showSlides5(slideIndex5 += a);
}
function currentSlide5(a) {
  showSlides5(slideIndex5 = a);
}
function showSlides5(a) {
  let n;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots5 = document.getElementsByClassName("dot5");
  if (a > slides5.length) {slideIndex5 = 2}    
  if (a < 1) {slideIndex5 = slides5.length}
  for (n = 0; n < slides5.length; n++) {
    slides5[n].style.display = "none";  
  }
  for (n = 0; n< dots5.length; n++) {
    dots5[n].className = dots5[n].className.replace(" active5", "");
  }
  slides5[slideIndex5-1].style.display = "block";  
  dots5[slideIndex5-1].className += " active5";
}