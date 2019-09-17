// 手动挂载插件
function mountPlugin(data) {
  if (!window.H5DS_GLOBAL) {
    window.H5DS_GLOBAL = {
      plugins: {}
    };
  }
  try {
    window.H5DS_GLOBAL.plugins[data.config.pid] = { ...data };
  } catch (e) {
    console.error('插件资源格式错误！', data, e);
  }
}

// 卸载插件
function unmountPlugin(pluginName) {
  if (window.H5DS_GLOBAL) {
    try {
      document.getElementById(`css_${pluginName}`).remove();
      document.getElementById(`js_${pluginName}`).remove();
      delete window.H5DS_GLOBAL.plugins[pluginName];
    } catch (e) {
      console.error('卸载失败', e);
    }
  } else {
    console.warn('未挂载任何插件');
  }
}

// 挂载其他参数
function mountValue(key, value) {
  if (!window.H5DS_GLOBAL) {
    window.H5DS_GLOBAL = {
      plugins: {}
    };
  }
  window.H5DS_GLOBAL[key] = value;
}

// 卸载其他插件
function unmountValue(key) {
  if (window.H5DS_GLOBAL) {
    if (window.H5DS_GLOBAL[key]) {
      delete window.H5DS_GLOBAL[key];
    } else {
      console.error('未找到对应的挂载参数', key);
    }
  } else {
    console.warn('未挂载任何插件');
  }
}

// 卸载所有参数
function unmountAll() {
  window.H5DS_GLOBAL = {};
}

export { mountPlugin, unmountPlugin, mountValue, unmountValue, unmountAll };
