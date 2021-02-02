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
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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

/***/ 125:
/*!***********************************************!*\
  !*** D:/xcx/dabangsStar/static/home/kefu.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAA3UlEQVQoU43RPyvGURgG4OseMFt8AGWS941ieiefwKgYlVUyMVpsSsmCzcIXkJJBrPInPoMyS6Sjo99bv6Q4wxmec3XfT51oTillHOvo4BMF59hK8lJZ6lVKmccKVpNcN7MBzGEDi0ke0iQeYDbJa7+p1TiGY/QqPsJuP/EnblrW8FbxfZKJ31ArfRTbFd8kmfwD1/3P/oWbVS4qfscTBrGTZK9Vv49p1OTniu+SdEopdXCVZKaFb5N0SylDOK34EVMYxkmSXgvXxi5GcFjxEhbwgc0kly28jPph329f2txrDHYuyEEAAAAASUVORK5CYII="

/***/ }),

/***/ 126:
/*!************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/jiang.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAyUlEQVQoU83RIS/GcRTF8c9F8AJ05hXYBDabIEiiTSA8hU0xVVAIJtARzASJZkMm2zSboguyx1y79jP/l+DGc7737NzdyMwRnOITQ7jGEZax1PRhrEVmzmA1InqZOYBNTOMZOxHRz8x9PBR8gB7ecYs+1nHSUucwiuOCL7DlbwZxj9m2+OvsFnyGjQ5cvZ8wgY+OfljwFcbx2IzAIi7x1bRJvBQ8hYWI2C4jM6vGawVExE9yZu7h5h/BYzjHW+fAedxV3abVl1e+AdEqcOvDi6AtAAAAAElFTkSuQmCC"

/***/ }),

/***/ 127:
/*!************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/right.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAMCAYAAACulacQAAAA0ElEQVQoU3WQsUrDABiE7/5gWkqjS7W+WHGtLoWEoEOsQ2kJAZ+ogrh2L7g5qOAotBqHTkmTk2pbmoq33sdxd/zyr19L4T6TkvZpc844LrEWUz9KAPYIjg8Mo0ar8b4BOLvoe46rgIZA0iRHMTxpH72tAArgZxh6ltXP4eAS0HTJctA6PnzhKv4XiD3kizMz9AU8lVje/Ji7gFMsOgJvJT3umaHnFLWq+W/stlBe68J4VSm0mQJDgP0pH36UGNgDcOcah5UTUj96lvSQiX/u+wbFfHrzEusvSgAAAABJRU5ErkJggg=="

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
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
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
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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

/***/ 264:
/*!****************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/moreWhite.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADWUlEQVRYR82YvW/TQBTAfVaccxvb9UdC449KCSsSMCAESjdGvhkQGwKJPwAx8LHzIRCwMxRGBBK0wMwAKt8SCImpQxLFsaMkTlzbaW0nspErGpU0aZy0aXvj3bv3fvfu7t17B5ABWqFQEAEAJzEMy2AYtg9F0TQAIBao8H2/4Xlettls/mk2m/MQwjeJREIJqx6EEZRl+QiO49chhCdwHI9EIpENp7VaLcS27ZbjOG9t274vSdKXfnY2BMlms6lYLPaIoqgzEMJQ0J0GHcfxLct6bZrmtXQ6nesF1FO5LMvnKYp6QhDEBABDMbRt+r6PWJa1aBjGFUmSXnaD6WpBUZQbDMPcwXF8cwQdFm3b9nVdv87z/INOmHWGSqXSDZqm70II+23rUOOO4yC1Wu2mIAj31ir4D0RV1fMMwzwf9jyEJfvnmQs8z79YndMGyefzexmG+UmSJBVW4WbkTNM0lpaWDiaTyWygpw1SrVbnWJY9tdmDGRYuOMCapgWx5nQbpFgsZjiO+zjqLel2tTVNmxZF8dOKR6rV6izHcStk2900TZuNx+NnwcLCQkIQhOL4+Di23RCBvUaj0TRNUwSyLF/kef4piqJbGjPCLsrzPF9V1UugXC7PJBKJS2EnjkKuUqk8Bbquf52YmDg8CgNhdeq6/g0sLi6WKYpKhJ00CjnDMMrAMAybJMm+8TyXyyHFYhERRRFJpVJtnkH7uy0kYAgNMj8/j3ieh6AoimQymba+Qfu7gZim6QRbU6EoKt7P5YOuvJd8D49UQL1e/07T9KF+IKMcr9VqP3bF9S2Xy892T0ArlUp7CIKQY7HYjoV4VVXF3fDozcXj8TMrIPl8fnpycvLDjqcBAUylUpnjOG5nE6MAJJfLpVmW/bWdqWKj0TjA8/xKrbMueaZp+vlWlxGdMWjD5HlVWFGUWyzL3h5lOaHr+s1kMtm7nFgDM7ICq16v3+qsadZtzVoXKopyjiCIma0sOS3LuiwIwqtuz8WG6aGqqikMwx6TJHk6Go0OlUq6rusbhjFnWdbVoYrwtdSyLB8dGxu7BiE8CSGMhvmWcF3XsW373fLy8kNJkj73ezQHWmWhUGABAMej0eixSCSyv9tHTavV+u267nvf999NTU3V+gGsjv8Fl6rLp1gio7IAAAAASUVORK5CYII="

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

/***/ 279:
/*!******************************************************************!*\
  !*** D:/xcx/dabangsStar/components/SJ-LotteryDraw/choujiang.png ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/components/SJ-LotteryDraw/choujiang.png";

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

/***/ 282:
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

