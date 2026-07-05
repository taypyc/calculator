import React from "react";
import PropTypes from "prop-types";
export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const containerClass = [
      "inline-flex flex-[1_0_auto]",
      this.props.wide ? "w-1/2" : "w-1/4",
    ].join(" ").trim();

    const buttonClass = [
      "border-0 text-[1.5rem] flex-[1_0_auto] p-0 m-[0_1px_0_0] last:mr-0",
      this.props.orange ? "bg-[#f5923e] text-white" : "bg-[#e0e0e0] text-black",
    ].join(" ").trim();

    return (
      <div className={containerClass}>
        <button className={buttonClass} onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
