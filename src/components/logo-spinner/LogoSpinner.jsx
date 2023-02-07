import React, { useState } from "react";
import logo from "../../logo.svg";
import PropTypes from "prop-types";
import "./LogoSpinner.css";

export const LogoSpinner = ({ logoSrc, isSpinning, opacity, size }) => {
  const [isSpinStop, setIsSpinStop] = useState(false);
  const spinnerClassName = isSpinning && !isSpinStop ? "App-logo-spin" : "";

  return (
    <img
      onClick={() => setIsSpinStop((s) => !s)}
      src={logoSrc}
      className={`App-logo ${spinnerClassName}`}
      alt="logo"
      style={{ opacity, height: `${size}px` }}
    />
  );
};

LogoSpinner.propTypes = {
  logoSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isSpinning: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.number,
};

LogoSpinner.defaultProps = {
  logoSrc: logo,
  isSpinning: true,
  opacity: 1,
  size: 150,
};