/***/ 332:
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

/***/ 368:
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

if (typeof process !== 'undefined' && Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !==
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../unapp/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 369)))

/***/ }),

/***/ 369:
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
        if (!path) path = __webpack_require__(/*! path */ 370);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


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

/***/ 370:
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 369)))

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
// exports.toLogin =  (data) =>{  
//     // console.log(data.data.code)
//     let datas = data.data
//     // 如果401，登录失效，报错，跳转到登陆页
//     if(datas&&datas.code ==401){
//          uni.showModal({
//             title: '请登录',
//             content: '登录后可以获取更多功能',
//             success: (res)=> {
//                 if (res.confirm) {
//                     uni.navigateTo({
//                         url: "/pages/center/center"
//                       });
//                 } else if (res.cancel) {

//                 }
//             }
//         });
//     }else{
//         uni.showToast({
//             title: data.message,
//             icon:'none',
//             duration: 1000,

//         });
//     }
//   }


exports.toLogin = function (data) {
  // console.log(data.data.code)
  var datas = data.data;
  // 如果401，登录失效，报错，跳转到登陆页
  if (datas && datas.code == 401) {
    return false;
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
/*!****************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/searchBtn.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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53/+859Xb7vtth/pKGBppXI/dGeqB20Jxd6VJPfSCQSApUuX3tS1a9c7zTh2p9NZun379kXDhw//lPXCxnbNNdfEv/DCC/2aNm16lRnfjXC5XK758+dP7d279yK6CVjaYUkbCcWEYkkKkvvhunK8Lqxv2bJlt1x++eW3mTCgOHbu3Lnk6aef/vTLL79Mp5Pm0adPn4QJEyb0b9iwYVebzWa2ZRWuxYsXv3f11VfPo5OApS2XlE0oJhQ3lNSA14P1rVq16vb27dvfbLZxHzx4cNXIkSNnfPzxx8foonndfvvtVcePH39nzZo1LzXhH5MfdenSZQ5dBCwrU+4joAnFARyKy8k9SxzE68HifwIvX97/sssuu9VMY87Kykr917/+9e7o0aN30EHrmDhxYrN777337tjY2DpmGvfPP//8cadOnWbTQcCy1sq9fzGhOEBDcUtJNXgdWNuiRYtu6N69+91mGW9xcfHpb7/99sNbbrllMVurWVNYWJjts88+69G9e/fbQkNDK5hl3D/88MPMK6644nM6CFhSvqQfZYIt2ryRX+0B3vxoSdV5DVjbl19+eXX37t0Hm2W8u3btWtqpU6d/9u7dexGB2LqKiopc11133bedO3e+b8+ePT+aZdxdu3a9c+HChdfTQcCSIiXVCtRvPtBDcROxJ7Glffzxx12uv/76f5qhz/n5+SemTJnybKNGjV5ds2ZNLt0LDKtXrz7doEGDKa+++uqY/Px8UzxAefXVV9/9ySefXEH3AEuqrwA91TeQl09UlpTCvW9d77777qWDBw9+0uj7ELtcLufGjRvn9+3b9+P9+/efoXOBq169euXmzJkzsGXLlr1sBv8h6nK5nNOmTZt47733rqFzgOXslftQDyP/DCrzrxmoM8U2SY24561r0qRJze+6667HjR6I8/Lyjj/zzDNPtmnT5j0CMVJTU8+0bt16+pgxY57Mz8839MMuNpvNfs899zw+ceLEZnQOsJzaksIDLhwG6ExxNUmtueet6b777qv56quvTgoJCYkw8jh37dq19IYbbnhn165dhXQNv9e4ceOIefPm3Vu/fv0uRh5nSUlJwSOPPPLk1KlTD9I1wFLSJG026uDYfaJs2CV1kXsxOSzmmmuuif/ss89eDA8PjzdwiMj/+OOP3xw0aNDPdAx/58MPP+x0yy233G/kP/IKCwtP9u7dezgnLAKW4pJ7J4o8QrF1Q3EtSbzdZ0FJSUlhmzdvnhQTE2PYvV8zMjJ+veeee16aP39+Bh3Duerdu3fC9OnTH4+Pj29o1DGePHlyd5s2bZ5OS0sromOAZRyVtJ5QbM1QzHHOFhUWFmbbvXv300lJSYZ9eHLr1q0LLr/88nezs7MddAznKyEhIWTJkiX3NGvWrKdRx7h///4V9evXf9HhcLCVIGAdP0nKCYRQHGgP2tUmEFvTsmXLbjdqIHY4HMWffPLJq82bN3+HQIwLlZ6eXtK8efO3Pvvss9edTmexIX/A1q7d8aeffhpAtwBLCZiNCQIpFIdIqse9bT3vv/9+x3bt2vU14tjy8/NPPProo0/0799/KZ1CWejXr9+Sxx9//MmCggJD7mncoUOHW958881L6BRgGQmS4gLhGw2k5RMNJDXk3raW++67r+brr7/+clBQUJjRxpaRkbGzV69e4zmIA14Kn9Hz5s17Oj4+3nCzOCUlJQWDBg0a9vHHHx+jU4AlZEpaaaQBsab4woVIulIBekKLVSUnJ0esWrXq1fLly1cx2tj27dv382WXXfbqsWPHiukUvKV69eqhP/3007DatWt3NNrYsrOzD7Ro0eJxHrwDLGOlJxwTik0eipkltpigoCDb3r17n6pZs2Z7o41t7dq1n1966aUf8LARfCEsLMy2YsWKQW3atLnRaGNLTU1dVr9+/cl0CbCEk5JWWTkUB8Ka4hBJdbiXrWXhwoW9jRaIXS6Xc968eW+mpKTMJBDDV4qKilxt27Z9/+uvv37L5XI5jTS2evXqdV64cOH1dAmwhHhJFa38DQZCKK4llk1YysiRIxtcccUVdxhpTE6ns3TmzJkv9e7dexEdgj9cd911386cOfMlp9NZaqRxXXXVVYMee+wxHnIGrMHS77pbfflEsKRuhGLrSE5Ojli9evVrkZGRlQ0UiIvfeuutFx544IF1dAj+NmXKlFYPPfTQSCM9fJqbm3s4OTl5GOuLAUtYIcnvp1eyfOL81SYQW8sXX3xxn5ECcWlp6ZmXX355HIEYRvHoo49unDRp0tjS0tIzRhlTVFRU9W+++WYw3QEsoYFVvzErh+IgsZbYUmbNmtWlXr16lxtlPCUlJQXPPffcs08++eQWugMjefrpp7dNmDBhdGlpaYFRxtS0adOeb7/9dgrdAUyvkqQYQrG5JEkK5d61hl69esX369dviFHG43A4ip5//vlx48aN+5XuwIjGjBmzc+LEieMcDodhZozvuuuuB7t27RpLdwDTs+RzAlZdU2yTe1/icO5b8wsKCrKlpaWNq1q1agsjjMfpdJa++uqr4x577LFNdAdGN3HixGZPPPHEs0ZZY3z06NENSUlJY9mhBTA1l6QfJeX5bQCsKT5n1QjE1jFnzpyrDBSIHdOnT3+BQAyzGDly5NY333zzBaPsSlG1atXWH3/8cVc6A5iaTVJdq31TVg3FdblfraFbt26x11133SBD/Fnscjk//vjjV+699941dAZm8vDDD6+fPXv263LP7vjdjTfeeHenTp2i6QxgatUllbNU0rfg8onKkniYwyL2798/olatWh2MMJavv/76reuuu+5bugKzWrp0ad+uXbsaYo/vffv2La9bt+5LdAUwtb2SdvjjwiyfODdsEm8R77zzTjujBOI1a9Z8RiCG2V1xxRWfbd261RD3cZ06dTq9+eabl9AVwNRqykJb31ptpjhW0mXco+aXnJwcsWbNmjfDw8Pj/D2W/fv3r6hfv/6LPBgEK4iIiLDv3LlzZFJSkt/fUSsoKDjZunXr+3ft2lVIZwDT+lXSHl9flJniv8e+xBYxe/bsO40QiE+ePLm7S5curxKIYRUFBQXOLl26vJydnX3QAAE9/pNPPrmDrgCmVlPuB+9Mz0qhOFxSIvem+T3++OP1mjRp0sPf4ygsLMy87bbbJnI0Laxm//79Z2677baxRUVFWf4eS/PmzXs+9NBDTGgA5C9CcRmqY5W/VAJZUFCQ7Yknnhhq8/NG106ns3TChAkvLF68+BRdgRV98803JydOnPi8v7dqs9ls9qeffvofQUFB/PwGzJ3BCMUGESypBvek+X388cdd4+PjG/p7HF9++eXbEyZM2EVHYGXjxo379euvv57u73EkJCQ0nTlz5uV0BDCtWM+HqVnlQbvakpK5J80tKSkp7Ndff33b32uJd+3a9X2jRo1eoyMIFLt37360fv36Xfw5hoKCgoyGDRv+8/Dhw8V0BDClo5LW++piPGj316EYJjdr1qwb/R2Is7OzD3bv3v1tuoFA0q1btzdzcnIO+XMMERERlT766KPedAMwrUSZ/DRhK4TiSpIiuRdN/0s5tn379n38OQaHw1E0fPjwF3mwDoEmLS2taNSoUS85nc4S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lQcsL8ysoTjUE4wRAH766Sef/0K69NJLk6k8YDytWrXyeSj+7rvv9lN5gFBs1FDM0okAMmfOnGMOh6PIl9esU6cOoRgwoKSkpCa+vF5paWnBF198kU7lAUKxUUMxSycCSEFBgfPkyZOpvrxmXFxc/caNG7OuGDCQNm3aRFWsWLGuL6+Znp6+2+FwuKg+QCgmFMMQ0tLSdvnyena7Pejhhx9mthgwkGHDhrW22Wx2X15z3759O6k8QCg2cigOo3eBZdOmTbt8fc327du3ovKAcbRt29bnr8lffvllB5UHAoJpd59gpjjAzJo1y+ezNfXr17+EygPGEBYWZqtVq1YbX17T5XI533777V1UHwiMHzNmDcUh9C6wLFu2LDsvL++IL68ZERGRcN9993HkM2AA999/f52wsLBoX14zOzt7f2pq6hmqDwQE0x7ewUxxAEpLS9vm62vefPPN7ag84H833nijz9+5SUtL+5XKA4Rio4diZooD0ObNm7f7+potWrS4jMoD/pecnHypH37msJ4YIBQTimE8M2bM2OLra8bExNS66667qlN9wH9uv/32qjExMbV9eU2Xy+V65513tlB9IGAEeSu/EopR5hYvXnwqJyfnoK+vO3jw4E5UH/Cfe+65x+fv2GRmZu5ZuXJlDtUHAopX8qW3Q3EwfQtM+/bt2+TrazZr1qwjlQf8p2XLlp19fc3du3dvoPJAwPFKvmSmGF7x448/+vwXVXR0dNK9997LLhSAHzz00EN1oqOja/j6ugsWLFhH9YGA45WNHLwZiu0+CN0wqBdeeGFbaWmpz7dIuueee66k+oDvDRo0yOevvZKSktxXX301leoDAcd0M8UsnQhg6enpJUeOHNnk6+s2a9asa1xcHPce4EOJiYmhycnJXXx93YMHD24oKChw0gGAUGz0UBxEzwLb+vXr1/r6mqGhodFTpky5lOoDvvPSSy9dGhISEuWHnzEbqT4QkEy3+wTriQPc5MmT17hcLp/P4nTr1q071Qd8+pq72tfXdDqdjkmTJq2h+kBAMt3uE8wUB7iVK1fmnDhxwuen2yUmJja/+eabq9ABwPsGDhxYrXLlyk19fd3jx49v2bhxYx4dAAKS6WaKecgOWr9+/SpfX9Nms9meeOKJnlQf8L6HH364uySbr6+7du3alVQfIBSbJbjysBM0efLklf5YQtG8efPutWvXLkcHAK++ziJbtGjh8z9AXS6XY/LkyavpABCwTLd8wkbP8MMPP2QdO3bM50ewhoSERE6ePLkzHQC8+kdv9+DgYJ//8Xn06NHNy5cv5xQ7IHCZbqaYNcWQJK1YsWKZP6571VVX9QkLC+OPM8AL4uLigjt27HidP669fPnyZXQAIBQTimE6o0ePXuVwOIp9fd3y5csnvv322x3oAFD23nzzzcvDw8PjfX1dh8NxZsyYMSydAAKb6fYp5kE7SJJ27txZsH///lX+uPYNN9xwU1BQELPFQBkKCgqyXX311Tf449p79+5duWvXrkK6AAQ0r/xeJ7jCJ+bPn/+9P64bGxtb77XXXmtDB4CyM3Xq1JSYmJja/rj2559//j0dAAjFXvmiLpfLO6O12WpJakbfIElhYWG2U6dOvRsREVHJ19fOzMxMjY+Pf5QuABcvKCjIlpGRMSU2Nraur6+dn59/Ijo6eojD4XDRCSCgnXC5XGV+eA8zxfCJoqIi1/r16xf749pxcXH13n777RS6AFy8t956q70/ArEkrVu3bhGBGIC3sE8xfGbcuHGLXS6Xwx/X7t+//0B2ogAuTkREhP3mm2++3R/Xdjqdpc8888x3dAGAGUMx8D+WLFmSdfDgwV/8ce3o6OiaM2bM6EIXgAs3Y8aMrtHR0TX8ce39+/evYm9iAIRiWMZ//vOfBf669vXXX397YmJiKF0Azl+9evXK9erV63Z/Xf+TTz75li4A8DDdg3b1JDWmb/i9U6dOvRobG1vHH9detmzZB126dPmMLgDnZ9WqVbe1b9/+Fn9cOysra1/FihUfoQsAfosSLpdrRVl/UWaK4XOLFy+e769rd+zYsW/Xrl1j6QJw7vr06ZOQkpJyYyD+zAAQOJgphs8lJCSEpKWlvRsWFuaXcLpr166ljRo1epVOAOdm7969T9apU6ejP65dWFiYVaNGjbszMzNL6QQAjwyXy1XmJ1syUwyfS09PL1m9evXX/rp+w4YNuz777LON6ATw9yZMmJDsr0AsSatWrZpHIAbwO05vfFFmiuEXzZs3j1y/fv17wcHB4f64fnZ29oHatWsPy87OdtAN4I/FxcUF79279zV/7ThRUlKS37p167u3bdtWQDcAnMV0h3cQNvCntmzZkr9p0ya/PU0eExNTa+7cub3pBPDnPv/88xv9FYglaePGjd8SiAH4ijdDMacO4S8NHz78S4fDUeyv619++eUDbr/99qp0Avi/7rrrruqdOnW6xV/XdzgcZ4YNGzaPTgDwFW8un6glqRklxl9Zv3794NatW/f21/XT09O3V61adSRHxwL/FRYWZktLS3s+ISGhib/GsG7durmXXHLJDLoB4A8cc7lc68r6i/KgHfxq+PDhX/hztjghIaHpV199dS2dAP5r3rx51/kzEDscjjOPPvroF3QCwJ/wyoN2LJ+AX/3www9ZGzdu/NqfY+jevfudd911V3W6AUgPPPBArauuuuoOf45h/fr1X3OkMwBf8+byiWqSWlNi/J02bdpErVq1anpISEiEv8aQmZm5p169ek+wGwUCWWJiYujOnTsnR0dH1/TXGEpKSvLatWs3ZOPGjXl0BMCfOOhyubaU9Rdlphh+t379+tzVq1f79a3SuLi4+osWLbqNbiCQffvtt4P8GYglaeXKlXMJxAD+humWTzDjhnM2ePDgeUVFRVn+HMMll1xy08svv9yCbiAQvfbaa21atGjh1/X1hYWFmXfcccdXdAOAPzImoRiGkJqaembBggUf+XMMNpvN9sADDzzatWvXWDqCQNK9e/eKQ4cOfViSzZ/j+Prrrz9KS0sroiMA/oZXTrn05priipI60jecq4iICPuRI0dei4mJ8evbtydOnNhWp06dUQUFBU66AquLiooKSk1NHZ+QkNDUn+PIysral5iYOKyoqIildwD+zg6Xy7W3rL+oN2eKOase56WgoMD5zjvvTPP3OCpXrpy8bNmyO+gIAsGPP/54p78DsSRNmzbt3wRiAOfIdMsnCMU4byNGjNi6b9++Ff4eR9u2bW+cOXNmJzoCK/voo486+/PwnN+kpqYuGzFixFY6AsCqoZg1xbggw4YNe8/hcPh7XaHttttue+jBBx+sTUdg0ddZnf79+z/g73GUlpaeefDBB2fQEQDnwXS7TzBTjAsyf/78jJ9//nmOv8cRFBQUNmnSpGeuueaaeLoCK7nmmmviJ0yYMCooKCjM32P56aefZi9cuDCTrgDwd8b05oN2ktRLfn6aGeYUFxcXvHfv3teio6Nr+Hss2dnZBzt16vTktm3bCugMzC45OTli+fLlk/z9QKvntXWgdu3awzg0B8B5WuFyuU6V9Re1e3nQzBbjgmRmZpa+9tprb8oAh8DExMTUXLhw4RMRERF2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0iYrheIYSZ3oK4wsIiLC/vPPP9/VqlWrG6z2vblcLld6evq2FStWLJs0adKqNWvW5NLxv5eSkhI1YsSIDh06dOickJDQ1Cynz52P1atXz7nssstmORyOc/qF0LBhw/ANGzb8KyIiwut/GGzevPnrNm3aTD/XsQGwpJ2SUq0UioMl9aSvMIPPP//8qt69e99rt9tDrPj9uVwux7Fjx7atW7du5VtvvbWGGeT/1adPn4S77rqrTevWrTskJiYmm+2wl3PldDqLP//887duvvnm788zRN/Rrl27vr4a59atW79t1arV2wRjIGCtkXTCSqFYcu9VHE5vYQYjR45sMGrUqBHh4eHxFv9WXVlZWXt37ty5/rvvvtswefLk3YG2g0VcXFzwE0880eSKK65oXb9+/TbR0dE1rf49FxQUZIwZM+b5l156KfV8/n/t27evsHz58nd9vZXhzp07F7dq1epN1scDAel7SQVWC8XtJCXQW5hFhw4doj///PMnzLzf7PkqLS0tOHbs2LadO3duW7p06fapU6fus1pIjoqKCrr//vvrXnnllU0bNmzYNDExsbmZ96s+X8eOHdvcp0+fl1avXn36fP+/3333Xe9u3boN9se4d+3a9X3r1q3/VVBQ4OSnExAwHJK++f1/aYVQzA4UMGWA+uGHH+5s06bNDfLCU/aG/2nkcJw5efLknrS0tN3btm1L/eabb1I/++yzE2YZf1BQkK1fv36Vu3fvXjc5ObleUlJSo/j4+LpBQUHlAvB2dq1du3Zuly5dPrzQYHny5MnJcXFx9f31DaSmpv7YokWLVwnGQMDI1u92nrBKKGYHCpjWjBkzLrvtttseDA4ODvglQCUlJflZWVkHMjIyDqelpR3ctWvX0V9++eXoggULMvw1qxwTExPUq1evym3atKnSuHHjatWrV0+qVKlSjdjY2FohISERgd6z0tLSgpkzZ752MQdjJCcnR2zZsuXjMtyT+ILs27fv55YtW07moBogIByW+4hny4XiGLEDBUysf//+Vd54443hcXFxDajG/+V0Oh1nzpzJzMvLO5mTk5Oem5ubferUqVOZmZmnT548efrkyZP5R48ezc/Ozi4+ffp0yYkTJ4okKTU1tfD3Aadhw4bh5cuXD65bt25kTExMaNWqVSPj4+Mj4+PjK8TFxUVXrFgxtkKFCrEVKlSoVL58+fjw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6qmnnp08eXIq3QP88zKUez3x34ZTq4biupKacB8AZevWW29NHDx48KXJycmXJCQkNGaJRdlwuVyO9PT0HVu3bl03ffr0VXPmzDlOVf7ck08+Wf+5554bGxISUt4kwbhgzJgxz06cOHE33QN87oSkNef4s9iSoThGUifuA8B72rRpE/XII4+0SklJaV2jRo1W4eHhsVTl3BUWFmampaVtWrt27YYpU6Zs3LhxYx5VOXePPvpo3eeff35caGholBnGW1paWjBhwoSxY8aM2Un3AJ/aIWlvIIdi1hUDPnbffffVvP7665vXr1+/SWJiYqPw8PA4qvK/IfjYsWO/7tq1a/uXX365Zdq0aWlU5eI8+OCDtV9++eVxoaGh0SYJxmcmTZo0dtSoUdvpHuAzyyVlB3IollhXDPhV3759K/fp06dxcnJyoxo1ajSJjo6uGSj7IbtcLmdOTs7BQ4cO7dy6deuvn3zyyfb58+dncFeUvSFDhiS9/vrr48PCwmLMMF6Hw1E0efLk55588sktdA/wunNeT2z1UFxLUjPuB8AYGjduHDFgwIDabdu2rV27du06lStXrlWhQoXqZtli6y9CzpnTp08fPn78+IEDBw7sW7du3f4PPvhgb2pq6hm67ht33XVX9TfffHOCWZbwOByOon/961/PDxs2bAPdA7zqqKT15/ovWzkUR0q6gvsBMK6goCDbTTfdVPmyyy6r3qBBg6pVq1ZNjIuLS6xQoUKViIiIeLvdbohTzJxOZ3FBQcHJ06dPH8/MzDx29OjRY7t37z76448/ps2bNy/D4XC46KZ/DRw4sNo777zzXHh4eLwZxut0OovffPPNFx566KF1dA/wms2SznmpmpVDsSRdKSmCewIwp06dOkVfcskl8XXr1q1YuXLl6Pj4+IoVKlSIjoyMjAwPDy8fFhYWGRoaGh4SEhJht9tDg4ODQ4OCgsrZ7fbg3wUQh8PhKJTc6zqdTmepJBUXF+cVFxcXFRUV5Z85cyYvPz8///Tp09kZGRlZ6enpOXv37j21du3ak8uXL8+hG8Z38803V3n//fcnREREVDJJMC6dPn36C/fee+8augd4xRJJhYRit+aSanJPAEBg6NOnT8IHH3wwITIysrJZgvH777//0j333LOK7gFlKl/S0vP5P3gjvxpp31IebAGAADJ37tz0W2+9dWReXt4xM4zXbrcHDx48+IkZM2ZcRvcA62VAI4XikzrHJw4BANYwf/78jH79+o3Mzc01xWmANpst6I477hg+a9asLnQPIBR7S4nOcW86AIB1LFy4MLNPnz4jT58+fcgkwdg+YMCAR+bMmXMl3QMumlNSJqH4/0rn3gCAwLNkyZKsXr16jczJyTlolmDct2/fhz7//PPudA+4KKfknhglFP/OCe4NAAhMy5cvz+nRo8fT2dnZ+0wSjG19+vS5/6uvvupJ94ALdtwoAzFaKM6RxCb6ABCgVq9efbpbt27PZGVl7TXJkG29evW695tvvulF94ALYphVAnaKAwAwkvXr1+d26dJlVGZm5m6zBOOePXsO+e6773rTPeC85Mm9HRuh+E+whAIAAtyWLVvyu3Tp8mxGRsZOs4y5W7dug5cuXXoT3QPMmfmMGIozJDm4TwAgsG3btq2gU6dOY9LT07ebZcxdu3a9c9myZbfQPeCcGGp1gBFDsUPuPYsBAAFu165dhe3btx97/PjxrWYZ8+WXX37bqlWrbqN7wF8qkXvnCULx3zjOvQIAkKT9+/efadeu3bijR49uMsuY27dvf8svv/xyB90D/tQJufcoJhSfQyjmdDsAgCQpLS2tqG3btuOPHDmywSxjTklJ6btu3brBdA/406xnKEYNxcUyyOkmAABjOHbsWHGLFi3GHzp0aI1ZxtymTZvemzZtGhIUFGSjg8D/55ABdxuzG7hgx7hnAABny8zMLG3VqtULBw8eXGWWMbdo0aLXxo0b7yUYA/9fugy4qYKRQzFLKAAAfxiMW7Zs+eK+fftWmGXMzZo167lly5b7wsLCCMaAdNSIgzJyKD4jKYv7BgDwe9nZ2Y5mzZq9lJqauswsY27SpMnVmzdvfigiIsJOBxHAnDLoQW1Gf2GyhAIA8IcKCgqcLVq0eGX37t1LzTLmhg0bXrl58+ZHCMYIYOmSSgnFhGIAQBkH41atWr2+c+fO78wy5nr16nXZunXrY1FRUUF0EAHIsNnO6KG4UCyhAAD8TTBu1qzZG9u3b19oljHXqVOn05YtWx6Pi4sLpoMIIE4Z+CwKM7x9c4R7CADwVxwOh6tFixZvbd68eYFZxlyrVq0OGzZsGEEwRgA5IYMunTBLKD4qdqEAAJxDMG7Tps20jRs3zjPLmJOSklI2bdo0MjExMZQOIgAcNvLgzBCKiyRlcB8BAM4lGLdu3frfa9eunWuWMVevXr3tunXrRiYlJYXRQVhYiQy664SZQrHEEgoAwHlISUmZsXr16jlmGW/VqlVbr169ehTBGBZ2TO41xYTii3RcBjz5BABgXJdeeulHP//883/MMt7ExMQWa9asGVOvXr1ydA8WZPgJTrOE4lK5F2cDAHDOOnXq9J9ly5Z9YJbxVq5cuenKlSvHNm7cOILuwULOSMokFJedw9xTAIDz1aVLl8++//77GWYZb6VKlRr/9NNPY5OTkwnGsIojMsGmCWYKxelyP3QHAMB56dat29xFixZNl0l2M4qPj2/4008/jW/VqlV5ugcLMMXEpplCsUvMFgMALlCPHj2+WrBgwTSzBOPY2Nh633///fj27dtXoHswsRxJpwnFZe8Q9xYA4EL16tVrwbx586aaKBjX+fbbb8d36NAhmu7BpNLMMlCzheJccewzAOAi9O7de9Fnn332L5fL5TTDeGNiYmp98803E7t27RpL92AyTploW127CQvMbDEA4KL069dvyezZs181SzCOjo6uMW/evAndu3evSPdgIsfkPrSDUOwlR8WexQCAi3Trrbf+OGvWrMlmCcZRUVHVP//884m9evWKp3swCVNNZJoxFJd4/vIAAOCiDBw4cPmMGTNecjqdpWYYb/ny5avOnj17Yu/evRPoHgzujKSThGLvS+NeAwCUhcGDB6949913XzRLMI6MjKwya9asiX379q1M92DwrOYy04DNGoozJeVxvwEAysLQoUNXv/XWWxOdTqcp1j9GREQkzJw58/nbb7+9Kt2DAblkwglMu4kLfpB7DgBQVh544IF1b7zxxgSHw1FskmAcP23atImDBg2qRvdgMCckFRKKfeeQeOAOAFCGHn744Q2vvvrqcw6HwxQnqIaHh1d8++23J/7jH/+oQfdgIKacuDRzKC6Rifa+AwCYw/DhwzdPmjRprMPhOGOG8YaFhcX+61//mvjAAw/UonswgHxJGYRi/hIBAFjA008/vW3ChAljSktLTfEWcFhYWPTkyZPHDxs2rA7dg5+Z7gE7q4TibLnP1AYAoEyNHj16x9ixY0eXlJQUmGG8oaGhFSZNmjT+scceq0f34CdOmXiHMLsFGnCAexAA4A3jx4//9ZlnnnmmpKTEFDsehYSElH/++efHjxw5sgHdgx8ck1Rs1sFbIRQfMXMDAADG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"

/***/ }),

