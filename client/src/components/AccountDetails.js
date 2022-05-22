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
            {userFavProduct !== 'null'
                ? <p>Ilość ulubionych produktów: { favProductArr.length }</p>
                : <p>Ilość ulubionych produktów: 0</p>
            }
            {userFavRecipe !== 'null'
                ? <p>Ilość ulubionych przepisów: { favProductArr.length }</p>
                : <p>Ilość ulubionych przepisów: 0</p>
            }
        </div>
    );
}
 
export default AccountDetails;