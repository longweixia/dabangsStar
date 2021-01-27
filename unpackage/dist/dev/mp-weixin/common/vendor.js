(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!*********************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 12));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 13));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 17));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 18));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 22));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 23));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 24));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 25));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 26));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 27));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 28));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 15));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 14));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 29));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 16));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 30));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 31));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 32));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 33));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 34));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 35);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 36));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 37));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 38));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 12:
/*!********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 13:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/request/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 14));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign(this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 138:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/centerbg.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 139:
/*!***********************************************!*\
  !*** D:/xcx/dabangsStar/static/home/kefu.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAA3UlEQVQoU43RPyvGURgG4OseMFt8AGWS941ieiefwKgYlVUyMVpsSsmCzcIXkJJBrPInPoMyS6Sjo99bv6Q4wxmec3XfT51oTillHOvo4BMF59hK8lJZ6lVKmccKVpNcN7MBzGEDi0ke0iQeYDbJa7+p1TiGY/QqPsJuP/EnblrW8FbxfZKJ31ArfRTbFd8kmfwD1/3P/oWbVS4qfscTBrGTZK9Vv49p1OTniu+SdEopdXCVZKaFb5N0SylDOK34EVMYxkmSXgvXxi5GcFjxEhbwgc0kly28jPph329f2txrDHYuyEEAAAAASUVORK5CYII="

/***/ }),

/***/ 14:
/*!***************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 15));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),

/***/ 140:
/*!************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/jiang.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAyUlEQVQoU83RIS/GcRTF8c9F8AJ05hXYBDabIEiiTSA8hU0xVVAIJtARzASJZkMm2zSboguyx1y79jP/l+DGc7737NzdyMwRnOITQ7jGEZax1PRhrEVmzmA1InqZOYBNTOMZOxHRz8x9PBR8gB7ecYs+1nHSUucwiuOCL7DlbwZxj9m2+OvsFnyGjQ5cvZ8wgY+OfljwFcbx2IzAIi7x1bRJvBQ8hYWI2C4jM6vGawVExE9yZu7h5h/BYzjHW+fAedxV3abVl1e+AdEqcOvDi6AtAAAAAElFTkSuQmCC"

/***/ }),

/***/ 141:
/*!************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/right.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAA0ElEQVQoU3WQsUrDABiE7/5gWkqjS7W+WHGtLoWEoEOsQ2kJAZ+ogrh2L7g5qOAotBqHTkmTk2pbmoq33sdxd/zyr19L4T6TkvZpc844LrEWUz9KAPYIjg8Mo0ar8b4BOLvoe46rgIZA0iRHMTxpH72tAArgZxh6ltXP4eAS0HTJctA6PnzhKv4XiD3kizMz9AU8lVje/Ji7gFMsOgJvJT3umaHnFLWq+W/stlBe68J4VSm0mQJDgP0pH36UGNgDcOcah5UTUj96lvSQiX/u+wbFfHrzEusvSgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 15:
/*!***************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/deepClone.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),

/***/ 16:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/test.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),

/***/ 17:
/*!*****************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/queryParams.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),

/***/ 18:
/*!***********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/route.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 19:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 20);

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 21);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 21:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 22:
/*!****************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(Number(dateTime));
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),

/***/ 23:
/*!**************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 22));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),

/***/ 24:
/*!*******************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),

/***/ 25:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/guid.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),

