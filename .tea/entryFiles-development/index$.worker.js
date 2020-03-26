if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../node_modules/mini-ali-ui/es/list/auto-size-img/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-ali-ui/es/list/list-item/index?hash=a5465b8c889360e3f854461d3ac41cf414aec633');
require('../../components/yhbc-v-tab/yhbc-v-tab?hash=57182c277714d62d76e2200905055cfad9225214');
require('../../pages/index/index?hash=d653c7c150ec850bc6e2266b7934b0d903a96569');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}