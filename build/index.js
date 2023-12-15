/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


class App extends _wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Dashboard"));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/component/settings/post.js":
/*!****************************************!*\
  !*** ./src/component/settings/post.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




class Post extends _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    // super(...arguments);

    // this.state = {
    // 	exampleSelect: '',
    // 	popupId: 0,
    // }
  }
  componentDidMount() {
    // const popup_id = document.querySelector("#post_ID").value;
    // this.setState({ popupId: popup_id })
    // console.log(popup_id);
  }
  handleSave = dataValue => {
    // const _this = this;
    const post_id = this.state.popupId;
    // const post_id = 1
    // _this.setState({ saving: true });
    apiFetch({
      path: '/bscr-ttm-settings/v2/save-ttm-data',
      method: 'POST',
      data: {
        id: post_id,
        settings: dataValue
      }
    });

    // .then((res) => {
    // 	_this.setState({ saving: false, saveComplete: true });
    // 	if (document.getElementById("publish").value === 'Publish') {
    // 		setTimeout(() => {
    // 			document.getElementById("publish").click();
    // 		}, 1000);

    // 	}
    // }).then(() => {
    // 	setTimeout(() => {
    // 		_this.setState({ saveComplete: false });
    // 	}, 1500);
    // });
  };
  render() {
    const {
      exampleSelect
    } = this.state;

    // console.log(exampleSelect);

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Use PanelRow to place controls inline.', 'wholesome-plugin'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Example Text 2', 'wholesome-plugin'),
      onChange: exampleSelect => this.setState({
        exampleSelect
      }),
      value: exampleSelect
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => this.handleSave(exampleSelect)
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Save Changes', '')));
  }
}

// export default function Posts() {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         async function loadPosts() {
//             const response = await fetch('/wp-json/wp/v2/posts');
//             if(!response.ok) {
//                 // oups! something went wrong
//                 return;
//             }

//             const posts = await response.json();
//             setPosts(posts);
//         }

//         loadPosts();
//    }, [])

//    console.log("test");

//   return (

// 	<div className='template'>Test</div>

//     // <Grid container spacing={2}>
//     //   {posts.map((post, index) => (
//     //   <Grid item xs={4} key={index}>
//     //     <Card>
//     //        <CardContent>
//     //             <Typography
//     //                 color="textSecondary"
//     //                 gutterBottom
//     //                 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
//     //             <Typography
//     //                 variant="body2"
//     //                 component="p"
//     //                 dangerouslySetInnerHTML={{__html: post.content.rendered}} />
//     //         </CardContent>
//     //     </Card>
//     //   </Grid>
//     //  ))}
//     // </Grid>
//  );
// }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

/***/ }),

/***/ "./src/component/template/TemplateOne.js":
/*!***********************************************!*\
  !*** ./src/component/template/TemplateOne.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TemplateOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// import { useState } from '@wordpress/element';

// const [data, myData] = useState();

function TemplateOne() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "TemplateOne", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "My name is dist"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "This is build"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "This is build 2"));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/App */ "./src/component/App.js");
/* harmony import */ var _component_settings_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/settings/post */ "./src/component/settings/post.js");
/* harmony import */ var _component_template_TemplateOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/template/TemplateOne */ "./src/component/template/TemplateOne.js");





document.addEventListener('DOMContentLoaded', () => {
  // const output = document.getElementById('bscr_ttm_app');
  const post = document.getElementById('bstm_post_type');
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(post);
  console.log(root);

  // if (typeof output !== 'undefined' && output !== null) {
  // 	render(<App />, output);
  // }

  // if (typeof post !== 'undefined' && post !== null) {
  // 	render(<Post />, post);
  // }

  //   console.log(post);

  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_template_TemplateOne__WEBPACK_IMPORTED_MODULE_4__["default"], null));

  //   render(<Post />, post);
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map