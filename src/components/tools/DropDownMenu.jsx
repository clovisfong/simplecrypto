import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container, Box, Grid, Typography, Link } from '@mui/material';



const DropDownMenu = ({ handleData, sortOptions }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        setAnchorEl(null);
    };

    const handleSort = (event) => {
        setAnchorEl(null);
        handleData(event.target.attributes.value.value)
    };

    return (
        <Box>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    p: 0,


                }}
            >
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}


            >
                {sortOptions?.map((item, i) =>
                    <MenuItem key={item + i} value={item?.key} onClick={handleSort}>{item?.key}</MenuItem>
                )}
            </Menu>
        </Box>
    );
}

export default DropDownMenu