# State

State is where the application state is managed. It contains two subdirectories: 

* actions 
* reducers

## Actions

This directory contains the action creators.

* An action creator is a function which returns an action.
* An action is a message which invokes state transformations in reducers.

The return value of an action creator (the action) is automatically broadcast to the reducers within the redux application scope.

## Reducers

Application state is normally divided in several functional pieces.

A reducer is a function which manages a specific piece of the application state.

All reducers are combined in `combineReducers` to return the complete application state.
 
## Conventions

Action type convention:

```
action: {
  type: string (unique key specifying which action this is) 
  payload: object (optional, any parameters go here)
  meta: object (optional, descriptive information about the data) 
}
```

## Examples

### Example state model:

```
+ state
|- logged in user
|- unread messages
```

In this model, we would define two reducers: one for the user and one for the messages.

### Example action creator

actions/user.js:
```
export function userLoggedIn(username) {
  return {
    type: USER_LOGGED_IN,
    payload: { loggedInUser: username }
  };
}

export function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT
  };
}
```

### Example reducer

reducers/user.js:
```
const defaultState = {
  loggedInUser: null
};

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        loggedInUser: action.payload.loggedInUser
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
}
```

## See also

See http://redux.js.org/docs/basics/ for details. 

## Stack

* application state management: `redux`
