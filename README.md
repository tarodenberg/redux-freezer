#redux-freezer

Redux middleware that freezes store state after each update.  HTML elements referenced in the store are not frozen.

`
import {freezer} from 'redux-freezer';

const store = compose(
    applyMiddleware(freezer)
)(createStore)(rootReducer);
`

Requires lodash.
