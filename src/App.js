import { Component } from "react";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component";
import Searchbox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchItem: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchItem: searchString };
    });
  };

  render() {
    // console.log("Reander AppJS Component");

    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchItem);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <Searchbox
          onChangeHandler={this.onSearchChange}
          placeholder={"Search monster..."}
          classname={"monster-search-box"}
        />
        <Cardlist monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
