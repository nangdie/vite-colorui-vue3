 import store from '@/ui/store'
 const modal = {
    show(name) {
        store.commit('setTarget', name);
    }, 
    hide() {
        store.commit('setTarget', '');
    }, 
	dialog(dialog) {
		store.commit('setDialog', dialog); 
	},
	tips(title,duration=1500) {
		store.commit('setToast', {title:title,duration:duration}); 
	},
	toast(toast) {
		store.commit('setToast', toast); 
	},
	success(title='成功',duration=1500) {
		store.commit('setToast', {icon:'_icon-check',title:title,duration:duration}); 
	},
	error(title='错误',duration=1500) {
		store.commit('setToast', {icon:'_icon-warn',title:title,duration:duration}); 
	},
	loading(title='加载中') {
		store.commit('setToast', {icon:'_icon-loading',title:title,isLoading:true}); 
	},
	hideloading() {
		store.commit('setToast', {title:'',isLoading:false}); 
	},
}

export default modal
