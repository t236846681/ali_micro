Page({
   data: {
   activeTab: 2,
   tabs: [
     { title: '选项二', anchor: 'a', number: '6' },
     { title: '选项', anchor: 'b', number: '66' },
     { title: '不超过五字', anchor: 'c', number: '99+' },
     { title: '选项四选项四选项四选项四', anchor: 'd' },
     { title: '选项五', anchor: 'e' },
     { title: '选项六', anchor: 'f' },
   ],
 },
  handleChange(index) {
   this.setData({
     activeTab: index,
   });
 },
 onChange(index) {
   this.setData({
     activeTab: index,
   });
 },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
