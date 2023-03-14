const Countries = ({countries, updateVisitedList})=> {

    const handleClick = (e) => {
        updateVisitedList(countries.name.common)
    }
    return (
        <li>
            {countries.name.common}
            <button onClick={handleClick}>visited</button>
        </li>

    )
}

export default Countries;