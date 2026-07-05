import React from "react";
import PropTypes from "prop-types";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="bg-[#858694] text-white text-right font-[200] flex-[0_0_auto] w-full">
        <div className="text-[2.5rem] pt-[0.2rem] pr-[0.7rem] pb-[0.1rem] pl-[0.5rem]">{this.props.value}</div>
      </div>
    );
  }
}
