/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./web/themes/custom/edupolicy/templates/components/header/header.scss":
/*!*****************************************************************************!*\
  !*** ./web/themes/custom/edupolicy/templates/components/header/header.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!***************************************************************************!*\
  !*** ./web/themes/custom/edupolicy/templates/components/header/header.js ***!
  \***************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onLoad: function() { return /* binding */ onLoad; }
/* harmony export */ });
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./web/themes/custom/edupolicy/templates/components/header/header.scss");

function onLoad() {
  document.querySelectorAll(".navbar-nav .dropdown").forEach(function (dropdown) {
    let parentLink = dropdown.querySelector("a.nav-link");

    // Desktop hover
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth >= 768) {
        dropdown.classList.add("show");
        dropdown.querySelectorAll("ul.dropdown-menu").forEach(function (menu) {
          menu.classList.add("show");
        });
      }
    });
    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth >= 768) {
        dropdown.classList.remove("show");
        dropdown.querySelectorAll("ul.dropdown-menu").forEach(function (menu) {
          menu.classList.remove("show");
        });
      }
    });

    // Click handling for desktop + mobile
    if (parentLink) {
      parentLink.addEventListener("click", function (e) {
        if (window.innerWidth >= 768) {
          window.location = this.href;
        } else {
          // Mobile two-tap logic
          /*
          if (!dropdown.classList.contains("show")) {
            e.preventDefault();
            dropdown.classList.add("show");
            dropdown
              .querySelectorAll("ul.dropdown-menu")
              .forEach(function (menu) {
                menu.classList.add("show");
              });
          } else {
            e.stopPropagation();
            window.location = this.href;
          }
          */
        }
      });
    }
  });

  // 🔹 Add scroll effect for header background
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

// set onLoad
window.addEventListener("DOMContentLoaded", onLoad);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2VkdXBvbGljeS8uL3dlYi90aGVtZXMvY3VzdG9tL2VkdXBvbGljeS90ZW1wbGF0ZXMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnNjc3M/MWUyYyIsIndlYnBhY2s6Ly9lZHVwb2xpY3kvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWR1cG9saWN5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lZHVwb2xpY3kvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lZHVwb2xpY3kvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lZHVwb2xpY3kvLi93ZWIvdGhlbWVzL2N1c3RvbS9lZHVwb2xpY3kvdGVtcGxhdGVzL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2hlYWRlci5zY3NzXCI7XG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkKCkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhci1uYXYgLmRyb3Bkb3duXCIpXG4gICAgLmZvckVhY2goZnVuY3Rpb24gKGRyb3Bkb3duKSB7XG4gICAgICBsZXQgcGFyZW50TGluayA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoXCJhLm5hdi1saW5rXCIpO1xuXG4gICAgICAvLyBEZXNrdG9wIGhvdmVyXG4gICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICBkcm9wZG93blxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5kcm9wZG93bi1tZW51XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobWVudSkge1xuICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpIHtcbiAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICBkcm9wZG93blxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5kcm9wZG93bi1tZW51XCIpXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAobWVudSkge1xuICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBDbGljayBoYW5kbGluZyBmb3IgZGVza3RvcCArIG1vYmlsZVxuICAgICAgaWYgKHBhcmVudExpbmspIHtcbiAgICAgICAgcGFyZW50TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gNzY4KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmhyZWY7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE1vYmlsZSB0d28tdGFwIGxvZ2ljXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaWYgKCFkcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpKSB7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ1bC5kcm9wZG93bi1tZW51XCIpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKG1lbnUpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgLy8g8J+UuSBBZGQgc2Nyb2xsIGVmZmVjdCBmb3IgaGVhZGVyIGJhY2tncm91bmRcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbiAgaWYgKGhlYWRlcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBzZXQgb25Mb2FkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgb25Mb2FkKTtcbiJdLCJuYW1lcyI6WyJvbkxvYWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZHJvcGRvd24iLCJwYXJlbnRMaW5rIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwibWVudSIsInJlbW92ZSIsImUiLCJsb2NhdGlvbiIsImhyZWYiLCJoZWFkZXIiLCJzY3JvbGxZIl0sInNvdXJjZVJvb3QiOiIifQ==