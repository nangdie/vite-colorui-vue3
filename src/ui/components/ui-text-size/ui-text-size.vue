<template>
	<view class="">
		<ui-menu :ui="ui"><ui-menu-item title="文字大小" @click.native="$Modal.show('textSizeSet')"></ui-menu-item></ui-menu>
		<ui-modal name="textSizeSet" title="文字大小">			
			<view class="p-3 mx-5 text-center mt-4">
				选择合适的文字大小来动态调整界面布局。
			</view>
			<view class="flex-bar p-3">
				<view class="p-2" style="font-size: 12px;">小</view>
				<view class="p-2 flex-sub"><slider @change="sliderChange" :value="sys_text" :min="0" :max="4" /></view>
				<view class="p-2 mr-2" style="font-size: 20px;">大</view>
			</view>
		</ui-modal>
	</view>
</template>

<script>
let _this = null;
export default {
	name: 'UiTextSize',
	data() {
		return {
			size: ['sm', 'df', 'lg', 'xl', 'xxl']
		};
	},
	props: {
		ui: {
			type: String,
			default: ''
		}
	},
	watch: {},
	created() {
		_this = this;
	},
	methods: {
		sliderChange(e) {
			this.$store.commit('setText',e.detail.value);
		}
	}
};
</script>

<style lang="scss"></style>
