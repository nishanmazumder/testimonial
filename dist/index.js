/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


class App extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Dashboard"));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/component/settings/post.js":
/*!****************************************!*\
  !*** ./src/component/settings/post.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




class Post extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      exampleSelect: '',
      popupId: 0
    };
  }
  componentDidMount() {
    const popup_id = document.querySelector("#post_ID").value;
    this.setState({
      popupId: popup_id
    });
    console.log(popup_id);
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use PanelRow to place controls inline.', 'wholesome-plugin'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Example Text 2', 'wholesome-plugin'),
      onChange: exampleSelect => this.setState({
        exampleSelect
      }),
      value: exampleSelect
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => this.handleSave(exampleSelect)
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save Changes', '')));
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

// export default Post

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/App */ "./src/component/App.js");
/* harmony import */ var _component_settings_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/settings/post */ "./src/component/settings/post.js");




document.addEventListener('DOMContentLoaded', function () {
  const output = document.getElementById('bscr_ttm_app');
  const post = document.getElementById('bstm_post_type');
  if (typeof output !== 'undefined' && output !== null) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), output);
  }
  if (typeof post !== 'undefined' && post !== null) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_settings_post__WEBPACK_IMPORTED_MODULE_2__["default"], null), post);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_component_settings_post__WEBPACK_IMPORTED_MODULE_2__["default"], null), post);
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map