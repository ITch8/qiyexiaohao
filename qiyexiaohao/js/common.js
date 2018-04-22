var ASKURL = "https://api.hk-dr.com/";
(function(w, _, u, owner) {
	w.openView = function(url, extras) {
		var web = null,
			id = url.split('?')[0].replace(/(.*)\//g, '').split('.')[0];
		extras = extras ? extras : {};
		web = plus.webview.getWebviewById(id);
		if(w.plus) {
			if(web) {
				if("tabbar" == id) {
					w.toIndex(0);
				} else {
					_.fire(web, "event", extras)
					web.show('slide-in-right', 400);
				}
			} else {
				_.openWindow({
					id: id,
					url: url,
					extras: extras,
					styles: {
						popGesture: "colse"
					},
					show: {
						duration: 300
					},
					waiting: {
						autoShow: false
					}
				});
			}
		} else {
			location.href = url;
		}
	};
	w.doubleTapExit = function() { //连续点击返回键退出应用
		var backButtonPress = 0;
		_.back = function() {
			++backButtonPress > 1 ? u.exitApp() : _.toast('再按壹次退出應用');
			setTimeout(function() {
				backButtonPress = 0;
			}, 1000);
		};
	};
	w.setItem = function(key, value) {
		localStorage.setItem(key, value);
	};
	w.getItem = function(key) {
		return localStorage.getItem(key);
	};
	w.clearItem = function() {
		localStorage.clear();
	};
	w.removeItem = function(key) {
		localStorage.removeItem(key);
	};
	w.getUser = function() {
		return w.getItem("privateToken");
	};
	w.setUser = function(privateToken) {
		w.setItem("privateToken", privateToken);
	};

	/**@des 辅助工具--请求数据
	 * @param postUrl  请求接口
	 * @param pdata  请求参数
	 * @param success 請求成功回调函数
	 * @param error 请求失敗回调函数
	 * */
	u.mypost = function(postUrl, pdata, show, success, error) {
		if(show) {
			plus.nativeUI.showWaiting("努力加載中...");
		}
		_.extend(true, pdata, {
			'token': token
		});
		console.log(postUrl + '===pdata========' +  JSON.stringify(pdata));
		setTimeout(function() {
			_.ajax({
				url: ASKURL + postUrl,
				type: 'post',
				data: pdata,
				timeout: 60000,
				success: function(data) {
					data = JSON.parse(data);
					data = JSON.stringify(data);
					data = traditionalized(data);
					data = JSON.parse(data);
					plus.nativeUI.closeWaiting();
					_.isFunction(success) ? success(data) : '';
				},
				error: function(xhr) {
					_.later(function() {
						plus.nativeUI.closeWaiting();
					}, 100)
					_.isFunction(error) ? error() : _.toast('網酪連接超時');
				}
			});
		}, 50);
	};
	u.close = function(wid) {
		var thisweb = null;
		if(w.plus) {
			//指定页面关闭
			if(wid) {
				thisweb = plus.webview.getWebviewById(wid);
				if(thisweb) {
					thisweb.close("slide-out-right", 300);
				}
			} else {
				//当前页面关闭
				plus.webview.currentWebview().close("slide-out-right", 300);
			}
		}
	};
	var wait = 60;
	u.time = function(o) { //倒计时獲取驗證碼
		if(wait == 0) {
			o.removeAttribute("disabled");
			o.textContent = "獲取驗證碼";
			o.value = "獲取驗證碼";
			wait = 60;
		} else {
			o.setAttribute("disabled", "disabled");
			o.textContent = "倒計時(" + wait + "s)";
			o.value = "倒計時(" + wait + "s)";
			wait--;
			setTimeout(function() {
				u.time(o);
			}, 1000)
		}
	};
	u.upImg = function(self) { // 拍照-选择照片添加文件	
		plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: [{
				title: "拍照上傳"
			}, {
				title: "相冊選擇"
			}]
		}, function(e) {
			if(e.index == 0) return;
			if(e.index == 1) {
				plus.camera.getCamera(1).captureImage(function(p) {
					self.src = plus.io.convertLocalFileSystemURL(p);
				});
			} else if(e.index == 2) {
				plus.gallery.pick(function(p) {
					self.src = p;
				}, {
					filter: "image",
					multiple: false
				})
			}
		});
	};
	u.exitApp = function() {
		if(plus.os.name == "Android") {
			plus.runtime.quit();
		}
	};
	w.toIndex = function(i, ex) {
		/**
		 * 跳转到首页
		 * 参数默认为0(首页tab bar 的第一个子页面)
		 * */
		var i = i || 0; //设置默认值为0 
		var idArr = ["main", "msg", "contact", "my"];
		var main = plus.webview.getWebviewById("index");
		mui.fire(main, 'goIndex', {
			id: idArr[i]
		});
		main.show();
	};
	u.emptyHtml = function(list, flag) {
		if(list && !flag) {
			list.innerHTML = "";
		}
	}
	
	u.checkPhone = function(phone) {
		var pReg = /^1[0-9]{10}$/;
		var pReg_HK = /^([5|6|9|8])\d{7}$/;
		return pReg.test(phone) || pReg_HK.test(phone);
	};
	u.checkAge = function(age) {
		var pReg = /^([0-9]|[0-9]{2}|100)$/;
		return pReg.test(age);
	};
	u.checkCardId = function(cardId) {
		var pReg = /^(\d{16}|\d{19})$/;
		return pReg.test(cardId);
	};
	u.checkIdCard = function(idCard) {
		var pReg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
		return pReg.test(idCard);
	};
	u.checkMoney = function(num) {
		var pReg = /^(([1-9]\d{0,9})|0)(\.\d{1,2})?$/;
		return pReg.test(num);
	};
	u.isNull = function(value) {
		value = value.replace(/(^\s*)|(\s*$)/g, "");
		return(value === "null" || value === null || value === "" || value === "undefined") ? true : false;
	};
})(window, mui, window.util = {}, window.app = {});

/**
 * 原始js封装方法
 * **/
function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
	if(!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
	if(hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function toggleClass(obj, cls) {
	if(hasClass(obj, cls)) {
		removeClass(obj, cls);
	} else {
		addClass(obj, cls);
	}
}

/**
 * post - error
 * **/
function myerror() {
	mui.toast("访问失敗，请重试");
}
