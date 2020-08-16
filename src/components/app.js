import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainPage, PhotoPageContainer } from '.';

const App = () => (
  <Switch>
    <Route path="/" component={MainPage} exact />
    <Route
      path="/photo-page/:id"
      render={({ match }) => {
        const { id } = match.params;
        return <PhotoPageContainer photoId={id} />;
      }}
      exact
    />
    <Route
      path="/:tag1?/:tag2?/:tag3?/:tag4?/:tag5?/:tag6?/:tag7?/:tag8?/:tag9?/:tag10?"
      render={({ match }) => <MainPage tags={match.params} />}
    />
  </Switch>
);

App.propTypes = {};

export default App;
