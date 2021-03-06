
import React from 'react';
import {Switch, Route, Redirect, routerRedux,Router} from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './routes/app';

const {ConnectedRouter} = routerRedux;

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => require('./routes/error')
  });
  const routes = [
    {
      path: '/Home',
      models: () => [import('./models/HomeModel/Home')],
      component: () => import('./routes/HomePage/Home')
    },{
      path:'/Category',
      models:()=>[import('./models/CategoryModel/Category')],
      component:()=>import('./routes/CategoryPage/Category')
    },{
      path:'/ShopCart',
      models:()=>[import('./models/ShopCartModel/ShopCart')],
      component:()=>import('./routes/PersonCenterPage/PersonCenter')
    },{
      path:'/PersonCenter',
      models:()=>[import('./models/PersonCenterModel/PersonCenter')],
      component:()=>import('./routes/PersonCenterPage/PersonCenter')
    }
  ];
  return (
    <ConnectedRouter history={history}>
    <App>
    <Switch>
    <Route exact path="/" render={() => (<Redirect to="/Home" />)} />
      {
        routes.map(({path, ...dynamics}, key) => (
          <Route key={key}
                 exact
                 path={path}
                 component={dynamic({
                   app,
                   ...dynamics,
                 })}
          />
        ))
      }
    <Route exact path="/error" component={error} />
    </Switch>
    </App>
    </ConnectedRouter>
  )
};
export default Routers;

