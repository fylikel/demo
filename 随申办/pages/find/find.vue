<template>
	<view class="content">
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
			<!-- 轮播图 -->
			<view class="banner">
				<swiper style="height: 380rpx;"  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image style="height: 380rpx; width: 100%;border-radius: 20rpx;" src="../../static/find/banner1.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<image style="height: 380rpx; width: 100%;border-radius: 20rpx;" src="../../static/find/banner2.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image style="height: 380rpx; width: 100%;border-radius: 20rpx;" src="../../static/find/banner3.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 城市风采 -->
		<p style="font-size: 55rpx; font-weight: 999; margin-left: 20rpx;">城市风采</p>
		<view class="city">
			<p style="font-size:36rpx; font-weight: 999;">为你推荐</p>
			<view>
					<scroll-view class="cardswiper" scroll-x="true" style="height: 200rpx;white-space: nowrap; ">
						<view style="height: 200rpx;width: 25%;display: inline-block; margin-right: 20rpx;">
							<image style="width: 150rpx; height: 150rpx; border-radius: 50%;"  src="../../static/find/for1.png" mode=""></image>
							<p style="font-size:30rpx; font-weight: 520;">松江旗舰店</p>
						</view>
						<view style="height: 200rpx;width: 25%;display: inline-block; margin-right: 20rpx;">
							<image style="width: 150rpx; height: 150rpx; border-radius: 50%;"  src="../../static/find/for1.png" mode=""></image>
							<p style="font-size:30rpx; font-weight: 520;">松江旗舰店</p>
						</view>
						<view style="height: 200rpx;width: 25%;display: inline-block; margin-right: 20rpx;">
							<image style="width: 150rpx; height: 150rpx; border-radius: 50%;"  src="../../static/find/for1.png" mode=""></image>
							<p style="font-size:30rpx; font-weight: 520;">松江旗舰店</p>
						</view>
						<view style="height: 200rpx;width: 25%;display: inline-block; margin-right: 20rpx;">
							<image style="width: 150rpx; height: 150rpx; border-radius: 50%;"  src="../../static/find/for1.png" mode=""></image>
							<p style="font-size:30rpx; font-weight: 520;">松江旗舰店</p>
						</view>
						<view style="height: 200rpx;width: 25%;display: inline-block; margin-right: 20rpx;">
							<image style="width: 150rpx; height: 150rpx; border-radius: 50%;"  src="../../static/find/for1.png" mode=""></image>
							<p style="font-size:30rpx; font-weight: 520;">松江旗舰店</p>
						</view>
					</scroll-view>
				</view>
		</view>
		<!-- 卡片区 -->
		<view class="card">
			<view class="head">
				<image style="width: 80rpx; height: 80rpx; border-radius: 50%;" src="../../static/find/head.png" mode=""></image>
				<view style="margin-left: 40rpx;">
					<p>海湾旅游区<text style="margin-left: 10rpx; width: 60rpx; height: 30rpx; background-color: #fc7a43; color: aliceblue; border-radius: 8rpx;">+关注</text></p>
					<p style="font-size: 24rpx; color:#b2b2b2;margin-top: 5rpx;">三小时前</p>
				</view>
			</view>
			<view style="
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					font-size: 30rpx;
					margin: 40rpx 0 30rpx 0 ;
					">
				新年伊始海湾旅游区首家长者运动健康之家对外开放啦!
				为进一步完善”15分钟社区生活圈”，更好地满足海湾旅游区老年人群科学健身需求，盘活社区闲置空间，海湾旅游区对位于新家园小区的一楼活动室进行综合改造提升，首个长者运动健康之家应运而生
			</view>
			<view style="text-align: center;">
				<image style="width: 650rpx; height: 650rpx; border-radius: 10rpx;" src="../../static/find/card.png" mode=""></image>
			</view>
			<view style="float: right;margin-right: 50rpx; display: flex;  margin-top: 30rpx;">
				<image style="width: 50rpx; height: 50rpx;" src="../../static/flower-copy.png" mode=""></image>
				<view style="margin-top:8rpx;">
					23
				</view>
			</view>
		</view>
	<view class="card">
		<view class="head">
			<image style="width: 80rpx; height: 80rpx; border-radius: 50%;" src="../../static/find/head.png" mode=""></image>
			<view style="margin-left: 40rpx;">
				<p>海湾旅游区<text style="margin-left: 10rpx; width: 60rpx; height: 30rpx; background-color: #fc7a43; color: aliceblue; border-radius: 8rpx;">+关注</text></p>
				<p style="font-size: 24rpx; color:#b2b2b2;margin-top: 5rpx;">三小时前</p>
			</view>
		</view>
		<view style="
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				font-size: 30rpx;
				margin: 40rpx 0 30rpx 0 ;
				">
			新年伊始海湾旅游区首家长者运动健康之家对外开放啦!
			为进一步完善”15分钟社区生活圈”，更好地满足海湾旅游区老年人群科学健身需求，盘活社区闲置空间，海湾旅游区对位于新家园小区的一楼活动室进行综合改造提升，首个长者运动健康之家应运而生
		</view>
		<view style="text-align: center;">
			<image style="width: 650rpx; height: 650rpx; border-radius: 10rpx;" src="../../static/find/card.png" mode=""></image>
		</view>
		<view style="float: right;margin-right: 50rpx; display: flex; margin-top: 30rpx;">
			<image style="width: 50rpx; height: 50rpx;" src="../../static/flower-copy.png" mode=""></image>
			<view style="margin-top:8rpx;">
				23
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
		height: 40%;
		background: linear-gradient(#e3c993, #fff);
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
	.banner{
		margin-top: 30rpx;
		padding:0 20rpx 0 20rpx;
	}
	.city{
		padding: 0 20rpx 0 20rpx;
		margin-top: 50rpx;
		.cardswiper{
			margin-top: 40rpx;
			padding: 0 20rpx 0 20rpx;
		}
	}
	.card{
		height: 1000rpx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin: 20rpx 20rpx 0 20rpx;
		padding: 40rpx 20rpx 40rpx 20rpx;
		.head{
			display: flex;
		}
	}
}
</style>
