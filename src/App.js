import { Container } from "@material-ui/core";
import { Component } from "react";
import Header from "./conponants/Header";
import Todo from "./conponants/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Container fixed>
          <Header />
          <Todo />
        </Container>
      </div>
    );
  }
}

export default App;
