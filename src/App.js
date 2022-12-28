import React from 'react';

import Header  from "./layouts/Header";
import Main from './layouts/Main';
import Footer from "./layouts/Footer";
import content from "./data/content.json";
import GlobalStyle from "./globalStyles";
import Navigation from './pages/navigation';

function App({ children }) {
  return (
      <div className="Payment-table">
        <GlobalStyle />
        <Header content={content.header.title} />
        <Main>
          <Navigation>
              { children }
          </Navigation>
        </Main>
        <Footer name={content.footer.name} description={content.footer.description}/>
      </div>
  );
}



export default App;
