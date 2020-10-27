import React, { useState, useEffect } from 'react'

import Tag from '../Tag'

import './TagList.css'

const TagList = (props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = props.tags.filter(tag =>
      tag.name.includes(searchTerm)
    )

    setSearchResults(results)
  }, [props.tags, searchTerm])

  if (props.loading) {
    return (
      <p>Loading...</p>
    )
  } else {
    return (
      <div className='TagList'>
        <input
          type='search'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Search' />
        
        {searchResults.map(tag => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </div>
    )
  }
}

export default TagList