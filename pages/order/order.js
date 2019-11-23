

Page({
  data: {
    mainActiveIndex: 0,
    content: 'ccc',
    activeId: [1,2,3],
    items: [
      {
        // 导航名称
        text: '111',
        id: 1,
      },
      {
        // 导航名称
        text: '222',
        id: 2,
      },
      {
        // 导航名称
        text: '333',
        id: 3,
      },
      {
        // 导航名称
        text: '111',
        id: 14,
      },
      {
        // 导航名称
        text: '222',
        id: 32,
      },
      {
        // 导航名称
        text: '333',
        id: 31,
      },
      {
        // 导航名称
        text: '111',
        id: 12,
      },
      {
        // 导航名称
        text: '222',
        id: 21,
      },
      {
        // 导航名称
        text: '333',
        id: 36,
      }
    ],
    max: 2
  },
  onClickNav({ detail = {} }) {
    console.log(detail)
    this.setData({
      mainActiveIndex: detail.index || 0,
      content: this.data.items[detail.index || 0].text
    });
    console.log(this.data.mainActiveIndex)
  },

  onClickItem({ detail = {} }) {
    const { activeId } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }
    console.log( 'ppppp')
    this.setData({ activeId });
  },
  onShow() {
    this.getTabBar().init();
  }
})
