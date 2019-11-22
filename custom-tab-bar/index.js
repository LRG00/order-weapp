Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'home-o',
				text: '首页',
				url: '/pages/index/index'
			},
			{
				icon: 'home-o',
				text: '点餐',
				url: '/pages/order/order'
			},
			{
				icon: 'search',
				text: '我',
        url: '/pages/me/me'
			},
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
      console.log(this.data.list[event.detail].url)
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		init() {
			const page = getCurrentPages().pop();
			this.setData({
				active: this.data.list.findIndex(item => item.url === `/${page.route}`)
			});
		}
	}
});
