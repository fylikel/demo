<template>
	<view class="content">
		<!-- 头部 -->
		<view class="bgc">
			<view class="header" style="height: 180rpx; background-color: transparent"></view>
			<!-- 搜索 -->
			<view class="search">
				<p style="display: flex; align-items: center">
					<image style="width: 40rpx; height: 40rpx; margin-right: 15rpx" src="../../static/index/search.png"></image>
					搜索服务，事项
				</p>
				<image style="width: 60rpx; height: 60rpx" src="../../static/index/jiahao.png" mode=""></image>
			</view>
			<!-- 扫一扫等卡片 -->
			<view class="card">
				<view style="text-align: center">
					<image style="height: 60rpx; width: 60rpx" src="/static/index/saoyisao.png" mode=""></image>
					<p style="color: #fff; font-size: 24rpx">扫一扫</p>
				</view>
				<view style="text-align: center">
					<image style="height: 60rpx; width: 60rpx" src="/static/index/erweima.png" mode=""></image>
					<p style="color: #fff; font-size: 24rpx">随申码</p>
				</view>
				<view style="text-align: center">
					<image style="height: 60rpx; width: 60rpx" src="/static/index/zhengjianzhao-copy.png" mode=""></image>
					<p style="color: #fff; font-size: 24rpx">亮证</p>
				</view>
				<view style="text-align: center">
					<image style="height: 60rpx; width: 60rpx" src="/static/index/kefu.png" mode=""></image>
					<p style="color: #fff; font-size: 24rpx">客服</p>
				</view>
				<view style="text-align: center">
					<image style="height: 60rpx; width: 60rpx" src="/static/index/icon.png" mode=""></image>
					<p style="color: #fff; font-size: 24rpx">专属</p>
				</view>
			</view>
		</view>
		<!-- 服务大厅 -->
		<view class="work">
			<p style="display: flex; justify-content: space-between; padding: 0 20rpx 0 20rpx;" >
				<view style="font-size: 40rpx; font-weight: 999;">
					服务大厅
				</view>
				<text style="color: #bcbec0;">更多</text>
			</p>
			<view style="display: flex; ">
				<view style="margin-left: 30rpx;">
					<view style="width: 150rpx; height: 50rpx; border-radius: 35rpx; background-color: #cbb486;text-align: center; align-items: center;">
					  <text style="font-size: 30rpx; color: #ffffff;">按专题</text>
					</view>
					<view class="triangle1">
					</view>
				</view>
				<view style="margin-left: 30rpx;">
					<view style="width: 150rpx; height: 50rpx; border-radius: 35rpx; background-color: #b4bbcb;text-align: center; align-items: center;">
					  <text style="font-size: 30rpx; color: #ffffff;">按部门</text>
					</view>
					<view class="triangle2">
					</view>
				</view>
			</view>
			<view  style="margin-top: 50rpx; padding: 25rpx; background: linear-gradient(#eee5d3, #fff); width: 100%; height: 350rpx;">
				<view>
						<scroll-view class="cardswiper" scroll-x="true" style="height: 300rpx;white-space: nowrap; ">
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
							<view style="position: relative; align-items: center; height: 300rpx;width: 300rpx;display: inline-block; margin-right: 20rpx; background-color: #fff; border-radius: 8rpx;">
								<view style="position: absolute; top: 15%; left: 35%; border-radius: 50%; width: 80rpx; height: 80rpx; background-color: #fdb052;">
									<image style="width: 80rpx; height: 80rpx; " src="../../static/index/gongjiao.png" mode=""></image>
									<p style="margin-left: -18rpx; font-weight: 999;" >建设管理</p>
									<p style="margin-top: 20rpx; margin-left: -60rpx; font-size: 25rpx; color: #bcbec0;" >上海市监管信息服务</p>
								</view>
							</view>
						</scroll-view>
					</view>
			</view>
		</view>
		<!-- 向你推荐 -->
		<view class="recommend">
			<view style="font-size: 40rpx; font-weight: 999;">向你推荐</view>
			<view class="banner">
				<swiper style="height: 200rpx;"  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image style="height: 200rpx; width: 100%;border-radius: 24rpx;" src="../../static/index/banner1.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<image style="height: 200rpx; width: 100%;border-radius: 24rpx;" src="../../static/index/banner2.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image style="height: 200rpx; width: 100%;border-radius: 24rpx;" src="../../static/index/banner3.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
			<view style="margin-top: 40rpx;">
				<p style="display: flex; justify-content: space-between; margin-top: 30rpx; padding-bottom: 30rpx; border-bottom: 2rpx solid #bcbec0;">
					<view >
						居住登记
					</view>
					<text>市公安局></text>
				</p>
				<p style="display: flex; justify-content: space-between; margin-top: 30rpx; padding-bottom: 30rpx;">
					<view >
						就医记录册申领
					</view>
					<text>市医保局></text>
				</p>
			</view>
		</view>
		<!-- 一件事服务 -->
		<view class="thing">
			<p style="font-size: 40rpx; font-weight: 999;">"一件事"服务</p>
			<view class="card">
				<view style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; margin-bottom: 20rpx;">
					<image style="border-radius: 8rpx; width: 40%; height: 180rpx;" src="../../static/work/banner1.png" mode=""></image>
					<view style="color: #b4bbcb; width: 55%; font-size: 24rpx; display: flex; align-items: center; justify-content: center;">
						办理基本养老金申领、基本医疗保险退休待遇核定、年老一次性计划生育奖
					</view>
				</view>
				<view style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; margin-bottom: 20rpx;">
					<image style="border-radius: 8rpx; width: 40%; height: 180rpx;" src="../../static/work/banner1.png" mode=""></image>
					<view style="color: #b4bbcb; width: 55%; font-size: 24rpx; display: flex; align-items: center; justify-content: center;">
						办理基本养老金申领、基本医疗保险退休待遇核定、年老一次性计划生育奖
					</view>
				</view>
				<view style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; margin-bottom: 20rpx;">
					<image style="border-radius: 8rpx; width: 40%; height: 180rpx;" src="../../static/work/banner1.png" mode=""></image>
					<view style="color: #b4bbcb; width: 55%; font-size: 24rpx; display: flex; align-items: center; justify-content: center;">
						办理基本养老金申领、基本医疗保险退休待遇核定、年老一次性计划生育奖
					</view>
				</view>
				<view style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; margin-bottom: 20rpx;">
					<image style="border-radius: 8rpx; width: 40%; height: 180rpx;" src="../../static/work/banner1.png" mode=""></image>
					<view style="color: #b4bbcb; width: 55%; font-size: 24rpx; display: flex; align-items: center; justify-content: center;">
						办理基本养老金申领、基本医疗保险退休待遇核定、年老一次性计划生育奖
					</view>
				</view>
				<view style=" box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; margin-bottom: 20rpx;">
					<image style="border-radius: 8rpx; width: 40%; height: 180rpx;" src="../../static/work/banner1.png" mode=""></image>
					<view style="color: #b4bbcb; width: 55%; font-size: 24rpx; display: flex; align-items: center; justify-content: center;">
						办理基本养老金申领、基本医疗保险退休待遇核定、年老一次性计划生育奖
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.content{
	.bgc{
		height: 25%;
		background-color: #e3c993;
		padding-bottom: 30rpx;
		.search {
			padding: 0 28rpx;
			font-size: 30rpx;
			color: #fff;
			display: flex;
			text-align: center;
			justify-content: space-between;
			> p {
				width: 90%;
				opacity: 1;
				background-color: #dcc8a0;
				backdrop-filter: blur(100rpx);
				border-radius: 6rpx;
				border: 1rpx solid #ff;
			}
		}
		.card {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-evenly;
		}
	}
	.work{
		margin-top: 60rpx;
		>view{
			margin-top: 40rpx;
			position: relative;
			.triangle1{
				  width: 0;
				  height: 0;
				  border-left: 10px solid transparent;
				  border-right: 20rpx solid transparent;
				  border-top: 30rpx solid #cbb486;
				  position: absolute;
				  left: 12%;
				  top: 50rpx;
			}
		}
		.cardworp{
			margin-bottom: 30rpx;
			width: 180rpx;

		}
	}
	.recommend{
		padding: 0 20rpx 0 20rpx;
		.banner{
			margin-top: 30rpx;
			padding:0 20rpx 0 20rpx;
		}
	}
	.thing{
		margin-top: 40rpx;
		padding: 0 20rpx 0 20rpx;
		.card{
			margin-top: 30rpx;
		}
	}

}
</style>
