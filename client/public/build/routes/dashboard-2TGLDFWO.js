import {
  APIService,
  ApplicationTileSkeleton,
  Assets,
  BiAlarm,
  BiBell,
  BiBoltCircle,
  BiCheckCircle,
  BiExtension,
  BiFlag,
  BiKey,
  BiPlus,
  BiTrashAlt,
  Q,
  Skeleton,
  index_modern_default,
  links4 as links,
  links5 as links2,
  links6 as links3,
  observer,
  require_moment,
  stdin_default,
  stdin_default10 as stdin_default6,
  stdin_default11 as stdin_default7,
  stdin_default15 as stdin_default8,
  stdin_default2,
  stdin_default3,
  stdin_default8 as stdin_default4,
  stdin_default9 as stdin_default5,
  toast
} from "/build/_shared/chunk-GIICF2LK.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-4QSVOVY6.js";
import "/build/_shared/chunk-NQPDFHR5.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-27MP2XBT.js";
import {
  require_react
} from "/build/_shared/chunk-IC77GIV6.js";
import {
  createHotContext
} from "/build/_shared/chunk-53N7FWAQ.js";
import "/build/_shared/chunk-GZYRKJXK.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js
var require_getTimeParts = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/helpers/getTimeParts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getTimeParts(time, lastUnit) {
      var units = ["ms", "s", "m", "h", "d"];
      var lastUnitIndex = units.findIndex(function(unit) {
        return unit === lastUnit;
      });
      var dividers = [1e3, 60, 60, 24, 1];
      var dividersAcc = [1, 1e3, 6e4, 36e5, 864e5];
      var startValue = {
        ms: 0,
        s: 0,
        m: 0,
        h: 0,
        d: 0
      };
      var output = units.reduce(function(obj, unit, index) {
        if (index > lastUnitIndex) {
          obj[unit] = 0;
        } else if (index === lastUnitIndex) {
          obj[unit] = Math.floor(time / dividersAcc[index]);
        } else {
          obj[unit] = Math.floor(time / dividersAcc[index]) % dividers[index];
        }
        return obj;
      }, startValue);
      return output;
    }
    exports.default = getTimeParts;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/helpers/now.js
var require_now = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/helpers/now.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function now() {
      if (typeof window === "undefined" || !("performance" in window)) {
        return Date.now();
      }
      return performance.now();
    }
    exports.default = now;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/models/TimerState.js
var require_TimerState = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/models/TimerState.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.INITED = "INITED";
    exports.PLAYING = "PLAYING";
    exports.PAUSED = "PAUSED";
    exports.STOPPED = "STOPPED";
    var TimerState = (
      /** @class */
      function() {
        function TimerState2(onChangeStatus) {
          var _this = this;
          if (onChangeStatus === void 0) {
            onChangeStatus = function(obj) {
            };
          }
          this.state = exports.INITED;
          this.onChange = function() {
            return onChangeStatus({ state: _this.state });
          };
          this.state = exports.INITED;
        }
        TimerState2.prototype.getState = function() {
          return this.state;
        };
        TimerState2.prototype.setInited = function() {
          if (this.state === exports.INITED) {
            return false;
          }
          this.state = exports.INITED;
          this.onChange();
          return true;
        };
        TimerState2.prototype.isInited = function() {
          return this.state === exports.INITED;
        };
        TimerState2.prototype.setPlaying = function() {
          if (this.state === exports.PLAYING) {
            return false;
          }
          this.state = exports.PLAYING;
          this.onChange();
          return true;
        };
        TimerState2.prototype.isPlaying = function() {
          return this.state === exports.PLAYING;
        };
        TimerState2.prototype.setPaused = function() {
          if (this.state !== exports.PLAYING) {
            return false;
          }
          this.state = exports.PAUSED;
          this.onChange();
          return true;
        };
        TimerState2.prototype.isPaused = function() {
          return this.state === exports.PAUSED;
        };
        TimerState2.prototype.setStopped = function() {
          if (this.state === exports.INITED) {
            return false;
          }
          this.state = exports.STOPPED;
          this.onChange();
          return true;
        };
        TimerState2.prototype.isStopped = function() {
          return this.state === exports.STOPPED;
        };
        return TimerState2;
      }()
    );
    exports.default = TimerState;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/models/TimerModel.js
var require_TimerModel = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/lib/models/TimerModel.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var getTimeParts_1 = __importDefault(require_getTimeParts());
    var now_1 = __importDefault(require_now());
    var TimerState_1 = __importDefault(require_TimerState());
    var TimerModel = (
      /** @class */
      function() {
        function TimerModel2(_a) {
          var initialTime = _a.initialTime, direction = _a.direction, timeToUpdate = _a.timeToUpdate, lastUnit = _a.lastUnit, checkpoints = _a.checkpoints, onChange = _a.onChange;
          this.internalTime = now_1.default();
          this.initialTime = initialTime;
          this.time = initialTime;
          this.direction = direction;
          this.timeToUpdate = timeToUpdate;
          this.lastUnit = lastUnit;
          this.checkpoints = checkpoints;
          this.innerState = new TimerState_1.default(onChange);
          this.onChange = onChange;
          this.timerId = null;
        }
        Object.defineProperty(TimerModel2.prototype, "state", {
          get: function() {
            return this.innerState.getState();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(TimerModel2.prototype, "timeParts", {
          get: function() {
            return this.getTimeParts(this.computeTime());
          },
          enumerable: true,
          configurable: true
        });
        TimerModel2.prototype.getTimeParts = function(time) {
          return getTimeParts_1.default(time, this.lastUnit);
        };
        TimerModel2.prototype.setTime = function(time) {
          this.internalTime = now_1.default();
          this.initialTime = time;
          this.time = this.initialTime;
          this.onChange(this.getTimeParts(this.time));
        };
        TimerModel2.prototype.getTime = function() {
          return this.time;
        };
        TimerModel2.prototype.setLastUnit = function(lastUnit) {
          if (this.innerState.isPlaying()) {
            this.pause();
            this.lastUnit = lastUnit;
            this.resume(true);
          } else {
            this.lastUnit = lastUnit;
          }
        };
        TimerModel2.prototype.setTimeToUpdate = function(interval) {
          if (this.innerState.isPlaying()) {
            this.pause();
            this.timeToUpdate = interval;
            this.resume();
          } else {
            this.timeToUpdate = interval;
          }
        };
        TimerModel2.prototype.setDirection = function(direction) {
          this.direction = direction;
        };
        TimerModel2.prototype.setCheckpoints = function(checkpoints) {
          this.checkpoints = checkpoints;
        };
        TimerModel2.prototype.start = function() {
          if (this.innerState.setPlaying()) {
            this.setTimerInterval(true);
          }
        };
        TimerModel2.prototype.resume = function(callImmediately) {
          if (callImmediately === void 0) {
            callImmediately = false;
          }
          if (!this.innerState.isStopped() && this.innerState.setPlaying()) {
            this.setTimerInterval(callImmediately);
          }
        };
        TimerModel2.prototype.pause = function() {
          if (this.innerState.setPaused()) {
            clearInterval(this.timerId);
          }
        };
        TimerModel2.prototype.stop = function() {
          if (this.innerState.setStopped()) {
            clearInterval(this.timerId);
          }
        };
        TimerModel2.prototype.reset = function() {
          this.time = this.initialTime;
          this.onChange(this.getTimeParts(this.time));
        };
        TimerModel2.prototype.setTimerInterval = function(callImmediately) {
          var _this = this;
          if (callImmediately === void 0) {
            callImmediately = false;
          }
          if (this.timerId) {
            clearInterval(this.timerId);
          }
          this.internalTime = now_1.default();
          var repeatedFunc = function() {
            var oldTime = _this.time;
            var updatedTime = _this.computeTime();
            _this.onChange(_this.getTimeParts(updatedTime));
            _this.checkpoints.map(function(_a) {
              var time = _a.time, callback = _a.callback;
              var checkForForward = time > oldTime && time <= updatedTime;
              var checkForBackward = time < oldTime && time >= updatedTime;
              var checkIntersection = _this.direction === "backward" ? checkForBackward : checkForForward;
              if (checkIntersection) {
                callback();
              }
            });
          };
          callImmediately && this.onChange(this.getTimeParts(this.time));
          this.timerId = window.setInterval(repeatedFunc, this.timeToUpdate);
        };
        TimerModel2.prototype.computeTime = function() {
          if (this.innerState.isPlaying()) {
            var currentInternalTime = now_1.default();
            var delta = Math.abs(currentInternalTime - this.internalTime);
            switch (this.direction) {
              case "forward":
                this.time = this.time + delta;
                this.internalTime = currentInternalTime;
                return this.time;
              case "backward": {
                this.time = this.time - delta;
                this.internalTime = currentInternalTime;
                if (this.time < 0) {
                  this.stop();
                  return 0;
                }
                return this.time;
              }
              default:
                return this.time;
            }
          }
          return this.time;
        };
        return TimerModel2;
      }()
    );
    exports.TimerModel = TimerModel;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/components/Timer/Timer.js
var require_Timer = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/components/Timer/Timer.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = __importDefault(require_react());
    var TimerModel_1 = require_TimerModel();
    var TimerContext = react_1.default.createContext({
      ms: 0,
      s: 0,
      m: 0,
      h: 0,
      d: 0,
      formatValue: function(value) {
        return String(value);
      }
    });
    var TimerValue = function(_a) {
      var unit = _a.unit, formatValue = _a.formatValue;
      return react_1.default.createElement(Timer2.Consumer, null, function(props) {
        var format = formatValue || props.formatValue;
        return format(props[unit]) || null;
      });
    };
    var Milliseconds = function(props) {
      return react_1.default.createElement(TimerValue, __assign({ unit: "ms" }, props));
    };
    var Seconds = function(props) {
      return react_1.default.createElement(TimerValue, __assign({ unit: "s" }, props));
    };
    var Minutes = function(props) {
      return react_1.default.createElement(TimerValue, __assign({ unit: "m" }, props));
    };
    var Hours = function(props) {
      return react_1.default.createElement(TimerValue, __assign({ unit: "h" }, props));
    };
    var Days = function(props) {
      return react_1.default.createElement(TimerValue, __assign({ unit: "d" }, props));
    };
    var Timer2 = (
      /** @class */
      function(_super) {
        __extends(Timer3, _super);
        function Timer3(props) {
          var _this = _super.call(this, props) || this;
          var _a = _this.props, initialTime = _a.initialTime, direction = _a.direction, timeToUpdate = _a.timeToUpdate, lastUnit = _a.lastUnit, checkpoints = _a.checkpoints;
          _this.timer = new TimerModel_1.TimerModel({
            initialTime,
            direction,
            timeToUpdate,
            lastUnit,
            checkpoints,
            onChange: _this.setState.bind(_this)
          });
          _this.state = __assign({}, _this.timer.timeParts, { timerState: "INITED" });
          _this.start = _this.start.bind(_this);
          _this.pause = _this.pause.bind(_this);
          _this.resume = _this.resume.bind(_this);
          _this.stop = _this.stop.bind(_this);
          _this.reset = _this.reset.bind(_this);
          _this.setTime = _this.setTime.bind(_this);
          _this.getTime = _this.getTime.bind(_this);
          _this.getTimerState = _this.getTimerState.bind(_this);
          _this.setDirection = _this.setDirection.bind(_this);
          _this.setCheckpoints = _this.setCheckpoints.bind(_this);
          return _this;
        }
        Timer3.getUI = function(children, renderProps) {
          if (children === null) {
            return null;
          }
          if (Array.isArray(children) || react_1.default.isValidElement(children)) {
            return children;
          }
          if (children.prototype && children.prototype.isReactComponent) {
            return react_1.default.createElement(children, renderProps);
          }
          if (typeof children === "function") {
            return children(renderProps);
          }
          throw new Error("Please use one of the supported APIs for children");
        };
        Timer3.prototype.componentDidMount = function() {
          var startImmediately = this.props.startImmediately;
          startImmediately && this.timer.start();
        };
        Timer3.prototype.componentWillUnmount = function() {
          this.timer.stop();
        };
        Timer3.prototype.render = function() {
          var _a = this, start = _a.start, pause = _a.pause, resume = _a.resume, stop = _a.stop, reset = _a.reset, getTime = _a.getTime, getTimerState = _a.getTimerState, setTime = _a.setTime, setDirection = _a.setDirection, setCheckpoints = _a.setCheckpoints;
          var _b = this.state, ms = _b.ms, s = _b.s, m = _b.m, h = _b.h, d = _b.d, timerState = _b.timerState;
          var _c7 = this.props, formatValue = _c7.formatValue, children = _c7.children;
          return react_1.default.createElement(TimerContext.Provider, { value: { ms, s, m, h, d, formatValue } }, Timer3.getUI(children, {
            start,
            resume,
            pause,
            stop,
            reset,
            getTime,
            getTimerState,
            setTime,
            setDirection,
            setCheckpoints,
            timerState
          }));
        };
        Timer3.prototype.setTime = function(time) {
          this.timer.setTime(time);
        };
        Timer3.prototype.getTime = function() {
          return this.timer.getTime();
        };
        Timer3.prototype.getTimerState = function() {
          return this.timer.state;
        };
        Timer3.prototype.setDirection = function(direction) {
          this.timer.setDirection(direction);
        };
        Timer3.prototype.setCheckpoints = function(checkpoints) {
          this.timer.setCheckpoints(checkpoints);
        };
        Timer3.prototype.start = function() {
          this.timer.start();
          this.props.onStart();
        };
        Timer3.prototype.stop = function() {
          this.timer.stop();
          this.props.onStop();
        };
        Timer3.prototype.pause = function() {
          this.timer.pause();
          this.props.onPause();
        };
        Timer3.prototype.reset = function() {
          this.timer.reset();
          this.props.onReset();
        };
        Timer3.prototype.resume = function() {
          this.timer.resume();
          this.props.onResume();
        };
        Timer3.Consumer = TimerContext.Consumer;
        Timer3.Milliseconds = Milliseconds;
        Timer3.Seconds = Seconds;
        Timer3.Minutes = Minutes;
        Timer3.Hours = Hours;
        Timer3.Days = Days;
        Timer3.defaultProps = {
          timeToUpdate: 1e3,
          direction: "forward",
          initialTime: 0,
          startImmediately: true,
          lastUnit: "d",
          checkpoints: [],
          children: null,
          formatValue: function(value) {
            return String(value);
          },
          onStart: function() {
          },
          onResume: function() {
          },
          onPause: function() {
          },
          onStop: function() {
          },
          onReset: function() {
          }
        };
        return Timer3;
      }(react_1.default.PureComponent)
    );
    exports.default = Timer2;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/hook/useTimer.js
var require_useTimer = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/hook/useTimer.js"(exports) {
    "use strict";
    var __assign = exports && exports.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var react_1 = require_react();
    var TimerModel_1 = require_TimerModel();
    var getTimeParts_1 = __importDefault(require_getTimeParts());
    function useTimer(_a) {
      var _b = _a === void 0 ? {} : _a, _c7 = _b.initialTime, initialTime = _c7 === void 0 ? 0 : _c7, _d = _b.direction, direction = _d === void 0 ? "forward" : _d, _e = _b.timeToUpdate, timeToUpdate = _e === void 0 ? 1e3 : _e, _f = _b.startImmediately, startImmediately = _f === void 0 ? true : _f, _g = _b.lastUnit, lastUnit = _g === void 0 ? "d" : _g, _h = _b.checkpoints, checkpoints = _h === void 0 ? [] : _h, onStart = _b.onStart, onResume = _b.onResume, onPause = _b.onPause, onStop = _b.onStop, onReset = _b.onReset;
      var _j = react_1.useState(__assign({}, getTimeParts_1.default(initialTime < 0 ? 0 : initialTime, lastUnit), { state: "INITED" })), timerValues = _j[0], setTimerValues = _j[1];
      var timer = react_1.useMemo(function() {
        return new TimerModel_1.TimerModel({
          initialTime,
          direction,
          timeToUpdate,
          lastUnit,
          checkpoints,
          onChange: function(timerValue) {
            return setTimerValues(function(state) {
              return __assign({}, state, timerValue);
            });
          }
        });
      }, []);
      var setTime = react_1.useCallback(function(time) {
        return timer.setTime(time);
      }, [timer]);
      var getTime = react_1.useCallback(function() {
        return timer.getTime();
      }, [timer]);
      var getTimerState = react_1.useCallback(function() {
        return timer.state;
      }, [timer]);
      var setDirection = react_1.useCallback(function(direction2) {
        return timer.setDirection(direction2);
      }, [timer]);
      var setLastUnit = react_1.useCallback(function(lastUnit2) {
        return timer.setLastUnit(lastUnit2);
      }, [timer]);
      var setCheckpoints = react_1.useCallback(function(checkpoints2) {
        return timer.setCheckpoints(checkpoints2);
      }, [timer]);
      var setTimeToUpdate = react_1.useCallback(function(interval) {
        return timer.setTimeToUpdate(interval);
      }, [timer]);
      var start = react_1.useCallback(function() {
        timer.start();
        onStart && onStart();
      }, [timer, onStart]);
      var stop = react_1.useCallback(function() {
        timer.stop();
        onStop && onStop();
      }, [timer, onStop]);
      var pause = react_1.useCallback(function() {
        timer.pause();
        onPause && onPause();
      }, [timer, onPause]);
      var reset = react_1.useCallback(function() {
        timer.reset();
        onReset && onReset();
      }, [timer, onReset]);
      var resume = react_1.useCallback(function() {
        timer.resume();
        onResume && onResume();
      }, [timer, onResume]);
      var controls = react_1.useMemo(function() {
        return {
          start,
          stop,
          pause,
          reset,
          resume,
          setTime,
          getTime,
          getTimerState,
          setDirection,
          setLastUnit,
          setTimeToUpdate,
          setCheckpoints
        };
      }, [
        start,
        stop,
        pause,
        reset,
        resume,
        setTime,
        getTime,
        getTimerState,
        setDirection,
        setLastUnit,
        setTimeToUpdate,
        setCheckpoints
      ]);
      react_1.useEffect(function() {
        if (startImmediately) {
          start();
        }
        return function() {
          stop();
        };
      }, []);
      return {
        controls,
        value: timerValues
      };
    }
    exports.useTimer = useTimer;
  }
});

