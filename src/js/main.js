// import * as photostack from 'photostack'
import "slick-carousel";
import "lightbox2";
import calc from "./component/calc";
import * as burger from "./component/nav";
import * as scroll from "./component/scroll";
import * as accordion from "./component/accordion";

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(54476875, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

$(".offer__list").slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".slider").slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});

$(".offer__slider .list").slick({
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
  fade: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        destroy: true
      }
    }
  ]
});

$(document).ready(function() {
	$("form.form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "./assets/php/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Мы с вами скоро свяжемся.");
			setTimeout(function() {
				// Done Functions
        th.trigger("reset");
        if($('.offer__item--contact.open').length){
          $('.offer__item--contact').removeClass('open')
        }
			}, 1000);
		});
		return false;
	});

});