/***/ 26:
/*!***********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/color.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),

/***/ 27:
/*!***************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/type2icon.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),

/***/ 270:
/*!****************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/moreWhite.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADWUlEQVRYR82YvW/TQBTAfVaccxvb9UdC449KCSsSMCAESjdGvhkQGwKJPwAx8LHzIRCwMxRGBBK0wMwAKt8SCImpQxLFsaMkTlzbaW0nspErGpU0aZy0aXvj3bv3fvfu7t17B5ABWqFQEAEAJzEMy2AYtg9F0TQAIBao8H2/4Xlettls/mk2m/MQwjeJREIJqx6EEZRl+QiO49chhCdwHI9EIpENp7VaLcS27ZbjOG9t274vSdKXfnY2BMlms6lYLPaIoqgzEMJQ0J0GHcfxLct6bZrmtXQ6nesF1FO5LMvnKYp6QhDEBABDMbRt+r6PWJa1aBjGFUmSXnaD6WpBUZQbDMPcwXF8cwQdFm3b9nVdv87z/INOmHWGSqXSDZqm70II+23rUOOO4yC1Wu2mIAj31ir4D0RV1fMMwzwf9jyEJfvnmQs8z79YndMGyefzexmG+UmSJBVW4WbkTNM0lpaWDiaTyWygpw1SrVbnWJY9tdmDGRYuOMCapgWx5nQbpFgsZjiO+zjqLel2tTVNmxZF8dOKR6rV6izHcStk2900TZuNx+NnwcLCQkIQhOL4+Di23RCBvUaj0TRNUwSyLF/kef4piqJbGjPCLsrzPF9V1UugXC7PJBKJS2EnjkKuUqk8Bbquf52YmDg8CgNhdeq6/g0sLi6WKYpKhJ00CjnDMMrAMAybJMm+8TyXyyHFYhERRRFJpVJtnkH7uy0kYAgNMj8/j3ieh6AoimQymba+Qfu7gZim6QRbU6EoKt7P5YOuvJd8D49UQL1e/07T9KF+IKMcr9VqP3bF9S2Xy892T0ArlUp7CIKQY7HYjoV4VVXF3fDozcXj8TMrIPl8fnpycvLDjqcBAUylUpnjOG5nE6MAJJfLpVmW/bWdqWKj0TjA8/xKrbMueaZp+vlWlxGdMWjD5HlVWFGUWyzL3h5lOaHr+s1kMtm7nFgDM7ICq16v3+qsadZtzVoXKopyjiCIma0sOS3LuiwIwqtuz8WG6aGqqikMwx6TJHk6Go0OlUq6rusbhjFnWdbVoYrwtdSyLB8dGxu7BiE8CSGMhvmWcF3XsW373fLy8kNJkj73ezQHWmWhUGABAMej0eixSCSyv9tHTavV+u267nvf999NTU3V+gGsjv8Fl6rLp1gio7IAAAAASUVORK5CYII="

/***/ }),

/***/ 28:
/*!*****************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/randomArray.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),

/***/ 285:
/*!******************************************************************!*\
  !*** D:/xcx/dabangsStar/components/SJ-LotteryDraw/choujiang.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/SJ-LotteryDraw/choujiang.png";

/***/ }),

/***/ 288:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/components/SJ-LotteryDraw/SJ-LotteryDraw.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


function LotteryDraw(obj, callback) {
  this.timer = null; //计时器
  this.startIndex = obj.startIndex - 1 || 0; //从第几个位置开始抽奖 [默认为零]
  this.count = 0; //计数，跑的圈数
  this.winingIndex = obj.winingIndex || 0; //获奖的位置
  this.totalCount = obj.totalCount || 6; //抽奖跑的圈数
  this.speed = obj.speed || 100;
  this.domData = obj.domData;
  this.rollFn();
  this.callback = callback;
}

LotteryDraw.prototype = {
  rollFn: function rollFn() {
    var that = this;

    // 活动index值增加，即移动到下一个格子
    this.startIndex++;

    //startIndex是最后一个时一圈走完，重新开始
    if (this.startIndex >= this.domData.length - 1) {
      this.startIndex = 0;
      this.count++;
    }

    // 当跑的圈数等于设置的圈数，且活动的index值是奖品的位置时停止
    if (this.count >= this.totalCount && this.startIndex === this.winingIndex) {
      if (typeof this.callback === 'function') {
        setTimeout(function () {
          that.callback(that.startIndex, that.count); //执行回调函数，抽奖完成的相关操作
        }, 400);
      }
      clearInterval(this.timer);
    } else {//重新开始一圈
      if (this.count >= this.totalCount - 1) {
        this.speed += 30;
      }
      this.timer = setTimeout(function () {
        that.callback(that.startIndex, that.count);
        that.rollFn();
      }, this.speed);
    }
  } };


