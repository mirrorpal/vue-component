import Cart from './components/cart';

const components = {
    Cart
};

const tydic = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(tydic).forEach(key => {
        Vue.component(key, tydic[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
