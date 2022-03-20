const AccountDetails = () => {
    let userName = localStorage.getItem('userName');
    let userRole = localStorage.getItem('userRole');

    return (
        <div className="accoutn-details">
            <h1>Witaj { userName }!</h1>
            <p>Twoja rola to: { userRole }</p>
        </div>
    );
}
 
export default AccountDetails;