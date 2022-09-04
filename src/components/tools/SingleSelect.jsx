import Multiselect from "multiselect-react-dropdown"
import { useState } from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Button, Popover, Box } from '@mui/material';

const SingleSelect = ({ handleClick, sortOptions }) => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handlePop = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handlePop}>
                +
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',

                }}

            >
                <Box sx={{
                    p: '3rem'
                }}>
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
                                background: 'pink',
                                fontSize: '0.5rem',
                                border: 'none'
                            },
                            optionContainer: {
                                width: '6rem'

                            },
                            color: 'white',

                        }}
                        singleSelect
                    />
                </Box>
            </Popover>

        </>



    )
}

export default SingleSelect



