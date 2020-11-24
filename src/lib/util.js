/**
 * 工具方法
 *
 */
(function () {
  var Util = {
    REGEXP: {
      /**
       * 手机。
       */
      PHONE: /^(\+\d+)?1[3456789]\d{9}$/,///^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(18[0-9]{1}))+\d{8})$/,

      /**
       * 邮编。
       */
      ZIPCODE: /^[1-9][0-9]{5}$/,

      /**
       * 邮箱。
       */
      EMAIL: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,

      /**
       * 日期。
       */
      DATE: /^(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|3[0-1])$/,

      /**
       * 身份证。
       */
      // IDCARD: /(^\d{18}$)|(^\d{15}$)|(^\d{17}(\d|X|x)$)/
      IDCARD: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
    },
    type: function (obj) {
      var class2type = {};
      "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (e, i) {
        class2type["[object " + e + "]"] = e.toLowerCase();
      });
      //当然为了兼容IE低版本，forEach需要一个polyfill，不作细谈了。
      if (obj == null) {
        return String(obj);
      }
      return typeof obj === "object" || typeof obj === "function" ?
        class2type[class2type.toString.call(obj)] || "object" :
        typeof obj;
    },
    getQuery: function (key) {
      var match = location.search.match(new RegExp(key + '=([^&]*)'));
      return match && match[1] || '';
    },
    //是否支持本地存储
    _supportStorageState: null,

    //测试是否支持本地存储
    _testIsSupportStorage: function () {
      var _this = this;
      if (_this._supportStorageState == null) {
        try {
          var a = "1";
          localStorage.setItem('a', a);
          _this._supportStorageState = !!localStorage.getItem('a') ? 1 : 0;
        } catch (ex) { //ios 的safari浏览器无痕模式会禁用本地存储，而且会报错
          _this._supportStorageState = -2;
        }
      }

      if (_this._supportStorageState == -2) {
        new Say('请关闭当前浏览器无痕浏览模式，以保证当前页面正常浏览。');
      } else if (_this._supportStorageState == 0) { //不支持方法的调用模式，重写常用的几个方法，经测试傻逼UC就不支持下面这些方法，只能直接赋值
        try {
          localStorage.setItem = function (key, value) {
            localStorage[key] = value;
            localStorage.length++;
          }
          localStorage.getItem = function (key) {
            return localStorage[key];
          }
          localStorage.removeItem = function (key, value) {
            delete localStorage[key];
            localStorage.length--;
          }

          sessionStorage.setItem = function (key, value) {
            sessionStorage[key] = value;
            sessionStorage.length++;
          }
          sessionStorage.getItem = function (key) {
            return sessionStorage[key];
          }
          sessionStorage.removeItem = function (key, value) {
            delete sessionStorage[key];
            sessionStorage.length--;
          }
        } catch (ex) {
          console.log('操蛋浏览器');
        }
      }

      return _this._supportStorageState;
    },
    /**
     * 获得本地存储数据
     * @param  {String} key       存储关键词
     * @param  {Integer} storeTime    有效期（单位：分钟）
     * @return {Object}
     */
    getLocalData: function (key, storeTime) {
      var _this = this;
      if (!key) {
        return null;
      }
      _this._testIsSupportStorage();

      var oStore;
      try {
        oStore = localStorage.getItem(key);
      } catch (ex) {}
      if (oStore) {
        oStore = JSON.parse(oStore);
      }

      if (!oStore) {
        return null;
      } else if (storeTime && (!oStore.time || +new Date > oStore.time + storeTime * 60 * 1000)) {
        _this.removeLocalData(key);
        return null;
      } else {
        return oStore.data;
      }
    },

    /**
     * 设置本地存储数据
     * @param  {String} key        存储关键词
     * @param {void}
     */
    setLocalData: function (key, data) {
      var _this = this,
        oStore = {
          time: +new Date(),
          // validDate: +new Date + (storeTime || 10000000) * 1000 * 60,
          data: data
        };
      _this._testIsSupportStorage();

      try {
        localStorage.setItem(key, JSON.stringify(oStore));
      } catch (ex) {}
    },

    /**
     * 删除本地存储数据
     * @param  {String} key       存储关键词
     * @return {void}
     */
    removeLocalData: function (key) {
      var _this = this;
      _this._testIsSupportStorage();
      try {
        localStorage.removeItem(key);
      } catch (ex) {}
    },

    /**
     * 获得本地存储数据
     * @param  {String} key       存储关键词
     * @return {Object}
     */
    getSessionData: function (key) {
      var _this = this;
      if (!key) {
        return null;
      }
      _this._testIsSupportStorage();

      var oStore;
      try {
        oStore = sessionStorage.getItem(key);
      } catch (ex) {}
      if (oStore) {
        oStore = JSON.parse(oStore);
      }

      if (!oStore) {
        return null;
      } else {
        return oStore.data;
      }
    },

    /**
     * 设置本地存储数据
     * @param  {String} key       存储关键词
     * @param {void}
     */
    setSessionData: function (key, data) {
      var _this = this,
        oStore = {
          data: data
        }
      _this._testIsSupportStorage();
      try {
        sessionStorage.setItem(key, JSON.stringify(oStore));
      } catch (ex) {}
    },

    /**
     * 删除本地存储数据
     * @param  {String} key       存储关键词
     * @return {void}
     */
    removeSessionData: function (key) {
      var _this = this;
      _this._testIsSupportStorage();
      try {
        sessionStorage.removeItem(key);
      } catch (ex) {}
    },

    /**
     * 按名称读取cookie值
     * @param  {String} name cookie名
     * @return {void}
     */
    getCookie: function (name) {
      var cookieValue = "";
      var search = name + "=";
      if (document.cookie.length > 0) {
        var offset = document.cookie.indexOf(search);
        if (offset != -1) {
          offset += search.length;
          var end = document.cookie.indexOf(";", offset);
          if (end == -1) {
            end = document.cookie.length;
          }
          cookieValue = decodeURIComponent(document.cookie.substring(offset, end))
        }
      }

      /**
       * Parse JSON cookie string.
       *
       * @param {String} str
       * @return {Object} Parsed object or undefined if not json cookie
       * @public
       */
      function JSONCookie(str) {
        if (typeof str !== 'string' || str.substr(0, 2) !== 'j:') {
          return str;
        }
        try {
          return JSON.parse(str.slice(2));
        } catch (err) {
          return str;
        }
      }

      return JSONCookie(cookieValue);
    },

    /**
     * 写cookie
     * @param  {String} name       cookie名
     * @param  {All} value
     * @param  {Integer} storeTime  有效期（单位：分钟）
     * @return {void}
     */
    setCookie: function (name, value, storeTime) {
      //storeTime = storeTime || 60 * 24 * 30; //如果不传，默认一个月
      var exdate = new Date();
      exdate = exdate.getTime() + storeTime * 60 * 1000;
      exdate = (new Date(exdate)).toGMTString();

      //object类型的处理下结果
      if (typeof value === 'object') {
        value = "j:" + JSON.stringify(value);
      }

      // 使设置的有效时间正确。增加toGMTString()
      document.cookie = name + "=" + encodeURIComponent(value) + ((storeTime == null) ? "" : ";expires=" + (new Date(exdate)).toGMTString()) + ";path=/";
    },

    /**
     * 删除cookie
     * @param  {String} name cookie名
     * @return {void}
     */
    removeCookie: function (name) {
      return this.setCookie(name, "", -1);
    },

    /**
     * 生成唯一识别码
     * @return {String} 识别码
     */
    getGuid: function () {
      var guid = '';

      for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);

        guid += n;

        if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
          guid += '-';
        }
      }

      return guid;
    },
    /**
     * 获取移动坐标信息
     *
     * @method
     * @reurn {void}
     */
    getTouchPosition: function (e) {
      e = e.originalEvent || e;
      var event = e.originalEvent || e,
        point = (e.touches && e.touches.length) ? e.touches[0] : (e.changedTouches && e.changedTouches.length) ? e.changedTouches[0] : e,
        oMove = {
          x: point.pageX || 0,
          y: point.pageY || 0,
          pageX: point.pageX || 0,
          pageY: point.pageY || 0,
          touches: e.touches || [],
          changedTouches: e.changedTouches
        };
      return oMove;
    },
    /*
     * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
     * @param fn {function}  需要调用的函数
     * @param delay  {number}    延迟时间，单位毫秒
     * @param mustRunDelay  {bool} 是否延迟执行，给mustRunDelay参数传递false 绑定的函数先执行，而不是delay后后执行。
     * @return {function}实际调用函数
     */
    throttle: function (fn, delay, mustRunDelay, debounce) {
      var curr = +new Date(), //当前事件
        last_call = 0,
        last_exec = 0,
        timer = null,
        diff, //时间差
        context, //上下文
        args,
        exec = function () {
          last_exec = curr;
          fn.apply(context, args);
        };

      if (mustRunDelay == undefined) {
        mustRunDelay = true;
      }
      return function () {
        curr = +new Date();
        context = this,
          args = arguments,
          diff = curr - (debounce ? last_call : last_exec) - delay;
        clearTimeout(timer);
        if (debounce) {
          if (mustRunDelay) {
            timer = setTimeout(exec, delay);
          } else if (diff >= 0) {
            exec();
          }
        } else {
          if (diff >= 0) {
            exec();
          } else if (mustRunDelay) {
            timer = setTimeout(exec, -diff);
          }
        }
        last_call = curr;
      }
    },

    /**
     * 将时间转换成指定格式。
     *
     * @param {String|Date|Number} sDateTime
     * @param {String} sFormat 格式化字符串
     * @return {Date}
     */
    formatDate: function (sDateTime, sFormat) {
      if (!sDateTime) {
        return "";
      }
      var dDate = null,
        sDateType = this.type(sDateTime);
      if (sDateType === "date") { // 日期对象。
        dDate = sDateTime;
      } else if (sDateType === "number") { // 毫秒值类型。
        dDate = new Date(Number(sDateTime));
      } else if (sDateType === "string") { // 字数串类型。
        dDate = new Date(sDateTime.replace(/[-.]/g, "/"));
      }

      var oFormat = {
        "M+": dDate.getMonth() + 1, //月份
        "d+": dDate.getDate(), //日
        "h+": dDate.getHours() % 12 == 0 ? 12 : dDate.getHours() % 12, //小时
        "H+": dDate.getHours(), //小时
        "m+": dDate.getMinutes(), //分
        "s+": dDate.getSeconds(), //秒
        "q+": Math.floor((dDate.getMonth() + 3) / 3), //季度
        "S": dDate.getMilliseconds() //毫秒
      };
      var oWeek = {
        "0": "/u65e5",
        "1": "/u4e00",
        "2": "/u4e8c",
        "3": "/u4e09",
        "4": "/u56db",
        "5": "/u4e94",
        "6": "/u516d"
      };
      if (/(y+)/.test(sFormat)) {
        sFormat = sFormat.replace(RegExp.$1, (dDate.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      if (/(E+)/.test(sFormat)) {
        sFormat = sFormat.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + oWeek[this.getDay() + ""]);
      }
      for (var k in oFormat) {
        if (new RegExp("(" + k + ")").test(sFormat)) {
          sFormat = sFormat.replace(RegExp.$1, (RegExp.$1.length == 1) ? (oFormat[k]) : (("00" + oFormat[k]).substr(("" + oFormat[k]).length)));
        }
      }
      return sFormat;
    },


    /*
     * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
     * @param fn {function}  要调用的函数
     * @param delay   {number}    空闲时间
     * @param mustRunDelay  {bool} 是否延迟执行，给mustRunDelay参数传递false 绑定的函数先执行，而不是delay后后执行。
     * @return {function}实际调用函数
     */
    debounce: function (fn, delay, mustRunDelay) {
      return Util.throttle(fn, delay, mustRunDelay, true);
    },
    deepClone: function (Obj) {
      var buf;
      if (Obj instanceof Array) {
        buf = []; //创建一个空的数组
        var i = Obj.length;
        while (i--) {
          buf[i] = this.deepClone(Obj[i]);
        }
        return buf;
      } else if (Obj instanceof Object) {
        buf = {}; //创建一个空对象
        for (var k in Obj) { //为这个对象添加新的属性
          buf[k] = this.deepClone(Obj[k]);
        }
        return buf;
      } else {
        return Obj;
      }
    },
    fixed2: function (value = 0, _currency = '', decimals = 2) {
      value = value ? value + "" : "0";
      decimals = parseFloat(decimals);
      let len = value.length;
      let dot = value.indexOf('.');
      if (!value && value != 0) {
        return "0.00";
      }
      if (dot < 0) { //无小数点补0
        value = value + '.';
        for (var i = 0; i < decimals; i++) {
          value += '0';
        }
        return value = _currency + value.replace(/(\d)(?=(\d{3})+\.)/g, '1');
      }
      if (len <= dot + decimals) { //位数不足补0
        for (; len <= dot + decimals; len++) {
          value += '0';
        }
        return value = _currency + value.replace(/(\d)(?=(\d{3})+\.)/g, '1');
      }
      if (dot > 3) { //需要千分位符 ,
        value = value.replace(/(\d)(?=(\d{3})+\.)/g, '1');
        dot = value.indexOf('.');
      }
      return _currency + value.substr(0, dot + decimals + 1);

    },
    /**
     * 四舍五入保留小数
     * @param  {Number}  num            需要转化的数值
     * @param  {Integer}  cutNum        保留的小数位数
     * @param  {Boolean} isRemoveZero    是否移除末尾的0，默认不需要
     * @return {Number}
     */
    toFixed: function (num, cutNum, isRemoveZero) {
      var sReturn = '0';
      num = parseFloat(num);
      if (isNaN(num)) {
        num = 0;
      }
      cutNum = cutNum || 0;
      if (num.toString() == "NaN") {
        num = 0;
      } else {
        num = num.toFixed(cutNum);
      }

      sReturn = num.toString();
      if (isRemoveZero) {
        // console.log(sReturn);
        // console.log(typeof sReturn);
        while (sReturn.indexOf('.') > -1 && sReturn.endsWith('0')) {
          sReturn = sReturn.substr(0, sReturn.length - 1);
        }
        if (sReturn.endsWith(".")) {
          sReturn = sReturn.substring(0, sReturn.length - 1);
        }
      }
      return sReturn;
    }
  }

  window.Util = Util;
})();
