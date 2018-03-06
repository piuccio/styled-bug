import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Noto Sans Japanese', 'Helvetica Neue', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
