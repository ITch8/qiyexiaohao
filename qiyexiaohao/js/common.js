var ASKURL = "http://xhadmin.iotweixin.com/api";
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
			++backButtonPress > 1 ? u.exitApp() : _.toast('再按一次退出应用');
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
	 * @param pdata  请求参数
	 * @param stringSignTemp 参数拼接字符串
	 * @param success 請求成功回调函数
	 * @param error 请求失敗回调函数
	 * */
	u.mypost = function(pdata, stringSignTemp, show, success, error) {
		var jmSign_key = "O8tImgCcf*XgObVqLSbg2DoH4XM6$0to";
		//		var nonce_str = u.mathRand();
		//		console.log("nonce_str====" + nonce_str);
		//		var timestamp = Date.parse(new Date()).substr(0,8);
		//		console.log("timestamp====" + timestamp);
		//		var client="web";//固定
		//		var identifier = w.getItem("identifier");//设备标识号

		//业务参数
		//		var app = "";//可变
		//		var _class ="";//可变 class
		//		var stringSignTemp = "app=Base&class=Test&client=web&identifier=6541345641546&mobile=13012345678&name=小王&nonce_str=562936×tamp=1510816253&"+jmSign_key;
		var stringSignTemp = stringSignTemp + jmSign_key;
		console.log('===stringSignTemp========' + stringSignTemp);
		var signValue = hex_md5(stringSignTemp); //进行md5加密得到sign
		console.log('===signValue========' + signValue);
		_.extend(true, pdata, { //组合必需参数
			'sign': signValue
		});
		console.log('===pdata========' + JSON.stringify(pdata));
		var  EncryptString = u.encryptByDESModeCBC(JSON.stringify(pdata),"MXHKEY17","12345678");
		console.log("EncryptString====" + EncryptString);
		if(show) {
			plus.nativeUI.showWaiting();
		}
		console.log('===EncryptString========' + EncryptString);
		setTimeout(function() {
			_.ajax({
				url: ASKURL,
				type: 'post',
				data: {
					'EncryptString': EncryptString
				},
				timeout: 60000,
				success: function(data) {
					plus.nativeUI.closeWaiting();
					console.log('data====' + JSON.stringify(data));
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
	u.encryptByDESModeCBC = function(message,key,iv) {////CBC模式des加密
		var keyHex = CryptoJS.enc.Utf8.parse(key);
		var ivHex = CryptoJS.enc.Utf8.parse(iv);
		encrypted = CryptoJS.DES.encrypt(message, keyHex, {
			iv: ivHex,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);//转为base64
	};
	u.mathRand = function() {//随机6位数
		var num = "";
		for(var i = 0; i < 6; i++) {
			num += Math.floor(Math.random() * 10);
		}
		return num && Number(num);
	};
	u.formatTime = function(time) {//格式化通话时间
		var h = 0,
	        m = 0,
	        s = 0,
	        _h = '00',
	        _m = '00',
	        _s = '00';
	    h = Math.floor(time / 3600);
	    time = Math.floor(time % 3600);
	    m = Math.floor(time / 60);
	    s = Math.floor(time % 60);
	    _s = s < 10 ? '0' + s : s + '';
	    _m = m + '';
	    _h = h + '';
	    if(_h > 0){
	    	return _h + "小时" + _m + "分钟" + _s + "秒";
	    }else if(_h == 0 && _m > 0){
	    	return  _m + "分钟" + _s  + "秒";
	    }else{
	    	return _s  + "秒";
	    }
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
		var main = plus.webview.getWebviewById("HBuilder");
		mui.fire(main, 'goIndex', {
			id: idArr[i]
		});
		main.show();
	};
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
 * post - error
 * **/
function myerror() {
	mui.toast("访问失敗，请重试");
}
