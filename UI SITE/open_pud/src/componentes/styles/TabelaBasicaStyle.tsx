import { ThemeOptions } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

export const tabelaOptions : ThemeOptions = {
    components: {
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            padding: '8px',
          fontSize: '16px', // Adjust the font size as needed
          textAlign: 'center', // Center the text
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            padding: '8px',
          },
        },
      },
      MUIDataTableToolbar: {
        styleOverrides: {
          root: {
            backgroundColor: '#001F3F',
            color: 'white',

          },

          icon: {

            color: "#white",
            '&:hover': {
              color: "HOVERCOLOUR"
            }
          }
        }
      },
      MUIDataTableSearch: {
        styleOverrides: {
          searchText: {
            color: 'white',
            textDecorationColor: 'white'

          },
          main: {
            color: 'white',
            textDecorationColor: "white",
          },
          clearIcon: {
            color: 'white',
            textDecorationColor: "white",
          },
          searchIcon: {
            color: 'white',
            textDecorationColor: "white",
            padding: '8px'
          }
        }
      },
      MUIDataTableFooter:{
        styleOverrides: {
          root: {
            backgroundColor: '#001F3F',
            color: 'white',
            
          },
          
        },
      },
      MUIDataTablePagination:{
        styleOverrides: {
          toolbar: {
            backgroundColor: '#001F3F',
            color: 'white',
            '& .MuiIconButton-root': {
              color: 'white', // Set the color of the icons
            }
          },

        }
      }

    },
  }
  export const useStylesSearchField = makeStyles((theme) => ({
    searchField: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#e0e0e0', // Set the default outline color
        },
        '&:hover fieldset': {
          borderColor: '#BBDEFB', // Whitish-blue outline color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#2196F3', // Whitish-blue outline color when focused
        },
      },
      '& input': {
        color: 'white', // Set the text color to white
      },
    },
  }));