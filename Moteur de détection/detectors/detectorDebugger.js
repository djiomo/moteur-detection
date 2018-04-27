  function create(options) {
 
    if (typeof options === "function") {
      options = {
        onchange: options
      };
    }
    options = options || {};
    var delay = options.delay || 1000;
    var instance = {};
    instance.onchange = options.onchange;
    var status = "unknown";
    /**
     * 获取开发者工具状态
     *
     * @return {string} "unknown": 未知, "on": 开启, "off": 关闭
     */
    function getStatus() {
      return status;
    }
    instance.getStatus = getStatus;
    function checkHandler() {
      if (
        window.Firebug &&
        window.Firebug.chrome &&
        window.Firebug.chrome.isInitialized
      ) {
        setStatus("on");
        return;
      }
      var r = /./;
      r.toString = function() {
        checkStatus = "on";
        setStatus("on");
      };
      checkStatus = "off";
      
      console.log("%c", r, options.label || "");
   
      setStatus(checkStatus);
    }
    /**
     * 设置开发者工具状态
     *
     * @param {string} value 状态 "unknown": 未知, "on": 开启, "off": 关闭
     */
    function setStatus(value) {
      if (status !== value) {
        status = value;
        if (typeof instance.onchange === "function") {
          instance.onchange(value);
        }
      }
    }
    var timer;
    if (!options.once) {
      setInterval(checkHandler, delay);
      window.addEventListener("resize", checkHandler);
    } else {
      checkHandler();
    }
    /**
     * 是否已释放
     */
    var freed;
    /**
     * 释放资源
     */
    function free() {
      if (freed) {
        return;
      }
      freed = true;
      if (!options.once) {
        window.removeEventListener("resize", checkHandler);
        clearInterval(timer);
      }
    }
    instance.free = free;
    return instance;
    //return instance;
  }
  
