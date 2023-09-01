import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { menuDropdownOptions, menuItemTypes, menuItems } from '../../../constants/menu';
import MenuFoodItem from '../../molecules/MenuFoodItem/MenuFoodItem';

const Menu = () => {

  const theme = useTheme();

  const menuOptions: string[] = menuDropdownOptions;
  
  const [selectedOption, setSelectedOption] = useState(menuOptions[0]);

  const renderDropdownOptions = () => {
    return menuOptions.map((option, index) => {
      return (
        <MenuItem key={`menu-option-${index}`} value={option}>{option}</MenuItem>
      )
    });
  };

  const renderDropdown = () => {
    return (
      <Grid item md={4} sm={4}>
        <FormControl size='small' color='primary' fullWidth>
          <Select
            labelId="menu-select-label"
            id="menu-select"
            value={selectedOption}
            //label="Tipo"
            onChange={(value) => {
              console.log(value, 'value');

              setSelectedOption(value.target.value)
            }}
            sx={{ color: theme.palette.common.black, backgroundColor: theme.palette.common.yellow, fontWeight: '600' }}
            variant='outlined'
          >
            {renderDropdownOptions()}
          </Select>
        </FormControl>
      </Grid>
    );
  };

  const renderMenu = () => {
    const menuTypeSelected = menuItemTypes[selectedOption as keyof typeof menuItemTypes];
    const menuVisibleItems = menuItems[menuTypeSelected as keyof typeof menuItems]
    return (
      <Grid container justifyContent='center'>
        {menuVisibleItems.map(({name, price, description, image, flag}, index) => {
          return (
            <>
              <MenuFoodItem src={image} title={name} subtitle={`${price} Lps.`} description={description} sm={10} md={10} lg={10} xl={6} index={index} flag={flag}/>
            </>
          )
        })}
      </Grid>
    );
  };


  return (
    <div className='menu'>
      <div className='menu-content'>
        <Typography variant='h2' sx={{ color: theme.palette.common.yellow, padding: '10px 30px' }} align='left'>
          Menu
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
        >
          {renderDropdown()}
          {renderMenu()}
        </Grid>
      </div>
    </div>
  )
}

export default Menu;