/***/ 48:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/oneStart.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/*!*************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/hotVal.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/home/hotVal.png";

/***/ }),

/***/ 72:
/*!*****************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/right-btn2.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 73:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/starCard.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/home/starCard.png";

/***/ }),

/***/ 74:
/*!**************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/leftRow.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAyCAYAAADBXTDrAAADVElEQVR4Xu2dT2sTQRjGZ0z1K6htNulHkaRKkQoVFPEg4kEED15EEL+DePEgCF5E8CJC3ZlNBEEQwYtYRCyKClLUYmlRqFTNzjwSpaClaffPrNnuPLnmfZ9539/7MGw2yY6cn5qC4IsEtgEBK8QlScNug0n5XiIACHGhodRlGtZ3M5S9/75XpTwXhOHVfqk0bNkH5nN9AKSUZ+theG0NAw3rsyHK3bsFcLqh1I2/y6Rhyz00L6uTQhhh7am61jfXA6BhvbREiZsGYghxoqHU7Y2qpGFLPDvvSgN6AjgeaH1nUO80rHeuKGfDEOJnDTg6ptTMZhXSsOWcn19VAT9qwPSo1p2tGqdhtyLE94smsApjphtRdD/JQjRsEkqMKYYA8E0YMxV0Og+TLkDDJiXFONcEVgAcbCj1KI0wDZuGFmPdEAC+Smsn61H0JK0gDZuWGONzEYAQXwBMNJV6mkWIhs1CjTlZCSwZY/aPR9GzrAI0bFZyzEtFQAKLI0K09ij1IlXiumAaNg895iYlsGCNaTej6GXShEFxNGxegszfnADwQQKtutavXaCiYV1QpMYgAvOi12sF3e4bV4hoWFckqfMPAQBvR4D2qNbvXaKhYV3SpNYagVfYsaPVmJn56BoJDeuaqOd6AOZsHLfHu91PRaCgYYug6q/m8xFjJvZG0WJRCGjYosj6pgvMijhuB93ucpGt07BF0vVJm4b1adqV6ZWXBJUZpSeN8EOXJ4OuWJu8rVWxgVa+HX5xUPkRV7LB+V3Avt1KvXPVHe8SuCJJnY0J8McvdMY2JLBQA1qjSs3lrZ07bF6CzE9K4PNOoM0fcCfFxbgyEFiS1k7UtZ7NWgx32KzkmJeNALBshTjAPyFmw8esYRDg37yHQZ1r5iSwYo2ZbEbR4zQ6vCRIQ4uxbgnwUUVueVLtvxBYtXF8qNnpPEiyGnfYJJQYUywB4HsNOMzHbRaLmeoOCfx+oLEQR8bC8N5mstxhHUKnVD4CAHpSymNBGN4dpETD5mPMbNcEeCiHa6LUK5pA/9gjCHEyCMNb69fiDls0fepnJcCD5bKSY96QCPw5Z/ZMEIbX1yrgDjukWXDZhAR4OHJCUAwrD4H+IcnA+brWV7jDlmcsrGQrAsDFX4A7uyQzJn3pAAAAAElFTkSuQmCC"

/***/ }),

