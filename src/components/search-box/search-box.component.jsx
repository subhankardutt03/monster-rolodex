import { Component } from "react";
import "./search-box.styles.css";

class Searchbox extends Component {
  render() {
    return (
      <div>
        <input
          type="search"
          className={`search-box ${this.props.classname}`}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default Searchbox;
