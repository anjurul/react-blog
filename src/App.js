import React  from 'react';
import Header from './Component/Header/Header';
import { Home } from './Component/Home/Home';
import BlogDetails from './Component/BlogDetails/BlogDetails';
import  NoMatch from './Component/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/blog">
          <Home/>
        </Route>
        <Route exact path="/blogDetails/:postId">
          <BlogDetails />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
