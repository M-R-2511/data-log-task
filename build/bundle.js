/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// وَقَالَ الَّذِينَ أُوتُوا الْعِلْمَ وَيْلَكُمْ ثَوَابُ اللَّهِ خَيْرٌ لِمَنْ آمَنَ وَعَمِلَ صَالِحًا وَلَا يُلَقَّاهَا إِلَّا الصَّابِرُونَ
// وقل رب زدني علما

var apiBaseUrl = "https://fakerapi.it/api/v1/";
var loaders = document.querySelectorAll(".loader");
var personsCards = document.querySelector(".persons__cards");
var booksCards = document.querySelector(".books__cards");
var companiesCards = document.querySelector(".companies__cards");
var darkModeButton = document.getElementById("dark-mode");
var rainbowColors = document.getElementById("rainbow-colors"); // ============= Get Data from API =============

function getData(_x, _x2, _x3) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiEndpoint, cards, quantity) {
    var fetchData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(apiBaseUrl).concat(apiEndpoint).concat(quantity));

          case 2:
            fetchData = _context.sent;
            fetchData.json().then(function (_ref) {
              var data = _ref.data;
              showData(data, cards);
            })["catch"](function (error) {
              console.log(error);
              loaders.forEach(function (loader) {
                loader.classList.remove("loader--hide");
              });
            })["finally"](function () {
              loaders.forEach(function (loader) {
                loader.classList.add("loader--hide");
              });
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

getData("persons", personsCards, "?_quantity=20");
getData("books", booksCards, "?_quantity=10");
getData("companies", companiesCards, "?_quantity=15"); // Show Data in Cards

function showData(data, cards) {
  data.forEach(function (card) {
    switch (cards) {
      case personsCards:
        cards.innerHTML += "\n      <div data-aos=\"flip-left\" class=\"card\">\n          <div class=\"card__image\">\n            <img loading=\"lazy\" src=\"".concat(card.image, "\" alt=\"").concat(card.firstname, "\">\n          </div>\n          <div class=\"card__info\">\n              <h2 class=\"card__title\"><span><i class=\"fa fa-solid fa-user\"></i></span>: ").concat(card.firstname, " ").concat(card.lastname, "</h2>\n              <h4 class=\"card__email\"><span><i class=\"fa fa-solid fa-envelope\"></i></span>: ").concat(card.email, "</h4>\n              <p><span><i class=\"fa fa-solid fa-calendar\"></i></span>: ").concat(card.birthday, "</p>\n              <p><span><i class=\"fa fa-solid fa-phone\"></i></span>: ").concat(card.phone, "</p>\n              <p><span><i class=\"fa fa-solid fa-link\"></i> </span>: <a href=\"").concat(card.website, "\" target=\"_blank\" class=\"card__link\">").concat(card.website, "</a></p>\n          </div>\n      </div>\n      ");
        break;

      case booksCards:
        cards.innerHTML += "\n        <div data-aos=\"fade-up\"\n        data-aos-anchor-placement=\"top-center\" class=\"card\">\n            <div class=\"card__image\">\n              <img loading=\"lazy\" src=\"".concat(card.image, "\" alt=\"").concat(card.title, "\">\n            </div>\n            <div class=\"card__info\">\n                <h2 class=\"card__title\"><span><i class=\"fa fa-solid fa-book\"></i></span>: ").concat(card.title, "</h2>\n                <h4 class=\"card__email\"><span><i class=\"fa fa-solid fa-user\"></i></span>: ").concat(card.author, "</h4>\n                <p><span><i class=\"fa fa-solid fa-calendar\"></i></span>: ").concat(card.published, "</p>\n                <p class=\"card__description\"><span><i class=\"fa fa-solid fa-book-open\"></i></span>: <q>").concat(card.description, "</q></p>\n            </div>\n        </div>\n        ");
        break;

      case companiesCards:
        cards.innerHTML += "\n        <div data-aos=\"fade-down\" class=\"card\">\n            <div class=\"card__image\">\n              <img loading=\"lazy\" src=\"".concat(card.image, "\" alt=\"").concat(card.name, "\">\n            </div>\n            <div class=\"card__info\">\n                <h2 class=\"card__title\"><span><i class=\"fa fa-solid fa-building\"></i></span>: ").concat(card.name, "</h2>\n                <h4 class=\"card__email\"><span><i class=\"fa fa-solid fa-envelope\"></i></span>: ").concat(card.email, "</h4>\n                <p><span><i class=\"fa fa-solid fa-globe\"></i></span>: ").concat(card.country, "</p>\n                <p><span><i class=\"fa fa-solid fa-phone\"></i></span>: ").concat(card.phone, "</p>\n                <p><span><i class=\"fa fa-solid fa-link\"></i> </span>: <a href=\"").concat(card.website, "\" target=\"_blank\" class=\"card__link\">").concat(card.website, "</a></p>\n            </div>\n        </div>\n        ");
        break;

      default:
        cards.innerHTML += "\n          no data\n          ";
        break;
    }
  }); // ============== Wait to data then store them in variables to can search them ==============

  defineCardsOnComingData();
} // ============= Dark Mode =============


darkModeButton.addEventListener("click", function () {
  var nav__container = document.querySelector(".nav__container");
  var card = document.querySelectorAll(".card");
  var inputs = document.querySelectorAll("input");
  document.body.classList.toggle("dark-mode");
  nav__container.classList.toggle("dark-mode");
  card.forEach(function (card) {
    card.classList.toggle("dark-mode");
  });
  inputs.forEach(function (input) {
    input.classList.toggle("dark-mode");
  });
}); // ============= Rainbow Colors =============

rainbowColors.addEventListener("click", function () {
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  header.classList.toggle("rainbow-colors--mode");
  main.classList.toggle("rainbow-colors--mode");
}); // ============= Handle form submit =============

var searchForm = document.querySelectorAll(".search-form");
searchForm.forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}); // ============= Search Data =============

