import propTypes from 'prop-types';




function UserGreeting(props) {
    const wellcome =  <h2 className='wellcome-message'>wellcome {props.userName}</h2>;
    const loginPrompt = <h2 className='login-prompt'>please logged in to couninue</h2>
    return props.isLoggedIn ? wellcome: loginPrompt;
}
UserGreeting.propTypes = {
    isLoggedIn: Boolean,
    userName: String,

}


UserGreeting.defaultProps = {
     isLoggedIn:false,
     userName: "guest",
     
    }



export default UserGreeting;

