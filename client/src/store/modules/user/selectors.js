import {createSelector} from "reselect";

const AuthSelector = () => state => state.get('auth')

export const isUserLoggedIn = () =>
    createSelector(
        AuthSelector(),
        state => Boolean(state.get('access_token'))
    )

export const getProfile = () =>
    createSelector(
        AuthSelector(),
        state => state.get('profile').toJS()
    )

export const getMetas = () =>
    createSelector(
        AuthSelector(),
        state => [
            Boolean(state.get('loading')),
            Boolean(state.get('error'))
        ]
    )