// node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/index.js
var require_build = __commonJS({
  "node_modules/.pnpm/react-compound-timer@1.2.0_react@18.2.0/node_modules/react-compound-timer/build/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var Timer_1 = __importDefault(require_Timer());
    var getTimeParts_1 = __importDefault(require_getTimeParts());
    exports.getTimeParts = getTimeParts_1.default;
    var useTimer_1 = require_useTimer();
    exports.useTimer = useTimer_1.useTimer;
    exports.default = Timer_1.default;
  }
});

// app/routes/dashboard.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_react4 = __toESM(require_react());

// app/styles/pages/Dashboard.css
var Dashboard_default = "/build/_assets/Dashboard-HD4E7KYW.css";

// app/routes/dashboard.tsx
var import_react_compound_timer = __toESM(require_build());

// app/components/Notification.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());

// app/styles/Components/Notification.css
var Notification_default = "/build/_assets/Notification-X5O6C2AH.css";

// app/components/Notification.tsx
var import_moment = __toESM(require_moment());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Notification.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Notification.tsx"
  );
}
var links4 = () => [{
  rel: "stylesheet",
  href: Notification_default
}];
var Notification = ({
  notification
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "kz-notification",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BiBoltCircle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
        children: (0, import_moment.default)(notification.timestamp).fromNow(true)
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(index_modern_default, {
        children: notification.markdown
      })]
    })]
  });
};
_c = Notification;
var NotificationSkeleton = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "kz-notification",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
      circle: true,
      width: 32,
      height: 32
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
          width: 100
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
          count: 2,
          width: 200
        })
      })]
    })]
  });
};
_c2 = NotificationSkeleton;
var stdin_default9 = Notification;
var _c;
var _c2;
$RefreshReg$(_c, "Notification");
$RefreshReg$(_c2, "NotificationSkeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/TeamSvg.tsx
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TeamSvg.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TeamSvg.tsx"
  );
}
var TeamSvg = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", {
    className: "team-illustration",
    width: "456px",
    height: "317px",
    viewBox: "0 0 456 317",
    version: "1.1",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
      id: "Page-1",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", {
        id: "aseet",
        fillRule: "nonzero",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", {
          id: "Background_Complete",
          transform: "translate(0.000000, 21.000000)",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
            id: "Rectangle",
            fill: "#E0E0E0",
            x: "289.96",
            y: "0.1",
            width: "50.15",
            height: "72.69"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
            id: "Rectangle",
            fill: "#F5F5F5",
            className: "theme",
            x: "287.45",
            y: "0.1",
            width: "50.15",
            height: "72.69"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
            id: "Rectangle",
            fill: "#FFFFFF",
            className: "theme",
            x: "293.68",
            y: "7.97",
            width: "37.69",
            height: "56.95"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M331.37,64.91 C331.37,64.91 331.37,64.81 331.37,64.63 L331.37,63.82 L331.37,60.7 L331.37,48.97 C331.37,38.97 331.37,24.71 331.31,7.97 L331.44,8.1 L293.68,8.1 L293.82,7.96 C293.82,29.44 293.82,49.25 293.82,64.9 L293.71,64.79 L321.14,64.85 L328.72,64.85 L328.72,64.85 L321.17,64.85 L293.67,64.91 L293.56,64.91 L293.56,64.8 C293.56,49.14 293.56,29.34 293.56,7.86 L293.56,7.72 L331.56,7.72 L331.56,8 C331.56,24.78 331.56,39 331.5,49.09 C331.5,54.09 331.5,58.09 331.5,60.79 C331.5,62.14 331.5,63.18 331.5,63.89 L331.5,64.68 C331.37,64.83 331.37,64.91 331.37,64.91 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M337.74,0.1 C337.483354,0.559416388 337.185461,0.994541589 336.85,1.4 C336.27,2.18 335.44,3.24 334.5,4.4 C333.56,5.56 332.67,6.56 332.02,7.28 C331.688339,7.68922679 331.320157,8.06745043 330.92,8.41 C331.217066,7.96557054 331.55162,7.54737816 331.92,7.16 L334.33,4.23 L336.74,1.3 C337.039427,0.872920697 337.373917,0.471532232 337.74,0.1 L337.74,0.1 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M331.56,64.73 C333.433176,67.7088746 335.637176,70.4663912 338.13,72.95",
            id: "Path",
            fill: "#FFFFFF"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M338.13,73 C337.713621,72.706688 337.328288,72.371616 336.98,72 C335.232741,70.219936 333.671349,68.2665205 332.32,66.17 C332.020623,65.7475184 331.765924,65.2950924 331.56,64.82 C331.896968,65.2099665 332.204482,65.6244418 332.48,66.06 C333.03,66.84 333.81,67.9 334.72,69.06 C335.63,70.22 336.49,71.19 337.13,71.89 C337.489563,72.2354998 337.823762,72.6064604 338.13,73 L338.13,73 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", {
            x1: "287.44",
            y1: "72.73",
            x2: "294.01",
            y2: "64.63",
            id: "Path",
            fill: "#FFFFFF"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#E0E0E0",
            transform: "translate(290.718049, 68.649252) rotate(-50.980000) translate(-290.718049, -68.649252) ",
            cx: "290.718049",
            cy: "68.6492521",
            rx: "5.22",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#E0E0E0",
            transform: "translate(290.531889, 3.989460) rotate(-38.340000) translate(-290.531889, -3.989460) ",
            cx: "290.531889",
            cy: "3.98946016",
            rx: "1",
            ry: "4.97"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", {
            id: "Rectangle",
            fill: "#E0E0E0",
            x: "307.01",
            y: "19.53",
            width: "12.62",
            height: "35.83"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M240.35,203.5 C235.745668,205.020081 231.958412,208.348823 229.86,212.72 C227.810602,217.070186 226.784385,221.831837 226.86,226.64 C226.73,235.91 230.75,245.79 235.41,253.8 C243.96,248.06 247.21,236.58 248.5,230.65 C250.5,221.28 248.5,203.1 240.36,203.5",
            id: "Path",
            fill: "#F5F5F5",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M224.54,267.75 C226.43,262.75 225,256.81 221.49,252.75 C217.818149,248.769101 212.70281,246.427573 207.29,246.25 C204.82,246.13 202.08,246.5 200.43,248.34 C198.958641,250.186908 198.602756,252.685757 199.5,254.87 C200.414198,257.008594 201.876819,258.867916 203.74,260.26 C209.87,265.26 216.74,269.03 224.56,267.73",
            id: "Path",
            fill: "#F5F5F5",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M231,290 C231.12,290 231.1,287.66 230.72,283.88 C230.468564,281.653994 229.955004,279.465491 229.19,277.36 C228.333108,274.772321 227.307578,272.24357 226.12,269.79 C223.927659,265.284533 220.657725,261.389465 216.6,258.45 C215.344497,257.594356 214.004068,256.870524 212.6,256.29 C212.100131,256.047063 211.562365,255.891483 211.01,255.83 C210.94,256 213.16,256.83 216.13,259.05 C219.926037,262.075192 223.000496,265.908017 225.13,270.27 C226.294952,272.684949 227.326502,275.162006 228.22,277.69 C229.032313,279.725316 229.62891,281.840219 230,284 C230.51,287.72 230.8,290.05 231,290 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M240.66,217.48 C240.343313,218.458064 240.11244,219.461859 239.97,220.48 C239.59,222.48 239.08,225.27 238.47,228.78 C237.27,235.78 235.71,245.52 234.26,256.3 C232.81,267.08 231.77,276.88 231.16,283.98 C230.86,287.53 230.65,290.41 230.54,292.4 C230.429358,293.429589 230.409281,294.466901 230.48,295.5 C230.72564,294.495665 230.882907,293.471759 230.95,292.44 L231.9,284.06 C232.69,276.98 233.84,267.22 235.29,256.45 L239.2,228.91 L240.37,220.56 C240.556273,219.543751 240.653309,218.513158 240.66,217.48 L240.66,217.48 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M235.7,272.73 C240.491066,262.296553 250.018559,254.813059 261.29,252.63 C264.11,252.11 267.59,252.21 269.15,254.63 C270.71,257.05 269.34,260.27 267.63,262.63 C260.165472,272.386302 247.566873,276.697595 235.69,273.56",
            id: "Path",
            fill: "#F5F5F5",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M257.38,260.08 C256.831619,260.104735 256.291053,260.219605 255.78,260.42 C254.78,260.69 253.34,261.18 251.58,261.84 C246.967089,263.530073 242.70323,266.051783 239,269.28 C236.997535,271.132102 235.308918,273.296909 234,275.69 C232.254545,278.977893 231.279953,282.619789 231.15,286.34 C231.079542,286.882904 231.099819,287.433745 231.21,287.97 C231.42,287.97 231.5,285.66 232.43,282.1 C232.991395,280.028714 233.804099,278.033895 234.85,276.16 C236.162084,273.891038 237.810848,271.834296 239.74,270.06 C243.377727,266.921243 247.492735,264.382698 251.93,262.54 C255.26,261 257.43,260.24 257.38,260.08 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M430.95,28.24 C430.95,28.24 420.47,25.15 416.23,49.24 C411.99,73.33 411.65,86.6 411.65,86.6 C411.65,86.6 410.18,91.83 406.3,89.89 C402.42,87.95 395.83,81.11 391.18,84.13 C386.35,87.26 386.42,93.7 390.09,102.07 C393.76,110.44 401.09,129.07 401.78,130.75 C402.47,132.43 402.22,135.2 399.37,134.3 C396.52,133.4 378.37,122.46 373.66,131.4 C368.95,140.34 383.03,161.97 384.52,164.4 C386.01,166.83 385.84,168.06 384.8,169.09 C383.76,170.12 378,165.86 372.7,162.96 C367.4,160.06 360.75,157.63 358.49,162.96 C356.23,168.29 360.49,186.48 386.31,210.19 L399,220.42 L414.33,214.78 C446.4,200.71 456.33,184.94 455.95,179.11 C455.57,173.28 448.47,173.43 442.52,174.46 C436.57,175.49 429.74,177.64 429.09,176.34 C428.44,175.04 428.69,173.78 430.87,172 C433.05,170.22 453.35,154.31 451.87,144.34 C450.39,134.37 429.6,138.83 426.61,138.76 C423.62,138.69 424.33,135.97 425.48,134.62 C426.63,133.27 439.65,118 445.83,111.28 C452.01,104.56 454.16,98.48 450.61,93.96 C447.19,89.59 438.73,93.96 434.44,94.51 C430.15,95.06 430.44,89.66 430.44,89.66 C430.44,89.66 434.44,77.01 438.21,52.83 C441.98,28.65 430.81,28.22 430.81,28.22",
            id: "Path",
            fill: "#F5F5F5",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M427.11,49.82 C427.11,49.82 427.11,49.99 427.06,50.33 L426.85,51.82 L426,57.55 C425.26,62.55 424.12,69.71 422.69,78.55 C419.83,96.3 415.69,120.78 411,147.8 C406.31,174.82 402.1,199.3 399.15,217.03 L395.67,238.03 L394.67,243.74 L394.41,245.22 C394.35,245.55 394.3,245.72 394.3,245.72 C394.3,245.72 394.3,245.55 394.35,245.21 L394.56,243.72 L395.41,238 C396.15,233 397.29,225.84 398.72,217 C401.58,199.25 405.72,174.77 410.41,147.74 C415.1,120.71 419.31,96.25 422.26,78.52 L425.74,57.52 L426.74,51.81 L427,50.33 C427.07,50 427.11,49.82 427.11,49.82 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M400,94.1 C400.276838,94.3796441 400.518616,94.6919398 400.72,95.03 C401.16,95.65 401.72,96.56 402.5,97.69 C403.97,99.96 405.92,103.14 408,106.69 L413.29,115.82 L414.91,118.58 C415.131893,118.890625 415.316493,119.226263 415.46,119.58 C415.180224,119.304102 414.935087,118.995162 414.73,118.66 C414.29,118.04 413.73,117.13 412.96,115.99 C411.51,113.71 409.61,110.5 407.53,106.99 L402.18,97.91 L400.55,95.16 C400.323701,94.8306726 400.138967,94.4746411 400,94.1 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#E0E0E0",
            transform: "translate(433.074500, 108.578800) rotate(-33.215251) translate(-433.074500, -108.578800) ",
            cx: "433.0745",
            cy: "108.5788",
            rx: "17.2795599",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M407.92,160.64 C408.279037,160.458918 408.65838,160.321281 409.05,160.23 L412.17,159.23 C414.8,158.42 418.44,157.3 422.4,155.91 C426.36,154.52 429.92,153.16 432.48,152.16 L435.48,150.97 C435.843522,150.798412 436.22623,150.670843 436.62,150.59 C436.291101,150.824978 435.935231,151.019699 435.56,151.17 C434.87,151.51 433.85,151.97 432.56,152.52 C430.03,153.62 426.49,155.05 422.51,156.43 C418.53,157.81 414.87,158.89 412.2,159.6 C410.87,159.95 409.78,160.22 409.03,160.38 C408.671123,160.508703 408.298703,160.595936 407.92,160.64 L407.92,160.64 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M387.52,141.08 C387.841343,141.267898 388.137116,141.496449 388.4,141.76 C388.94,142.22 389.72,142.9 390.66,143.76 C392.56,145.46 395.15,147.84 397.99,150.5 C400.83,153.16 403.38,155.58 405.21,157.36 C406.12,158.25 406.86,158.97 407.35,159.48 C407.627949,159.724188 407.8733,160.003148 408.08,160.31 C407.758719,160.12201 407.462958,159.893467 407.2,159.63 C406.66,159.17 405.88,158.49 404.94,157.63 C403.05,155.93 400.45,153.55 397.61,150.89 C394.77,148.23 392.22,145.81 390.39,144.04 C389.48,143.15 388.74,142.43 388.25,141.92 C387.971548,141.672566 387.726188,141.390235 387.52,141.08 L387.52,141.08 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M374.91,176.42 C375.312284,176.674489 375.687559,176.969348 376.03,177.3 L378.94,179.85 C381.38,182.02 384.73,185.04 388.4,188.41 C392.07,191.78 395.4,194.85 397.75,197.09 L400.54,199.77 C400.906237,200.068721 401.241279,200.403763 401.54,200.77 C401.137716,200.515511 400.762441,200.220652 400.42,199.89 L397.51,197.34 C395.07,195.17 391.72,192.14 388.05,188.78 C384.38,185.42 381.05,182.34 378.7,180.1 L375.91,177.42 C375.543763,177.121279 375.208721,176.786237 374.91,176.42 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M401,200 C401.454402,199.7685 401.9299,199.58098 402.42,199.44 L406.34,198.09 C409.64,196.95 414.2,195.36 419.19,193.47 C424.18,191.58 428.65,189.76 431.88,188.42 L435.71,186.84 C436.169294,186.62218 436.648073,186.448078 437.14,186.32 C436.717217,186.602018 436.268522,186.843108 435.8,187.04 C434.92,187.47 433.64,188.04 432.04,188.78 C428.85,190.21 424.39,192.1 419.39,193.99 C414.39,195.88 409.81,197.42 406.47,198.47 C404.8,198.99 403.47,199.39 402.47,199.65 C401.992058,199.8125 401.49989,199.929683 401,200 L401,200 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M79.2,241.82 C102.29,228.65 109.79,200.96 111.2,175.59 C111.44,171.36 112.32,166.95 110.65,163.06 C108.98,159.17 104.53,156.21 100.58,157.64 C97.31,158.83 95.58,162.35 93.58,165.21 C90.867706,169.01822 87.1341652,171.982173 82.81,173.76 C79.99,174.91 76.59,175.46 74.07,173.76 C70.61,171.42 70.64,166.35 71.07,162.15 L73.37,138.69 C73.78,134.49 74.19,130.21 73.25,126.1 C72.31,121.99 69.76,118.03 65.87,116.54 C61.98,115.05 56.87,116.91 55.61,120.94 C55.1,122.62 55.29,124.43 55.01,126.16 C54.73,127.89 53.74,129.75 52.01,130.08 C50.28,130.41 48.72,129.08 47.58,127.73 C43.63,123.09 41.19,117.36 38.94,111.68 C36.69,106 34.53,100.19 31.02,95.21 C27.51,90.23 22.41,86.06 16.43,85.21 C10.45,84.36 3.7,87.44 1.64,93.21 C-0.42,98.98 2.48,105.31 5.8,110.45 C10.7230288,118.069435 16.7217379,124.937132 23.61,130.84 C24.85,131.9 26.19,133.05 26.55,134.65 C27.21,137.53 24.3,140.07 21.45,140.74 C18.22,141.5 14.86,140.86 11.55,140.95 C8.24,141.04 4.55,142.15 3.04,145.14 C0.93,149.27 4.1,154.14 7.37,157.37 C13.9227909,163.901337 21.550796,169.256163 29.92,173.2 C32.92,174.61 36.06,175.9 38.36,178.3 C40.66,180.7 41.81,184.61 40.03,187.43 C38.25,190.25 34.3,190.85 31.12,189.95 C27.94,189.05 25.21,187.03 22.23,185.59 C16.66,182.88 9.17,182.59 5.02,187.25 C2.29,190.31 1.66,194.85 2.53,198.87 C3.4,202.89 5.58,206.48 7.94,209.87 C16.19,221.57 27.23,231.39 40.19,237.26 C53.15,243.13 65.44,245.52 79.19,241.87",
            id: "Path",
            fill: "#F5F5F5",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M77.81,260.61 C77.7088315,248.77572 76.4731773,236.978404 74.12,225.38 C71.1854088,211.213294 67.4392349,197.226911 62.9,183.49 L59.39,172.66 C58.23,169.11 57.08,165.59 55.75,162.21 C53.1739012,155.718867 50.2393849,149.375771 46.96,143.21 C43.87,137.32 40.73,131.84 37.75,126.74 C34.77,121.64 31.88,116.94 29.08,112.74 C24.6861475,106.133845 19.7740033,99.8874974 14.39,94.06 C12.49,92 10.96,90.45 9.92,89.41 L8.72,88.24 C8.58844988,88.1005937 8.44452701,87.9734061 8.29,87.86 C8.39896366,88.0181729 8.52286574,88.165516 8.66,88.3 L9.8,89.53 C10.8,90.6 12.3,92.19 14.16,94.28 C19.438972,100.170297 24.2691606,106.447871 28.61,113.06 C31.38,117.24 34.22,121.94 37.18,127.06 C40.14,132.18 43.25,137.65 46.32,143.54 C49.5572043,149.700265 52.4548699,156.033066 55,162.51 C56.32,165.87 57.46,169.36 58.62,172.92 L62.12,183.74 C66.6491403,197.445904 70.4083415,211.394344 73.38,225.52 C75.756278,237.073944 77.0419259,248.825569 77.22,260.62",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M55.53,162.17 C55.7822689,161.608819 55.9733707,161.022103 56.1,160.42 C56.43,159.28 56.85,157.62 57.33,155.55 C58.33,151.42 59.46,145.68 60.71,139.34 C61.96,133 63.19,127.29 64.23,123.19 C64.74,121.14 65.17,119.48 65.49,118.34 C65.6887492,117.756431 65.8228847,117.152821 65.89,116.54 C65.5980177,117.082986 65.3666272,117.656432 65.2,118.25 C64.8,119.37 64.28,121 63.7,123.04 C62.52,127.12 61.2,132.84 59.95,139.18 L56.8,155.43 L55.8,160.35 C55.6437875,160.944982 55.5532471,161.555292 55.53,162.17 L55.53,162.17 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M2.47,147.14 C3.16414386,147.359262 3.87723588,147.513263 4.6,147.6 C5.97,147.85 7.96,148.2 10.41,148.71 C15.31,149.71 22.02,151.3 29.35,153.39 C36.68,155.48 43.23,157.68 47.92,159.39 C50.27,160.23 52.16,160.97 53.47,161.46 C54.1329563,161.760557 54.822644,161.998265 55.53,162.17 C54.9162883,161.776281 54.2667323,161.441459 53.59,161.17 C52.32,160.58 50.46,159.77 48.12,158.86 C43.46,157 36.92,154.73 29.56,152.62 C23.2902748,150.809203 16.9319526,149.320588 10.51,148.16 C8.04,147.72 6.03,147.45 4.64,147.29 C3.92303758,147.171491 3.19644925,147.121266 2.47,147.14 L2.47,147.14 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M73.55,224.32 C73.7208433,224.133835 73.8655087,223.925248 73.98,223.7 L75.08,221.83 C76.03,220.2 77.34,217.83 78.93,214.83 C82.1,208.88 86.22,200.53 90.65,191.26 C95.08,181.99 99.12,173.6 102.16,167.6 L105.78,160.5 L106.78,158.56 C106.90816,158.340995 107.005733,158.105475 107.07,157.86 C106.899086,158.049784 106.754457,158.261682 106.64,158.49 L105.54,160.36 C104.59,161.99 103.28,164.36 101.69,167.36 C98.52,173.31 94.4,181.66 89.97,190.94 C85.54,200.22 81.51,208.59 78.46,214.6 L74.84,221.7 L73.84,223.64 C73.7138092,223.852907 73.616299,224.081551 73.55,224.32 Z",
            id: "Path",
            fill: "#E0E0E0"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M3.93,194.62 C4.14278004,194.770457 4.37486951,194.891548 4.62,194.98 L6.62,195.87 L14.07,199.06 C20.36,201.76 29.01,205.58 38.56,209.82 C48.11,214.06 56.81,217.82 63.16,220.38 C66.34,221.67 68.91,222.68 70.71,223.38 L72.78,224.13 C73.0159594,224.233353 73.2649253,224.304006 73.52,224.34 C73.309725,224.19131 73.0811792,224.070315 72.84,223.98 L70.84,223.09 L63.39,219.9 C57.1,217.2 48.45,213.38 38.89,209.13 C29.33,204.88 20.65,201.13 14.3,198.57 C11.12,197.28 8.55,196.27 6.75,195.57 L4.68,194.82 C4.44037265,194.719202 4.18799938,194.651903 3.93,194.62 Z",
            id: "Path",
            fill: "#E0E0E0"
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
          id: "Floor",
          transform: "translate(2.000000, 316.000000)",
          fill: "#263238",
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M435.28,0.52 C435.28,0.66 337.87,0.78 217.73,0.78 C97.59,0.78 0.16,0.66 0.16,0.52 C0.16,0.38 97.55,0.26 217.73,0.26 C337.91,0.26 435.28,0.38 435.28,0.52 Z",
            id: "Path"
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", {
          id: "Character_2",
          transform: "translate(233.000000, 14.000000)",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M82.06,129.48 C83.5680995,135.633304 81.5879973,142.118522 76.9,146.38 C73.9,149.08 69.9,150.64 67.1,153.61 C63.5901318,157.636324 62.4512088,163.209454 64.1,168.29 C65.8140404,173.310924 69.5115424,177.409621 74.33,179.63 C80.9125608,182.708972 88.5716323,182.448712 94.93,178.93 C102.66,174.56 107.17,165.8 108.31,156.99 C109.45,148.18 107.66,139.26 105.31,130.69",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M179.55,284.82 C187.55,283.51 195.05,285.95 202.97,287.71 C205.076622,288.330109 207.298906,288.449955 209.46,288.06 C212.89,287.19 215.33,283.84 215.86,280.34 C216.290312,277.270364 215.578615,274.149573 213.86,271.57 C213.171696,270.461733 212.23328,269.530166 211.12,268.85 C209.927289,268.252559 208.622541,267.911893 207.29,267.85 C202.433704,267.464203 197.562495,268.382517 193.18,270.51 C188.818025,272.637248 184.859081,275.506636 181.48,278.99 C179.8,280.67 180.31,282.6 179.57,284.86",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M17.31,155.71 C16.0272097,148.081766 16.1832282,140.280843 17.77,132.71 C18.4421152,129.008294 19.7986354,125.464385 21.77,122.26 C22.4448381,121.067136 23.4668011,120.107956 24.7,119.51 C26.5298699,118.909546 28.541888,119.384552 29.91,120.74 C31.6491253,122.524246 32.5472217,124.964014 32.38,127.45 C32.1967723,129.907432 31.5947672,132.315453 30.6,134.57 C27.5,142.47 22.6,149.03 17.35,155.67",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M172.34,184.62 C174.16,185.91 214.39,272.51 214.39,272.51 L214.39,272.51 C211.158914,271.124876 207.577878,270.775506 204.14,271.51 L201.96,272.09 C198.0393,273.129172 194.320932,274.819339 190.96,277.09 L179.5,284.85 L179.5,284.85 C178.575397,284.324207 177.966593,283.379253 177.87,282.32 L177.87,281.99 L146.7,228.49 L172.34,184.62 Z",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M21.45,46.8 L32.17,107.73 C35.62,115.93 75.86,165.61 75.86,165.61 L62.55,208.35 L9.71,136.1 C4.80525105,130.852623 2.13670354,123.901487 2.27,116.72 L4.33,51.62 L21.45,46.8 Z",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M78.49,156.06 L106.08,158.15 L130.14,161.88 C130.14,161.88 172.33,172.97 172.33,177.59 C172.33,179.13 160.8,215.82 154.38,237.8 C152.796161,243.125552 151.504238,248.533599 150.51,254 L172.34,302.48 L68.53,302.48 L68.53,258.06 C68.53,258.06 61.53,199.74 62.76,191.77 C63.99,183.8 78.49,156.06 78.49,156.06 Z",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M8.39,22.18 C8.54747353,15.9708576 9.17931388,9.78283386 10.28,3.67 C10.44,2.8 10.79,1.75 11.66,1.67 C12.74,1.53 13.29,2.92 13.43,3.99 C14.3853626,11.3581605 14.077621,18.8352685 12.52,26.1",
            id: "Path",
            fill: "#EB996E"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M20.66,151.2 C32.5,140.62 32.9,122.29 31.89,107.7 C31.687608,106.634611 31.8496371,105.532109 32.35,104.57 C33.48,102.96 36.23,103.57 37.35,105.19 C38.47,106.81 38.35,108.94 38.29,110.91 C38.9,109.24 41.5,109.25 42.72,110.54 C43.94,111.83 44.15,113.74 44.29,115.54 L44.68,120.43 L79.26,153.43 C79.26,153.43 80.26,150.43 82.75,152.16 C85.24,153.89 86.93,157.53 86.93,157.53 L62.56,210.73 L17.33,155.73 C18.2003044,154.057655 19.3235284,152.529666 20.66,151.2 L20.66,151.2 Z",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M67.59,188 C63.9843365,192.612686 61.289708,197.869587 59.65,203.49 C58.0182694,209.142505 58.1966055,215.163971 60.16,220.71 C63.2368019,228.523419 70.1944204,234.144203 78.48,235.51",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M179.55,284.82 L178.24,302.52 L203.87,302.52 L209.87,271.27 L209.87,271.27 C202.062688,270.833966 194.362508,273.246713 188.2,278.06 L179.55,284.82 Z",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M32.7,147.28 C32.8445737,146.797578 33.0319863,146.329046 33.26,145.88 C33.66,145 34.2,143.7 34.81,142.08 C35.42,140.46 36.07,138.5 36.68,136.3 C37.9784322,131.506575 38.6969027,126.574644 38.82,121.61 C38.82,119.32 38.82,117.26 38.68,115.53 C38.54,113.8 38.41,112.41 38.28,111.45 C38.1881175,110.951887 38.1412617,110.446515 38.14,109.94 C38.2973044,110.41878 38.4110989,110.910773 38.48,111.41 C38.67,112.41 38.88,113.76 39.05,115.5 C39.2455204,117.53387 39.3289799,119.576959 39.3,121.62 C39.2297904,126.629807 38.5036125,131.608832 37.14,136.43 C36.5800457,138.395225 35.9123696,140.328148 35.14,142.22 C34.48,143.83 33.89,145.11 33.43,145.97 C33.2263548,146.42763 32.9820411,146.866056 32.7,147.28 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M40.24,138 C40.5467094,137.133145 40.9039893,136.285023 41.31,135.46 C43.056288,131.399894 44.0718819,127.063308 44.31,122.65 C44.3062193,121.73119 44.3563052,120.812948 44.46,119.9 C44.6544931,120.806307 44.7284658,121.734327 44.68,122.66 C44.6535536,127.145826 43.6287644,131.569499 41.68,135.61 C41.3081447,136.467017 40.8238943,137.270738 40.24,138 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M80.86,165.65 C80.78,165.65 81.2,164.95 81.44,163.78 C81.7173185,162.237614 81.6282573,160.651641 81.18,159.15 C80.7032953,157.638066 80.1218892,156.16116 79.44,154.73 C79.1219766,154.142772 78.8896216,153.513056 78.75,152.86 C79.1495341,153.388615 79.4851954,153.962596 79.75,154.57 C80.5419816,155.978246 81.1822355,157.466584 81.66,159.01 C82.1404936,160.589061 82.1819773,162.26915 81.78,163.87 C81.650614,164.539364 81.3312235,165.157316 80.86,165.65 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M74.84,236.1 C74.6863487,236.040077 74.5416616,235.959321 74.41,235.86 L73.22,235.08 C72.22,234.39 70.73,233.37 68.99,232.01 C66.9331047,230.426048 65.0523148,228.62572 63.38,226.64 C61.3219653,224.181778 59.8391776,221.294783 59.04,218.19 C58.2815286,215.083185 58.0884505,211.865216 58.47,208.69 C58.7744729,206.110678 59.3475837,203.570222 60.18,201.11 C60.7340954,199.455482 61.3715776,197.830069 62.09,196.24 C62.35,195.68 62.55,195.24 62.7,194.96 C62.7630328,194.805788 62.8471692,194.661073 62.95,194.53 C62.7634622,195.1398 62.539709,195.737588 62.28,196.32 C61.83,197.47 61.19,199.13 60.54,201.22 C59.7678882,203.668758 59.2386705,206.187567 58.96,208.74 C58.6133946,211.857849 58.8164729,215.012331 59.56,218.06 C60.3414063,221.094487 61.778462,223.92081 63.77,226.34 C65.4071592,228.313282 67.2398314,230.1158 69.24,231.72 C70.94,233.11 72.37,234.17 73.35,234.92 L74.48,235.78 C74.6137941,235.870057 74.7348779,235.977687 74.84,236.1 L74.84,236.1 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M131.49,246 C131.351972,246.07462 131.203719,246.12853 131.05,246.16 C130.75,246.24 130.32,246.39 129.75,246.5 C128.139691,246.85526 126.498613,247.05286 124.85,247.09 C113.605778,247.440786 103.280949,240.910045 98.78,230.6 C98.1059013,229.094697 97.5800835,227.527291 97.21,225.92 C97.07,225.36 97.01,224.92 96.96,224.6 C96.936717,224.444198 96.936717,224.285802 96.96,224.13 C97.1553924,224.697101 97.3189802,225.274666 97.45,225.86 C97.8920796,227.431421 98.4640498,228.963365 99.16,230.44 C103.761633,240.476895 113.849483,246.855803 124.89,246.71 C126.522167,246.705194 128.15111,246.56471 129.76,246.29 C130.330961,246.161928 130.908486,246.065117 131.49,246 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#263238",
            transform: "translate(150.636062, 253.182215) rotate(-75.360000) translate(-150.636062, -253.182215) ",
            cx: "150.636062",
            cy: "253.182215",
            rx: "12.69",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#263238",
            transform: "translate(152.650129, 238.915507) rotate(-30.580000) translate(-152.650129, -238.915507) ",
            cx: "152.650129",
            cy: "238.915507",
            rx: "1",
            ry: "17.2"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M199.74,269.88 C199.74,269.98 198.28,270.1 196,270.68 C194.667978,271.021733 193.361463,271.456124 192.09,271.98 C188.970002,273.264112 186.097174,275.0812 183.6,277.35 C182.580996,278.282104 181.628657,279.284566 180.75,280.35 C179.25,282.16 178.51,283.43 178.43,283.35 C178.541559,283.021033 178.69624,282.708308 178.89,282.42 C179.356068,281.603066 179.880778,280.821014 180.46,280.08 C181.31133,278.972408 182.251077,277.935677 183.27,276.98 C185.777922,274.628856 188.709981,272.775958 191.91,271.52 C193.208478,271.009334 194.546185,270.604677 195.91,270.31 C196.828599,270.102608 197.761055,269.962238 198.7,269.89 C199.044693,269.840607 199.394421,269.837245 199.74,269.88 L199.74,269.88 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M204.64,263.86 C204.64,263.97 203.03,263.77 200.47,263.99 C198.970601,264.123943 197.485273,264.384879 196.03,264.77 C192.460458,265.71537 189.124283,267.386862 186.23,269.68 C185.051232,270.615369 183.953963,271.649077 182.95,272.77 C181.24,274.69 180.44,276.09 180.35,276.03 C180.485652,275.676494 180.663614,275.340717 180.88,275.03 C181.097919,274.643897 181.341813,274.273044 181.61,273.92 C181.941163,273.434382 182.298352,272.967033 182.68,272.52 C183.662066,271.345687 184.753653,270.267494 185.94,269.3 C188.86333,266.915517 192.278416,265.207974 195.94,264.3 C197.425032,263.930255 198.941859,263.702563 200.47,263.62 C201.056238,263.588285 201.643762,263.588285 202.23,263.62 C202.671301,263.616854 203.112309,263.643582 203.55,263.7 C203.918357,263.710326 204.284214,263.76403 204.64,263.86 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
            id: "Group",
            opacity: "0.3",
            transform: "translate(96.000000, 226.000000)",
            fill: "#000000",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
              d: "M2,0.25 C-0.36,4.71 1.61,10.15 3.76,14.72 C5.43,18.26 7.29,21.86 10.32,24.32 C13.3436931,26.7854786 17.2590298,27.8773987 21.1222482,27.3325615 C24.9854667,26.7877244 28.446104,24.6555562 30.67,21.45 C17.6210595,21.2590447 6.03365661,13.0612353 1.51,0.82",
              id: "Path"
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
            id: "Group",
            opacity: "0.3",
            transform: "translate(143.000000, 224.000000)",
            fill: "#000000",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
              d: "M0.89,0.07 C-0.9,4.36 0.45,10.24 2.33,14.49 C4.21,18.74 6.21,23.49 4.69,27.9 C4.30700928,28.6851853 4.10537459,29.5464046 4.1,30.42 C4.2,31.28 5.1,32.11 5.91,31.71 C6.32497825,31.4137519 6.61114265,30.9701971 6.71,30.47 L11,17.63",
              id: "Path"
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(50.596988, 159.675316) rotate(-80.810000) translate(-50.596988, -159.675316) ",
            cx: "50.5969883",
            cy: "159.675316",
            rx: "8.02",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M38.76,165.36 C38.63,165.45 36.91,163.04 34.54,160.28 C32.17,157.52 30.06,155.45 30.16,155.34 C33.6281379,158.104807 36.545488,161.497075 38.76,165.34 L38.76,165.36 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M47.8,139.61 C47.5044368,140.257248 47.1244677,140.862509 46.67,141.41 C45.91,142.48 44.81,143.91 43.51,145.41 C42.21,146.91 40.98,148.25 40.05,149.18 C39.5839056,149.714591 39.0492887,150.185323 38.46,150.58 C38.35,150.47 40.54,148.11 43.11,145.07 C45.68,142.03 47.68,139.52 47.8,139.61 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M44.27,127 C44.13,127.06 43.56,125.78 42.45,124.52 C41.34,123.26 40.18,122.52 40.26,122.36 C42.284288,123.141979 43.7848131,124.882589 44.26,127 L44.27,127 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(33.856800, 134.754800) rotate(-9.180542) translate(-33.856800, -134.754800) ",
            cx: "33.8568",
            cy: "134.7548",
            rx: "2.67759869",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M58.16,145.89 C58.1842639,144.333385 58.0738524,142.777588 57.83,141.24 C57.4137348,139.739044 56.8683672,138.276923 56.2,136.87 C58.3561429,139.333494 59.1098495,142.725174 58.2,145.87 L58.16,145.89 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M70.46,159.11 C69.4696526,157.692874 68.3943489,156.337056 67.24,155.05 C65.9732103,153.887244 64.6374525,152.80194 63.24,151.8 C66.5859139,153.09529 69.2223299,155.753524 70.49,159.11 L70.46,159.11 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M50.73,182.05 C47.7542263,183.173222 44.4531235,183.061625 41.56,181.74 C41.56,181.59 43.56,182.22 46.13,182.29 C48.7,182.36 50.69,181.9 50.73,182.05 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M60,186.8 C59.86,186.75 60.64,184.44 61.29,181.52 C61.94,178.6 62.23,176.19 62.38,176.199969 C62.4027164,179.868309 61.5887558,183.493512 60,186.8 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(76.037569, 182.964611) rotate(-42.330000) translate(-76.037569, -182.964611) ",
            cx: "76.0375688",
            cy: "182.964611",
            rx: "1",
            ry: "6.2"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(86.567706, 207.795185) rotate(-44.000000) translate(-86.567706, -207.795185) ",
            cx: "86.5677059",
            cy: "207.795185",
            rx: "1",
            ry: "4.42"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M72.12,213.17 C69.7090497,215.530038 66.7456336,217.248956 63.5,218.17 C63.44,218.03 65.5,217.17 67.86,215.76 C70.22,214.35 72,213 72.12,213.17 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M80.19,235.4 C80.04,235.4 80.64,232.74 80.94,229.4 C81.24,226.06 81.15,223.4 81.31,223.4 C81.8986388,227.431379 81.5181291,231.544997 80.2,235.4 L80.19,235.4 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M110.49,217.32 C107.273545,215.16125 104.680394,212.195678 102.97,208.72 C103.1,208.64 104.48,210.81 106.56,213.17 C108.64,215.53 110.59,217.2 110.49,217.32 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M121.57,226.76 C121.45,226.67 122.97,224.59 124.66,221.92 C126.35,219.25 127.66,217.01 127.75,217.07 C126.298628,220.650088 124.204102,223.934223 121.57,226.76 L121.57,226.76 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(114.942761, 202.348977) rotate(-74.970000) translate(-114.942761, -202.348977) ",
            cx: "114.942761",
            cy: "202.348977",
            rx: "1",
            ry: "5.19"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(112.171622, 239.590357) rotate(-86.630000) translate(-112.171622, -239.590357) ",
            cx: "112.171622",
            cy: "239.590357",
            rx: "4.73",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M118.85,258.21 C119.376464,256.595729 119.797352,254.948918 120.11,253.28 C120.247176,251.586871 120.273899,249.886604 120.19,248.19 C121.231458,251.559751 120.737724,255.217039 118.84,258.19 L118.85,258.21 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M100.76,255.14 C100.253995,251.685526 100.93062,248.16144 102.68,245.14 C102.82,245.2 101.9,247.32 101.38,250.08 C100.86,252.84 100.92,255.13 100.76,255.14 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M84.26,262.19 C82.629616,261.057676 81.0607253,259.839282 79.56,258.54 C77.951626,257.379635 76.4061095,256.134543 74.93,254.81 C78.4034052,256.767597 81.5482858,259.257856 84.25,262.19 L84.26,262.19 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(89.457478, 245.727222) rotate(-27.960000) translate(-89.457478, -245.727222) ",
            cx: "89.457478",
            cy: "245.727222",
            rx: "6.78",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M130.15,286.59 C129.939899,286.669318 129.722032,286.726299 129.5,286.76 C129.07,286.84 128.44,287 127.62,287.11 C125.30417,287.463065 122.961975,287.613635 120.62,287.56 C104.673592,287.256872 90.1881944,278.202058 82.93,264 C81.8485668,261.91229 80.9518161,259.733989 80.25,257.49 C79.98,256.7 79.85,256.07 79.74,255.65 C79.670889,255.438783 79.6239692,255.22094 79.6,255 C79.7017566,255.201053 79.7821946,255.412203 79.84,255.63 C79.99,256.04 80.15,256.63 80.44,257.44 C81.2096991,259.646038 82.1491777,261.789119 83.25,263.85 C90.616332,277.754945 104.862877,286.652359 120.59,287.17 C122.927063,287.257822 125.267418,287.164208 127.59,286.89 C128.42,286.82 129.05,286.69 129.48,286.64 C129.700997,286.60016 129.925537,286.583403 130.15,286.59 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M100.27,281.42 C99.7441266,278.185332 100.969023,274.91387 103.49,272.82 C101.568175,275.293124 100.445025,278.292842 100.27,281.42 L100.27,281.42 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M92,278 C89.9830937,279.352933 88.4875391,281.352884 87.76,283.67 C87.8286973,281.072358 89.5277493,278.800276 92,278 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M123.68,296.82 C120.359229,296.552482 117.375635,294.687735 115.68,291.82 C117.854716,294.168268 120.616232,295.894215 123.68,296.82 L123.68,296.82 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M128.61,269.12 C128.184185,272.124612 126.066765,274.615695 123.17,275.52 C125.641563,274.047398 127.55481,271.796519 128.61,269.12 L128.61,269.12 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M142.6,289.77 C142.48,289.67 143.8,288 145.02,285.7 C146.24,283.4 146.89,281.37 147.02,281.42 C146.451792,284.602801 144.898785,287.526931 142.58,289.78 L142.6,289.77 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M161.08,292.5 C161.14,292.65 159.32,293.37 157.49,294.88 C155.66,296.39 154.57,298.01 154.44,297.88 C155.748896,295.181047 158.182501,293.197567 161.09,292.46 L161.08,292.5 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M147,268.81 C146.85,268.81 146,265.93 144.13,262.69 C142.26,259.45 140.26,257.18 140.38,257.07 C140.928436,257.45723 141.411231,257.929896 141.81,258.47 C143.90785,260.93738 145.510419,263.786013 146.53,266.86 C146.790131,267.48062 146.948821,268.139017 147,268.81 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(144.936729, 240.170928) rotate(-12.990000) translate(-144.936729, -240.170928) ",
            cx: "144.936729",
            cy: "240.170928",
            rx: "4.93",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(138.384829, 226.443113) rotate(-37.860000) translate(-138.384829, -226.443113) ",
            cx: "138.384829",
            cy: "226.443113",
            rx: "1",
            ry: "4.65"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M162.32,224.79 C159.079393,224.710304 155.891221,223.954135 152.96,222.57 C154.539806,222.842328 156.102442,223.206276 157.64,223.66 C159.220609,223.945519 160.783253,224.322824 162.32,224.79 L162.32,224.79 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M177.31,224.53 C177.738256,223.111357 178.249128,221.718978 178.84,220.36 C179.268429,218.941414 179.779297,217.549046 180.37,216.19 C180.0182,219.171514 178.969968,222.028461 177.31,224.53 L177.31,224.53 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M173.93,244.85 C170.828557,244.157318 168.027241,242.497538 165.93,240.11 C166.04,240 167.61,241.37 169.81,242.66 C172.01,243.95 174,244.7 173.93,244.85 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(185.033261, 238.356384) rotate(-77.050000) translate(-185.033261, -238.356384) ",
            cx: "185.033261",
            cy: "238.356384",
            rx: "6.03",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(172.219267, 262.413217) rotate(-36.140000) translate(-172.219267, -262.413217) ",
            cx: "172.219267",
            cy: "262.413217",
            rx: "1",
            ry: "5.64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M189.43,258.26 C189.29,258.32 188.38,256.52 186.94,254.5 C185.5,252.48 184.11,251.01 184.22,250.9 C186.639006,252.791087 188.4504,255.349985 189.43,258.26 L189.43,258.26 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M202.45,256.31 C202.32,256.39 201.01,254.43 199.25,252.13 C197.49,249.83 195.94,248.05 196.05,247.94 C198.712298,250.282633 200.887033,253.126779 202.45,256.31 L202.45,256.31 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M199.39,264.94 C199.170426,262.46445 197.719604,260.265667 195.53,259.09 C195.53,259.03 195.99,259.09 196.62,259.4 C198.275186,260.286272 199.370072,261.949294 199.53,263.82 C199.57,264.52 199.45,264.94 199.39,264.94 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M189.23,276.77 C189.15,276.77 189.18,276.5 189.1,276.15 C188.936827,275.194969 188.064454,274.527604 187.1,274.62 C186.74,274.62 186.5,274.71 186.47,274.62 C186.44,274.53 186.62,274.35 187.05,274.23 C187.624544,274.076588 188.237776,274.201026 188.707077,274.566256 C189.176378,274.931486 189.44761,275.495375 189.44,276.09 C189.46,276.55 189.29,276.79 189.23,276.77 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M85.2,295.68 C81.4122277,294.221313 78.4186874,291.227772 76.96,287.44 C78.9912643,290.819361 81.8206387,293.648736 85.2,295.68 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M21.54,47.48 C19.94,32.27 17,18 16.24,3 C16.3007243,2.2443976 16.0433784,1.49773204 15.53,0.94 C15.0893022,0.685722856 14.5640199,0.621995314 14.0753037,0.763515438 C13.5865875,0.905035563 13.176636,1.23958371 12.94,1.69 C12.501758,2.62545614 12.3254984,3.66227746 12.43,4.69 C12.4465143,12.6223849 11.0933046,20.4980651 8.43,27.97 C6.71,32.81 4.43,37.47 3.15,42.44 C1.87,47.41 4.28,49.1 6.51,53.72",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M6.55,53.75 C2.51841999,50.6570105 0.494196824,45.6117876 1.27,40.59 C1.77,37.59 3.27,34.86 4.44,32.06 C5.61,29.26 6.53,26.16 5.81,23.2 C5.41521464,22.1047195 5.15007496,20.9669682 5.02,19.81 C5.02,18.65 5.76,17.35 6.93,17.29 C7.8174222,17.3662832 8.61913189,17.8502646 9.1,18.6 C11.04,21.01 12.61,28.06 11.63,33.31",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M11.63,33.31 C11.58,33.31 11.73,32.5 11.79,31.04 C11.8518907,28.9806548 11.6808046,26.9209128 11.28,24.9 C11.0132368,23.5075548 10.6113352,22.1444387 10.08,20.83 C9.79715165,20.1165486 9.42050434,19.4439641 8.96,18.83 C8.5334974,18.1672679 7.85403748,17.708271 7.08,17.56 C6.27067202,17.5950147 5.5857419,18.1692076 5.41,18.96 C5.19361174,19.8123523 5.24956296,20.7110688 5.57,21.53 C5.9022412,22.446081 6.136874,23.3946679 6.27,24.36 C6.36692025,25.3604417 6.32992722,26.3693427 6.16,27.36 C5.46,31.41 3.3,34.7 2.16,37.94 C1.59598631,39.4579042 1.29500388,41.0608893 1.27,42.68 C1.26508218,44.090043 1.4741277,45.492671 1.89,46.84 C2.49492525,48.8028414 3.51846232,50.6110902 4.89,52.14 C5.89,53.22 6.54,53.69 6.5,53.73 C6.324246,53.6396719 6.15977376,53.5289049 6.01,53.4 C5.55576273,53.0632443 5.13090665,52.6885681 4.74,52.28 C3.27764519,50.7712911 2.1796594,48.9481558 1.53,46.95 C1.07703029,45.5680456 0.840896496,44.1242561 0.83,42.67 C0.835845928,40.99877 1.13016803,39.3410937 1.7,37.77 C2.8,34.45 4.93,31.17 5.59,27.26 C5.75445519,26.3091505 5.79144753,25.3406236 5.7,24.38 C5.57288624,23.4457902 5.34832927,22.5274527 5.03,21.64 C4.67808736,20.7197233 4.62559426,19.7118558 4.88,18.76 C5.03063896,18.2876869 5.30312801,17.8634318 5.67,17.53 C6.04604905,17.188836 6.54300598,17.0123802 7.05,17.04 C7.95994049,17.1990891 8.76154501,17.7322831 9.26,18.51 C9.74258793,19.1706131 10.132849,19.8939418 10.42,20.66 C10.9448604,22.0043686 11.3334744,23.3980188 11.58,24.82 C11.9542042,26.8707907 12.071774,28.9601751 11.93,31.04 C11.8901241,31.603875 11.8166604,32.1648706 11.71,32.72 C11.7069312,32.9191513 11.6800741,33.1172223 11.63,33.31 Z",
            id: "Path",
            fill: "#EB996E"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M142.36,114.53 C143.035043,117.467246 145.5359,119.62818 148.54,119.87 C151.519361,120.0141 154.363594,118.616536 156.07,116.17 C157.725929,113.719143 158.393927,110.732798 157.94,107.81 C157.37,103.6 154.57,99.55 150.51,98.3 C146.45,97.05 141.4,99.3 140.28,103.38 L135.6,109.92 L142.36,114.53 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M136.83,101.7 C137.747217,94.3887093 135.662205,87.0178216 131.051038,81.2703523 C126.439872,75.5228829 119.696263,71.8895635 112.36,71.2 C97.84,69.82 84.94,80.63 82.77,95.04 C80.86,107.68 79.22,120.44 79.28,125.04 C79.46,139.04 87.63,144.45 90.95,146.04 C92.1411226,146.474501 93.3745384,146.782855 94.63,146.96 L94.63,146.96 C94.656004,146.962225 94.6797613,146.97563 94.695112,146.996737 C94.7104627,147.017844 94.7158948,147.044575 94.71,147.07 L91.61,163.07 C90.2,173.58 96.07,182.95 106.61,184.48 C117.15,186.01 125.37,177.94 126.97,167.42 L136.83,101.7 Z",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M85.17,103.22 C85.4,103.55 87.25,102.56 89.61,102.91 C91.97,103.26 93.54,104.7 93.83,104.44 C93.97,104.33 93.77,103.77 93.1,103.11 C92.1798487,102.252013 91.0165554,101.70006 89.77,101.53 C88.5389115,101.346225 87.2812962,101.559915 86.18,102.14 C85.38,102.59 85.06,103.07 85.17,103.22 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M106.22,107.78 C106.45,108.11 108.3,107.12 110.66,107.47 C113.02,107.82 114.59,109.26 114.88,109 C115.02,108.89 114.82,108.33 114.15,107.67 C113.229476,106.812561 112.066366,106.260695 110.82,106.09 C109.588919,105.90693 108.331522,106.120582 107.23,106.7 C106.43,107.15 106.1,107.63 106.22,107.78 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M98,119 C96.8103064,118.429078 95.5538939,118.009154 94.26,117.75 C93.67,117.6 93.11,117.4 93.07,116.97 C93.1092487,116.339698 93.3394542,115.736281 93.73,115.24 L96.19,110.9 C99.63,104.71 102.19,99.59 101.96,99.45 C101.73,99.31 98.72,104.22 95.29,110.45 L92.9,114.83 C92.4144188,115.50185 92.1807702,116.323161 92.24,117.15 C92.3608989,117.596125 92.6769988,117.963683 93.1,118.15 C93.4197646,118.288466 93.7557675,118.385906 94.1,118.44 C96.52,118.87 98,119.09 98,119 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M94.72,147.06 C94.72,147.06 103.72,149.14 116.17,143.94 C116.17,143.94 110.81,155.49 93.89,151.38 L94.72,147.06 Z",
            id: "Path",
            fill: "#EB996E"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M98.2,124.81 C99.2880129,123.802022 100.817864,123.424281 102.25,123.81 C103.291356,124.056877 104.18699,124.717768 104.73,125.64 C105.263567,126.541675 105.175627,127.680894 104.51,128.49 C103.604727,129.247143 102.330032,129.377779 101.29,128.82 C100.22933,128.261304 99.290966,127.496333 98.53,126.57 C98.2918048,126.341186 98.0984843,126.069858 97.96,125.77 C97.8212219,125.477393 97.872544,125.129982 98.09,124.89",
            id: "Path",
            fill: "#EB996E"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M104.76,121.61 C104.38,121.53 104,124.1 101.54,125.61 C99.08,127.12 96.38,126.43 96.31,126.79 C96.25,126.95 96.85,127.38 98,127.58 C99.5004346,127.819087 101.03713,127.521662 102.34,126.74 C103.591569,125.988467 104.50228,124.780162 104.88,123.37 C105.13,122.3 104.93,121.62 104.76,121.61 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M107.85,100.08 C107.99,100.76 110.4,100.8 113.12,101.54 C115.84,102.28 117.98,103.36 118.43,102.84 C118.63,102.59 118.33,101.93 117.52,101.17 C115.299038,99.2681375 112.326639,98.4936912 109.46,99.07 C108.38,99.33 107.79,99.76 107.85,100.08 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M87.56,95.93 C87.9,96.53 89.56,96.21 91.56,96.47 C93.56,96.73 95.13,97.36 95.56,96.85 C95.77,96.6 95.56,96.03 94.93,95.41 C93.1195088,93.8730411 90.5603925,93.5807963 88.45,94.67 C87.73,95.12 87.42,95.64 87.56,95.93 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M80,91.92 C82.89,96.33 92.07,93.61 97.61,90.58 C103.630055,94.4164254 111.610194,92.7627632 115.61,86.85 C118.78,90.85 125.22,89.55 127.61,85 C130,80.45 128.61,74.18 125.41,70.2 C122.21,66.22 117.46,64.2 112.8,63.35 C101.8,61.35 89.72,65.59 83.11,75.58 C80.11,80.19 78.23,86.4 80.04,91.92",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M110.56,64.92 C110.56,65.11 107.95,64.61 103.86,65.3 C98.5417299,66.1907606 93.6680913,68.8174619 90,72.77 C86.5280268,76.9096271 84.2252699,81.9018107 83.33,87.23 C83.0262958,89.4495966 82.9125498,91.6910612 82.99,93.93 C82.772557,93.356272 82.6444002,92.7525862 82.61,92.14 C82.4403452,90.4759695 82.4671967,88.7977511 82.69,87.14 C83.4178746,81.6082376 85.7190852,76.4018786 89.32,72.14 C93.1166533,68.0231981 98.2374202,65.3690342 103.79,64.64 C105.447437,64.4130339 107.126151,64.3861744 108.79,64.56 C109.395099,64.5874819 109.99224,64.7089342 110.56,64.92 L110.56,64.92 Z",
            id: "Path",
            fill: "#455A64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M95.62,85.46 C95.454746,84.9537143 95.3802673,84.4222074 95.4,83.89 C95.3513374,82.4394843 95.5027613,80.9891803 95.85,79.58 C96.9286116,74.8038912 99.93329,70.6859697 104.152486,68.2014163 C108.371682,65.716863 113.430159,65.0866426 118.13,66.46 C119.535321,66.8395776 120.881402,67.4116624 122.13,68.16 C122.610102,68.4141299 123.040344,68.7529034 123.4,69.16 C123.31,69.33 121.46,67.95 117.98,67.16 C108.553404,64.7643291 98.9577058,70.4146334 96.48,79.82 C95.5,83.18 95.81,85.46 95.62,85.46 Z",
            id: "Path",
            fill: "#455A64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M122.14,80.67 C121.05916,84.5848548 120.435008,88.6116412 120.28,92.67 C120.134198,96.7476715 121.402487,100.750378 123.87,104 C127.73,108.66 134.17,110.07 140.11,111.2 C143.291432,103.274081 144.249182,94.6301267 142.88,86.2 C142.21,82.1 140.88,77.93 138,74.95 C133.59782,70.6107538 126.821861,69.7889272 121.51,72.95",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M125.44,100 C123.87,103.38 123.99,107.29 124.53,111 C125.07,114.71 126.01,118.34 125.97,122.07 C125.93,125.8 124.75,129.74 121.83,132.07 C120.943508,132.658874 120.113314,133.328386 119.35,134.07 C118.578614,134.836481 118.370638,136.004345 118.83,136.99 C119.39,137.89 121.07,137.87 121.32,136.84 L121.17,137.1 C120.86493,137.60752 120.855214,138.2396 121.144542,138.756256 C121.43387,139.272913 121.977869,139.594912 122.57,139.6 C124.634425,139.497661 126.565712,138.550101 127.91,136.98 C129.82,134.77 130.58,131.8 131.08,128.92 C132.62,120.09 132.32,110.92 134.76,102.31",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M91.53,158 C92.9211136,164.088333 96.889654,169.271481 102.40435,172.202543 C107.919046,175.133605 114.435377,175.523168 120.26,173.27 C125.44,171.27 129.61,167.37 133.65,163.56 C135.099229,172.329547 132.761416,181.302304 127.217196,188.249738 C121.672976,195.197173 113.442521,199.467458 104.57,200 C97.95,200.4 90.82,198.37 86.66,193.21 C83.8765893,189.462951 82.4644931,184.873639 82.66,180.21 C82.8597716,175.576627 83.7391609,170.997738 85.27,166.62 C86.46,162.84 88.32,158.62 92.15,157.57",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M139,111.5 C143,113.65 145.14,118.15 145.9,122.59 C146.66,127.03 146.28,131.59 146.47,136.08 C146.66,140.57 147.52,145.29 150.37,148.78 C153.37,152.49 158.12,154.25 162.37,156.52 C171.69,161.52 179.37,170.06 182.17,180.27 C184.97,190.48 182.43,202.27 174.78,209.62 C167.78,216.29 157.68,218.62 148.05,218.62 C141.17,218.62 133.63,217.14 129.34,211.77 C125.05,206.4 125.34,198.87 126.84,192.26 C128.34,185.65 131.09,179.21 131.19,172.42 C130.166384,176.624543 128.376476,180.604375 125.91,184.16 C125.21,185.16 124,186.27 122.91,185.69 C121.82,185.11 122.16,183.24 122.72,181.99 C131.01,163.56 128.12,126.41 133.03,106.06",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M132.15,109.39 C132.4,109.31 142.07,107.48 140.82,117.04 C139.57,126.6 130.24,123.38 130.259968,123.11 C130.28,122.84 132.15,109.39 132.15,109.39 Z",
            id: "Path",
            fill: "#FFBE9D"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M133.65,119.86 C133.65,119.86 133.8,120 134.07,120.16 C134.443296,120.381066 134.887639,120.449151 135.31,120.35 C136.37,120.11 137.43,118.62 137.7,116.9 C137.829067,116.084902 137.774402,115.251264 137.54,114.46 C137.435867,113.829835 137.028228,113.291302 136.45,113.02 C136.080463,112.885411 135.66685,113.021903 135.45,113.35 C135.29,113.6 135.32,113.8 135.27,113.81 C135.22,113.82 135.09,113.62 135.21,113.24 C135.292962,113.010755 135.451723,112.816714 135.66,112.69 C135.962548,112.513885 136.324374,112.470466 136.66,112.57 C137.439151,112.831257 138.026296,113.479011 138.21,114.28 C138.509111,115.16088 138.588075,116.101582 138.44,117.02 C138.13,118.94 136.91,120.61 135.44,120.83 C134.9008,120.913588 134.35279,120.748081 133.95,120.38 C133.63,120.1 133.61,119.88 133.65,119.86 Z",
            id: "Path",
            fill: "#EB996E"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M81.64,178.63 C82.1137997,177.593757 82.6584223,176.591384 83.27,175.63 C84.6614687,173.321795 85.817284,170.879507 86.72,168.34 C87.5931218,165.800495 87.8869665,163.097807 87.58,160.43 C87.3852319,159.332929 87.1281491,158.247839 86.81,157.18 C86.9978046,157.42026 87.1432257,157.690811 87.24,157.98 C87.5630545,158.747599 87.7978925,159.549403 87.94,160.37 C88.365439,163.098912 88.1147772,165.89053 87.21,168.5 C86.3025581,171.078699 85.0835312,173.536902 83.58,175.82 C83.02,176.7 82.58,177.4 82.21,177.87 C82.0605849,178.151374 81.868283,178.407777 81.64,178.63 L81.64,178.63 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M86.52,167.6 C86.38,167.6 86.1,166.79 85.25,166.21 C84.4,165.63 83.52,165.64 83.51,165.5 C83.5,165.36 83.72,165.32 84.11,165.32 C85.1600271,165.343051 86.0939431,165.993246 86.48,166.97 C86.61,167.34 86.58,167.58 86.52,167.6 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M92.69,167.58 C91.316616,165.757342 89.3562411,164.464555 87.14,163.92 C89.5932838,163.787809 91.8453109,165.272929 92.69,167.58 L92.69,167.58 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(97.402753, 183.839202) rotate(-78.330000) translate(-97.402753, -183.839202) ",
            cx: "97.4027532",
            cy: "183.839202",
            rx: "4.12",
            ry: "1"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(112.290117, 186.609361) rotate(-88.220000) translate(-112.290117, -186.609361) ",
            cx: "112.290117",
            cy: "186.609361",
            rx: "4.31",
            ry: "1"
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", {
          id: "Character_1",
          transform: "translate(11.000000, 0.000000)",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", {
            id: "Path",
            fill: "#B78876",
            points: "15.66 249.37 0.24 316.52 32.85 316.62 47.92 257.57"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M175.81,166.87 C172.71,162.71 169.15,158.72 167.52,153.8 C166.73,151.42 166.42,148.9 165.58,146.54 C164.74,144.18 163.21,141.88 160.87,140.99 C158.53,140.1 156.75,140.99 155.23,142.67 L144,175.41 L150.45,200.55 C156.89,199.1 164.95,197.38 170.97,194.67 C176.99,191.96 180.97,187.67 181.39,181.03 C181.72,175.86 178.91,171 175.81,166.87 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M74,161.09 C74,161.09 35.07,178 30.21,185.66 C25.35,193.32 9.38,247.77 9.38,247.77 L50.38,259.82 L49.71,316.52 L150.21,316.52 L149.38,216.52 L136.77,161.26 C136.77,161.26 114.58,159.83 112.53,158.82 C110.48,157.81 74,161.09 74,161.09 Z",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M212.21,22.47 C212.53,20.18 210.93,17.66 212.08,15.65 C212.850864,14.6134487 213.950955,13.8694772 215.2,13.54 C215.799981,13.2618644 216.449178,13.1055134 217.11,13.08 C217.786293,13.0691229 218.403932,13.4625238 218.68,14.08 C218.825082,14.8563159 218.52872,15.6491829 217.91,16.14 C217.296854,16.6147554 216.783672,17.2061041 216.4,17.88 C216.01,18.88 216.4,21.88 216.77,22.8 C218.105658,26.2906103 219.211356,29.8649208 220.08,33.5",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M204,23.26 C204.14,19.79 207,6.11 207.1,2.64 C209.45,3.36 210.81,5.86 211.25,8.28 C211.69,10.7 211.46,13.19 211.88,15.61 C212.44,18.86 214.13,21.79 215.88,24.61 C217.63,27.43 219.36,30.29 220.12,33.5 C220.88,36.71 223.79,45.02 221.53,47.42",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M203.35,46.66 L189.45,112.74 C188.96,115.74 136.72,161.28 136.72,161.28 L147,202.5 L215.09,136 C219.994749,130.752623 222.663296,123.801487 222.53,116.62 L221.38,54.62 L203.35,46.66 Z",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M201,23.68 L203.37,46.68 L221.37,54.6 C221.37,54.6 221.59,52.97 222.37,45.01 C223.22,36.22 213.78,32.45 209.57,26.01 C207.77,23.23 208.24,18.13 206.85,11.81 C206.69,11.08 205.69,6.67 205.14,4.29 C204.873962,2.95989003 204.108063,1.78240951 203,1 C202.19,0.45 201.26,0.18 200.59,1 C199.92,1.82 201,23.68 201,23.68 Z",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M212.21,50.52 C214.21,48.79 214.7,45.69 213.94,43.12 C213.021491,40.5894331 211.57242,38.2845581 209.69,36.36 C207.811978,34.438743 206.231231,32.2479414 205,29.86 C204.24,28.13 203.89,26.24 203,24.55 C202.11,22.86 200.63,21.31 198.75,21.23 C200.26,30.74 200.22,36.23 203.31,46.66",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M200.63,32.06 C200.63,32.06 200.56,31.8 200.44,31.3 L200,29.12 L198.41,21.64 L198.35,21.36 L198.64,21.36 C199.878192,21.3120588 201.0854,21.7539831 202,22.59 C203.368483,23.9003102 204.34497,25.5658777 204.82,27.4 C205.222555,28.8339097 205.751287,30.2293588 206.4,31.57 C206.880378,32.4444123 207.460956,33.2599053 208.13,34 C208.378892,34.2830105 208.5814,34.6036476 208.73,34.95 C208.457359,34.6982703 208.206467,34.423962 207.98,34.13 C207.211836,33.4370391 206.545268,32.6391779 206,31.76 C205.292624,30.4199407 204.719824,29.0130626 204.29,27.56 C203.819758,25.8176708 202.886782,24.2350679 201.59,22.98 C200.778999,22.2188886 199.701953,21.8060211 198.59,21.83 L198.82,21.53 C200.06,27.56 200.85,32.07 200.63,32.06 Z",
            id: "Path",
            fill: "#7C5142"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#7C5142",
            transform: "translate(207.308433, 16.805785) rotate(-8.460000) translate(-207.308433, -16.805785) ",
            cx: "207.308433",
            cy: "16.8057853",
            rx: "1",
            ry: "9.53"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M214.45,27 C214.45,27 214.52,27.11 214.58,27.35 L214.43,27.35 C213.687138,25.2110407 213.082558,23.0265356 212.62,20.81 C212.19,18.88 211.87,17.12 211.69,15.81 C211.538525,15.1242538 211.478005,14.4215474 211.51,13.72 C211.66,13.72 212.27,16.83 213.13,20.72 C213.82,23.83 214.45,26.45 214.59,27.33 L214.44,27.33 C214.41,27.11 214.42,27 214.45,27 Z",
            id: "Path",
            fill: "#7C5142"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M218,39.66 C217.93,39.66 217.56,39.14 216.84,38.37 C214.938939,36.3474216 212.35617,35.1005678 209.59,34.87 C209.011507,34.8725922 208.433506,34.8358407 207.86,34.76 C208.41562,34.5400702 209.01444,34.4511027 209.61,34.5 C212.526405,34.5327954 215.27766,35.8589663 217.12,38.12 C217.528011,38.558717 217.829173,39.0857492 218,39.66 L218,39.66 Z",
            id: "Path",
            fill: "#7C5142"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M205,48.48 C204.511498,47.6176568 204.115947,46.7058784 203.82,45.76 C202.175971,41.2717166 201.061756,36.6067831 200.5,31.86 C200.335872,30.8689946 200.278877,29.863203 200.33,28.86 C200.579237,29.8158654 200.759698,30.7883529 200.87,31.77 C201.17,33.57 201.62,36.04 202.27,38.77 C202.92,41.5 203.63,43.89 204.18,45.62 C204.521547,46.5524413 204.795587,47.5082404 205,48.48 L205,48.48 Z",
            id: "Path",
            fill: "#7C5142"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M124.52,162.46 C126.370724,159.625799 130.121469,158.745343 133.04,160.46 C140.38,154.46 147.89,148.64 155.23,142.67 C152.83,154.67 151.23,171.41 156.6,182.38 C156.6,182.38 163.37,194.97 174.15,193.04 L164.54,202.49 L149.34,216.54",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M122.13,168.08 C122.327908,164.836744 124.112558,161.899742 126.9,160.23 C125.839384,161.353834 124.866531,162.557364 123.99,163.83 C123.262087,165.196949 122.640258,166.617795 122.13,168.08 L122.13,168.08 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M130.06,175.43 C129.645163,174.759126 129.360209,174.016211 129.22,173.24 C128.342959,169.49246 129.040526,165.549219 131.15,162.33 C131.547587,161.648498 132.070036,161.048021 132.69,160.56 C132.76,160.62 132.18,161.3 131.47,162.56 C129.601605,165.771576 128.931961,169.541426 129.58,173.2 C129.84,174.56 130.15,175.4 130.06,175.43 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M166.81,201.16 C166.072469,201.620029 165.265378,201.957724 164.42,202.16 C162.110215,202.720539 159.692029,202.647993 157.42,201.95 C154.05147,200.886691 151.104713,198.786864 149,195.95 C146.465473,192.477144 144.755531,188.472461 144,184.24 C142.585974,176.622896 142.182496,168.852593 142.8,161.13 C143.03,158.13 143.36,155.79 143.64,154.13 C143.77,153.31 143.9,152.68 143.98,152.25 C144.010534,152.028349 144.064159,151.810498 144.14,151.6 C144.142824,151.821481 144.122717,152.042659 144.08,152.26 L143.83,154.15 C143.62,155.79 143.35,158.15 143.16,161.15 C142.651633,168.842573 143.101753,176.568508 144.5,184.15 C145.246922,188.307688 146.91804,192.244555 149.39,195.67 C151.414959,198.470509 154.26441,200.568264 157.54,201.67 C159.752803,202.384245 162.113137,202.511738 164.39,202.04 C165.213653,201.795671 166.021792,201.501802 166.81,201.16 L166.81,201.16 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#263238",
            cx: "50.55",
            cy: "244.9",
            rx: "1",
            ry: "31.75"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M49.74,202.18 C49.63,202.18 49.66,200.76 49.17,198.55 C48.8771266,197.258852 48.4584602,195.999503 47.92,194.79 C46.5968852,191.819266 44.5968892,189.199408 42.08,187.14 C41.0541639,186.303976 39.9488841,185.570472 38.78,184.95 C36.78,183.89 35.39,183.55 35.43,183.45 C35.7710333,183.469673 36.1076333,183.536993 36.43,183.65 C36.8088657,183.740714 37.18001,183.861085 37.54,184.01 C38.0289662,184.183198 38.5065728,184.386932 38.97,184.62 C40.1884591,185.209182 41.3386618,185.930155 42.4,186.77 C45.0242209,188.836288 47.0873521,191.528675 48.4,194.6 C48.9306804,195.846668 49.3230262,197.147781 49.57,198.48 C49.6721082,198.988441 49.7422458,199.502783 49.78,200.02 C49.8307637,200.407813 49.850826,200.799029 49.84,201.19 C49.8518895,201.523014 49.8182453,201.856091 49.74,202.18 L49.74,202.18 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M118.24,160.65 C118.319508,160.924888 118.376365,161.205828 118.41,161.49 C118.547882,162.300417 118.634719,163.118695 118.67,163.94 C118.794629,166.990599 118.371264,170.03883 117.42,172.94 C116.012985,177.243417 113.515191,181.108969 110.17,184.16 C101.549132,191.669105 89.014491,192.609203 79.37,186.47 C75.6097556,183.955366 72.5643439,180.51033 70.53,176.47 C69.1724188,173.73785 68.3155369,170.784486 68,167.75 C67.9118344,166.933114 67.8750953,166.111495 67.89,165.29 C67.866526,165.003814 67.866526,164.716186 67.89,164.43 C67.9365802,164.714298 67.9599906,165.001911 67.96,165.29 C67.96,165.85 68.04,166.67 68.16,167.73 C68.5660926,170.702205 69.4757839,173.583458 70.85,176.25 C72.8997942,180.193846 75.9217266,183.549636 79.63,186 C89.1075158,191.967019 101.370241,191.045895 109.85,183.73 C113.15556,180.739222 115.641026,176.952501 117.07,172.73 C118.035274,169.887664 118.508728,166.901521 118.47,163.9 C118.47,162.84 118.39,162.01 118.31,161.46 C118.266039,161.192181 118.242638,160.92139 118.24,160.65 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ellipse", {
            id: "Oval",
            fill: "#FAFAFA",
            className: "theme",
            transform: "translate(31.324288, 241.316504) rotate(-71.720000) translate(-31.324288, -241.316504) ",
            cx: "31.3242876",
            cy: "241.316504",
            rx: "1",
            ry: "19.34"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M148.36,233.53 C148.36,233.67 126.31,233.88 99.11,234 C71.91,234.12 49.85,234.09 49.85,233.95 C49.85,233.81 71.85,233.6 99.11,233.48 C126.37,233.36 148.36,233.39 148.36,233.53 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M148.86,242.24 C148.86,242.38 126.69,242.5 99.36,242.5 C72.03,242.5 49.85,242.38 49.85,242.24 C49.85,242.1 72,242 99.35,242 C126.7,242 148.86,242.09 148.86,242.24 Z",
            id: "Path",
            fill: "#FAFAFA",
            className: "theme"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M135.28,252.82 C135.20894,253.097192 135.115294,253.368098 135,253.63 L134.1,255.91 L133.44,257.55 C133.18,258.14 132.87,258.78 132.55,259.46 C131.89,260.82 131.21,262.41 130.26,264.06 L128.83,266.69 C128.33,267.6 127.73,268.5 127.15,269.46 C126.01,271.39 124.61,273.33 123.15,275.4 C119.903912,279.799466 116.326863,283.944832 112.45,287.8 C108.518972,291.602479 104.303389,295.099306 99.84,298.26 C97.74,299.66 95.78,301.03 93.84,302.12 C92.84,302.68 91.96,303.26 91.04,303.75 L88.39,305.13 C86.72,306.05 85.12,306.7 83.75,307.33 C83.06,307.64 82.42,307.94 81.82,308.18 L80.16,308.81 L77.86,309.66 C77.5975389,309.768602 77.326636,309.855558 77.05,309.92 C77.2998303,309.779091 77.560687,309.658696 77.83,309.56 L80.09,308.62 L81.73,307.95 C82.32,307.69 82.95,307.38 83.64,307.06 C85,306.41 86.58,305.73 88.23,304.8 L90.86,303.4 C91.77,302.91 92.67,302.32 93.63,301.75 C95.57,300.64 97.52,299.27 99.63,297.86 C104.054086,294.692228 108.238749,291.202781 112.15,287.42 C116.007487,283.584523 119.57715,279.470053 122.83,275.11 C124.27,273.06 125.69,271.11 126.83,269.22 C127.42,268.27 128.02,267.38 128.53,266.48 L129.99,263.88 C130.99,262.24 131.66,260.68 132.34,259.33 C132.67,258.65 133,258.03 133.26,257.44 L133.96,255.82 L134.96,253.58 C135.046691,253.318712 135.153684,253.064604 135.28,252.82 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
            id: "Group",
            opacity: "0.3",
            transform: "translate(81.000000, 261.000000)",
            fill: "#000000",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
              d: "M50.21,0.52 C43.49,8.7 36.45,14.63 26.58,18.45 C21.85,20.28 16.9,21.52 12.32,23.69 C7.74,25.86 3.43,29.13 1.37,33.76 C-0.22,37.34 0.55,42.76 4.37,43.54 C5.85405463,43.722968 7.35978283,43.4910513 8.72,42.87 C28.27,35.78 41.11,17.87 50.2,0.52",
              id: "Path"
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M61.29,83.56 C57.07,86.87 56.79,93.06 57,98.42 C57.21,103.78 57.27,109.88 53.39,113.58 C50.19,116.63 44.59,117.76 43.67,122.09 C43.1622243,124.190493 44.061347,126.379501 45.8989612,127.516639 C47.7365754,128.653776 50.0967788,128.481678 51.75,127.09 C50.39,130.47 51.01,134.82 53.89,137.09 C56.77,139.36 61.84,138.28 62.89,134.8 C62.5092077,136.346776 62.9901792,137.978797 64.1489529,139.071849 C65.3077266,140.164901 66.9650209,140.549871 68.4869555,140.079515 C70.0088901,139.60916 71.1599962,138.356251 71.5,136.8",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M122.53,122.37 C123.087444,124.275295 124.657566,125.712917 126.6045,126.100657 C128.551434,126.488397 130.55253,125.761999 131.797386,124.21564 C133.042241,122.66928 133.324557,120.559223 132.53,118.74 C131.7,116.67 129.53,115.1 129.47,112.86 C129.35,110.16 132.18,108.37 134.67,107.32 C137.16,106.27 140.08,104.88 140.48,102.2 C140.88,99.52 138.64,97.48 136.77,95.65 C134.9,93.82 133.12,91.04 134.43,88.78 C135.1,87.62 136.43,87 137.29,85.99 C139.23,83.76 138.45,79.99 136.21,78.08 C133.97,76.17 130.76,75.74 127.83,76.08 C124.9,76.42 122.1,77.54 119.23,78.24 C109.608243,80.5660644 99.4520213,78.7524533 91.23,73.24",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M64.15,104.18 L74.45,163.82 C75.3182028,168.856115 78.1593025,173.337914 82.343526,176.271939 C86.5277495,179.205964 91.7094411,180.349836 96.74,179.45 L96.74,179.45 C106.530374,177.69672 113.36099,168.757031 112.48,158.85 C112.01,153.56 111.6,149.18 111.6,149.18 C111.6,149.18 126.54,145.34 125.25,130.18 C124.63,122.84 122.11,107.83 119.68,94.28 C117.084691,79.7093633 103.731388,69.5768696 89,71 L87.54,71.14 C80.003024,72.3114872 73.2620456,76.4861119 68.8549052,82.7115037 C64.4477649,88.9368956 62.7503871,96.6820354 64.15,104.18 L64.15,104.18 Z",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M116.49,104.09 C116.614102,105.264367 115.780561,106.324029 114.61,106.48 C114.057324,106.57794 113.488524,106.44836 113.032806,106.120695 C112.577088,105.79303 112.273138,105.295096 112.19,104.74 C112.065527,103.569031 112.893472,102.510855 114.06,102.35 C114.614195,102.249069 115.185629,102.377234 115.643632,102.705186 C116.101635,103.033139 116.407036,103.532832 116.49,104.09 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M117.15,102 C116.91,102.31 115.15,101.25 112.82,101.49 C110.49,101.73 108.9,103.06 108.62,102.79 C108.34,102.52 108.71,102.14 109.4,101.52 C110.341077,100.725953 111.503668,100.240667 112.73,100.13 C113.941283,100.00719 115.160199,100.27339 116.21,100.89 C117,101.39 117.27,101.88 117.15,102 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M93.69,106.75 C93.8141025,107.924367 92.9805612,108.984029 91.81,109.14 C91.2573238,109.23794 90.6885238,109.10836 90.2328058,108.780695 C89.7770877,108.45303 89.4731379,107.955096 89.39,107.4 C89.2655266,106.229031 90.0934717,105.170855 91.26,105.01 C91.8141952,104.909069 92.3856293,105.037234 92.843632,105.365186 C93.3016347,105.693139 93.6070362,106.192832 93.69,106.75 L93.69,106.75 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M94.28,104.68 C94.04,104.99 92.28,103.93 89.95,104.17 C87.62,104.41 86.03,105.74 85.74,105.47 C85.45,105.2 85.82,104.82 86.52,104.2 C87.4610772,103.405953 88.6236682,102.920667 89.85,102.81 C91.0612431,102.687891 92.2799435,102.954044 93.33,103.57 C94.1,104.06 94.4,104.54 94.28,104.68 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M104.42,121.14 C105.611331,120.636152 106.861046,120.283409 108.14,120.09 C108.73,119.97 109.28,119.8 109.34,119.38 C109.333887,118.758196 109.134704,118.153656 108.77,117.65 L106.57,113.29 C103.5,107.08 101.21,101.94 101.46,101.82 C101.71,101.7 104.41,106.64 107.46,112.82 L109.59,117.21 C110.036591,117.892307 110.227839,118.710424 110.13,119.52 C110.006777,119.974572 109.677207,120.344875 109.24,120.52 C108.918155,120.64196 108.58214,120.722604 108.24,120.76 C106.987756,121.047068 105.704256,121.174746 104.42,121.14 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M94,95.49 C93.83,96.15 91.48,96.07 88.77,96.67 C86.06,97.27 83.93,98.23 83.51,97.67 C83.32,97.41 83.65,96.78 84.51,96.08 C86.7750702,94.3166301 89.7269371,93.696738 92.51,94.4 C93.5,94.73 94.06,95.18 94,95.49 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M115.63,95.35 C115.27,95.92 113.63,95.53 111.63,95.69 C109.63,95.85 108.1,96.39 107.63,95.88 C107.44,95.63 107.63,95.07 108.31,94.5 C110.154608,93.0788627 112.67501,92.9129429 114.69,94.08 C115.51,94.55 115.79,95.08 115.63,95.35 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M79,85.94 L78.92,86.01 C76.6891227,88.1510837 75.3708293,91.0706738 75.24,94.16 L75.24,94.47 C75.07,98.85 75.6,103.24 75.39,107.63 C75.18,112.02 74.11,116.55 71.2,119.84 C70.01,121.19 67.76,122.26 66.54,120.93 C66.1159646,120.36949 65.8593923,119.700321 65.8,119 C63.97,108.63 60.22,99.64 59.17,88.72 C58.8706785,85.7518749 60.0212001,82.8215819 62.26,80.85 C64.39,79 67,77 69.67,78 C72.34,79 76.09,83.39 78.25,85.22",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M69.93,110.54 C69.66,110.45 59.21,108.47 60.55,118.81 C61.89,129.15 72,125.67 72,125.37 C72,125.07 69.93,110.54 69.93,110.54 Z",
            id: "Path",
            fill: "#B78876"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M68.31,121.86 C68.31,121.86 68.15,122.01 67.86,122.19 C67.4557168,122.426631 66.9757606,122.498267 66.52,122.39 C65.38,122.13 64.23,120.52 63.94,118.66 C63.7995437,117.778312 63.8576219,116.876392 64.11,116.02 C64.2202928,115.339475 64.6575782,114.756428 65.28,114.46 C65.6940758,114.28882 66.1712537,114.440841 66.41,114.82 C66.59,115.09 66.55,115.31 66.6,115.32 C66.65,115.33 66.8,115.12 66.66,114.7 C66.5682851,114.453465 66.3955033,114.245422 66.17,114.11 C65.8653183,113.941103 65.5077381,113.894617 65.17,113.98 C64.3293706,114.264104 63.6968727,114.964775 63.5,115.83 C63.1698381,116.793934 63.0839398,117.824714 63.25,118.83 C63.59,120.9 64.91,122.72 66.46,122.95 C67.0426129,123.031394 67.6315135,122.852164 68.07,122.46 C68.32,122.12 68.35,121.88 68.31,121.86 Z",
            id: "Path",
            fill: "#7C5142"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M69.48,79.62 C66.48,75.72 72.94,69.08 77.9,66.97 C82.86,64.86 89.84,66.7 95.1,67.89 C98.42,68.64 101.76,69.82 105.1,69.35 C107.340045,68.899359 109.500435,68.1174393 111.51,67.03 C113.521253,65.9271851 115.736491,65.2466202 118.02,65.03 C120.343712,64.858888 122.571647,65.9863232 123.81,67.96 C124.87,69.96 123.92,72.96 121.71,73.51 C123.587307,72.2182669 126.092374,72.32272 127.855629,73.7662526 C129.618885,75.2097852 130.215885,77.6449165 129.320237,79.7403092 C128.424589,81.8357018 126.25189,83.0869622 123.99,82.81 C125.36,81.55 127.8,83.17 127.79,85.03 C127.78,86.89 126.25,88.39 124.63,89.3 C120.49,91.62 115.39,91.51 110.77,90.44 C106.15,89.37 101.77,87.44 97.17,86.24 C92.57,85.04 84.86,82.88 80.56,84.88 C77.39,86.36 75.5,90.53 73.56,89.88 C71.6964042,89.1072147 70.3090556,87.4972969 69.82,85.54 C69.3781911,83.5995367 69.2532434,81.6003736 69.45,79.62",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M70.06,112.31 C70.1939454,117.798819 70.8231661,123.264337 71.94,128.64 C73.22,133.98 75.54,139.18 79.39,143.09 C84.39,148.22 90.95,153.09 98.05,154.3 C105.8,155.58 115.28,153.96 121.59,149.3 C124.59,147.08 126.76,142.3 125.83,138.68 C128.416687,137.454567 130.138207,134.925845 130.33,132.07 C130.48,129.27 128.78,125.77 126.56,125.4 C128.23,125.13 128.7,122.49 128.07,120.99 C127.44,119.49 125.25,119.05 123.59,119.37 C121.948734,119.797947 120.422333,120.583343 119.12,121.67 C117.822042,122.753368 116.360579,123.624171 114.79,124.25 C109.43,125.99 104,121.25 98.37,121.48 C93.28,121.68 88.75,125.9 83.7,125.19 C80.8643462,124.650854 78.3918623,122.931024 76.9,120.46 C75.34,118.07 76.02,109.24 75.41,106.46",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", {
            id: "Group",
            opacity: "0.6",
            transform: "translate(102.000000, 134.000000)",
            fill: "#455A64",
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
              d: "M8.91,2.11 C8.48743949,2.02001623 8.07277672,1.89628621 7.67,1.74 C5.69273849,1.15496555 3.55578172,1.52468126 1.89,2.74 C1.25,3.2 0.89,3.57 0.89,3.52 C0.89,3.47 1.09,3.03 1.71,2.47 C3.38183058,1.00011823 5.73004908,0.576668987 7.81,1.37 C8.56,1.72 8.95,2.07 8.91,2.11 Z",
              id: "Path"
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M100,124.63 C100.38,124.57 100.63,127.1 103,128.68 C105.37,130.26 108,129.68 108.06,130.08 C108.11,130.24 107.51,130.63 106.37,130.77 C104.892768,130.941562 103.402294,130.58753 102.16,129.77 C100.968476,128.976036 100.132808,127.749434 99.83,126.35 C99.57,125.28 99.79,124.63 100,124.63 Z",
            id: "Path",
            fill: "#FFFFFF"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M92.45,152.62 C92.6740129,152.678491 92.8917281,152.758878 93.1,152.86 C93.53,153.02 94.16,153.24 94.99,153.47 C97.3417963,154.107234 99.756063,154.48614 102.19,154.6 C103.856716,154.697521 105.528516,154.664085 107.19,154.5 C109.106741,154.332794 111.000529,153.964092 112.84,153.4 C114.87372,152.797483 116.812679,151.91216 118.6,150.77 C120.547337,149.597953 122.246033,148.055538 123.6,146.23 C125.215687,144.088596 125.933127,141.401782 125.6,138.74 L125.6,138.53 L125.79,138.45 C127.034007,137.871734 128.108411,136.983284 128.91,135.87 C129.304425,135.348697 129.639809,134.785252 129.91,134.19 C130.153429,133.613811 130.305263,133.003101 130.36,132.38 C130.573339,130.093547 129.677042,127.843508 127.95,126.33 L127.81,126.21 L127.93,126.06 C128.840423,124.891944 129.071928,123.332128 128.54,121.95 C128.122072,120.911123 127.28781,120.094998 126.24,119.7 C125.580136,119.437246 124.86657,119.337759 124.16,119.41 C123.67,119.47 123.43,119.56 123.42,119.53 C123.650086,119.416319 123.896304,119.338743 124.15,119.3 C124.878474,119.17832 125.626039,119.24722 126.32,119.5 C127.453029,119.884784 128.366829,120.736693 128.83,121.84 C129.438654,123.330741 129.210226,125.032531 128.23,126.31 L128.23,126.04 C130.084825,127.621321 131.060829,130.001728 130.85,132.43 C130.802232,133.117653 130.643514,133.793047 130.38,134.43 C130.097513,135.060653 129.74532,135.657704 129.33,136.21 C128.479712,137.398296 127.335818,138.345799 126.01,138.96 L126.16,138.67 C126.559787,141.467099 125.84121,144.30907 124.16,146.58 C122.770677,148.459745 121.023956,150.046746 119.02,151.25 C117.19191,152.407513 115.208806,153.299741 113.13,153.9 C111.257071,154.461092 109.329393,154.819808 107.38,154.97 C103.230715,155.319322 99.0526701,154.892022 95.06,153.71 C94.4224687,153.512566 93.7979153,153.275436 93.19,153 C92.9290268,152.903377 92.6805856,152.775799 92.45,152.62 L92.45,152.62 Z",
            id: "Path",
            fill: "#455A64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M47.11,126.23 C46.9184822,126.177626 46.7386369,126.0894 46.58,125.97 C46.129422,125.632538 45.7828845,125.175108 45.58,124.65 C45.2395616,123.805687 45.1662658,122.877274 45.37,121.99 C45.6882684,120.818961 46.3930934,119.789917 47.37,119.07 C48.5200657,118.20205 49.8034311,117.526594 51.17,117.07 C52.7012648,116.589376 54.1816876,115.959693 55.59,115.19 C57.0713766,114.250727 58.2326068,112.883754 58.92,111.27 C59.674617,109.533201 60.0757536,107.663497 60.1,105.77 C60.18,101.86 59.28,98.15 59.18,94.7 C59.08,91.25 59.68,88.03 61.25,85.87 C62.4244611,84.1370198 64.2104098,82.9118591 66.25,82.44 C66.8028082,82.3297638 67.3685785,82.2994547 67.93,82.35 C68.12411,82.367096 68.3154733,82.407383 68.5,82.47 C67.7590885,82.4314351 67.0162968,82.4885729 66.29,82.64 C64.3281306,83.160427 62.626561,84.3849875 61.51,86.08 C60.05,88.18 59.43,91.3 59.61,94.68 C59.79,98.06 60.61,101.77 60.61,105.79 C60.586367,107.753256 60.168071,109.691701 59.38,111.49 C58.6437541,113.192751 57.405218,114.63015 55.83,115.61 C54.3904291,116.387158 52.8760863,117.017017 51.31,117.49 C49.979311,117.909055 48.7236571,118.536882 47.59,119.35 C46.664723,120.010742 45.9856992,120.960671 45.66,122.05 C45.444544,122.882174 45.4828515,123.759765 45.77,124.57 C46.025118,125.253843 46.4953558,125.836377 47.11,126.23 L47.11,126.23 Z",
            id: "Path",
            fill: "#455A64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M122.08,73.34 C122.225261,73.2535194 122.379502,73.1831049 122.54,73.13 C122.726145,73.0440716 122.920455,72.9770682 123.12,72.93 C123.390396,72.8461492 123.668412,72.7892062 123.95,72.76 C125.837701,72.5556927 127.714543,73.230471 129.04,74.59 L129.04,74.59 C130.366584,76.3654756 130.924997,78.5991292 130.59,80.79 C130.190264,83.506529 128.712182,85.9471677 126.49,87.56 C123.956703,89.4030404 120.930778,90.4476634 117.8,90.56 C114.397169,90.6858458 110.994281,90.311865 107.7,89.45 C102.479455,88.1753411 97.5239052,85.992056 93.06,83 C91.1503594,81.6849001 89.1447287,80.5149489 87.06,79.5 C85.2325441,78.6586571 83.2671484,78.1571423 81.26,78.02 C78.3356328,77.8232002 75.408831,78.3666017 72.75,79.6 C71.7888762,80.0794936 70.8541969,80.6102579 69.95,81.19 C70.7696937,80.4809056 71.681235,79.8855446 72.66,79.42 C75.3312418,78.0925205 78.3017963,77.4825575 81.28,77.65 C83.3524237,77.7583778 85.3867973,78.2500181 87.28,79.1 C89.396323,80.1057668 91.4323057,81.2725287 93.37,82.59 C97.7837451,85.5455326 102.676053,87.7142527 107.83,89 C111.07237,89.8479363 114.420454,90.2218169 117.77,90.11 C120.809898,90.0089521 123.751141,89.006493 126.22,87.23 C128.366128,85.7006216 129.807488,83.3728248 130.22,80.77 C130.57308,78.6632991 130.068983,76.5028863 128.82,74.77 L128.82,74.77 C127.561613,73.4505708 125.778251,72.7643802 123.96,72.9 C123.32245,72.9955016 122.693714,73.1426525 122.08,73.34 Z",
            id: "Path",
            fill: "#455A64"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M116.78,64.53 C116.779001,65.3171806 116.619143,66.096063 116.31,66.82 C115.448709,68.8102145 113.945343,70.4544115 112.04,71.49 C110.753517,72.2409961 109.340088,72.7494237 107.87,72.99 C106.185774,73.2383745 104.474226,73.2383745 102.79,72.99 C99.22,72.55 95.53,71.14 91.65,69.93 C87.77,68.72 83.86,68 80.43,68.74 C77.3798209,69.4006292 74.6175405,71.0110842 72.54,73.34 C71.1172265,74.8884486 70.0280098,76.7128865 69.34,78.7 C68.88,80.12 68.79,80.95 68.7296953,80.9400893 C68.7269306,80.7383611 68.7470628,80.5370382 68.79,80.34 C68.8681984,79.7652805 68.9885224,79.1970839 69.15,78.64 C70.771236,73.44356 75.0265193,69.4965754 80.33,68.27 C83.89,67.48 87.91,68.21 91.8,69.43 C95.69,70.65 99.36,72.05 102.86,72.51 C104.5014,72.7482493 106.1686,72.7482493 107.81,72.51 C109.23586,72.2943807 110.61118,71.8235198 111.87,71.12 C113.733469,70.1466657 115.231558,68.5959504 116.14,66.7 C116.414078,65.995986 116.628173,65.2700699 116.78,64.53 L116.78,64.53 Z",
            id: "Path",
            fill: "#455A64"
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", {
          id: "Plant",
          transform: "translate(204.000000, 261.000000)",
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M12,0.51 C14.8446065,0.991526288 17.3713044,2.60861291 19,4.99 C20.5906273,7.36681298 21.6167732,10.0758384 22,12.91 C22.91,18.35 21.44,24.54 19.42,29.67 C13.87,27.07 10.91,20.6 9.62,17.22 C7.62,11.89 7.12,1 11.96,0.5",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M27.69,37.34 C25.9927932,34.5639213 25.9126584,31.0914145 27.48,28.24 C29.0814363,25.4358553 31.7454509,23.3954868 34.87,22.58 C36.2649097,22.0479074 37.8234304,22.1576624 39.13,22.88 C40.2308797,23.7570298 40.7704617,25.1614739 40.54,26.55 C40.2915286,27.9125614 39.6878698,29.1854189 38.79,30.24 C35.9,33.97 32.41,37.06 27.69,37.34",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M26.28,54.58 C26.1632691,54.2074215 26.0993141,53.8203256 26.09,53.43 C26.01,52.69 25.92,51.62 25.85,50.29 C25.5929323,46.8107656 25.8048305,43.3127624 26.48,39.89 C27.1882499,36.4287282 28.8230817,33.2247344 31.21,30.62 C31.943879,29.853888 32.770226,29.1820611 33.67,28.62 C33.9737851,28.3949518 34.3113006,28.2194438 34.67,28.1 C33.5369819,28.9615887 32.4736848,29.9112 31.49,30.94 C29.2677019,33.5526116 27.7375171,36.6817537 27.04,40.04 C26.3834936,43.4150022 26.1150834,46.8540087 26.24,50.29 C26.3406956,51.7178506 26.3540538,53.15052 26.28,54.58 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M13.33,8.77 C13.6131756,9.34250342 13.8473461,9.93796554 14.03,10.55 C14.44,11.71 15.03,13.39 15.7,15.49 C17.07,19.67 18.86,25.49 20.7,31.94 C22.54,38.39 24,44.28 25,48.56 C25.51,50.7 25.9,52.43 26.15,53.64 C26.3126848,54.2562689 26.4230764,54.8851667 26.48,55.52 C26.2385605,54.9272277 26.047876,54.3150298 25.91,53.69 L24.57,48.69 C23.45,44.44 21.88,38.58 20.06,32.12 C18.24,25.66 16.52,19.85 15.26,15.64 L13.78,10.64 C13.5772204,10.0305618 13.4266772,9.40497089 13.33,8.77 L13.33,8.77 Z",
            id: "Path",
            fill: "#263238"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M20.29,42.51 C17.4785396,36.2756516 11.8347059,31.7784543 5.13,30.43 C3.45,30.11 1.38,30.15 0.44,31.59 C-0.5,33.03 0.3,34.95 1.31,36.34 C5.7187831,42.1906136 13.2167148,44.8109435 20.31,42.98",
            id: "Path",
            fill: "#E8505B",
            className: "primary"
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", {
            d: "M7,35.27 C7.37338914,35.2521583 7.74737517,35.28922 8.11,35.38 C8.5393301,35.4390297 8.96378758,35.5292687 9.38,35.65 C9.94251012,35.784524 10.4967689,35.9514695 11.04,36.15 C12.4605434,36.6442469 13.8274911,37.2808157 15.12,38.05 C18.3035538,39.9468793 21.0015037,42.5592343 23,45.68 C23.7988399,46.9430475 24.4688659,48.2830996 25,49.68 C25.2147272,50.2156319 25.3983658,50.7632088 25.55,51.32 C25.6842226,51.735191 25.7878335,52.1596614 25.86,52.59 C25.9631585,52.9474356 26.0136892,53.3179942 26.0101883,53.69 C25.89,53.69 25.59,52.16 24.6,49.85 C24.0145018,48.5074468 23.3117814,47.219126 22.5,46 C20.4970198,42.9934407 17.8710093,40.4526903 14.8,38.55 C13.5484513,37.7680315 12.2299405,37.0987367 10.86,36.55 C8.52,35.65 7,35.39 7,35.27 Z",
            id: "Path",
            fill: "#263238"
          })]
        })]
      })
    })
  });
};
_c3 = TeamSvg;
var stdin_default10 = TeamSvg;
var _c3;
$RefreshReg$(_c3, "TeamSvg");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Glance.tsx
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_moment2 = __toESM(require_moment());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Glance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Glance.tsx"
  );
}
var Glance = ({
  user
}) => {
  _s();
  const [activity, setActivity] = (0, import_react.useState)([]);
  const [loading, setLoading] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      setLoading(true);
      try {
        const {
          data: {
            activity: activity2
          }
        } = await APIService.getInstance().fetchUserActivity();
        setActivity(activity2);
      } finally {
        setLoading(false);
      }
    })();
    sendCrispTags();
  }, []);
  const sendCrispTags = () => {
    window.$crisp.push(["set", "user:nickname", [user.first_name + " " + user.last_name]]);
    window.$crisp.push(["set", "user:email", [user == null ? void 0 : user.github_email]]);
    window.$crisp.push(["set", "user:phone", [user == null ? void 0 : user.contact_num]]);
    window.$crisp.push(["set", "user:avatar", [user == null ? void 0 : user.avatar_url]]);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: "kz-glance",
    children: [loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      className: "profile skeleton",
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
        circle: true,
        width: 48,
        height: 48
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h5", {
          children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
            width: 140
          }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
              circle: true,
              width: 16,
              height: 16
            })
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", {
          children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
            width: 80
          }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
            className: "primary",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
              circle: true,
              width: 16,
              height: 16
            })
          })]
        })]
      })]
    }), !loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      className: "profile",
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", {
        src: user == null ? void 0 : user.avatar_url,
        alt: "avatar"
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h5", {
          children: [user == null ? void 0 : user.first_name, " ", user == null ? void 0 : user.last_name, /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiCheckCircle, {})
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", {
          children: [user == null ? void 0 : user.email, /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
            className: "primary",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiBell, {})
          })]
        })]
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("hr", {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      className: "activity",
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", {
        children: "Recent activity"
      }), !user && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActivitySkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActivitySkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActivitySkeleton, {})]
      }), user && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: activity && activity.map((event) => {
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Activity, {
            event
          }, event.timestamp);
        })
      })]
    })]
  });
};
_s(Glance, "Sc6PPIKCYK8NQhvfsfyOVIqINl0=");
_c4 = Glance;
var ActivitySkeleton = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: "activity-tile skeleton",
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
      circle: true,
      width: 32,
      height: 32
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("time", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
          width: 80
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Skeleton, {
          count: 2
        })
      })]
    })]
  });
};
_c22 = ActivitySkeleton;
var Activity = ({
  event
}) => {
  const parseActivity = (event2) => {
    switch (event2.type) {
      case "login":
        return {
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiKey, {}),
          description: `You logged in from <span>${event2.device_ip}</span>.`
        };
      case "add_project":
        return {
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiFlag, {}),
          description: `You added <span>a new project</span>.`
        };
      case "update_project":
        return {
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiExtension, {}),
          description: `You updated <span>${event2.project_slug}</span>.`
        };
      case "delete_project":
        return {
          icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BiTrashAlt, {}),
          description: `You deleted <span>${event2.project_slug}</span>.`
        };
      default:
        return void 0;
    }
  };
  const activity = parseActivity(event);
  return activity ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
    className: "activity-tile",
    children: [activity.icon, /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
      children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)("time", {
        children: (0, import_moment2.default)(event.timestamp).fromNow(true)
      }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", {
        dangerouslySetInnerHTML: {
          __html: activity.description
        }
      })]
    })]
  }) : null;
};
_c32 = Activity;
var stdin_default11 = Glance;
var _c4;
var _c22;
var _c32;
$RefreshReg$(_c4, "Glance");
$RefreshReg$(_c22, "ActivitySkeleton");
$RefreshReg$(_c32, "Activity");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/shared/components/PrivateRoute.tsx
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\shared\\\\components\\\\PrivateRoute.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\shared\\components\\PrivateRoute.tsx"
  );
  import.meta.hot.lastModified = "1690992448339.5017";
}
var PrivateRoute = ({
  children,
  redirectTo,
  loading
}) => {
  _s2();
  const authStore = (0, import_react2.useContext)(stdin_default3);
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
  }, [loading, authStore.user]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
    children: loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(stdin_default4, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
      children: authStore.user ? authStore.user.gender ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
        children
      }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, {
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(stdin_default, {
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(stdin_default8, {})
        })
      }) : navigate(redirectTo)
    })
  });
};
_s2(PrivateRoute, "WySumNp2/10o4/F9neEdnQ2b8so=", false, function() {
  return [useNavigate];
});
_c5 = PrivateRoute;
var stdin_default12 = observer(PrivateRoute);
var _c5;
$RefreshReg$(_c5, "PrivateRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.tsx"
  );
}
var links6 = () => [...links(), ...links3(), ...links4(), ...links2(), {
  rel: "stylesheet",
  href: Dashboard_default
}];
var Dashboard = () => {
  _s3();
  const env = stdin_default2();
  const authStore = (0, import_react4.useContext)(stdin_default3);
  const history = useNavigate();
  const [loading, setLoading] = (0, import_react4.useState)(true);
  const [notifications, setNotifications] = (0, import_react4.useState)([]);
  const [projects, setProjects] = (0, import_react4.useState)([]);
  const endTime = parseInt(env.APPLICATION_DEADLINE);
  (0, import_react4.useEffect)(() => {
    setLoading(true);
    const userInfoPromise = APIService.getInstance().fetchUserInfo();
    const notificationsPromise = APIService.getInstance().fetchUserNotifications();
    const projectsPromise = APIService.getInstance().fetchApplications();
    Promise.all([userInfoPromise, notificationsPromise, projectsPromise]).then(function(values) {
      authStore.setUser(values[0].data.user);
      setNotifications(values[1].data.notifications);
      setProjects(values[2].data.applications);
    }).catch(() => {
      toast({
        title: "Stuff broke",
        message: "Geeky people on our team are working on it. Please check back soon.",
        theme: "error"
      });
    }).finally(() => setLoading(false));
  }, [authStore]);
  const toastRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    let curr = 0;
    let days = authStore.timeLeftDuration.days();
    let hours = authStore.timeLeftDuration.hours();
    let minutes = authStore.timeLeftDuration.minutes();
    let seconds = authStore.timeLeftDuration.seconds();
    if (isNaN(days) || days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      curr = endTime - Date.now();
      days = Math.floor(curr / 864e5);
      hours = new Date(curr).getHours();
      minutes = new Date(curr).getMinutes();
      seconds = new Date(curr).getSeconds();
    }
    toastRef.current = toast({
      title: "Heads up!",
      message: `Applications close in <span>${days < 0 ? 0 : days}d ${hours < 0 ? 0 : hours}h ${minutes < 0 ? 0 : minutes}m ${seconds < 0 ? 0 : seconds}s</span>.`,
      theme: "info",
      options: {
        closeButton: false
      }
    });
    setTimeout(() => {
      Q.dismiss(toastRef.current);
    }, 8e3);
  }, [authStore.timeLeftDuration]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(stdin_default12, {
    loading,
    redirectTo: "/start",
    children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
      className: "kz-dashboard",
      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default5, {}), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
        style: {
          overflowX: "hidden"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
          className: "main-wrapper",
          children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
            className: "main",
            children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h2", {
              children: ["Applications", " ", !loading && projects.length < 2 && authStore.timeLeft > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, {
                className: "new",
                to: "/applications/new",
                title: "Create a new application",
                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BiPlus, {})
              })]
            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                children: [loading && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
                  children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                    className: "tile",
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ApplicationTileSkeleton, {})
                  }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                    className: "tile",
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ApplicationTileSkeleton, {})
                  })]
                }), projects.length > 0 && projects.map((project, index) => {
                  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                    className: "tile",
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default6, {
                      application: project,
                      handleClick: () => {
                        history(`/applications/${project.domain}`);
                      }
                    })
                  }, index);
                })]
              })
            }), !loading && projects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
              className: "empty",
              children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default10, {}), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h3", {
                children: ["Be a part of the SRMKZILLA", " ", /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                  className: "strike",
                  children: "team"
                }), " ", /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
                  className: "primary",
                  children: "family."
                })]
              }), authStore.timeLeft > 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h5", {
                children: ["Create a", " ", /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, {
                  to: "/applications/new",
                  children: "new application"
                }), " to get started"]
              })]
            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", {
              className: "mt",
              children: "Notifications"
            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
              style: {
                overflowX: "hidden"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                className: "notif-row",
                children: [loading && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                  className: "kz-notifications",
                  style: {
                    overflowX: "hidden"
                  },
                  children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NotificationSkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NotificationSkeleton, {}), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NotificationSkeleton, {})]
                }), !loading && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                  className: "kz-notifications",
                  children: [notifications.map((notification) => {
                    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default9, {
                      notification
                    }, notification.timestamp);
                  }), !loading && (!notifications || notifications.length === 0) && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                    className: "empty",
                    children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", {
                      src: Assets.MAIL,
                      alt: "mail"
                    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", {
                      children: "The mailman did not have anything for you."
                    })]
                  })]
                }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                  className: "banner",
                  children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                    className: "kz-timer",
                    children: authStore.timeLeft <= 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                      className: "kz-times-up",
                      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", {
                        children: "Your time is Up!!"
                      })
                    }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                      className: "timer-inner",
                      children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("h4", {
                        children: ["The clock is ticking ", /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BiAlarm, {})]
                      }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
                        className: "timer",
                        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_compound_timer.default, {
                          initialTime: endTime - Date.now(),
                          direction: "backward",
                          children: () => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react4.Fragment, {
                            children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                              children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", {
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_compound_timer.default.Days, {})
                              }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", {
                                children: "days"
                              })]
                            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                              children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", {
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_compound_timer.default.Hours, {})
                              }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", {
                                children: "hours"
                              })]
                            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                              children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", {
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_compound_timer.default.Minutes, {})
                              }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", {
                                children: "minutes"
                              })]
                            }), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", {
                              children: [/* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h5", {
                                children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_compound_timer.default.Seconds, {})
                              }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("small", {
                                children: "seconds"
                              })]
                            })]
                          })
                        })
                      })]
                    })
                  }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("figure", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", {
                      src: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Screenshot+from+2021-09-14+17-35-58.png",
                      alt: "banner"
                    })
                  })]
                })]
              })
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
            className: "glance",
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default11, {
              user: authStore.user
            })
          })]
        })
      })]
    }), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(stdin_default7, {})]
  });
};
_s3(Dashboard, "JYcQqPq+FsH7q1j58zR+CER+ZHI=", false, function() {
  return [useNavigate];
});
_c6 = Dashboard;
var stdin_default13 = observer(Dashboard);
var _c6;
$RefreshReg$(_c6, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  stdin_default13 as default,
  links6 as links
};
//# sourceMappingURL=/build/routes/dashboard-2TGLDFWO.js.map
