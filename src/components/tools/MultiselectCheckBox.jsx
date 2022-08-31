import Multiselect from "multiselect-react-dropdown"
const MultiselectCheckBox = ({ handleClick, sortOptions }) => {


    return (
        <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck() { }}
            onRemove={handleClick}
            onSearch={function noRefCheck() { }}
            onSelect={handleClick}
            options={sortOptions}
            showCheckbox
        />
    )
}

export default MultiselectCheckBox