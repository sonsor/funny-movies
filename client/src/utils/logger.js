import { createLogger } from 'redux-logger'
import { Iterable } from 'immutable'

export const logger = createLogger({
    stateTransformer: (state) => {
        const newState = {};
        const stateObj = state.toObject();

        for (const i of Object.keys(stateObj)) {
            if (Iterable.isIterable(stateObj[i])) {
                newState[i] = stateObj[i].toJS();
            } else {
                newState[i] = stateObj[i];
            }
        }

        return newState;
    }
});