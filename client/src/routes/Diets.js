const Diets = () => {
    return (
        <main className="diets-wrapper">
            <h1>Diety</h1>
            <h2 className="diets-header">Alergie</h2>
            <p>Alergia pokarmowa to nieprawidłowa reakcja organizmu na dany składnik pokarmu. Nasz układ immunologiczny nadmiernie reaguje na substancje wg. niego obcą czyli alergenu i zaczyna produkować przeciwciała wywołując reakcje alergiczną.</p>
            <p>Najczęściej pojawiające się alergie pokarmowe to:</p>
            <ul>
                <li>Alergeny zwierzęce
                    <ul>
                        <li>białka mleka</li>
                        <li>białka jaj</li>
                        <li>mięso ryb, owoce morza</li>
                    </ul>
                </li>
                <li>Alergeny roślinne
                    <ul>
                        <li>białka pszenicy</li>
                        <li>orzechy i orzeszki ziemne</li>
                        <li>owoce</li>
                        <li>warzywa</li>
                    </ul>
                </li>
            </ul>
            <p>Główne objawy alergii: bóle głowy, swędzenie, łzwanienie oczy, zaparcia, nudności, zaburzenia koncentracji, opuchlizna, itp.</p>
            
            <h2 className="diets-header">Nietolerancje</h2>
            <p>Nietolerancja pokarmowa pojawia się wtedy gdy nasz układ odpornościowy nie bierze udziału w negatywnej reakcji lecz nasz organizm nie produkuje odpowiedzialnego enzymu odpowiedzialnego za rozkład danego związku.</p>
            <p>Najczęściej pojawiające się nietolerancje pokarmowe:</p>
            <ul>
                <li>laktoza - w naszym organiźmie brakuje enzymu laktozy</li>
                <li>histamina - w naszym organiźmie brakuje enzymu DAO</li>
                <li>inny niż laktoza, cukier, np. fruktoza</li>
            </ul>

            <h2 className="diets-header">Choroby układu pokarmowego</h2>
            <p>Przykładowe choroby układu pokarmowego:</p>
            <ul>
                <li>Celiakia - inaczej choroba trzewna, inicjowana przez spożycie glutenu. Gluten doprowadza do zniszczenia kosmków jelitowych co wywołuje zaburzenie wchłanania witamin i minerałów. Jedynym lekarstwem jest prowadzenie diety bezglutenowej do końca życia.</li>
                <li>Choroba Duringa - skórna postać celiaki, objawia się opryszczkowym zapaleniem skóry, krostkamio, pęcherzami, rumieniem lub bąblami. Wywoływane są po spożyciu glutenu. Tak jak w przypadku celiakii, lekarstwem jest dieta bezglutenowa do końca życia.</li>
                <li>Zespół jelita drażliwego - </li>
                <li>Choroba Leśniewskiego-Crohna - </li>
            </ul>
        </main>
    );
}
 
export default Diets;