/***/ 75:
/*!***************************************************!*\
  !*** D:/xcx/dabangsStar/static/home/rightRow.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAAyCAYAAADBXTDrAAADZklEQVR4Xu2dO2sUURiG32/OrJIgKmhQo0LAC94IWig2ghBw57ZpbKwsrCzExip/wMZGLGwEGwsLQdIoxlzwb9gYs7sm/geTPTJDCEhMspfZmZP53um2Ot/7fA+HmTM758hKksx4wHPwIoF9QEDSGptx/EyAFxDJfvMiAVcJbAnaSpInsPYVpXW1VawrJfDPjNpOksfW2teUlnK4SmDbLUAzjh+JyBsAnqtFsy69BP57z9pOkocA3lrA6EXD5C4S2PEhqxnHDwR4BxHfxcJZk04Cu64KtKLoPkTeQ6SmEw9Tu0Zgz2WsX3E8vSHyQYADrhXPevQR2FPYFEkrSSJY+xEiB/UhYmKXCHQlbPZyIQzviTGzAEZcCsBadBHoWthspg2Cu/D9TwBGdWFiWlcI9CRsWvRqHN/ZEPkM4JArIViHHgI9C5uiaYfhbWvMHIDDelAxqQsE+hI2uz2o12/ZWm1OgKMuBGENOgj0LWyK52cY3jDGzAM4pgMXU5ZNYCBhNx/EJsWYBSsyVnYYjl99AgMLmyJaCcMrnjGLAE5WHxkTlkkgF2HTAMuNxiXf2lTa8TIDcexqE8hN2M0HsfOo1ZYAnK02NqYri0CuwqYh1oJg4o8xCyJyrqxQHLe6BHIXdnOd9ow1Jp1pL1QXHZOVQWAowmZLXvX6Kc/3F0XkchnBOGY1CQxN2BTXj6mpE/7IyKIAV6uJj6mKJjBUYdMw3xuN46OdzjxErhcdjuNVjwCFrV5PK51oqMKuheHYujELACYrTZHhCiMwNGH50FVYD1UNNBRhm9PT49LpfOOyliqXCgmbu7DLQTBh+OKgkOZpHCRXYVv1Ol/NarSowMy5CduOootWZAkipwusn0MpI5CLsPx7oTJrSow7sLC/4/jaOrDEP3CX2EVFQw8kLD+RUWSKI1H7FrYZBDfh+1/5EaIjnVRSRl/CZp95e94XiBxRwokxHSHQs7DcSMORziktoydhuVWRUkscit21sNwMzqGuKS6lK2FXoyjYEJnldpuKTXEk+p7CckNjRzrFMjICuwrLLeNpiWsEdhSWh3K41irWs+MMy2OPKIerBLbNsDxYztVWsa5tMyyP7qQUrhPYmmFbUfQUIi95zqzrLdNdXyYsj5/XLcF+Si8rSTLjAc/3U9GsVS+Bv3bJnwftV6mxAAAAAElFTkSuQmCC"

/***/ }),

