// import React, { Component } from 'react';

// class Main extends Component {
//   render() {
//     return (
//       <section id="main" className="wrapper style2">
//         <div className="title">The Details</div>
//         <div className="container">
//           {/* Image */}
//           <a href="#" className="image featured">
//             <img src="/images/pic01.jpg" alt="pic01" />
//           </a>
//           {/* Features */}
//           <section id="features">
//             <header className="style1">
//               <h2>Dolor consequat feugiat amet veroeros</h2>
//               <p>Feugiat dolor nullam orci pretium phasellus justo</p>
//             </header>
//             <div className="feature-list">
//               <div className="row">
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-comment">
//                       Mattis velit diam vulputate
//                     </h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-refresh">
//                       Lorem ipsum dolor sit veroeros
//                     </h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-picture-o">
//                       Pretium phasellus justo lorem
//                     </h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-cog">Tempus sed pretium orci</h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-wrench">
//                       Aliquam consequat et feugiat
//                     </h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//                 <div className="col-6 col-12-medium">
//                   <section>
//                     <h3 className="icon fa-check">
//                       Dolore laoreet aliquam mattis
//                     </h3>
//                     <p>
//                       Eget mattis at, laoreet vel et velit aliquam diam ante,
//                       aliquet sit amet vulputate et magna feugiat laoreet vel
//                       velit lorem.
//                     </p>
//                   </section>
//                 </div>
//               </div>
//             </div>
//             <ul className="actions special">
//               <li>
//                 <a href="#" className="button style1 large">
//                   Get Started
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="button style2 large">
//                   More Info
//                 </a>
//               </li>
//             </ul>
//           </section>
//         </div>
//       </section>
//     );
//   }
// }

// export default Main;

//
//
//
//
//
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchUser } from '../../actions/userActions';
import { setToken } from '../../actions/tokenActions';
import {
  playSong,
  stopSong,
  pauseSong,
  resumeSong
} from '../../actions/songActions';
import '../../App.css';

import SpotHeader from './spotComponents/SpotHeader';
import SpotFooter from './spotComponents/SpotFooter';
import UserPlaylists from './spotComponents/UserPlaylists';
import MainView from './spotComponents/MainView';
import ArtWork from './spotComponents/ArtWork';
import MainHeader from './spotComponents/MainHeader';
import SideMenu from './spotComponents/SideMenu';

class Main extends Component {
  static audio;

  componentDidMount() {
    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        'https://accounts.spotify.com/authorize?client_id=bb182c38c0ae4642991aa0985236a3ed&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/';
    } else {
      this.props.setToken(hashParams.access_token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      this.props.fetchUser(nextProps.token);
    }

    if (this.audio !== undefined) {
      this.audio.volume = nextProps.volume / 100;
    }
  }

  stopSong = () => {
    if (this.audio) {
      this.props.stopSong();
      this.audio.pause();
    }
  };

  pauseSong = () => {
    if (this.audio) {
      this.props.pauseSong();
      this.audio.pause();
    }
  };

  resumeSong = () => {
    if (this.audio) {
      this.props.resumeSong();
      this.audio.play();
    }
  };

  audioControl = song => {
    const { playSong, stopSong } = this.props;

    if (this.audio === undefined) {
      playSong(song.track);
      this.audio = new Audio(song.track.preview_url);
      this.audio.play();
    } else {
      stopSong();
      this.audio.pause();
      playSong(song.track);
      this.audio = new Audio(song.track.preview_url);
      this.audio.play();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="left-side-section">
            <SideMenu />
            <UserPlaylists />
            <ArtWork />
          </div>

          <div className="main-section">
            <SpotHeader />
            <div className="main-section-container">
              <MainHeader
                pauseSong={this.pauseSong}
                resumeSong={this.resumeSong}
              />
              <MainView
                pauseSong={this.pauseSong}
                resumeSong={this.resumeSong}
                audioControl={this.audioControl}
              />
            </div>
          </div>

          <SpotFooter
            stopSong={this.stopSong}
            pauseSong={this.pauseSong}
            resumeSong={this.resumeSong}
            audioControl={this.audioControl}
          />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  token: PropTypes.string,
  fetchUser: PropTypes.func,
  setToken: PropTypes.func,
  pauseSong: PropTypes.func,
  playSong: PropTypes.func,
  stopSong: PropTypes.func,
  resumeSong: PropTypes.func,
  volume: PropTypes.number
};

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token,
    volume: state.soundReducer.volume
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchUser,
      setToken,
      playSong,
      stopSong,
      pauseSong,
      resumeSong
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
