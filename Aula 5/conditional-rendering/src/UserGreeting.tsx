import PropTypes from 'prop-types'

function UserGreeting(props) {
    const loggedInContent = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPopup = <h2 className="login-popup">Please log in!</h2>

    return (
        props.isLoggedIn ? loggedInContent : loginPopup
    );
}

UserGreeting.proptypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

export default UserGreeting