module.exports = LotteryDraw;

/***/ }),

/***/ 29:
/*!*************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/addUnit.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/random.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),

/***/ 31:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/trim.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),

/***/ 32:
/*!***********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/toast.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 33:
/*!***************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/getParent.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),

/***/ 338:
/*!*********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/util/emitter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ }),

/***/ 34:
/*!*************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/$parent.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 35:
/*!*********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/sys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 36:
/*!**************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/debounce.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),

/***/ 360:
/*!*****************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/util/async-validator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}) && "development" !== 'production' && typeof window !==
'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;}

    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors) }) :
        resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results) }) :
        resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField };

  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
   *  Rule for validating required fields.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
   *  Rule for validating whitespace.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i };

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function _float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear ===
    'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  } };

/**
        *  Rule for validating the type of a value.
        *
        *  @param rule The validation rule.
        *  @param value The value of the field on the source object.
        *  @param source The source object being validated.
        *  @param errors An array of errors that this rule may add
        *  validation errors to.
        *  @param options The validation options.
        *  @param options.messages The validation messages.
        */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
   *  Rule for validating minimum and maximum allowed values.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
                    *  Rule for validating a value exists in an enumerable list.
                    *
                    *  @param rule The validation rule.
                    *  @param value The value of the field on the source object.
                    *  @param source The source object being validated.
                    *  @param errors An array of errors that this rule may add
                    *  validation errors to.
                    *  @param options The validation options.
                    *  @param options.messages The validation messages.
                    */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
   *  Rule for validating a regular expression pattern.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1 };


/**
                         *  Performs validation for string types.
                         *
                         *  @param rule The validation rule.
                         *  @param value The value of the field on the source object.
                         *  @param callback The callback function.
                         *  @param source The source object being validated.
                         *  @param options The validation options.
                         *  @param options.messages The validation messages.
                         */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
   *  Validates a function.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a boolean.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates the regular expression type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is an integer.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is a floating point number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an array.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an object.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
                      *  Validates an enumerable list.
                      *
                      *  @param rule The validation rule.
                      *  @param value The value of the field on the source object.
                      *  @param callback The callback function.
                      *  @param source The source object being validated.
                      *  @param options The validation options.
                      *  @param options.messages The validation messages.
                      */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a regular expression pattern.
   *
   *  Performs validation when a rule only contains
   *  a pattern property but is not declared as a string type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Performs validation for any type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any };


function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid' },

    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s' },

    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters' },

    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s' },

    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length' },

    pattern: {
      mismatch: '%s value %s does not match pattern %s' },

    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    } };

}
var messages = newMessages();

/**
                               *  Encapsulates a validation schema.
                               *
                               *  @param descriptor An object declaring validation rules
                               *  for this schema.
                               */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule };

        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z });

      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField ===
      'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key });

      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  } };


Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;var _default =

Schema;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 361)))

/***/ }),

/***/ 361:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 362);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 362:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 361)))

/***/ }),

/***/ 37:
/*!**************************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/function/throttle.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),

/***/ 38:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/config/config.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-11-19
var version = '1.8.2';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),

