import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";

import Link from "../../Link/Link";
import PlayIcon from "../../../assets/player/play_mini.svg";

import "./styles.styl";

class VideoPlay extends Component {
  state = {
    currentBg: ""
  };
  componentDidMount() {
    this.setRandomBg();
  }
  setRandomBg = () => {
    const { data } = this.props;
    const randomNumber = _.random(data.number - 1);
    this.setState({
      currentBg: data.randomBg[randomNumber]
    });
  };
  onMouseEnter = () => {
    const { data } = this.props;
    this.setState({
      currentBg: data.gif
    });
  };
  onMouseLeave = () => {
    this.setRandomBg();
  };
  render() {
    const { data } = this.props;
    const { currentBg } = this.state;
    const blockStyle = classNames("VideoPlay", {
      VideoPlay_alone: data.alone
    });
    return (
      <Link
        {...data.link}
        disableBlank
        noBlank
        bold
        className={blockStyle}
        onMouseLeave={this.onMouseLeave}
        onMouseEnter={this.onMouseEnter}
      >
        {data.text && <div className="VideoPlay__text">{data.text}</div>}
        <div className="VideoPlay__image">
          <img src={currentBg} alt="" />
          <div className="VideoPlay__icon">
            <PlayIcon />
          </div>
        </div>
      </Link>
    );
  }
}

VideoPlay.propTypes = {
  data: PropTypes.object.isRequired
};

export default VideoPlay;
