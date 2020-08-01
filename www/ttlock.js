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
  var Gateway, Lock, TTLock, exec, ttlockName;
  ttlockName = 'TTLockPlugin';

  exec = function exec(method, params) {
    return new Promise(function (resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, method, params);
    });
  };

  Lock = {
    // Universal
    isScanning: function isScanning() {
      return exec('lock_isScanning', []);
    },
    startScan: function startScan(resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'lock_startScan', []);
    },
    stopScan: function stopScan() {
      return exec('lock_stopScan', []);
    },
    init: function init(lockMac, lockName, lockVersion) {
      return exec('lock_init', [lockMac, lockName, lockVersion]);
    },
    reset: function reset(lockData, lockMac) {
      return exec('lock_reset', [lockData, lockMac]);
    },
    control: function control(controlAction, lockData, lockMac) {
      return exec('lock_control', [controlAction, lockData, lockMac]);
    },
    getTime: function getTime(lockData, lockMac) {
      return exec('lock_getTime', [lockData, lockMac]);
    },
    setTime: function setTime(time, lockData, lockMac) {
      return exec('lock_getTime', [time, lockData, lockMac]);
    },
    // Android
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
    getRemoteUnlockSwitchState: function getRemoteUnlockSwitchState(lockData, lockMac) {
      return exec('lock_getRemoteUnlockSwitchState', [lockData, lockMac]);
    },
    setRemoteUnlockSwitchState: function setRemoteUnlockSwitchState(lockData, lockMac) {
      return exec('lock_setRemoteUnlockSwitchState', [lockData, lockMac, enabled]);
    },
    // IOS
    setupBluetooth: function setupBluetooth() {
      return exec('lock_setupBluetooth', []);
    }
  };
  Gateway = {
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
    startScan: function startScan(resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'gateway_startScan', []);
    },
    stopScan: function stopScan() {
      return exec('gateway_stopScan', []);
    },
    connect: function connect(gatewayMac) {
      return exec('gateway_connect', [gatewayMac]);
    },
    disconnect: function disconnect(gatewayMac) {
      return exec('gateway_disconnect', [gatewayMac]);
    },
    init: function init(gatewayMac, uid, userPwd, ssid, wifiPwd) {
      return exec('gateway_init', [gatewayMac, uid, userPwd, ssid, wifiPwd]);
    },
    scanWiFi: function scanWiFi(gatewayMac, resolve, reject) {
      return cordova.exec(resolve, reject, ttlockName, 'gateway_scanWiFi', [gatewayMac]);
    },
    upgrade: function upgrade(gatewayMac) {
      return exec('gateway_upgrade', [gatewayMac]);
    }
  };
  TTLock = {
    Lock: Lock,
    Gateway: Gateway
  };
  TTLock.ControlAction = {
    Unlock: 3,
    Lock: 6
  };
  TTLock.BluetoothState = {
    Unknown: 0,
    Resetting: 1,
    Unsupported: 2,
    Unauthorized: 3,
    PoweredOff: 4,
    PoweredOn: 5
  };
  module.exports = TTLock;
}).call(this);
},{}]},{},["URSD"], null)
//# sourceMappingURL=ttlock.js.map