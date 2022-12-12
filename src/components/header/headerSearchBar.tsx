import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './header.scss';


export const HeaderSearchBar = () => {
  return (
    <div className="search">
      <TextField
        className='header__search_bar'
        id="outlined-basic"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="cautati produse"
      />
    </div>
  )
}