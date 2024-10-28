import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Projects from "./components/Projects";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModal />
          <Projects />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
