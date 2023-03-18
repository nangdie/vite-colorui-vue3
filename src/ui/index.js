import store from '@/ui/store'
import modal from '@/ui/js/modal.js'
import request from '@/ui/js/request.js'
import util from '@/ui/js/util.js'
import mixin from '@/ui/js/mixin.js'
import app from "@/app/index.js"

import App from '../App.vue'
import { createApp } from 'vue'
const app = createApp(App);
for (const key in modal) {
	const name = key.charAt(0).toUpperCase() + key.slice(1)
	app.config.globalProperties['$' + name] = modal[key];
};
for (const key in { request, util }) {
	app.config.globalProperties['$' + key] = modal[key];
};



if (uni.getStorageSync("VUE_APP_NAME") != process.env.VUE_APP_NAME) {
	uni.clearStorage();
	uni.setStorageSync('VUE_APP_NAME', process.env.VUE_APP_NAME);
}

/*分析主题*/
var theme = uni.getStorageSync("sys_theme");
var main = uni.getStorageSync("sys_main");
var text = uni.getStorageSync("sys_text");

if (!theme) {
	theme = store.getters.getCustomTheme;
}
if (!main) {
	main = store.getters.getCustomMain;
}
if (!text) {
	text = store.getters.getCustomText;
}
store.commit('setTheme', theme);
store.commit('setMain', main);
store.commit('setText', text);
