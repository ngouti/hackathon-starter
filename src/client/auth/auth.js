"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthInstance = exports.Auth = void 0;

var _auth = _interopRequireDefault(require("./auth0"));

var _useStore = require("@kwhitley/use-store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_useStore.globalStore.set('user', {
  isLoggedIn: false,
  profile: undefined,
  error: undefined
}, {
  persist: true
}); // check and alert devs of missing (required) .env variables


if (!process.env.CLIENT_AUTH0_DOMAIN) console.error('[Authentication]', 'please add CLIENT_AUTH0_DOMAIN to your .env file or environment variables');
if (!process.env.CLIENT_AUTH0_CLIENT_ID) console.error('[Authentication]', 'please add CLIENT_AUTH0_CLIENT_ID to your .env file or environment variables');
if (!process.env.CLIENT_AUTH0_AUDIENCE) console.error('[Authentication]', 'please add CLIENT_AUTH0_AUDIENCE to your .env file or environment variables');

var Auth =
/*#__PURE__*/
function () {
  //need to figure out best way to pass domain/clientID/redirectURI as this will be pre-compiled in the docker image
  //also, the audience is essential for getting back the right auth token
  function Auth() {
    _classCallCheck(this, Auth);

    _defineProperty(this, "accessToken", void 0);

    _defineProperty(this, "idToken", void 0);

    _defineProperty(this, "expiresAt", void 0);

    _defineProperty(this, "isLoggedIn", void 0);

    _defineProperty(this, "auth0", new _auth.default.WebAuth({
      domain: process.env.CLIENT_AUTH0_DOMAIN,
      //'arundo-develop.auth0.com', // ENV
      clientID: process.env.CLIENT_AUTH0_CLIENT_ID,
      //'zSWL2GxGu4ONSGRvyxbkqiLNU7MAYdYE', // ENV
      // audience: process.env.CLIENT_AUTH0_AUDIENCE,
      //'https://develop.arundo.com', // ENV
      redirectUri: process.env.CLIENT_AUTH0_CALLBACK || location.origin,
      responseType: 'token id_token',
      scope: 'openid email profile'
    }));

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.scheduleLogout = this.scheduleLogout.bind(this);
  }

  _createClass(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      var hash = location.hash;
      return new Promise(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve(_this);
          } else if (err) {
            // console.warn(err)
            reject(err);
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(_ref) {
      var expiresIn = _ref.expiresIn,
          idToken = _ref.idToken,
          accessToken = _ref.accessToken,
          idTokenPayload = _ref.idTokenPayload,
          whatever = _objectWithoutProperties(_ref, ["expiresIn", "idToken", "accessToken", "idTokenPayload"]);

      // Set the time that the access token will expire at
      var expiresAt = expiresIn * 1000 + new Date().getTime();
      this.accessToken = accessToken;
      this.idToken = idToken;
      this.expiresAt = expiresAt;
      this.isLoggedIn = true;
      this.profile = idTokenPayload || {};
      this.profile.initials = idTokenPayload.name.replace(/(\b[\w])[^\s]* ?/gi, '$1');
      this.profile.accessToken = accessToken;
      this.profile.expiresAt = expiresAt;
      this.scheduleLogout();
    }
  }, {
    key: "renewSession",
    value: function renewSession() {
      var _this2 = this;

      this.auth0.checkSession({}, function (err, authResult) {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this2.setSession(authResult);
        } else if (err) {
          _this2.logout();

          console.log(err);
          alert("Could not get a new token (".concat(err.error, ": ").concat(err.error_description, ")."));
        }
      });
    }
  }, {
    key: "scheduleLogout",
    value: function scheduleLogout() {
      var _this3 = this;

      var expiresAt = this.expiresAt;
      var timeout = expiresAt - Date.now();

      if (timeout > 0) {
        this.tokenRenewalTimeout = setTimeout(function () {
          _this3.logout();
        }, timeout);
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        // Remove tokens and expiry time
        _this4.accessToken = null;
        _this4.idToken = null;
        _this4.expiresAt = 0;
        _this4.isLoggedIn = false; // Remove isLoggedIn flag from localStorage

        _useStore.globalStore.clear('user');

        resolve();
      });
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      // Check whether the current time is past the
      // access token's expiry time
      var expiresAt = this.expiresAt;
      return this.isLoggedIn && new Date().getTime() < expiresAt;
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }]);

  return Auth;
}();

exports.Auth = Auth;
var AuthInstance = new Auth();
exports.AuthInstance = AuthInstance;
