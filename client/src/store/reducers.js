import { combineReducers } from "redux-immutable";

import auth from "./modules/user/reducer";
import videos from './modules/video/reducer'

const combine = reducers => {
  return combineReducers({
      auth,
      videos,
      ...reducers
  })
}

export default combine