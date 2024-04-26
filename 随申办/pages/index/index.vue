<template>
	<view class="content">
		<!-- 时间背景 -->
		<view class="bgc" :style="{ backgroundImage: 'url(' + imageURL + ')' }">
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
			<!-- 时间 -->
			<view class="time">下午好！</view>
		</view>
		<!-- 天气 -->
		<view class="weather">
			<image style="width: 120rpx; height: 120rpx" src="../../static/index/太阳.png" mode=""></image>
			<view style="color: #fff; font-size: 28rpx; margin-left: 40rpx">0°C~ 6°C 晴到多云</view>
		</view>
		<!-- 功能 -->
		<view class="feature">
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column">
				<view
					style="
						width: 100rpx;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background: linear-gradient(to right, #ffce73, #ffb556);
						border-radius: 50%;
					"
				>
					<image style="width: 60rpx; height: 60rpx" src="../../static/index/gongjiao.png" mode=""></image>
				</view>
				<p style="color: #000; font-size: 24rpx">公交到站查询</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column">
				<view
					style="
						width: 100rpx;
						height: 100rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						background: linear-gradient(to right, #ffce73, #ffb556);
						border-radius: 50%;
					"
				>
					<image style="width: 60rpx; height: 60rpx" src="../../static/index/fangzi.png" mode=""></image>
				</view>
				<p style="color: #000; font-size: 24rpx">三金账单</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/tianyuan.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">居住证办理</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/shoucang.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">红途</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/wurenji.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">无人机备案</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/shandian.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">快处易赔</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/yiyuan.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">个人社保缴费</p>
			</view>
			<view class="cardworp" style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
			    <view style="width: 100rpx; height: 100rpx; display: flex; align-items: center; justify-content: center; background: linear-gradient(to right, #ffce73, #ffb556); border-radius: 50%;">
			        <image style="width: 60rpx; height: 60rpx;"src="../../static/index/fangzidichan.png" mode=""></image>
			    </view>
			    <p style="color: #000; font-size: 24rpx;">儿科服务查询</p>
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="banner">
			<swiper style="height: 200rpx;"  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image style="height: 200rpx; width: 100%;border-radius: 35rpx;" src="../../static/index/banner1.png" mode=""></image>
					</view>
				</swiper-item>
				<swiper-item>
					<image style="height: 200rpx; width: 100%;border-radius: 35rpx;" src="../../static/index/banner2.png" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image style="height: 200rpx; width: 100%;border-radius: 35rpx;" src="../../static/index/banner3.png" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 精选主题 -->
		<view class="theme">
			<p>
				<view style="font-size: 40rpx; font-weight: 999;">
					精选主题
				</view>
				<text style="color: #bcbec0;">更多</text>
			</p>
				<view>
						<scroll-view class="cardswiper" scroll-x="true" style="height: 300rpx;white-space: nowrap; ">
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx; border-radius: 24rpx;"  src="../../static/index/banner7.png" mode=""></image>
							</view>
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx;border-radius: 24rpx;"  src="../../static/index/banner8.png" mode=""></image>
							</view>
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx; border-radius: 24rpx;"  src="../../static/index/banner9.png" mode=""></image>
							</view>
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx; border-radius: 24rpx;"  src="../../static/index/banner7.png" mode=""></image>
							</view>
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx;border-radius: 24rpx;"  src="../../static/index/banner8.png" mode=""></image>
							</view>
							<view style="height: 300rpx;width: 32%;display: inline-block; margin-right: 20rpx;">
								<image style="width: 100%; height: 300rpx; border-radius: 24rpx;"  src="../../static/index/banner9.png" mode=""></image>
							</view>
						</scroll-view>
					</view>
			<view style="padding: 0 20rpx 0 20rpx; margin-top: 60rpx;">
				<swiper style="height: 300rpx;"  :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image style="height: 300rpx; width: 100%;" src="../../static/index/banner4.png" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item>
						<image style="height: 300rpx; width: 100%;" src="../../static/index/banner5.png" mode=""></image>
					</swiper-item>
					<swiper-item>
						<image style="height: 300rpx; width: 100%;" src="../../static/index/banner6.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 热点关注 -->
		<view class="attention">
			<view style="display: flex;justify-content: space-evenly;  margin-bottom: 10rpx; border-bottom: 1rpx solid #998865;" >
				<title style="font-weight: 999; padding-bottom: 20rpx; border-bottom: 2px solid #ffb556;">热点关注</title>
				<title style="font-weight: 999; padding-bottom: 20rpx;">政策图解</title>
			</view>
			<view>
				<view class="title"  style="padding:20rpx 0 20rpx 0;">
					<image style="width: 30%; height: 140rpx; border-radius: 15rpx;" src="../../static/index/title1.png" mode=""></image>
					<view style="width: 65%;">
						<title style="overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;">
									寒潮蓝色预警拉响，全市大部地区48小时最低气温降幅可达8度以上
						</title>
						<p style="margin-top: 10rpx; color: #cbbec0;">2024-01-21     上海发布</p>
					</view>
				</view>
				<view class="title"  style="padding:20rpx 0 20rpx 0;">
					<image style="width: 30%; height: 140rpx; border-radius: 15rpx;" src="../../static/index/title2.png" mode=""></image>
					<view style="width: 65%;">
						<title style="overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;">
									寒潮蓝色预警拉响，全市大部地区48小时最低气温降幅可达8度以上
						</title>
						<p style="margin-top: 10rpx; color: #cbbec0;">2024-01-21     上海发布</p>
					</view>
				</view>
				<view class="title" style="padding:20rpx 0 20rpx 0;s">
					<image style="width: 30%; height: 140rpx; border-radius: 15rpx;" src="../../static/index/title3.png" mode=""></image>
					<view style="width: 65%;">
						<title style="overflow: hidden;
									text-overflow: ellipsis;
									display: -webkit-box;
									-webkit-line-clamp: 2;
									-webkit-box-orient: vertical;">
									寒潮蓝色预警拉响，全市大部地区48小时最低气温降幅可达8度以上
						</title>
						<p style="margin-top: 10rpx; color: #cbbec0;">2024-01-21     上海发布</p>
					</view>
				</view>
			</view>
		</view>
		<!-- 查看更多 -->
		<title style="margin:20rpx 0 60rpx 0; font-size: 40rpx; color: #7d7d7d; display: flex; justify-content: center;">查看更多</title>
		<view style="text-align: center; font-size: 24rpx; color: #7d7d7d;">
			------------------------随时随地 * 一生相伴------------------------
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      imageURL: '../../static/index/backgroundimg.png',
    };
  }
};