/***/ 76:
/*!***********************************************!*\
  !*** D:/xcx/dabangsStar/static/home/more.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABiUlEQVRIS82XS07DMBCGv6Y8xUs8BGLFAqkXyA24RRY9X2/BDbrNIhKLLkECBC0CCgnor+LKjZLaoiGppSiS7czn32NPZjr4tx1gC9gENoAg/zQDvoEvYAp8+JjsOCZpfB/Ys0Auu1rIGzABfqomLwPvAodA10WqGE+BV+C9bLwKfJSr/CNz4TOpfykaKgMfA1JbZ5PqZ9tgEVyn0uLCF5TbYKmU2v9sUj3zuQHrfb7CQfJdrA7cg067AR8AeppoY2BswBcNqDWipPpe4G3gtAmpFuNRYAUJRacm20TgszwGNwmeCtykf+d+FvjSulalqgeDwXWv17uK43jU7/fvNMm3r2IbZ9fJCR4OhzdBEHSzLEvDMLyVMd++ZWDnVht1SZKMoihaUOzqqwCnrR6u1q5TawFEbnD6ucZLPg+ZstnaT6K136JUK309qXFLy0w9mfR3LVIfs8JWkj0DrzPp805vDVw+1wJWSeiVT5eWNGtZwhRPpSKcdkFFm3bBLtoUFFS0Sd2nz834BTjwiNHNodaJAAAAAElFTkSuQmCC"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map