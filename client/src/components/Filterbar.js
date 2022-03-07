const Filterbar = () => {
    return ( 
        <div className="filterbar-wrapper">
            <label htmlFor="search">Szukaj: </label>
            <input type="search" name="search" id="searchbar" />

            <label htmlFor="option1">Bez laktozy</label>
            <input type="checkbox" name="option1" id="chkbx" />

            <label htmlFor="option2">Bez glutenu</label>
            <input type="checkbox" name="option2" id="chkbx" />

            <label htmlFor="option3">Bez orzechów</label>
            <input type="checkbox" name="option3" id="chkbx" />

            <label htmlFor="option4">Bez cukru</label>
            <input type="checkbox" name="option4" id="chkbx" />

            <label htmlFor="option5">Wegetariańskie</label>
            <input type="checkbox" name="option5" id="chkbx" />

            <label htmlFor="option6">Wegańskie</label>
            <input type="checkbox" name="option6" id="chkbx" />

            <input type="submit" value="Wyszukaj wyniki" id="submit" />
        </div>
    );
}
 
export default Filterbar;