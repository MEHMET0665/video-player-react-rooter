import React from 'react';
import Video from './Video'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
​
class Menu extends React.Component {
​
  // handleClick = (e) => {
  //   this.props.chooseVideo(e.target.value)
  // }
​
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="fast">Fast</Link>
                </li>
                <li>
                  <Link to="slow">Slow</Link>
                </li>
                <li>
                  <Link to="cute">Cute</Link>
                </li>
                <li>
                  <Link to="eek">Eek</Link>
                </li>
              </ul>
            </nav>
​
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/fast"  component={Video} />
              <Route exact path="/slow"  component={Video} />
              <Route exact path="/cute"  component={Video} />
              <Route exact path="/eek"  component={Video} />
            </Switch>
          </div>
        </Router>
      {/* <form onClick={this.handleClick}>
        <input type="radio"  name= 'aaa' value='fast'/>Fast
        <input type="radio"  name= 'aaa' value='slow'/>Slow
        <input type="radio"  name= 'aaa' value='cute'/>Cute
        <input type="radio"  name= 'aaa' value='eek'/>Eek
      </form> */}
      </div>
    )
  }
}
​
export default Menu;