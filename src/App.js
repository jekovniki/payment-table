import Header  from "./layouts/Header";
import content from "./data/content.json";
import GlobalStyle from "./globalStyles";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App({ children }) {
  return (
    <div className="Payment-table">
      <GlobalStyle />
      <Header content={content.header.title} />
      <Main>
        { children }
      </Main>
      <Footer name={content.footer.name} description={content.footer.description}/>
    </div>
  );
}

export default App;
