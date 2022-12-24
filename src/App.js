import Header  from "./layouts/Header";
import content from "./data/content.json";
import GlobalStyle from "./globalStyles";

function App({ children }) {
  return (
    <div className="Payment-table">
      <GlobalStyle />
      <Header content={content.header.title} />
      <main>
        { children }
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
