# Containers

Containers is where the components and the application state come together.

* component: renders HTML (react)
* state: manages application state (redux)

Container: connects the two.

## Example

containers/user-bar.js:
```
import { connect } from 'react-redux';
import { UserBar } from 'components/user-bar';
import { userLoggedIn, userLoggedOut } from 'state/actions/user';

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  };
}

const mapDispatchToProps = {
  dispatchUserLoggedIn: userLoggedIn,
  dispatchUserLoggedOut: userLoggedOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBar);
```

This example will make the following props available in the `UserBar` component:

* `this.props.loggedInUser` the username of the logged in user
* `this.props.dispatchUserLoggedIn()` sets the logged in user on the application state
* `this.props.dispatchUserLoggedOut()` clears the logged in user on the application state

## Stack

* react-redux
