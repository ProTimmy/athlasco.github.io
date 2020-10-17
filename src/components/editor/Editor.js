import React from 'react'
import './Editor.css'

import TagSidebar from './tags/TagSidebar'

class Editor extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='video'>Video</div>
        <div className='videoControls'>Video Controls</div>
        <TagSidebar />
      </React.Fragment>
    )
  }
}

export default Editor