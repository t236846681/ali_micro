Component({
  mixins: [],
  data: {
    listData: [
      {
        icon: 'icon1',
        name: '推荐'
      },
      {
        icon: 'icon2',
        name: '热门'
      },
      {
        icon: 'icon1',
        name: '最新'
      },
      {
        icon: 'icon1',
        name: '主食'
      },
      {
        icon: 'icon1',
        name: '素菜'
      },
      {
        icon: 'icon1',
        name: '荤菜'
      },
            {
        icon: 'icon1',
        name: '单人套餐'
      }
      ,{
        icon: 'icon1',
        name: '双人套餐'
      }
    ],
    menuList: [
      {
        menuItem: [
          {
            img: '1.jpeg'
          },
          {
            img: '2.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '2.jpeg'
          },
          {
            img: '3.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '4.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '1.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '3.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '2.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '1.jpeg'
          }
        ]
      },
      {
        menuItem: [
          {
            img: '5.png'
          }
        ]
      }
    ],
    activeIndex: 0,
    active_background_img: 'active_bg'
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    tapNav(event) {
         this.setData({
          activeIndex: event.currentTarget.dataset.index
      });
    }
  },
});
