#redux-freezer

Redux middleware that freezes store state after each update.  HTML elements referenced in the store are not frozen.

Usage:
```
import {freezer} from 'redux-freezer';

const store = compose(
    applyMiddleware(freezer)
)(createStore)(rootReducer);
```

IE9+.  Uses lodash.
