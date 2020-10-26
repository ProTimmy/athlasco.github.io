import React from 'react'

import Tag from '../Tag'

const TagList = (props) => {
  if (props.loading) {
    return (
      <p>Loading...</p>
    )
  } else {
    return (
      <div>
        {props.tags.map(tag => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </div>
    )
  }
}

export default TagList