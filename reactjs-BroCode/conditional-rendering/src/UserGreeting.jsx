import PropTypes from 'prop-types'

function UserGreeting(props) {
    // Cek jika username kosong atau hanya whitespace
    const displayName = props.username && props.username.trim() !== "" ? props.username : "Guest";

    const welcomeMessage =  <h2 className="welcome-message">
                            welcome {displayName}
                            </h2>;

    const logInPrompt = <h2 className="logIn-prompt">
                        Please log in to continue
                        </h2>;

    return(
        <>
        {props.isLoggedIn ? welcomeMessage : logInPrompt}
        </>
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting