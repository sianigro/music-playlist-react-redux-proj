// import React, { Component } from 'react';
// import { Header, Intro, User, Main, Highlights, Footer } from '../containers';

// export default class Home extends Component {
//   render() {
//     return (
//       <div id="page-wrapper">
//         <React.Fragment>
//           <Header />
//           <User />
//           <Intro />
//           <Main />
//           <Highlights />
//           <Footer />
//         </React.Fragment>
//       </div>
//     );
//   }
// }

//Multi Page Version:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Intro, Main, Highlights, Footer } from '../containers';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div id="page-wrapper">
        <React.Fragment>
          <Header />
          <Intro />
          <Main />
          <Highlights />
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
