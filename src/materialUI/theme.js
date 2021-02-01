import { createMuiTheme } from "@material-ui/core"
// import TTNormsPro from '../assets/fonts/TTNormsPro-Thin.woff2';
// const ttNormsPro = {
//         fontFamily: 'TTNormsPro',
//         fontStyle: 'normal',

//         fontWeight: 400,
//         src: `
//           local('TTNormsPro'),
//           local('TTNormsPro-Regular'),
//           url(${TTNormsPro}) format('woff2')
//         `,
//         unicodeRange:
//                 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };


export const theme = createMuiTheme({
        palette: {
                primary: {
                        light: '#ffafb2',
                        main: '#ffffff',
                        dark: '#b24f56',
                        contrastText: '#000',
                },
                // secondary: {
                //         light: '#ff7961',
                //         main: '#f44336',
                //         dark: '#ba000d',
                //         contrastText: '#e77e83',
                // },
                // grey: {
                //         A700: '#979797',
                // },
        },
        typography: {
                fontFamily: "TTNormsPro, sans-serif",
                h4: {
                        fontWeight: "500",
                        fontSize: '30px',
                        color: '#FFFFFF'
                },
        },
        overrides: {

        },

})