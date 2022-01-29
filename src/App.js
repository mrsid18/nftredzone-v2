import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import Layout2 from './layouts/Layout2';


// Views 
import Home from './views/Home';
import Matchup from './views/Matchup';
import League from './views/League';
import Schedule from './views/Schedule';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.scrollReveal = React.createRef();
  }

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.scrollReveal.current.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.scrollReveal.current.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref={this.scrollReveal}
        children={() => (
          <Switch>
             <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
             <AppRoute exact path="/league" component={League} layout={Layout2}/>
             <AppRoute exact path="/matchups" component={Matchup} layout={Layout2}/>
             <AppRoute exact path="/schedule" component={Schedule} layout={Layout2}/>
           </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);