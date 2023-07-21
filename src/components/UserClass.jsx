import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <p>count : {count}</p>
        <button
          onClick={() => {
            // this.setState({ count: count + 1 });
            console.log(document.body);
            this.setState({ count: this.state.count + 1 });
            console.log(count);
          }}
        >
          Count ++
        </button>
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <p>Contact: contact@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
