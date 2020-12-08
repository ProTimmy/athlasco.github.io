const tagEditorStyles = () => ({
  tagEditor: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '20%',
    minWidth: '250px',
    borderRight: 'black 2px solid',
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
    '& *': {
      padding: '10px',
    },
    '& input': {
      flexGrow: 1,
      borderRadius: '10px',
    },
    '& :not(input)': {
      alignSelf: 'center',
    },
  },
});

export default tagEditorStyles;
