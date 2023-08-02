import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Map from './components/views/Map';
import Landing from './components/views/Landing';
import routes from './routes';
import Header from './components/layout/Header/Header';
import SvgSprite from './utility/SvgSpriteLoader';
import './App.less';
import history from './common/history';
import {useSelector} from 'react-redux';
import {
  setHandshakedisableMetadata,
  setHandshakeEnableMetadata,
  setReload,
} from './store/actions/mapActions';

//Svg Sprite
import svgFile from './assets/images/svg/svg-sprite.svg';

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
class AppWrapper extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SvgSprite url={svgFile} />
        <Router history={history}>
          <Header />
          {!this.props.reload && <Map />}

          <main>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes exact key={i} {...route} />
              ))}
              <Route path="*">
                <Landing />
              </Route>
            </Switch>
          </main>
        </Router>
      </React.Fragment>
    );
  }
}

const App = () => {
  const maprReload = useSelector((state) => state.reload);
  

  return (
    <>
      <AppWrapper
        reload={maprReload}
        setHandshakeEnableMetadata={setHandshakeEnableMetadata}
        setHandshakedisableMetadata={setHandshakedisableMetadata}
        setReload={setReload}
      />
    </>
  );
};

export default App;
