(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 82:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "@emotion/styled"
var styled_namespaceObject = require("@emotion/styled");;
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./components/Post.js





function Post({
  post
}) {
  const url = `http://167.99.134.160:1337`;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Poststyled, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "poster",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: url + post.image[0].url,
        alt: "",
        width: 800,
        height: 520
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "body",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: post.content
      })]
    })]
  });
}

const Poststyled = (styled_default()).div`
  width: 800px;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

  .body{
    padding: 20px;
    h2 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-heigth: 1.5;
    }
  }
`;
/* harmony default export */ var components_Post = (Post);
;// CONCATENATED MODULE: ./pages/index.js


//import { ThemeProvider} from 'emotion-theming'


const Header = (styled_default()).div`
  width: 100%;
  height: 60px;
  background-color: lightgray;

  h3 {
    margin-top: 0;
    padding-top: 15px;
  }
`;

const Home = ({
  posts
}) => {
  console.log(posts);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "Uk\xE1zka webu Prahy 6 - komunikace headless CMS"
      })
    }), posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(components_Post, {
      post: post
    }, post.id))]
  });
};

async function getServerSideProps() {
  const url = `http://167.99.134.160:1337/posts`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  };
}
/* harmony default export */ var pages = (Home);

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,675], function() { return __webpack_exec__(82); });
module.exports = __webpack_exports__;

})();