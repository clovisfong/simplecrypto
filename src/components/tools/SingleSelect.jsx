import Multiselect from "multiselect-react-dropdown"
import { Popover } from "react-tiny-popover"
import { useState } from "react"

const SingleSelect = ({ handleClick, sortOptions }) => {

    const [isPopoverOpen, setIsPopoverOpen] = useState(false)


    return (
        <>
            <Popover
                isOpen={isPopoverOpen}
                positions={['bottom']} // if you'd like, you can limit the positions
                padding={0} // adjust padding here!
                align={'start'}
                reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
                onClickOutside={() => setIsPopoverOpen(false)} // handle click events outside of the popover/target here!
                content={() => ( // you can also provide a render function that injects some useful stuff!
                    <Multiselect
                        displayValue="key"
                        // onKeyPressFn={function noRefCheck() { }}
                        // onRemove={(event) => { console.log('hi') }}
                        // onSearch={(event) => console.log(event)}
                        onSelect={handleClick}
                        options={sortOptions}
                        customCloseIcon='none'
                        style={{
                            searchBox: {
                                width: '10rem',
                                background: 'white'
                            },
                            optionContainer: {
                                width: '6rem'

                            },
                            color: 'white',
                        }}
                        singleSelect
                    />
                )}
                containerStyle={{
                    backgroundColor: 'lightgrey',
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    display: 'flex',


                }}

            >
                <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>+</div>
            </Popover>




        </>
    )
}

export default SingleSelect