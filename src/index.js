// 手动挂载插件
export function mountPlugin(data) {
  if (!window.H5DS_GLOBAL) {
    window.H5DS_GLOBAL = {
      plugins: {}
    };
  }
  data = { ...data };
  window.H5DS_GLOBAL.plugins[data.config.pid] = data;
}

// 卸载插件
export function unmountPlugin(pluginName) {
  if (window.H5DS_GLOBAL) {
    delete window.H5DS_GLOBAL.plugins[pluginName];
  }
}