var searchPersons = document.getElementById("search-persons");
var searchBooks = document.getElementById("search-books");
var searchCompanies = document.getElementById("search-companies");
var personsCardsSearch;
var booksCardsSearch;
var companiesCardsSearch;

function defineCardsOnComingData() {
  personsCardsSearch = document.querySelectorAll(".persons__cards .card");
  booksCardsSearch = document.querySelectorAll(".books__cards .card");
  companiesCardsSearch = document.querySelectorAll(".companies__cards .card");
} // Execute searchData() when user types in search input


searchPersons.addEventListener("input", function () {
  searchData(searchPersons, personsCardsSearch);
});
searchBooks.addEventListener("input", function () {
  searchData(searchBooks, booksCardsSearch);
});
searchCompanies.addEventListener("input", function () {
  searchData(searchCompanies, companiesCardsSearch);
});

function searchData(searchInput, cardsSearch) {
  // Search Data
  var searchValue = searchInput.value.toLowerCase(); // To ignore ": " from search value

  var sliceCount = 2;
  cardsSearch.forEach(function (card) {
    var cardTitle = card.querySelector(".card__title").innerText.toLowerCase().slice(sliceCount);

    if (cardTitle.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }); // ============= Fix AOS problem when change Sections =============

  AOS.refresh();
} // ============= Choose section =============


var listItems = document.querySelectorAll(".sections__list--item");
var persons = document.getElementById("persons");
var books = document.getElementById("books");
var companies = document.getElementById("companies");

function toggleActiveClass(item) {
  listItems.forEach(function (item) {
    item.classList.remove("active");
  });
  item.classList.add("active");
}

listItems.forEach(function (item) {
  function chooseSection() {
    // Remove and add active class for all list items
    toggleActiveClass(item); // Show section based on list item

    if (item.innerText === "PERSONS") {
      persons.style.display = "block";
      books.style.display = companies.style.display = "none";
    } else if (item.innerText === "BOOKS") {
      books.style.display = "block";
      persons.style.display = companies.style.display = "none";
    } else if (item.innerText === "COMPANIES") {
      persons.style.display = books.style.display = "none";
      companies.style.display = "block";
    } else {
      persons.style.display = books.style.display = companies.style.display = "block";
    } // ============= Fix AOS problem when change Sections =============


    AOS.refresh();
  } // Execute function on click


  item.addEventListener("click", chooseSection);
}); // ============= Fix AOS problem when change Sections =============

var scrollStarted = 0;
window.addEventListener("scroll", function () {
  scrollStarted <= 10 ? scrollStarted++ : AOS.refresh();
});
/******/ })()
;