/***/ 39:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/config/zIndex.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** D:/xcx/dabangsStar/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 40:
/*!********************************************!*\
  !*** D:/xcx/dabangsStar/common/methods.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {
exports.toLogin = function (data) {
  // console.log(data.data.code)
  var datas = data.data;
  // 如果401，登录失效，报错，跳转到登陆页
  if (datas && datas.code == 401) {
    uni.showModal({
      title: '请登录',
      content: '登录后可以获取更多功能',
      success: function success(res) {
        if (res.confirm) {
          uni.navigateTo({
            url: "/pages/center/center" });

        } else if (res.cancel) {

        }
      } });

  } else {
    uni.showToast({
      title: data.message,
      icon: 'none',
      duration: 1000 });


  }



};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 41:
/*!*****************************************************!*\
  !*** D:/xcx/dabangsStar/common/http.interceptor.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var install = function install(Vue, vm) {
  // 此为自定义配置参数，具体参数见上方说明
  Vue.prototype.$u.http.setConfig({
    // baseUrl: 'http://192.168.20.4:18001', //本地
    // baseUrl: 'https://123.207.120.31:18001', //线上
    baseUrl: 'http://123.207.120.31:18001', //线上
    // loadingText: '努力加载中~',
    loadingTime: 800
    // ......
  });

  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptor.request = function (config) {
    // 引用token
    // 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
    // 见：https://uviewui.com/components/globalVariable.html
    // config.header.token = vm.token;

    // 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
    // config.header.token = vm.$store.state.token;

    // 方式三，如果token放在了globalData，通过getApp().globalData获取
    // config.header.token = getApp().globalData.username;

    // 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
    // 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
    var token = uni.getStorageSync('Authorization');
    config.header.Authorization = token;
    // config.header.Token = 'xxxxxx';

    // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
    // if (config.url == '/user/login') config.header.noToken = true;
    // 最后需要将config进行return
    return config;
    // 如果return一个false值，则会取消本次请求
    // if(config.url == '/user/rest') return false; // 取消某次请求
  };


  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptor.response = function (res) {

    if (res.code == 200) {

      // res为服务端返回值，可能有code，result等字段
      // 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
      // 如果配置了originalData为true，请留意这里的返回值
      return res.data;
    } else if (res.code == 401) {
      debugger;

      // // 假设201为token失效，这里跳转登录
      // vm.$u.toast('验证失败，请重新登录');
      // setTimeout(() => {
      //     // 此为uView的方法，详见路由相关文档
      //     vm.$u.route('/pages/user/login')
      // }, 1500)
      // return false;
      uni.showModal({
        title: '请登录',
        content: '登录后可以获取更多功能',
        success: function success(res) {
          if (res.confirm) {
            uni.navigateTo({
              url: "/pages/center/center" });

          } else if (res.cancel) {
            ;
          }
        } });

    } else {

      // 如果返回false，则会调用Promise的reject回调，
      // 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
      return false;
    }
  };
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 42:
/*!**********************************************************************!*\
  !*** D:/xcx/dabangsStar/node_modules/uview-ui/libs/mixin/mpShare.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  onLoad: function onLoad() {
    // 设置默认的转发参数
    this.$u.mpShare = {
      title: '', // 默认为小程序名称
      path: '', // 默认为当前页面路径
      imageUrl: '' // 默认为当前页面的截图
    };
  },
  onShareAppMessage: function onShareAppMessage() {
    return this.$u.mpShare;
  },

  onShareTimeline: function onShareTimeline() {
    return this.$u.mpShare;
  } };

/***/ }),

/***/ 47:
/*!**************************************************!*\
  !*** D:/xcx/dabangsStar/pages/index/kaiping.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 54:
/*!****************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/searchBtn.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACAklEQVQ4T63UMchXdRTG8c9jUBK5FKHiINRUIWGQJK1Bg4ggCBJSoFsJ6uKiQYnkEtUQmGCgBg3ikIXgEElLQ1mQiFCggyIGSWhFpJYnztu98vflBd8/+Nvu5Xe/9znPOc+JWaeqlmAL1uNJLMI/+BXf4BBOJrk9+9t+zviyqhZgIz7CH/gSX+EiHsIqvIzncAqbk/wyGzoDrKoHsBNv42NsT3JjLgVV9Tw+xWI8k+TS5L0R+AoOY0eSD+cCTb6rqkfwIx7E00m6opmTwbOf8VmSV+8Fm7BoIa7hnSR7JoG78Ho3IMnf8wUOVu3Gm1g++tkKv8fZJK9NAxuAD6MbsynJ52PJ17E1ySfTAgfoBRxJ8tYI/BcvJelRmPpU1WmcSbJ5BPZ4rEtycmra/yN3pucyybYReBkHJjs1DbiqrmBPkv0j8CiWJXlxGtDg37P4FquT/DACO07HO1ZJvp4GWlUzELyQ5OYI7Nh9gRV4Ksmf84FWVY9Zx7TVfXdnsAfpvWF+wtUhSnPmeCIlnaiO6gmsTVJ3AQfoUvQIPIa9eC/JX5Nqq6o9O4iVOIYN2NdpGaF31tcA7d23Ax3HVtmKfxuWwON4dKik92X/vMs+gHexu6F3ASdKapWtppU8gd9xDu3V+SS3ZpXfO/SDGeh8GnCvO1XVKem19/59AQ52vYE1/wFwJMVJgPSn0gAAAABJRU5ErkJggg=="

/***/ }),

