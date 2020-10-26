import React, { useState, useEffect } from 'react'

import { AuthUserContext, withAuthorization } from '../Session'
import TagList from './TagList'

const authCondition = authUser => !!authUser

class TAG {
  constructor(id, data) {
    this.id = id
    this.name = data.name
    this.data = data
  }

  getParent() {
    const parent = this.data.parent
    
    if (parent != null) {
      return new TAG(parent.id, parent.data())
    } else {
      console.log("No parent")
    }
  }
}

const Editor = (props) => {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const unsubscribe = props.firebase
      .tags().onSnapshot(snapshot => {
        if (snapshot.size) {
          const tags = []

          snapshot.forEach(doc => {
            const tag = new TAG(doc.id, doc.data())

            tags.push({...tag})
          })

          setTags(tags)
          setLoading(false)
        } else {
          // Set error
          setLoading(false)
        }
      })

    return () => unsubscribe()
  }, [props.firebase])

  return (
    <AuthUserContext.Consumer>
      { authUser =>
        <div>
          <TagList
            tags={tags}
            loading={loading} />
        </div>
      }
    </AuthUserContext.Consumer>
  )
}

export default withAuthorization(authCondition) (Editor)