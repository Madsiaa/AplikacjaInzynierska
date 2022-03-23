import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <h1>Witaj na stronie Diet Info!</h1>
            <h2>Co to za strona?</h2>
            <p>
                Strona Diet Info powstała z myślą o osobach, które ze względów zdrowotnych muszą przejść na dietę eliminacyjną.
                Na początku często ciężko jest się poradzić z nową rzeczywistością, załamuje nas myśl, jak z wielu przyjemności musimy zrezygnować.
                Dlatego znajdziesz tutaj podstawowe informacje o dietach eliminacyjnych oraz produkty i przepisy, które pozwolą znowu cieszyć się z tych samych potraw, jak przed dietą.
            </p>
            <h2>Co tutaj możesz zrobić?</h2>
            <p>
                Na naszej stronie możesz przeglądać produkty, przepisy oraz podstawowe informacje o dietach.
                <br />
                Na podstronie "Produkty" możesz znaleźć spis produktów, które nie zawierają pewnych alergenów. Tam również możesz sprawdzić szczegóły produktu, czyli dokładny skład i wartości odżywcze.
                <br />
                Na podstronie "Diety" znajdziesz podstawowe informacje, co to jest alergia, nietolerancja oraz jakie są choroby układu pokarmowego.
                <br />
                Na podstronie "Przepisy" znajdziesz przepisy na potrawy, które będą odpowiednie dla Twojej diety. Możesz również dodawać własne przepisy!
                <br />
                Aby korzystać ze wszystkich funkcji naszej strony zarejestruj się <Link to="/zarejestruj" className='home-link'>o tutaj</Link>.
                Wtedy będzie dostępna możliwość dodawania własnego przepisu oraz możliwość dodawania produktów i przepisów do ulubionych, dzięki czemu zawsze będziesz mieć pod ręką idealny przepis lub swój ulubiony produkt!

            </p>
        </main>
    );
}
 
export default Home;