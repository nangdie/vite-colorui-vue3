<template>
  <ui-sys>
    <view class="content">
      <image class="logo" src="/static/logo.png" />
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
      <view>
        <view>test colorui</view>
        <view>
          <view class="p-3 flex-between">
            <button class="ui-btn bg-orange">按钮</button>
            <button class="ui-btn bg-orange-thin">按钮</button>
            <button class="ui-btn bg-orange-gradient">按钮</button>
            <button class="ui-btn bg-orange-light">按钮</button>
          </view>
          <view class="p-3 flex-between">
            <button class="ui-btn">按钮</button>
            <button class="ui-btn">按钮</button>
            <button class="ui-btn round">按钮</button>
            <button class="ui-btn icon">
              <text class="cicon-link" />
            </button>
          </view>
        </view>
      </view>
    </view>
  </ui-sys>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>
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
