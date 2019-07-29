// Initial state is the place you define all initial values for the Redux store of the feature.
// In the 'standard' way, initialState is defined in reducers: http://redux.js.org/docs/basics/Reducers.html
// But when application grows, there will be multiple reducers files, it's not intuitive what data is managed by the whole store.
// So Rekit extracts the initial state definition into a separate module so that you can have
// a quick view about what data is used for the feature, at any time.

// NOTE: initialState constant is necessary so that Rekit could auto add initial state when creating async actions.
const initialState = {
  collapsed:false,
  routeList : [
      {
        id: '1',
        icon: 'laptop',
        name: '首页',
        route: '/dashboard',
      },
      {
        id: '2',
        breadcrumbParentId: '1',
        icon: 'shop',
        name: '商户管理',
        route: '/admin',
      },
      {
        id: '3',
        breadcrumbParentId: '1',
        icon: 'pay-circle',
        name: '支付配置',
        route: '/admin1',
      },
      {
        id: '4',
        menuParentId: '3',
        breadcrumbParentId: '3',
        icon: 'laptop',
        name: '支付列表',
        route: '/admin2',
      },
      {
        id: '5',
        menuParentId: '3',
        breadcrumbParentId: '3',
        icon: 'laptop',
        name: '积分列表',
        route: '/admin3',
      },]
};

export default initialState;
