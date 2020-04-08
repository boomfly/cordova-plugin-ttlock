// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"URSD":[function(require,module,exports) {
(function () {
  var exec, gateway, ttlock, ttlockName;
  ttlockName = 'TTLockPlugin';

  exec = function exec(method, params) {
    return new Promise(function (resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, method, params);
    });
  };

  ttlock = {
    isBLEEnabled: function isBLEEnabled() {
      return exec('lock_isBLEEnabled', []);
    },
    requestBleEnable: function requestBleEnable() {
      return exec('lock_requestBleEnable', []);
    },
    prepareBTService: function prepareBTService() {
      return exec('lock_prepareBTService', []);
    },
    stopBTService: function stopBTService() {
      return exec('lock_stopBTService', []);
    },
    startScanLock: function startScanLock(resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'lock_startScanLock', []);
    },
    stopScanLock: function stopScanLock() {
      return exec('lock_stopScanLock', []);
    },
    initLock: function initLock(address) {
      return exec('lock_initLock', [address]);
    },
    controlLock: function controlLock(controlAction, lockData, lockMac) {
      return exec('lock_controlLock', [controlAction, lockData, lockMac]);
    },
    getLockTime: function getLockTime(lockData, lockMac) {
      return exec('lock_getLockTime', [lockData, lockMac]);
    },
    getRemoteUnlockSwitchState: function getRemoteUnlockSwitchState(lockData, lockMac) {
      return exec('lock_getRemoteUnlockSwitchState', [lockData, lockMac]);
    },
    setRemoteUnlockSwitchState: function setRemoteUnlockSwitchState(enabled, lockData, lockMac) {
      return exec('lock_setRemoteUnlockSwitchState', [enabled, lockData, lockMac]);
    }
  };
  gateway = {
    isBLEEnabled: function isBLEEnabled() {
      return exec('gateway_isBLEEnabled', []);
    },
    requestBleEnable: function requestBleEnable() {
      return exec('gateway_requestBleEnable', []);
    },
    prepareBTService: function prepareBTService() {
      return exec('gateway_prepareBTService', []);
    },
    stopBTService: function stopBTService() {
      return exec('gateway_stopBTService', []);
    },
    startScanGateway: function startScanGateway(resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'gateway_startScanGateway', []);
    },
    stopScanGateway: function stopScanGateway() {
      return exec('gateway_stopScanGateway', []);
    },
    connectGateway: function connectGateway(gatewayMac) {
      return exec('gateway_connectGateway', [gatewayMac]);
    },
    initGateway: function initGateway(gatewayMac, uid, userPwd, ssid, wifiPwd) {
      return exec('gateway_initGateway', [gatewayMac, uid, userPwd, ssid, wifiPwd]);
    },
    scanWiFiByGateway: function scanWiFiByGateway(gatewayMac, resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'gateway_scanWiFiByGateway', [gatewayMac]);
    }
  };
  ttlock.ControlAction = {
    Unlock: 3,
    Lock: 6
  };
  module.exports = {
    Lock: ttlock,
    Gateway: gateway
  };
}).call(this);
},{}]},{},["URSD"], null)
//# sourceMappingURL=ttlock.js.map