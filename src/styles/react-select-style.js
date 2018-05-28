const reactSelectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: '#f5fbfc',
    border: 'none',
    height: '49px',
    color: '#4a4a4a',
  }),
  placeholder: styles => ({ ...styles, color: '#4a4a4a' }),
  indicatorSeparator: styles => ({ ...styles, display: 'none' }),
};

export default reactSelectStyles;
