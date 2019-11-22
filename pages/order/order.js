

Page({
  data: {
    mainActiveIndex: 0,
    activeId: [],
    items: [
      {
        // 导航名称
        text: '111',
      },
      {
        // 导航名称
        text: '222',
      },
      {
        // 导航名称
        text: '333',
      }
    ],
    max: 2
  },
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  onClickItem({ detail = {} }) {
    const { activeId } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({ activeId });
  },
  onShow() {
    this.getTabBar().init();
  }
})
