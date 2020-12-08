const videoControlStyles = () => ({
  controls: {
    display: 'flex',
    flexBasis: '30%',
    flexDirection: 'column',
    minHeight: '250px',
  },
  controlBar: {
    backgroundColor: '#cccccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& *': {
      cursor: 'pointer',
    },
  },
});

export default videoControlStyles;
