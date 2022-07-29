import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class Cardlist extends Component {
  render() {
    // console.log(this.props.monsters);
    // console.log("Render CardList Component");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // const { id, name, email } = monster;
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default Cardlist;
