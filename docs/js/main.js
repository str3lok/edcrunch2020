/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* eslint-disable no-new */
 //- show/hide menu tablet

$('.nav-dropdown-box > a').on('click', function (evnMenu) {
  evnMenu.preventDefault();
  var windowWidth = $(window).outerWidth();

  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile') || windowWidth <= 1279) {
    var parentItem = $(this).closest('li'),
        mainNav = $(this).closest('.main-nav');

    if (windowWidth >= 768 && !$(parentItem).hasClass('is-active')) {
      $(mainNav).find('.is-active').removeClass('is-active');
      $(parentItem).addClass('is-active'); // return false;
    } else if (windowWidth <= 767) {
      if ($(parentItem).hasClass('is-active')) {
        $(parentItem).removeClass('is-active');
        $(parentItem).find('.sub-nav').slideUp();
      } else {
        var showSubNav = $(mainNav).find('.is-active');
        $(showSubNav).find('.sub-nav').slideUp();
        $(showSubNav).removeClass('is-active');
        $(parentItem).addClass('is-active');
        $(parentItem).find('.sub-nav').slideDown();
      }

      return false;
    } //- 767
    else {
        $(parentItem).removeClass('is-active'); // return false;
      }

    evnMenu.stopPropagation();
  }
});
$(".sub-nav").on('click', function (evnMenu) {
  var windowWidth = $(window).outerWidth();

  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile') || windowWidth <= 1279 && windowWidth >= 768) {
    evnMenu.stopPropagation();
  }
});
$("body").on('click', function () {
  var windowWidth = $(window).outerWidth();

  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile') && windowWidth >= 1280 || windowWidth >= 768 && windowWidth <= 1279) {
    $('.main-nav').find('.is-active').removeClass('is-active');
  }
}); //- слайдер на главной - СПИКЕРЫ EDCRUNCH 2020 	

$('.sliderSpeaker').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
}); //- слайдер на главной - Новости EDCRUNCH 

$('.sliderNews').slick({
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
}); //- таймер

function getTimeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
} //- запуск обратного отсчета


var deadline = '2020-08-31';
initializeClock('clockdiv', deadline); // если устройство планшет показываем элементы по клику т.к. ховера на тач устройствах нет

if (!$('html').hasClass('is-device-tablet') || !$('html').hasClass('is-device-mobile')) {
  //- tooltip Для государственных образовательных организаций
  $(".tooltip-link").hover(function () {
    $(this).parent().addClass('is-active');
  }, function () {
    $(this).parent().removeClass('is-active');
  }); //- тригеры по ховеру 

  $(".year-triger-btn").hover(function () {
    $(this).parent().addClass('is-active');
  }, function () {
    $(this).parent().removeClass('is-active');
  });
} //- end is-device-tablet
//- tooltip по клику


$('.tooltip-link').on('click', function (evnTooltip) {
  evnTooltip.preventDefault();

  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {
    if (!$(this).parent().hasClass('is-active')) {
      $(this).parent().addClass('is-active');
    } else {
      $(this).parent().removeClass('is-active');
    }

    evnTooltip.stopPropagation();
  }
});
$(".tooltip-text").on('click', function (evnTooltip) {
  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {
    evnTooltip.stopPropagation();
  }
});
$("body").on('click', function () {
  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {
    $('.tooltip-box').removeClass('is-active');
  }
}); //- тригеры по клику

$('.year-triger-btn').on('click', function (evnTriger) {
  evnTriger.preventDefault();
  var windowWidth = $(window).outerWidth();

  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile') || windowWidth <= 1279) {
    var parentItemTriger = $(this).closest('li'),
        mainTrigerList = $(this).closest('.last-year-triger-list');

    if (!$(parentItemTriger).hasClass('is-active')) {
      $(mainTrigerList).find('.is-active').removeClass('is-active');
      $(parentItemTriger).addClass('is-active');
    } else {
      $(parentItemTriger).removeClass('is-active');
    }

    evnTriger.stopPropagation();
  }
});
$(".year-triger-content").on('click', function (evnTriger) {
  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {
    evnTriger.stopPropagation();
  }
});
$("body").on('click', function () {
  if ($('html').hasClass('is-device-tablet') || $('html').hasClass('is-device-mobile')) {
    $('.last-year-triger-list').find('.is-active').removeClass('is-active');
  }
}); //Воспроизведение видео    

$('.video-link').on('click', function (e) {
  e.preventDefault();
  var playVideoId = $(this).attr('data-videoId');
  var parentVideo = $(this).closest('.main-video-box');
  $(parentVideo).addClass('is-play');
  $(parentVideo).prepend('<div class="videoBox"><iframe class="frameVideo" type="text/html" src="https://www.youtube.com/embed/' + playVideoId + '?rel=0&showinfo=0&controls=0&autoplay=1&wmode=opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>');
}); //- слайдер на главной - ЧТО ГОВОРЯТ СПИКЕРЫ EDCRUNCH

$('.sliderReviews').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand'
}); //- show menu mobile

$('.touch-nav').on('click', function (e) {
  e.preventDefault();
  $('html').addClass('htmlFix');
  $('body').addClass('navFix');
  $('.nav__container').fadeIn();
  $('.nav-hide').show();
  $('.nav__content').addClass('menuShow');
}); //- hide menu mobile

$('.nav-close, .nav-hide').on('click', function (e) {
  e.preventDefault();
  $('.nav__content').removeClass('menuShow');
  $('html').removeClass('htmlFix');
  $('body').removeClass('navFix');
  $('.nav-hide').hide();
  $('.nav__container').fadeOut();
}); // show/hide ДЛЯ ВСЕХ УЧАСТНИКОВ ОБРАЗОВАТЕЛЬНОГО ПРОЦЕССА

$('.btn-tl-js').on('click', function (e) {
  e.preventDefault();
  var parentList = $(this).closest('.themes-list'),
      parentItem = $(this).closest('li');

  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $(parentItem).find('.tl-link').slideUp();
  } else {
    var activeItem = $(parentList).find('.is-active').closest('li');
    $(activeItem).find('.tl-link').slideUp();
    $(activeItem).find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $(parentItem).find('.tl-link').slideDown();
  }
});

function loadPage() {
  try {} catch (e) {}
} //end loadPage


window.addEventListener("load", loadPage);

function resizePage() {
  var windowWidth = $(window).outerWidth();
  $('.sub-nav').removeAttr('style');
  $('.main-nav').find('.is-active').removeClass('is-active');
  $('.nav__container, .nav-hide').removeAttr('style');
  $('html').removeClass('htmlFix');
  $('body').removeClass('navFix');

  if (windowWidth >= 768) {
    $('.tl-link').removeAttr('style');
  }
} //end resizePage


window.addEventListener("resize", resizePage);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-slider */ "./node_modules/slick-slider/slick/slick.js");
/* harmony import */ var slick_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_slider__WEBPACK_IMPORTED_MODULE_3__);



 // import 'magnific-popup';
// import 'jquery-datetimepicker';
// import 'jquery-mousewheel';
// import 'malihu-custom-scrollbar-plugin';

svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js"); // require("jquery-mousewheel");
// require('malihu-custom-scrollbar-plugin');

/***/ })

/******/ });
//# sourceMappingURL=main.js.map