</script>

<style lang="scss">
.content {
	.bgc {
		height: 700rpx;
		background-size: cover;

		.search {
			padding: 0 28rpx;
			font-size: 30rpx;
			color: #fff;
			display: flex;
			text-align: center;
			justify-content: space-between;
			> p {
				width: 90%;
				opacity: 0.8;
				backdrop-filter: blur(60rpx);
				border-radius: 6rpx;
			}
		}
		.card {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-evenly;
		}
		.time {
			margin-top: 60rpx;
			margin-left: 60rpx;
			color: #fff;
			font-size: 60rpx;
		}
	}
	.weather {
		float: right;
		width: 80%;
		height: 120rpx;
		margin-top: -80rpx;
		display: flex;
		align-items: center;
		background-color: #cbb486;
		border-radius: 50px 0 0 50px;
	}
	.feature {
		margin-top: 80rpx;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		.cardworp{
			margin-bottom: 30rpx;
			width: 180rpx;
		}
	}
	.banner{
		margin-top: 30rpx;
		padding:0 20rpx 0 20rpx;
	}
	.theme{
		margin-top: 40rpx;
		>p{
			padding:0 20rpx 0 20rpx;
			display: flex;
			justify-content: space-between;
		}
		.cardswiper{
			margin-top: 40rpx;
			padding: 0 20rpx 0 20rpx;
		}
	}
	.attention{
		margin-top: 30rpx;
		padding: 0 20rpx 0 20rpx;
		>view{
			.title{
				display: flex;
				justify-content: space-between;
				border-bottom: 1rpx solid #998865;
			}
		}
	}
}
</style>
