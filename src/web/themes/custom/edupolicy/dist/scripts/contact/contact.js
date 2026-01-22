/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./web/themes/custom/edupolicy/templates/components/contact/contact.scss":
/*!*******************************************************************************!*\
  !*** ./web/themes/custom/edupolicy/templates/components/contact/contact.scss ***!
  \*******************************************************************************/
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
/*!*****************************************************************************!*\
  !*** ./web/themes/custom/edupolicy/templates/components/contact/contact.js ***!
  \*****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onLoad: function() { return /* binding */ onLoad; }
/* harmony export */ });
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.scss */ "./web/themes/custom/edupolicy/templates/components/contact/contact.scss");

function onLoad() {
  const contactForm = document.querySelector('.webform-submission-contact-form');
  if (!contactForm) return;
  if (contactForm) {
    const p = document.createElement("p");
    p.textContent = "Have a question about AI ethics or policy development? We're here to help.";
    contactForm.before(p);
  }
  const consultationForm = document.querySelector('.webform-submission-schedule-consultation-form');
  if (!consultationForm) return;
  if (consultationForm) {
    const p = document.createElement("p");
    p.textContent = "Book a consultation with our experts. A Zoom meeting will be automatically generated.";
    consultationForm.before(p);
  }
}

// set onLoad
document.addEventListener("DOMContentLoaded", onLoad);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9jb250YWN0L2NvbnRhY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw4Q0FBOEMseUQ7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUI7QUFFaEIsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQ3ZCLE1BQU1DLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0NBQWtDLENBQUM7RUFDOUUsSUFBSSxDQUFDRixXQUFXLEVBQUU7RUFDbEIsSUFBR0EsV0FBVyxFQUFFO0lBQ2QsTUFBTUcsQ0FBQyxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDckNELENBQUMsQ0FBQ0UsV0FBVyxHQUFHLDRFQUE0RTtJQUM1RkwsV0FBVyxDQUFDTSxNQUFNLENBQUNILENBQUMsQ0FBQztFQUN2QjtFQUVBLE1BQU1JLGdCQUFnQixHQUFHTixRQUFRLENBQUNDLGFBQWEsQ0FBQyxnREFBZ0QsQ0FBQztFQUNqRyxJQUFJLENBQUNLLGdCQUFnQixFQUFFO0VBQ3ZCLElBQUdBLGdCQUFnQixFQUFFO0lBQ25CLE1BQU1KLENBQUMsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3JDRCxDQUFDLENBQUNFLFdBQVcsR0FBRyx1RkFBdUY7SUFDdkdFLGdCQUFnQixDQUFDRCxNQUFNLENBQUNILENBQUMsQ0FBQztFQUM1QjtBQUNGOztBQUVBO0FBQ0FGLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVULE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWR1cG9saWN5Ly4vd2ViL3RoZW1lcy9jdXN0b20vZWR1cG9saWN5L3RlbXBsYXRlcy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzPzU3MWMiLCJ3ZWJwYWNrOi8vZWR1cG9saWN5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VkdXBvbGljeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWR1cG9saWN5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWR1cG9saWN5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZWR1cG9saWN5Ly4vd2ViL3RoZW1lcy9jdXN0b20vZWR1cG9saWN5L3RlbXBsYXRlcy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2NvbnRhY3Quc2Nzc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYmZvcm0tc3VibWlzc2lvbi1jb250YWN0LWZvcm0nKTtcbiAgaWYgKCFjb250YWN0Rm9ybSkgcmV0dXJuO1xuICBpZihjb250YWN0Rm9ybSkge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJIYXZlIGEgcXVlc3Rpb24gYWJvdXQgQUkgZXRoaWNzIG9yIHBvbGljeSBkZXZlbG9wbWVudD8gV2UncmUgaGVyZSB0byBoZWxwLlwiO1xuICAgIGNvbnRhY3RGb3JtLmJlZm9yZShwKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnN1bHRhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2ViZm9ybS1zdWJtaXNzaW9uLXNjaGVkdWxlLWNvbnN1bHRhdGlvbi1mb3JtJylcbiAgaWYgKCFjb25zdWx0YXRpb25Gb3JtKSByZXR1cm47XG4gIGlmKGNvbnN1bHRhdGlvbkZvcm0pIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiQm9vayBhIGNvbnN1bHRhdGlvbiB3aXRoIG91ciBleHBlcnRzLiBBIFpvb20gbWVldGluZyB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLlwiO1xuICAgIGNvbnN1bHRhdGlvbkZvcm0uYmVmb3JlKHApO1xuICB9XG59XG5cbi8vIHNldCBvbkxvYWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG9uTG9hZCk7XG4iXSwibmFtZXMiOlsib25Mb2FkIiwiY29udGFjdEZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYmVmb3JlIiwiY29uc3VsdGF0aW9uRm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9