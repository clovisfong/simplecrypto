import Multiselect from "multiselect-react-dropdown"
const SortTransactions = ({ handleClick, sortOptions }) => {

    return (
        <>
            <Multiselect
                displayValue="key"
                // onKeyPressFn={function noRefCheck() { }}
                // onRemove={(event) => { console.log('hi') }}
                // onSearch={(event) => console.log(event)}
                onSelect={handleClick}
                options={sortOptions}
                singleSelect
                style={{
                    searchBox: {
                        width: '100px',
                    },
                    optionContainer: {
                        width: '100px'
                    }


                }}

            />
        </>
    )
}

export default SortTransactions