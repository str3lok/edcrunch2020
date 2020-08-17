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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");


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
}); // если устройство планшет показываем элементы по клику т.к. ховера на тач устройствах нет

if (!$('html').hasClass('is-device-tablet') || !$('html').hasClass('is-device-mobile')) {
  //- tooltip Для государственных образовательных организаций
  $('.tooltip-link').on('mouseenter', function (e) {
    $(this).parent().addClass('is-active');
  }); //убираем курсор мыши

  $('.tooltip-link').on('mouseleave ', function (e) {
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
}); //- слайдер на главной - СПИКЕРЫ EDCRUNCH 2020 	

$('.sliderSpeaker').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
  touchThreshold: 50,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
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
  touchThreshold: 50,
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
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
}); //- слайдер на главной - ЧТО ГОВОРЯТ СПИКЕРЫ EDCRUNCH

$('.sliderReviews').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  lazyLoad: 'ondemand',
  touchThreshold: 50
}); //Воспроизведение видео    

$('.video-link').on('click', function (e) {
  e.preventDefault();
  var playVideoId = $(this).attr('data-videoId');
  var parentVideo = $(this).closest('.main-video-box');
  $(parentVideo).addClass('is-play');
  $(parentVideo).prepend('<div class="videoBox"><iframe class="frameVideo" type="text/html" src="https://www.youtube.com/embed/' + playVideoId + '?rel=0&showinfo=0&controls=0&autoplay=1&wmode=opaque&enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>');
}); //- show menu mobile

$('.touch-nav').on('click', function (e) {
  e.preventDefault();
  $('html').addClass('htmlFix');
  $('body').addClass('navFix');
  $('.nav__container').fadeIn();
  $('.nav-hide').show();
  $('.nav__content').addClass('menuShow');
}); //- hide menu mobile

function closeMobileMenu() {
  $('.nav__content').removeClass('menuShow');
  $('html').removeClass('htmlFix');
  $('body').removeClass('navFix');
  $('.nav-hide').hide();
  $('.nav__container').fadeOut();
}

$('.nav-close, .nav-hide').on('click', function (e) {
  e.preventDefault();
  closeMobileMenu();
}); //- плавная прокрутка до блоков

$('.link-scroll').on('click', function (e) {
  e.preventDefault();
  var windowWidth = $(window).outerWidth();

  if (windowWidth <= 767) {
    closeMobileMenu();
  }

  var boxHash = $(this).attr('href');
  scrollTo($(boxHash).offset().top + 50, 1000);
}); //- добавить поле в форме

function addInput(text, parentBox) {
  $(parentBox).before('<div class="modal-contacts-col m-col-12">' + '<input class="ed-input" type="text" placeholder="' + text + '" autocomplete="off">' + '</div>');
} //- добавить поле Ссылки на профили в социальных сетях


$('.btn-add-socail').on('click', function (e) {
  e.preventDefault();
  var parentCol = $(this).closest('.m-col-add');
  addInput('Ссылки на профили в социальных сетях', parentCol);
}); //- добавить поле Ссылки на выступления

$('.btn-add-speech').on('click', function (e) {
  e.preventDefault();
  var parentCol = $(this).closest('.m-col-add');
  addInput('Ссылки на выступления', parentCol);
}); //количество введенных символов

function limitChars(myObject, typeChars) {
  $(myObject).on('keyup', function (e) {
    var count = $(this).val().length;
    $(typeChars).text(count);
  });
}

limitChars('.theme-textarea', '.theme-symbol span'); //- количество пукнтов

function endingText(numb) {
  if (numb == 1 || numb == 21 || numb == 31 || numb == 41 || numb == 51) {
    return "пункт";
  } else if (numb >= 2 && numb <= 4 || numb >= 22 && numb <= 24 || numb >= 32 && numb <= 34 || numb >= 42 && numb <= 44 || numb >= 52 && numb <= 54) {
    return "пункта";
  } else {
    return "пунктов";
  }
} //- показать селект для выбора чекбоксов на странице спикеры


$('.filter-btn-js').on('click', function (evnOptionBox) {
  evnOptionBox.preventDefault();
  var filterBox = $(this).closest('.page-filter-box');

  if ($(this).hasClass('is-active')) {
    $(filterBox).find('.filter-box-option').slideUp();
    $(this).removeClass('is-active');
  } else {
    var activeSelect = $('.filter-sections').find('.filter-btn-js.is-active');
    $(activeSelect).parent().find('.filter-box-option').slideUp();
    $(activeSelect).removeClass('is-active');
    $(filterBox).find('.filter-box-option').slideDown();
    $(this).addClass('is-active');
  }

  evnOptionBox.stopPropagation();
});
$(".filter-box-option").on('click', function (evnOptionBox) {
  evnOptionBox.stopPropagation();
});
$("body").on('click', function () {
  var activeSelectBody = $('.filter-sections').find('.filter-btn-js.is-active');
  $(activeSelectBody).parent().find('.filter-box-option').slideUp();
  $(activeSelectBody).removeClass('is-active');
});

function countCheckedBox(mainBox) {
  var parentSelectBox = $(mainBox);
  var parentOptionBox = $(mainBox).find('.filter-box-option');
  var countChecket = $(parentOptionBox).find('input:checked').length;
  $(parentSelectBox).find('.filter-btn-js span').text('Выбрано ' + countChecket + ' ' + endingText(countChecket));
} //-посчет выбранных пунктов 


$('.filter-option-js').on('click', function (e) {
  var selectBox = $(this).closest('.page-filter-box');
  countCheckedBox(selectBox);
}); //- програмный селект 

function scrollTo(to) {
  var $obj = jQuery('html, body');
  var top = 0;
  var speed = 500;
  var offsetX = 50;

  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(to) == 'object') {
    top = to.offset().top;
  } else if (typeof to == 'string') {
    top = jQuery(to).offset().top;
  } else if (typeof to == 'number') {
    top = to;
  }

  if (arguments.length > 1) {
    if (typeof arguments[0] == 'number' && typeof arguments[1] == 'number') {
      speed = arguments[1];
    } else if (typeof arguments[1] == 'string' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(arguments[1]) == 'object') {
        $obj = arguments[1];
      } else if (typeof arguments[1] == 'string') {
        $obj = jQuery(arguments[1]);
      }
    }

    if (typeof arguments[2] == 'number') {
      speed = arguments[2];
    }
  }

  if (jQuery(window).width() < 1000) {
    offsetX = 130;
  }

  if (speed == 0) {
    speed = 1;
  }

  $obj.animate({
    scrollTop: top - offsetX
  }, speed);
}

function loadPage() {
  //- при обновлении страницы, если есть селекты на страницы запускаем подсчет в них выбранных пунктов
  if ($('.filter-btn-js')) {
    $('.page-filter-box').each(function () {
      countCheckedBox($(this));
    });
  }

  ;

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
    try {
      $('.tl-link').removeAttr('style');
    } catch (e) {}
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



 // import 'inputmask';
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