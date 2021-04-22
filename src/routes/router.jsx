import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routelist';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route
          exact
          key={route.path}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Router;
