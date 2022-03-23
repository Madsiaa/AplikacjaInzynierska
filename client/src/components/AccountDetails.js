const AccountDetails = () => {
    let userName = localStorage.getItem('userName');
    let userRole = localStorage.getItem('userRole');
    let userCreateDate = localStorage.getItem('userCreateDate');
    let userFavProduct = localStorage.getItem('userFavProduct');
    let userFavRecipe = localStorage.getItem('userFavRecipe');
    let favProductArr = userFavProduct.split(',');
    let favRecipeArr = userFavRecipe.split(',');

    return (
        <div className="accoutn-details">
            <h1>Witaj { userName }!</h1>
            <p>Twoja rola to: { userRole }</p>
            <p>Konto zostało utworzone: { userCreateDate }</p>
            <p>Ilość ulubionych produktów: { favProductArr.length }</p>
            <p>Ilość ulubionych przepisów: { favRecipeArr.length }</p>
        </div>
    );
}
 
export default AccountDetails;