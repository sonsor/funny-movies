import {createAction} from "@reduxjs/toolkit";
import * as constants from './constants'

export const setLoading = createAction(constants.SET_LOADING)
export const authenticateUser = createAction(constants.AUTHENTICATE_USER)
export const updateToken = createAction(constants.UPDATE_TOKEN)
export const updateUserData = createAction(constants.UPDATE_USER_PROFILE)
export const setError = createAction(constants.SET_ERROR)
export const logout = createAction(constants.USER_LOGOGUT)