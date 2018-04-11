/*! vhp v0.0.5 (https://github.com/zhaomenghuan/vue-html5plus) */ ! function(e) {
	function t(r) { if(n[r]) return n[r].exports; var o = n[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) { e.exports = n(18) }, function(e, t, n) { "use strict";

	function r(e) { if(e && e.__esModule) return e; var t = {}; if(null != e)
			for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }

	function o(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

	function i(e, t) { return new N(e, t) } Object.defineProperty(t, "__esModule", { value: !0 }); var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		s = function() {
			function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
		a = n(2),
		c = r(a),
		l = n(3),
		f = r(l),
		p = n(4),
		d = r(p),
		h = n(5),
		y = r(h),
		v = n(6),
		m = r(v),
		b = n(7),
		_ = r(b),
		g = n(8),
		w = n(9),
		S = n(10),
		O = n(14),
		k = n(15),
		j = n(16),
		C = n(17),
		T = /<(.+?)>/g,
		x = /^#([\w-]+)$/,
		A = /^\.([\w-]+)$/,
		E = /^[\w-]+$/,
		P = function(e, t) { var t = t || document; return Array.prototype.slice.call(A.test(e) ? t.getElementsByClassName(RegExp.$1) : E.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e)) },
		N = function() {
			function e(t, n) { if(o(this, e), n = n || document, !t) return this; if("string" == typeof t) { if(T.test(t)) { var r = T.exec(t);
						this._els = [document.createElement(r[1])] } if(x.test(t)) { var i = document.getElementById(RegExp.$1);
						this._els = i ? [i] : [] } this._els = P(t, n) } else "object" === ("undefined" == typeof t ? "undefined" : u(t)) && (c.isArrayLike(t) ? this._els = [].slice.call(t) : this._els = [t]); return this.$el = this._els[0], this } return s(e, [{ key: "empty", value: function() { for(var e in this._els) this._els.hasOwnProperty(e) && (this._els[e].innerHTML = ""); return this } }, { key: "html", value: function(e) { if("undefined" != typeof e) { for(var t in this._els) this._els.hasOwnProperty(t) && (this._els[t].innerHTML = e); return this } return this.$el.innerHTML } }, { key: "text", value: function(e) { if("undefined" != typeof e) { for(var t in this._els) this._els.hasOwnProperty(t) && (this._els[t].textContent = e); return this } return this.$el.textContent } }, { key: "val", value: function(e) { return "undefined" != typeof e ? (this.$el.value = e, this) : this.value } }, { key: "attr", value: function e(t, n) { for(var r in this._els) { var o = this._els[r]; if("undefined" != typeof n) o.setAttribute(t, n);
						else { if("string" == typeof t) return o.getAttribute(t); if("object" === ("undefined" == typeof t ? "undefined" : u(t)))
								for(var e in t) o.setAttribute(e, t[e]) } } return this } }, { key: "prepend", value: function(e) { for(var t in this._els) this._els[t].insertAdjacentHTML("afterbegin", e); return this } }, { key: "append", value: function(e) { for(var t in this._els) this._els[t].insertAdjacentHTML("beforeend", e); return this } }, { key: "before", value: function(e) { for(var t in this._els) this._els[t].insertAdjacentHTML("beforebegin", e); return this } }, { key: "after", value: function(e) { for(var t in this._els) this._els[t].insertAdjacentHTML("afterend", e); return this } }, { key: "remove", value: function() { for(var e in this._els) { var t = this._els[e];
						t.parentNode.removeChild(t) } return this } }, { key: "hasClass", value: function(e) { return this.$el.classList.contains(e) } }, { key: "addClass", value: function(e) { var t = this,
						n = function() { var n = t._els[r];
							e.split(" ").forEach(function(e) { this.hasClass(e) || n.classList.add(e) }) }; for(var r in this._els) n(); return this } }, { key: "removeClass", value: function(e) { var t = this,
						n = function() { var n = t._els[r];
							e.split(" ").forEach(function(e) { this.hasClass(e) && n.classList.remove(e) }) }; for(var r in this._els) n(); return this } }, { key: "toggleClass", value: function(e) { var t = this,
						n = function() { var n = t._els[r];
							e.split(" ").forEach(function(e) { n.classList.toggle(e) }) }; for(var r in this._els) n(); return this } }, { key: "css", value: function(e, t) { for(var n in this._els) { var r = this._els[n]; if("undefined" != typeof t) "function" == typeof t ? r.style[e] = t() : r.style[e] = t;
						else { if("string" == typeof e) return getComputedStyle(r, null)[e]; if("object" === ("undefined" == typeof e ? "undefined" : u(e)))
								for(var o in e) r.style[o] = e[o] } } return this } }, { key: "show", value: function() { return this.css("display", "block"), this } }, { key: "hide", value: function() { return this.css("display", "none"), this } }, { key: "find", value: function(t) { return new e(t, this.$el) } }, { key: "first", value: function() { return new e(this.$el) } }, { key: "last", value: function() { return new e(this._els[this._els.length - 1]) } }, { key: "next", value: function() { return new e(this.$el.nextElementSibling) } }, { key: "prev", value: function() { return new e(this.$el.previousElementSibling) } }, { key: "eq", value: function(t) { return new e(this._els[t]) } }, { key: "parent", value: function() { return new e(this.$el.parentNode) } }]), e }();
	i.fn = N.prototype, i.os = g.os, i.url = m, i.extend = c.extend, i.domReady = f.domReady, i.plusReady = f.plusReady, i.getCurrentPosition = y.getCurrentPosition, i.currentWebview = _.currentWebview, i.openView = _.openView, i.back = _.back, i.storage = w.storage, i.get = S.get, i.post = S.post, i.getJSON = S.getJSON, i.getCurrentNetworkType = d.getCurrentNetworkType, i.listenNetWork = d.listenNetWork, i.global = O.global, i.getOAuth = k.getOAuth, i.sendShare = j.sendShare, i.getGallery = C.getGallery, "undefined" != typeof window && (window.vhp = i), t.default = i }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		r = {},
		o = function(e) { return s(r) && ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"].forEach(function(e) { r["[object " + e + "]"] = e.toLowerCase() }), null == e ? String(e) : r[{}.toString.call(e)] || "object" },
		i = function(e) { return null != e && e === e.window },
		u = function(e) { return "object" === o(e) },
		s = function(e) { for(var t in e) return !1; return !0 },
		a = function(e) { return u(e) && !i(e) && Object.getPrototypeOf(e) === Object.prototype },
		c = function(e) { return "function" === o(e) },
		l = Array.isArray || function(e) { return e instanceof Array },
		f = function(e) { var t = !!e && "length" in e && e.length,
				n = o(e); return "function" !== n && !i(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e) },
		p = function() { var e, t, r, o, i, u, s = arguments[0] || {},
				a = 1,
				c = arguments.length,
				l = !1; for("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" === ("undefined" == typeof s ? "undefined" : n(s)) || $.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
				if(null != (e = arguments[a]))
					for(t in e) r = s[t], o = e[t], s !== o && (l && o && ($.isPlainObject(o) || (i = $.isArray(o))) ? (i ? (i = !1, u = r && $.isArray(r) ? r : []) : u = r && $.isPlainObject(r) ? r : {}, s[t] = $.extend(l, u, o)) : void 0 !== o && (s[t] = o)); return s };
	t.isWindow = i, t.isObject = u, t.isEmptyObject = s, t.isPlainObject = a, t.isFunction = c, t.isArray = l, t.isArrayLike = f, t.extend = p }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = function(e) { var t = /complete|loaded|interactive/; return t.test(document.readyState) ? setTimeout(e, 0) : document.addEventListener("DOMContentLoaded", e), this },
		r = function(e) { return window.plus ? e() : document.addEventListener("plusready", e, !1), this };
	t.domReady = n, t.plusReady = r }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = function() { var e = {}; return e[plus.networkinfo.CONNECTION_UNKNOW] = "UNKNOW", e[plus.networkinfo.CONNECTION_NONE] = "NONE", e[plus.networkinfo.CONNECTION_ETHERNET] = "ETHERNET", e[plus.networkinfo.CONNECTION_WIFI] = "WIFI", e[plus.networkinfo.CONNECTION_CELL2G] = "2G", e[plus.networkinfo.CONNECTION_CELL3G] = "3G", e[plus.networkinfo.CONNECTION_CELL4G] = "4G", e[plus.networkinfo.getCurrentType()] },
		r = function(e, t) { document.addEventListener("netchange", function() { return e.call(t, n()) }, !1) };
	t.getCurrentNetworkType = n, t.listenNetWork = r }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = function(e, t) { var n = null;
		plus.geolocation.getCurrentPosition(function(r) { n = { type: "success", message: r }, t ? e.call(t, n) : e(n) }, function(r) { n = { type: "error", message: r }, t ? e.call(t, n) : e(n) }) };
	t.getCurrentPosition = n }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		r = function(e) { var t = /\+/g; return _decodeURIComponent(e.replace(t, " ")) },
		o = function(e, t) { var n = []; for(var r in t) n.push(r + "=" + encodeURIComponent(t[r])); return e + (e.indexOf("?") > -1 ? "&" : "?") + n.join("&") },
		i = function(e, t) { var r = ["hash", "host", "hostname", "href", "origin", "pathname", "port", "protocol", "search"],
				o = document.createElement("a");
			o.href = e; for(var i = {}, s = 0, a = r.length; s < a; s++) { var c = r[s];
				i[c] = o[c] } return t && ("undefined" == typeof t ? "undefined" : n(t)) && (i.search = u(i.search)), i },
		u = function(e) { var t = /([^&=]+)=?([^&]*)/g,
				n = {}; if(e = e && (0 === e.indexOf("?") ? e.replace("?", "") : e))
				for(var o; o = t.exec(e);) n[r(o[1])] = r(o[2]); return n },
		s = function(e, t) { var n = u(t || location.search); return n.hasOwnProperty(e) ? n[e] : "" };
	t.convertUrl = o, t.urlParse = i, t.parseParams = u, t.getUrlParam = s }, function(e, t, n) { "use strict";

	function r(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }), t.openView = t.back = t.currentWebview = void 0; var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		i = function() {
			function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
		u = n(8),
		s = (n(3), n(6), function() {
			function e(t, n, o) { r(this, e); var i = o.styles || { top: "0px", left: "0px", height: "100%", width: "100%" },
					u = plus.webview.getWebviewById(n); return u ? u : (this.webview = plus.webview.create(t, n, i, o.extras), this.view = new plus.nativeObj.View("_VHP_VIEW"), this.bitmap = new plus.nativeObj.Bitmap("_VHP_DRAWBITMAP"), this.webview) } return i(e, [{ key: "show", value: function(e, t, n, r) { var e = e || "pop-in",
						t = t || 200,
						o = this.webview,
						i = this.view,
						u = this.bitmap;
					o.draw(u, function() { console.log("截屏绘制图片成功"), i.drawBitmap(u), i.show(), console.log(JSON.stringify(i)), plus.nativeObj.View.startAnimation({ type: e, duration: t }, i, { bitmap: u }, function() { console.log("动画结束"), o.show("pop-in", 0, function() { console.log("show"), plus.nativeObj.View.clearAnimation(), i.clear() }) }) }, function(e) { console.log("截屏绘制图片失败：" + JSON.stringify(e)) }) } }]), e }()),
		a = function() { return plus.webview.currentWebview() },
		c = null,
		l = function() { var e = a(),
				t = e.parent(),
				n = e.children(); if(t) t.evalJS("vhp&&vhp.back();");
			else if(e.id === plus.runtime.appid) c ? (new Date).getTime() - c < 1e3 && plus.runtime.quit() : (c = (new Date).getTime(), plus.nativeUI.toast("再按一次退出应用"), setTimeout(function() { c = null }, 1e3));
			else if(n)
				for(var r in n) n[r].browser === !0 && n[r].canBack(function(t) { t.canBack ? n[r].back() : e.close() });
			else e.canBack(function(t) { t.canBack ? e.back() : e.close() }) },
		f = function(e) { var t = !0; "function" == typeof e && (t = e(), void 0 === t && (t = !0)), t && l() },
		p = function(e) { var t = document.querySelector(".mui-action-back");
			t && t.addEventListener("click", function() { f(e) }), window.plus && plus.key.addEventListener("backbutton", function() { f(e) }) },
		d = function(e, t, n) { if("object" === ("undefined" == typeof e ? "undefined" : o(e)) ? (n = e, e = n.url, t = n.id || e) : "object" === ("undefined" == typeof t ? "undefined" : o(t)) ? (n = t, t = e) : t = t || e, !u.os.plus) return void(u.os.ios || u.os.android ? window.top.location.href = e : window.parent.location.href = e); var r = new s(e, t, n);
			r.addEventListener("titleUpdate", function() { r.show() }), r.addEventListener("loaded", function() { r.show() }) };
	t.currentWebview = a, t.back = p, t.openView = d }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = { plus: !1, stream: !1, wechat: !1, android: !1, iphone: !1, ipad: !1, version: "" },
		r = navigator.userAgent,
		o = r.match(/Html5Plus/i),
		i = r.match(/Html5Plus/i),
		u = r.match(/(MicroMessenger)\/([\d\.]+)/i),
		s = r.match(/(Android);?[\s\/]+([\d.]+)?/),
		a = r.match(/(iPhone\sOS)\s([\d_]+)/),
		c = r.match(/(iPad).*OS\s([\d_]+)/);
	o && (n.plus = !0), i && (n.stream = !0), u && (n.wechat = !0), s && (n.android = !0, n.version = s[2], n.isBadAndroid = !/Chrome\/\d/.test(window.navigator.appVersion)), a && (n.ios = n.iphone = !0, n.version = a[2].replace(/_/g, ".")), c && (n.ios = n.ipad = !0, n.version = c[2].replace(/_/g, ".")), t.os = n }, function(e, t, n) { "use strict";

	function r(e) { if(e && e.__esModule) return e; var t = {}; if(null != e)
			for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t } Object.defineProperty(t, "__esModule", { value: !0 }), t.storage = void 0; var o = n(8),
		i = n(3),
		u = r(i),
		s = {};
	u.plusReady(function() { var e = o.os.plus ? plus.storage : localStorage;
		s.isEmpty = function(t) { var n = e.getItem(t); return null === n }, s.set = function(t, n) { e.setItem(t, JSON.stringify(n)) }, s.get = function(t, n) { var r = e.getItem(t); return n = n || "json", r && "json" === n ? JSON.parse(r) : r }, s.remove = function(t) { e.removeItem(t) }, s.clear = function() { e.clear() } }), t.storage = s }, function(e, t, n) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }), t.getJSON = t.post = t.get = t.request = t.appendQuery = t.serializeData = void 0; var r = n(8);
	n(11).polyfill(); var o = "application/json",
		i = "text/html",
		u = /^(?:text|application)\/javascript/i,
		s = /^(?:text|application)\/xml/i,
		a = /^\s*$/,
		c = { method: "GET", accepts: { script: "text/javascript, application/javascript, application/x-javascript", json: "application/json", xml: "application/xml, text/xml", html: "text/html", text: "text/plain" } },
		l = function(e) { var t = []; if(e)
				for(var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n])); return t.length ? t.join("&") : "" },
		f = function(e, t) { return "string" != typeof t && (t = l(t)), (e + "&" + t).replace(/[&?]{1,2}/, "?") },
		p = function(e) { return e && (e = e.split(";", 2)[0]), e && (e === i ? "html" : e === o ? "json" : u.test(e) ? "script" : s.test(e) && "xml") || "text" },
		d = function(e, t) { var n;
			n = r.os.plus ? new plus.net.XMLHttpRequest : new window.XMLHttpRequest; var t = t || {},
				o = t.method || c.method,
				i = t.data || {},
				u = t.dataType; return new Promise(function(r, s) { var d = l(i);
				d && "GET" === o.toUpperCase() && (e = f(e, d)); var h = c.accepts[u && u.toLowerCase()];
				n.overrideMimeType && n.overrideMimeType(h); var y = {},
					v = function(e, t) { y[e.toLowerCase()] = [e, t] }; if(d && "POST" === o.toUpperCase() && v("Content-Type", "application/x-www-form-urlencoded"), v("Accept", h || "*/*"), t.headers)
					for(var m in t.headers) v(m, t.headers[m]);
				n.setRequestHeader = v, n.onload = function() { var e, t = { status: n.status, statusText: n.statusText },
						o = !1; if(200 == n.status) { var i = p(h || n.getResponseHeader("content-type"));
						e = n.responseText; try { "script" === i ? (0, eval)(e) : "xml" === i ? e = n.responseXML : "json" === i && (e = a.test(e) ? null : JSON.parse(e)) } catch(e) { o = e } o ? s(o) : (t.body = e, r(t)) } else s(t) }, n.onerror = function() { s({ status: n.status, statusText: n.statusText }) }, n.open(o, e), n.send("POST" === o && d) }) },
		h = function(e, t) { return d(e, t) },
		y = function(e, t) { var t = t || {}; return t.method = "POST", d(e, t) },
		v = function(e, t) { var t = t || {}; return t.method = "GET", t.dataType = "json", d(e, t) };
	t.serializeData = l, t.appendQuery = f, t.request = d, t.get = h, t.post = y, t.getJSON = v }, function(e, t, n) {
	var r, o;
	(function(i, u) {
		"use strict";
		var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
		/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.0.5
		 */
		! function(i, u) { "object" === s(t) && "undefined" != typeof e ? e.exports = u() : (r = u, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))) }(void 0, function() {
			function e(e) { return "function" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : s(e)) && null !== e }

			function t(e) { return "function" == typeof e }

			function r(e) { K = e }

			function o(e) { Y = e }

			function a() { return function() { return i.nextTick(d) } }

			function c() { return "undefined" != typeof X ? function() { X(d) } : p() }

			function l() { var e = 0,
					t = new ee(d),
					n = document.createTextNode(""); return t.observe(n, { characterData: !0 }),
					function() { n.data = e = ++e % 2 } }

			function f() { var e = new MessageChannel; return e.port1.onmessage = d,
					function() { return e.port2.postMessage(0) } }

			function p() { var e = setTimeout; return function() { return e(d, 1) } }

			function d() { for(var e = 0; e < z; e += 2) { var t = re[e],
						n = re[e + 1];
					t(n), re[e] = void 0, re[e + 1] = void 0 } z = 0 }

			function h() { try { var e = n(13); return X = e.runOnLoop || e.runOnContext, c() } catch(e) { return p() } }

			function y(e, t) { var n = arguments,
					r = this,
					o = new this.constructor(m);
				void 0 === o[ie] && I(o); var i = r._state; return i ? ! function() { var e = n[i - 1];
					Y(function() { return L(i, o, e, r._result) }) }() : A(r, o, e, t), o }

			function v(e) { var t = this; if(e && "object" === ("undefined" == typeof e ? "undefined" : s(e)) && e.constructor === t) return e; var n = new t(m); return j(n, e), n }

			function m() {}

			function b() { return new TypeError("You cannot resolve a promise with itself") }

			function _() { return new TypeError("A promises callback cannot return that same promise.") }

			function g(e) { try { return e.then } catch(e) { return ce.error = e, ce } }

			function w(e, t, n, r) { try { e.call(t, n, r) } catch(e) { return e } }

			function S(e, t, n) { Y(function(e) { var r = !1,
						o = w(n, t, function(n) { r || (r = !0, t !== n ? j(e, n) : T(e, n)) }, function(t) { r || (r = !0, x(e, t)) }, "Settle: " + (e._label || " unknown promise"));!r && o && (r = !0, x(e, o)) }, e) }

			function O(e, t) { t._state === se ? T(e, t._result) : t._state === ae ? x(e, t._result) : A(t, void 0, function(t) { return j(e, t) }, function(t) { return x(e, t) }) }

			function k(e, n, r) { n.constructor === e.constructor && r === y && n.constructor.resolve === v ? O(e, n) : r === ce ? x(e, ce.error) : void 0 === r ? T(e, n) : t(r) ? S(e, n, r) : T(e, n) }

			function j(t, n) { t === n ? x(t, b()) : e(n) ? k(t, n, g(n)) : T(t, n) }

			function C(e) { e._onerror && e._onerror(e._result), E(e) }

			function T(e, t) { e._state === ue && (e._result = t, e._state = se, 0 !== e._subscribers.length && Y(E, e)) }

			function x(e, t) { e._state === ue && (e._state = ae, e._result = t, Y(C, e)) }

			function A(e, t, n, r) { var o = e._subscribers,
					i = o.length;
				e._onerror = null, o[i] = t, o[i + se] = n, o[i + ae] = r, 0 === i && e._state && Y(E, e) }

			function E(e) { var t = e._subscribers,
					n = e._state; if(0 !== t.length) { for(var r = void 0, o = void 0, i = e._result, u = 0; u < t.length; u += 3) r = t[u], o = t[u + n], r ? L(n, r, o, i) : o(i);
					e._subscribers.length = 0 } }

			function P() { this.error = null }

			function N(e, t) { try { return e(t) } catch(e) { return le.error = e, le } }

			function L(e, n, r, o) { var i = t(r),
					u = void 0,
					s = void 0,
					a = void 0,
					c = void 0; if(i) { if(u = N(r, o), u === le ? (c = !0, s = u.error, u = null) : a = !0, n === u) return void x(n, _()) } else u = o, a = !0;
				n._state !== ue || (i && a ? j(n, u) : c ? x(n, s) : e === se ? T(n, u) : e === ae && x(n, u)) }

			function M(e, t) { try { t(function(t) { j(e, t) }, function(t) { x(e, t) }) } catch(t) { x(e, t) } }

			function R() { return fe++ }

			function I(e) { e[ie] = fe++, e._state = void 0, e._result = void 0, e._subscribers = [] }

			function B(e, t) { this._instanceConstructor = e, this.promise = new e(m), this.promise[ie] || I(this.promise), D(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? T(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && T(this.promise, this._result))) : x(this.promise, H()) }

			function H() { return new Error("Array Methods must be provided an Array") }

			function W(e) { return new B(this, e).promise }

			function $(e) { var t = this; return new t(D(e) ? function(n, r) { for(var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r) } : function(e, t) { return t(new TypeError("You must pass an array to race.")) }) }

			function U(e) { var t = this,
					n = new t(m); return x(n, e), n }

			function V() { throw new TypeError("You must pass a resolver function as the first argument to the promise constructor") }

			function G() { throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.") }

			function J(e) { this[ie] = R(), this._result = this._state = void 0, this._subscribers = [], m !== e && ("function" != typeof e && V(), this instanceof J ? M(this, e) : G()) }

			function q() { var e = void 0; if("undefined" != typeof u) e = u;
				else if("undefined" != typeof self) e = self;
				else try { e = Function("return this")() } catch(e) { throw new Error("polyfill failed because global object is unavailable in this environment") }
				var t = e.Promise; if(t) { var n = null; try { n = Object.prototype.toString.call(t.resolve()) } catch(e) {} if("[object Promise]" === n && !t.cast) return } e.Promise = J } var F = void 0;
			F = Array.isArray ? Array.isArray : function(e) { return "[object Array]" === Object.prototype.toString.call(e) }; var D = F,
				z = 0,
				X = void 0,
				K = void 0,
				Y = function(e, t) { re[z] = e, re[z + 1] = t, z += 2, 2 === z && (K ? K(d) : oe()) },
				Q = "undefined" != typeof window ? window : void 0,
				Z = Q || {},
				ee = Z.MutationObserver || Z.WebKitMutationObserver,
				te = "undefined" == typeof self && "undefined" != typeof i && "[object process]" === {}.toString.call(i),
				ne = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
				re = new Array(1e3),
				oe = void 0;
			oe = te ? a() : ee ? l() : ne ? f() : void 0 === Q ? h() : p(); var ie = Math.random().toString(36).substring(16),
				ue = void 0,
				se = 1,
				ae = 2,
				ce = new P,
				le = new P,
				fe = 0; return B.prototype._enumerate = function() { for(var e = this.length, t = this._input, n = 0; this._state === ue && n < e; n++) this._eachEntry(t[n], n) }, B.prototype._eachEntry = function(e, t) { var n = this._instanceConstructor,
					r = n.resolve; if(r === v) { var o = g(e); if(o === y && e._state !== ue) this._settledAt(e._state, t, e._result);
					else if("function" != typeof o) this._remaining--, this._result[t] = e;
					else if(n === J) { var i = new n(m);
						k(i, e, o), this._willSettleAt(i, t) } else this._willSettleAt(new n(function(t) { return t(e) }), t) } else this._willSettleAt(r(e), t) }, B.prototype._settledAt = function(e, t, n) { var r = this.promise;
				r._state === ue && (this._remaining--, e === ae ? x(r, n) : this._result[t] = n), 0 === this._remaining && T(r, this._result) }, B.prototype._willSettleAt = function(e, t) { var n = this;
				A(e, void 0, function(e) { return n._settledAt(se, t, e) }, function(e) { return n._settledAt(ae, t, e) }) }, J.all = W, J.race = $, J.resolve = v, J.reject = U, J._setScheduler = r, J._setAsap = o, J._asap = Y, J.prototype = { constructor: J, then: y, catch: function(e) { return this.then(null, e) } }, J.polyfill = q, J.Promise = J, J })
	}).call(t, n(12), function() { return this }())
}, function(e, t) { "use strict";

	function n() { throw new Error("setTimeout has not been defined") }

	function r() { throw new Error("clearTimeout has not been defined") }

	function o(e) { if(l === setTimeout) return setTimeout(e, 0); if((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0); try { return l(e, 0) } catch(t) { try { return l.call(null, e, 0) } catch(t) { return l.call(this, e, 0) } } }

	function i(e) { if(f === clearTimeout) return clearTimeout(e); if((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e); try { return f(e) } catch(t) { try { return f.call(null, e) } catch(t) { return f.call(this, e) } } }

	function u() { y && d && (y = !1, d.length ? h = d.concat(h) : v = -1, h.length && s()) }

	function s() { if(!y) { var e = o(u);
			y = !0; for(var t = h.length; t;) { for(d = h, h = []; ++v < t;) d && d[v].run();
				v = -1, t = h.length } d = null, y = !1, i(e) } }

	function a(e, t) { this.fun = e, this.array = t }

	function c() {} var l, f, p = e.exports = {};! function() { try { l = "function" == typeof setTimeout ? setTimeout : n } catch(e) { l = n } try { f = "function" == typeof clearTimeout ? clearTimeout : r } catch(e) { f = r } }(); var d, h = [],
		y = !1,
		v = -1;
	p.nextTick = function(e) { var t = new Array(arguments.length - 1); if(arguments.length > 1)
			for(var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
		h.push(new a(e, t)), 1 !== h.length || y || o(s) }, a.prototype.run = function() { this.fun.apply(null, this.array) }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function(e) { throw new Error("process.binding is not supported") }, p.cwd = function() { return "/" }, p.chdir = function(e) { throw new Error("process.chdir is not supported") }, p.umask = function() { return 0 } }, function(e, t) {}, function(module, exports) { "use strict";

	function _classCallCheck(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

	function serialize(e) { var t = "_" + Object.prototype.toString.call(e).slice(8, -1).toLowerCase(); return function(e, n) { var r = { _string: function(e) { return e }, _number: function(e) { return e }, _boolean: function(e) { return e ? "true" : "false" }, _undefined: function(e) { return "undefined" }, _object: function(e) { return JSON.stringify(e) }, _function: function(e) { return e.toString() }, _array: function(e) { return JSON.stringify(e) }, _date: function(e) { return e.getTime() }, _regexp: function(e) { return e.toString().replace(/[(^\/)|($\/)]/g, "") }, _null: function(e) { return "null" } }; return { type: t, value: r[n](e) } }(e, t) }

	function deserialize(op) { var cs = { _string: function(e) { return e }, _number: function(e) { return +e }, _boolean: function(e) { return "true" === e }, _undefined: function(e) {}, _object: function(e) { return JSON.parse(e) }, _function: function _function(val) { return eval("(" + val + ")") }, _array: function(e) { return JSON.parse(e) }, _date: function(e) { return new Date(e) }, _regexp: function(e) { return new RegExp(e) }, _null: function(e) { return null } }; return cs[op.type](op.value) } Object.defineProperty(exports, "__esModule", { value: !0 }); var _createClass = function() {
			function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
		GlobalVar = function() {
			function e(t, n) { _classCallCheck(this, e), this._name = t, this.create(), this._setval(n || this._getvar()) } return _createClass(e, [{ key: "create", value: function() { Object.defineProperty(this, "value", { get: function() { var e = window.localStorage.getItem("_VHP_GOLBAL_" + this._name + "_") || '{"type":"_null"}'; return deserialize(JSON.parse(e)) }, set: function(e) { var t = serialize(e);
							t = JSON.stringify(t), window.localStorage.setItem("_VHP_GOLBAL_" + this._name + "_", t) } }) } }, { key: "init", value: function() { var e = this; return function(t) { return t ? void e._setval(t) : e._getvar() } } }, { key: "clear", value: function() { window.localStorage.removeItem("_VHP_GOLBAL_" + this._name + "_") } }, { key: "_getvar", value: function() { return this.value } }, { key: "_setval", value: function(e) { this.value = e } }]), e }(),
		global = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new(Function.prototype.bind.apply(GlobalVar, [null].concat(t))) };
	exports.global = global }, function(e, t) { "use strict";

	function n(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
			function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
		o = function() {
			function e(t, r, o) { n(this, e), this.auths = null, this.type = t, this.OAuthCallBack = function() { return r.apply(o, arguments) }, this.start() } return r(e, [{ key: "start", value: function() { var e = this;
					this.getService(this.type, function(t) { e.getOAuthInfo(t, function() { e.OAuthCallBack(null, t) }) }) } }, { key: "getOAuthInfo", value: function(e, t) { var n = this,
						r = arguments;
					this._OAuthLogin(e, function() { e.getUserInfo(function() { t && t(e) }, function() { return n.OAuthCallBack.apply(null, r) }) }) } }, { key: "_OAuthLogin", value: function(e, t) { var n = this,
						r = arguments;
					e.authResult ? t && t() : e.login(function() { t && t() }, function() { return n.OAuthCallBack.apply(null, r) }) } }, { key: "_getService", value: function(e, t) { for(var n in this.auths)
						if(e === this.auths[n].id) return t && t(this.auths[n]), this.auths[n] } }, { key: "getService", value: function(e, t) { var n = this,
						r = arguments; return null === this.auths ? this._getHtml5PlusServices(function(o, i) { return o ? n.OAuthCallBack.apply(null, r) : (n.auths = i, void n._getService(e, t)) }) : void this._getService(e, t) } }, { key: "_getHtml5PlusServices", value: function(e) { plus.oauth.getServices(function(t) { e(null, t) }, function(t) { e(t, null) }) } }]), e }(),
		i = function(e, t) { for(var n in e) new o(n, e[n], t) };
	t.getOAuth = i }, function(e, t) { "use strict";

	function n(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
			function e(e, t) { for(var n = 0; n < t.length; n++) { var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
		o = function() { var e = void 0; return function(t) { return t && (e = t), e } }(),
		i = { wxhy: "WXSceneSession", wxpyq: "WXSceneTimeline", qq: "qq", sinaweibo: "sinaweibo" },
		u = function() {
			function e(t, r, o, i) { n(this, e), this.config = { type: t, fn: r, op: o, context: i }, this._initCallback(), this.start() } return r(e, [{ key: "_initCallback", value: function() { this.ShareCallBack = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return this.config.fn.apply(this.config.context, t) } } }, { key: "start", value: function() { var e = this;
					this.getService(this.config.type, function(t) { e.sendShare(t, function() { e.ShareCallBack(null, t) }) }) } }, { key: "sendShare", value: function(e, t) { var n = this,
						r = this._getShareInfo(e);
					e.send(r, function() { t() }, function(t) { n.ShareCallBack(t, e) }) } }, { key: "_getShareInfo", value: function(e) { var t = { extra: { scene: i[this.config.type] }, href: this.config.op.href, title: this.config.op.title, content: this.config.op.content, pictures: [this.config.op.img], thumbs: [this.config.op.img] }; return t.href || (delete t.title, delete t.content), t } }, { key: "_getAuth", value: function(e, t) { var n = this;
					e.authenticated ? t() : e.authorize(function() { t() }, function() { for(var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r]; return n.ShareCallBack.apply(null, t) }) } }, { key: "_getService", value: function(e, t) {~e.toString().indexOf("wx") && (e = "weixin"); var n = o(); for(var r in n)
						if(console.log(JSON.stringify(n[r])), e === n[r].id) return t && t(n[r]), n[r] } }, { key: "getService", value: function(e, t) { var n = this; return o() ? this._getService(e, t) : void this._getHtml5PlusServices(function(r) { o(r), n._getService(e, t) }) } }, { key: "_getHtml5PlusServices", value: function(e) { var t = this;
					plus.share.getServices(function(t) { e(t) }, function(e) { t.ShareCallBack(e, null) }) } }]), e }(),
		s = function() { for(var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return new(Function.prototype.bind.apply(u, [null].concat(t))) };
	t.sendShare = s }, function(e, t) { "use strict";
	Object.defineProperty(t, "__esModule", { value: !0 }); var n = function(e, t) { plus.nativeUI.actionSheet({ cancel: "取消", buttons: [{ title: "照相机", style: "destructive" }, { title: "相册" }] }, function(n) { var r = n.index; if(0 !== r)
				if(r--, 0 === r) { var o = plus.camera.getCamera();
					o.captureImage(function(t) { plus.io.resolveLocalFileSystemURL(t, function(t) { var n = t.name,
								r = t.toLocalURL();
							e && e(null, [r], [n]) }, function(t) { e && e(t.message) }) }, function(t) { e && e(t.message) }, { filename: "_doc/camera/", index: 1 }) } else 1 === r && plus.gallery.pick(function(n) { if(t) { var r = []; for(var o in n.files) r.push(n.files[o]);
						n = r } e && e(null, n) }, function(t) { e && e(t.message) }, { filter: "image", multiple: !!t, system: !1, maximum: t, onmaxed: function() { plus.nativeUI.toast("您最多能选择" + t + "张") } }) }) };
	t.getGallery = n }, function(e, t, n) { "use strict";

	function r(e) { return e && e.__esModule ? e : { default: e } }

	function o(e) { if(e && e.__esModule) return e; var t = {}; if(null != e)
			for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t.default = e, t }

	function i(e, t) { if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

	function u(e) { return new h(e) } Object.defineProperty(t, "__esModule", { value: !0 }); var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		a = n(2),
		c = (o(a), n(19)),
		l = n(20),
		f = n(21),
		p = n(1),
		d = r(p),
		h = function e(t) { if(i(this, e), "object" === ("undefined" == typeof t ? "undefined" : s(t))) return window.Vue && t.el ? (this.vm = new Vue({ mixins: [t] }), t.domReady && c._domReady.call(this, t.domReady, this.vm), t.plusReady && l._plusReady.call(this, t.plusReady, this.vm)) : (t.domReady && c._domReady.call(this, t.domReady, this), t.plusReady && l._plusReady.call(this, t.plusReady, this)), t.browser && f._browser.call(this, t.browser), t.back ? d.default.back.call(this, t.back) : d.default.back(), this }; "undefined" != typeof window && (window.App = u), t.default = u }, function(e, t, n) { "use strict";

	function r(e) { return e && e.__esModule ? e : { default: e } }

	function o(e, t) { e && u.default.domReady(function() { "function" == typeof e && e.call(t) }) } Object.defineProperty(t, "__esModule", { value: !0 }), t._domReady = void 0; var i = n(1),
		u = r(i);
	t._domReady = o }, function(e, t, n) { "use strict";

	function r(e) { return e && e.__esModule ? e : { default: e } }

	function o(e, t) { e && s.default.plusReady(function() { if("object" === ("undefined" == typeof e ? "undefined" : i(e))) { if(e.init && e.init.call(t), e.getLocation && s.default.getCurrentPosition(e.getLocation, t), e.getNetworkType) { var n = s.default.getCurrentNetworkType();
					e.getNetworkType.call(t, n) } e.listenNetWork && s.default.listenNetWork(e.listenNetWork, t), e.getOAuth && s.default.getOAuth(e.getOAuth, t) } else "function" == typeof e && e.call(t) }) } Object.defineProperty(t, "__esModule", { value: !0 }), t._plusReady = void 0; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		u = n(1),
		s = r(u);
	t._plusReady = o }, function(e, t, n) { "use strict";

	function r(e) { return e && e.__esModule ? e : { default: e } }

	function o(e) { if("object" !== ("undefined" == typeof e ? "undefined" : i(e))) throw "this is not a Object!"; var t = { bounce: !0, style: { top: "44px", bottom: "0px" } };
		s.default.plusReady(function() { var n; "string" == typeof e.url ? n = e.url : "function" == typeof e.url && (n = e.url()); var r = t.style;
			e.style && (r = e.style); var o = plus.webview.create(n, "_vhp_browser", r);
			o.browser = !0, s.default.currentWebview().append(o), (e.bounce === !0 || void 0 === e.bounce && t.bounce) && o.setBounce({ position: { top: "150px" }, changeoffset: { top: "0px" } }), e.title && o.addEventListener("titleUpdate", function(t) { "function" == typeof e.title ? e.title(t.title) : "string" == typeof e.title && (0, s.default)(e.title).html(t.title) }, !1), e.loading && o.addEventListener("loading", function() { e.loading() }), e.loaded && o.addEventListener("loaded", function() { e.loaded() }), e.close && s.default.currentWebview().addEventListener("close", function() { e.close() }), e.back && s.default.back(e.back) }) } Object.defineProperty(t, "__esModule", { value: !0 }), t._browser = void 0; var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e },
		u = n(1),
		s = r(u);
	t._browser = o }]);