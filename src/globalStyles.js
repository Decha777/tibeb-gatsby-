import { createGlobalStyle } from 'styled-components';
export const theme = {
    fonts: {   // needs font loader package
        sans: [
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
        serif: ['Courier Prime','Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    colors: {
        black: '#000',
        white: '#fff',
        grey: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
        },
        primary: {
            100: '#f0fff4',
            200: '#c6f6d5',
            300: '#9ae6b4',
            400: '#68d391',
            500: '#48bb78',
            600: '#38a169',
            700: '#2f855a',
            800: '#276749',
            900: '#22543d',
        },
    },
    boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        xl2: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    },
    variables: {
        transition: 'all 0.3s linear',
        spacing: '0.2rem',
        radius: '0.25rem',
        'max-width': '1170px',
        'fixed-width': '700px',
    },
}
export const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  box-sizing:   border-box;
}
*:focus {
  outline: 0;
}
/* Chrome Dev Tools MEDIA QUERY MANAGER
0-320 s-mobile 
320-375 m-mobile
375-425 l-mobile
425-768 tab
768-1024 laptop
1024-1440 l-laptop
1440-2560 4k

*/
/* 
0-600px:     phone
600-900px:   Tablet portrait
900-1200px:  Tablet landscape
[1200-1800] is where our normal styles applay
1800px +:    Big desktop 
*/
html {
  font-size: 62.5%;  /* 1 rem = 10px  => 10px/16px =62.5% */
  scroll-behavior:smooth;
}

@media (min-width: 160em) {  /* 4k  => 2560px/16px = 160em */
  html {
    font-size: 150%;  /* 1 rem = 20px  => 20px/16px =130% */
   
  }
}
@media (max-width: 112.5em) {  /* big desktop  => 1800px/16px = 112.5em */
  html {
   font-size: 100% ;  /* 1 rem = 16px  => 16px/16px =100% */
 
  }
}
@media (max-width: 90em) {  /*  desktop  => 1440px/16px = 90em */
  html {
    font-size: 87.5% ;  /* 1 rem = 14px  => 14px/16px =87.5% */
  
  }
}
@media (max-width: 64em) {  /* laptop  => 1024px/16px = 64em */
  html {
    font-size: 75% ;  /* 1 rem = 12px  => 12px/16px =75% */
     
  }
}
@media (max-width: 56.25em) { /* Tablet landscap   => 900px/16px = 56.25em */
  html { 
    font-size: 68.75%  ;  /* 1 rem = 11px  => 11px/16px =68.75%   */
    
  }
}
@media (max-width: 48em) { /* Tablet portrait  => 768px/16px = 48em */
  html { 
     font-size: 56.25% ;  /* 1 rem = 9px  => 9px/16px =56.25%   */
     
  }
}

body {
  font-size: 1.4rem;
  font-family:${({ theme }) => theme.fonts.serif};
  background:${({ theme }) => theme.colors.grey[1]};
}
@media (max-width: 48em) { /* Tablet portrait  => 768px/16px = 48em */
  body { 
     padding: 0;
  }
}
a,
a:hover,
a:active,
a:visited {
  text-decoration: none;
}
ul {
  list-style: none;
}
button {
  cursor: pointer;
}
img {
  max-width: 100%;
  max-height: 100%;
}
`;
