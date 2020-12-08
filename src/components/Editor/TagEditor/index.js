import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { setToggleAddModal, getTagList } from '../../../redux/actions'

import tagEditorStyles from './tagEditorStyles'
import {
  withStyles,
  IconButton,
  Tooltip
} from '@material-ui/core'
import { Add } from '@material-ui/icons'

import AddTagModal from './AddTagModal'

const TagEditor = (props) => {
  const { classes, dispatch } = props
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getTagList()
  })

  useEffect(() => {
    console.log(searchTerm)
  }, [searchTerm])

  return (
    <div className={classes.tagEditor}>
      <div className={'inputArea'}>
        <input
          type='search'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder='Search' />
        <Tooltip title='Add New Tag'>
          <IconButton
            onClick={() => dispatch(setToggleAddModal(true))}
          ><Add /></IconButton>
        </Tooltip>
      </div>

      <AddTagModal />
    </div>
  )
}

export default withStyles(
  tagEditorStyles
)(connect()(TagEditor))