/***/ 55:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/oneStart.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 86:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/starCard.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/home/starCard.png";

/***/ }),

/***/ 87:
/*!**************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/leftRow.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAyCAYAAADBXTDrAAADVElEQVR4Xu2dT2sTQRjGZ0z1K6htNulHkaRKkQoVFPEg4kEED15EEL+DePEgCF5E8CJC3ZlNBEEQwYtYRCyKClLUYmlRqFTNzjwSpaClaffPrNnuPLnmfZ9539/7MGw2yY6cn5qC4IsEtgEBK8QlScNug0n5XiIACHGhodRlGtZ3M5S9/75XpTwXhOHVfqk0bNkH5nN9AKSUZ+theG0NAw3rsyHK3bsFcLqh1I2/y6Rhyz00L6uTQhhh7am61jfXA6BhvbREiZsGYghxoqHU7Y2qpGFLPDvvSgN6AjgeaH1nUO80rHeuKGfDEOJnDTg6ptTMZhXSsOWcn19VAT9qwPSo1p2tGqdhtyLE94smsApjphtRdD/JQjRsEkqMKYYA8E0YMxV0Og+TLkDDJiXFONcEVgAcbCj1KI0wDZuGFmPdEAC+Smsn61H0JK0gDZuWGONzEYAQXwBMNJV6mkWIhs1CjTlZCSwZY/aPR9GzrAI0bFZyzEtFQAKLI0K09ij1IlXiumAaNg895iYlsGCNaTej6GXShEFxNGxegszfnADwQQKtutavXaCiYV1QpMYgAvOi12sF3e4bV4hoWFckqfMPAQBvR4D2qNbvXaKhYV3SpNYagVfYsaPVmJn56BoJDeuaqOd6AOZsHLfHu91PRaCgYYug6q/m8xFjJvZG0WJRCGjYosj6pgvMijhuB93ucpGt07BF0vVJm4b1adqV6ZWXBJUZpSeN8EOXJ4OuWJu8rVWxgVa+HX5xUPkRV7LB+V3Avt1KvXPVHe8SuCJJnY0J8McvdMY2JLBQA1qjSs3lrZ07bF6CzE9K4PNOoM0fcCfFxbgyEFiS1k7UtZ7NWgx32KzkmJeNALBshTjAPyFmw8esYRDg37yHQZ1r5iSwYo2ZbEbR4zQ6vCRIQ4uxbgnwUUVueVLtvxBYtXF8qNnpPEiyGnfYJJQYUywB4HsNOMzHbRaLmeoOCfx+oLEQR8bC8N5mstxhHUKnVD4CAHpSymNBGN4dpETD5mPMbNcEeCiHa6LUK5pA/9gjCHEyCMNb69fiDls0fepnJcCD5bKSY96QCPw5Z/ZMEIbX1yrgDjukWXDZhAR4OHJCUAwrD4H+IcnA+brWV7jDlmcsrGQrAsDFX4A7uyQzJn3pAAAAAElFTkSuQmCC"

/***/ }),

