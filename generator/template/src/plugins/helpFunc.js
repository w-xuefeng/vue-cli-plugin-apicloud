import { Base64 } from 'js-base64';
const pages = require('@/config/page');

export function getPageMap() {
  return pages.reduce((rst, page) => {
    rst[page.name] = {
      ...page,
      htmlPath: page.path.replace(/\/(\w)/, (match, $1) =>
        $1.toLocaleLowerCase()
      )
    };
    return rst;
  }, {});
}

export function bindKeyBackExitApp() {
  if (typeof api !== 'undefined') {
    window.api.addEventListener(
      {
        name: 'keyback'
      },
      function() {
        window.api.toast({
          msg: '再按一次返回键退出' + window.api.appName,
          duration: 2000,
          location: 'bottom'
        });
        window.api.addEventListener(
          {
            name: 'keyback'
          },
          function() {
            window.api.closeWidget({ silent: true });
          }
        );
        setTimeout(() => {
          bindKeyBackExitApp();
        }, 3000);
      }
    );
  }
}

export function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  let r = window.location.search.substr(1).match(reg);
  return r != null ? decodeURI(r[2]) : null;
}

export function getSafeArea() {
  if (typeof api !== 'undefined') {
    return window.api.safeArea;
  } else {
    return { top: 0, left: 0, bottom: 0, right: 0 };
  }
}

export function getWinSize() {
  if (typeof api !== 'undefined') {
    return {
      winHeight: window.api.winHeight,
      winWidth: window.api.winWidth
    };
  }
  return {
    winHeight: window.screen.availHeight,
    winWidth: window.screen.availWidth
  };
}

export function n2p(name) {
  if (getPageMap()[name]) {
    return getPageMap()[name].htmlPath;
  } else {
    return undefined;
  }
}

export function setPullDownRefresh(fn, options) {
  if (typeof api !== 'undefined') {
    window.api.setRefreshHeaderInfo(
      {
        visible: true,
        loadingImg: 'widget://image/refresh.png',
        bgColor: '#282c34',
        textColor: '#fff',
        textDown: '下拉刷新...',
        textUp: '松开刷新...',
        showTime: true,
        ...options
      },
      (ret, err) => {
        fn && fn(ret, err);
      }
    );
  }
}

export const page = {
  open(url, { name, pageParam, animation, winOpts } = {}) {
    url = url.endsWith('.html') ? url : url + '.html';
    const api = window.api;
    if (!api) {
      if (pageParam) {
        url = `${url}?pageParam=${Base64.encodeURI(JSON.stringify(pageParam))}`;
      }
      window.top.location.href = url;
      return;
    }
    name = name ? name : `win_${url}`;
    const params = {
      name,
      url,
      pageParam,
      animation,
      ...(winOpts || {})
    };
    api.openWin(params);
  },
  close() {
    if (!window.api) {
      window.history.back();
      return;
    }
    window.api.closeWin();
  },
  closeToWin({ url, animation }) {
    url = url.endsWith('.html') ? url : url + '.html';
    if (typeof api !== 'undefined') {
      const name = `win_${url}`;
      if (animation) {
        window.api.closeToWin({ name, animation });
      } else {
        window.api.closeToWin({ name });
      }
    } else {
      window.location.href = url;
    }
  },
  pageParam: function() {
    if (typeof api !== 'undefined') {
      return window.api.pageParam;
    } else {
      const param = getQueryString('pageParam');
      return param ? JSON.parse(Base64.decode(param)) : undefined;
    }
  }
};

export const frame = {
  open(params) {
    let { url } = params;
    url = url.endsWith('.html') ? url : url + '.html';
    if (typeof api !== 'undefined') {
      window.api.openFrame({ ...params, url });
    } else {
      const { name, rect, pageParam } = params;
      const iframe = document.createElement('iframe');
      iframe.setAttribute('frameborder', 0);
      iframe.setAttribute('name', name);
      if (pageParam) {
        url = `${url}?pageParam=${Base64.encodeURI(JSON.stringify(pageParam))}`;
      }
      iframe.src = url;
      iframe.style.position = 'absolute';
      if (rect.x) {
        iframe.style.left = `${rect.x}px`;
      }
      if (rect.y) {
        iframe.style.top = `${rect.y}px`;
      }
      if (rect.w) {
        iframe.style.width = rect.w === 'auto' ? '100%' : `${rect.w}px`;
      }
      if (rect.h) {
        iframe.style.height = rect.h === 'auto' ? '100%' : `${rect.h}px`;
      }
      document.body.appendChild(iframe);
    }
  }
};

export const pagesInfo = Object.keys(getPageMap()).map(k => ({ ...getPageMap()[k]}))
