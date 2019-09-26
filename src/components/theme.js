import React from 'react';

const Theme = ({big, dark, children}) => (
    <div className={`theme ${dark ? 'theme--dark' : 'theme--light' } ${big ? 'theme--big' : 'theme--small'}`}>
      { children }
    </div>
);

const ThemeToggle = ({ dark, setDark}) => (
  <div className="toggle pdfMode">
    <input id="theme-toggle" className="toggle-checkbox" type="checkbox" checked={dark} onChange={() => setDark(!dark)}/>
    <label className="toggle-label" htmlFor="theme-toggle">
      <span
        className="toggle-inner"
        sm-on=" "
        sm-off=" "
        lg-on="Dark"
        lg-off="Light"
      >
        </span>
      <span className="toggle-switch"></span>
    </label>
  </div>
);

export { Theme, ThemeToggle };