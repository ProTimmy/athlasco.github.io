import React, { useState, useEffect } from 'react'

import { AuthUserContext, withAuthorization } from '../Session'

const authCondition = authUser => !!authUser

function Editor() {
  // const [tags, setTags] = useState([])
  // const [loading, setLoading] = useState(false)

  // const ref = firebase.firestore().collection('tags')

  // function getTags() {
  //   setLoading(true)

  //   ref.onSnapshot((querySnapshot) => {
  //     const items = []

  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id)
  //       items.push(doc)
  //     })
  //     setTags(items)
  //     setLoading(false)
  //   })
  // }

  // useEffect(() => {
  //   getTags()
  // }, [])

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }
  
  return (
    <AuthUserContext.Consumer>
      { authUser => (
        <div>
          <h1>Editor</h1>
          {/* { tags.map((tag) => (
            <h2 key={tag.id}>{tag.id}</h2>
          ))} */}
        </div>
      )}
    </AuthUserContext.Consumer>
  )
}

export default withAuthorization(authCondition) (Editor)