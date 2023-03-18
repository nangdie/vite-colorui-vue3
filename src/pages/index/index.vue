<template>
  <ui-sys bg="ui-BG" :footer="false">
    <ui-navbar back />
    <view class="p-5">
      <view class="text-xxl">
        <view class="text-bold py-2">欢迎登录Colorui组件库</view>
      </view>
      <view class="mt-5"><ui-tab v-model="tabCur" :tab="['帐号户登录', '验证码登录']" tpl="long" dot="radius" textCur="text-lg"
          text="text-lg"></ui-tab></view>
      <block v-if="tabCur == 0">
        <ui-form ui="ui-BG mt-4">
          <ui-form-group icon="cicon-avatar text-gray"><ui-input v-model="account.phone"
              placeholder="帐号户名/手机号"></ui-input></ui-form-group>
          <ui-form-group icon="cicon-safe-check text-gray"><ui-input type="password" v-model="account.password"
              placeholder="帐号户密码"></ui-input></ui-form-group>
        </ui-form>
      </block>
      <block v-if="tabCur == 1">
        <ui-form ui="ui-BG mt-4">
          <ui-form-group icon="cicon-mobile text-gray"><ui-input v-model="login.phone"
              placeholder="手机号"></ui-input></ui-form-group>
          <ui-form-group icon="cicon-numcode text-gray">
            <ui-input v-model="login.code" placeholder="验证码"></ui-input>

          </ui-form-group>
        </ui-form>
      </block>
      <view class="my-3">我已阅读并接受</view>
      <view class="mt-5">
        <button class="ui-btn bg-blue-gradient radius lg block shadow-blue" :disabled="isLoading">
          登录
          <text class="cicon-loading1 icon-spin ml-3" v-if="isLoading"></text>
        </button>
      </view>
      <view class="flex-bar mt-4">
        <view class="p-3">忘记密码？</view>
        <view class="p-3">
          立即注册
          <text class="cicon-round-angle-o ml-3"></text>
        </view>
      </view>
      <ui-fixed bottom>
        <view class="p-5">
          <ui-title title="其他登录方式" align="center" hasLine tpl="center-column"></ui-title>
          <button class="ui-btn bg-green-gradient radius lg block shadow-green" :disabled="isLoading">
            <text class="cicon-weixin icon-xl mr-3"></text>
            微信一键登录
            <text class="cicon-loading1 icon-spin ml-3" v-if="wxisLoading"></text>
          </button>
        </view>
      </ui-fixed>
    </view>
  </ui-sys>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const tabCur = ref(0)
const wxisLoading = ref(false)
const isLoading = ref(false)
const login = ref({
  name: "",
  code: "",
  phone: ""
})
const account = ref({
  name: "",
  code: "",
  password: "",
  phone: ""
}) 
</script>

<style lang="scss">
body {
  font-size: 50px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
