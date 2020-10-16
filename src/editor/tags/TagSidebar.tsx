import React from 'react'

class TagSidebar extends React.Component {
  render() {
    return (
      <div className='tagEditor'>
        <div>
          <input type='search' />
          <button>+</button>
        </div>
      </div>
    )
  }
}

export default TagSidebar