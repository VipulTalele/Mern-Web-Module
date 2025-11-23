import React, { Component } from "react";

class ToDoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      todoList: []
    };
  }

  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  addItem = () => {
    if (this.state.item.trim() === "") return;

    const newItem = {
      id: Math.random(),
      text: this.state.item
    };

    this.setState({
      todoList: [...this.state.todoList, newItem],
      item: ""
    });
  };

  deleteItem = (id) => {
    const updatedList = this.state.todoList.filter((t) => t.id !== id);
    this.setState({ todoList: updatedList });
  };

  render() {
    return (
      <div style={{ width: "200px", border: "1px solid blue", padding: "10px" }}>
        <h3>TODO LIST</h3>

        <input
          type="text"
          placeholder="add item..."
          value={this.state.item}
          onChange={this.handleChange}
        />

        <button onClick={this.addItem}>ADD</button>

        <div style={{ marginTop: "10px" }}>
          {this.state.todoList.map((t) => (
            <p
              key={t.id}
              onClick={() => this.deleteItem(t.id)}
              style={{ cursor: "pointer" }}
            >
              {t.text}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoComponent;