/***/ 88:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/rightRow.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAyCAYAAADBXTDrAAADZklEQVR4Xu2dO2sUURiG32/OrJIgKmhQo0LAC94IWig2ghBw57ZpbKwsrCzExip/wMZGLGwEGwsLQdIoxlzwb9gYs7sm/geTPTJDCEhMspfZmZP53um2Ot/7fA+HmTM758hKksx4wHPwIoF9QEDSGptx/EyAFxDJfvMiAVcJbAnaSpInsPYVpXW1VawrJfDPjNpOksfW2teUlnK4SmDbLUAzjh+JyBsAnqtFsy69BP57z9pOkocA3lrA6EXD5C4S2PEhqxnHDwR4BxHfxcJZk04Cu64KtKLoPkTeQ6SmEw9Tu0Zgz2WsX3E8vSHyQYADrhXPevQR2FPYFEkrSSJY+xEiB/UhYmKXCHQlbPZyIQzviTGzAEZcCsBadBHoWthspg2Cu/D9TwBGdWFiWlcI9CRsWvRqHN/ZEPkM4JArIViHHgI9C5uiaYfhbWvMHIDDelAxqQsE+hI2uz2o12/ZWm1OgKMuBGENOgj0LWyK52cY3jDGzAM4pgMXU5ZNYCBhNx/EJsWYBSsyVnYYjl99AgMLmyJaCcMrnjGLAE5WHxkTlkkgF2HTAMuNxiXf2lTa8TIDcexqE8hN2M0HsfOo1ZYAnK02NqYri0CuwqYh1oJg4o8xCyJyrqxQHLe6BHIXdnOd9ow1Jp1pL1QXHZOVQWAowmZLXvX6Kc/3F0XkchnBOGY1CQxN2BTXj6mpE/7IyKIAV6uJj6mKJjBUYdMw3xuN46OdzjxErhcdjuNVjwCFrV5PK51oqMKuheHYujELACYrTZHhCiMwNGH50FVYD1UNNBRhm9PT49LpfOOyliqXCgmbu7DLQTBh+OKgkOZpHCRXYVv1Ol/NarSowMy5CduOootWZAkipwusn0MpI5CLsPx7oTJrSow7sLC/4/jaOrDEP3CX2EVFQw8kLD+RUWSKI1H7FrYZBDfh+1/5EaIjnVRSRl/CZp95e94XiBxRwokxHSHQs7DcSMORziktoydhuVWRUkscit21sNwMzqGuKS6lK2FXoyjYEJnldpuKTXEk+p7CckNjRzrFMjICuwrLLeNpiWsEdhSWh3K41irWs+MMy2OPKIerBLbNsDxYztVWsa5tMyyP7qQUrhPYmmFbUfQUIi95zqzrLdNdXyYsj5/XLcF+Si8rSTLjAc/3U9GsVS+Bv3bJnwftV6mxAAAAAElFTkSuQmCC"

/***/ }),

/***/ 89:
/*!***********************************************!*\
  !*** D:/xcx/dabangsStar/static/home/more.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABiUlEQVRIS82XS07DMBCGv6Y8xUs8BGLFAqkXyA24RRY9X2/BDbrNIhKLLkECBC0CCgnor+LKjZLaoiGppSiS7czn32NPZjr4tx1gC9gENoAg/zQDvoEvYAp8+JjsOCZpfB/Ys0Auu1rIGzABfqomLwPvAodA10WqGE+BV+C9bLwKfJSr/CNz4TOpfykaKgMfA1JbZ5PqZ9tgEVyn0uLCF5TbYKmU2v9sUj3zuQHrfb7CQfJdrA7cg067AR8AeppoY2BswBcNqDWipPpe4G3gtAmpFuNRYAUJRacm20TgszwGNwmeCtykf+d+FvjSulalqgeDwXWv17uK43jU7/fvNMm3r2IbZ9fJCR4OhzdBEHSzLEvDMLyVMd++ZWDnVht1SZKMoihaUOzqqwCnrR6u1q5TawFEbnD6ucZLPg+ZstnaT6K136JUK309qXFLy0w9mfR3LVIfs8JWkj0DrzPp805vDVw+1wJWSeiVT5eWNGtZwhRPpSKcdkFFm3bBLtoUFFS0Sd2nz834BTjwiNHNodaJAAAAAElFTkSuQmCC"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map