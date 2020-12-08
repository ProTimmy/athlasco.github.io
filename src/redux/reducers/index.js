import { combineReducers } from 'redux'

import { authReducer as auth } from './auth'
import { tagsReducer as tags } from './tags'
import { videoReducer as video } from './video'

export default combineReducers({ auth, tags, video })