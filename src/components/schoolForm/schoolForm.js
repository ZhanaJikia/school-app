import React from "react";


export class SchoolForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      schoolName: "",
      address: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  };

  render() {
    const { schoolName, address } = this.state;

    return (
      <div className="split left">
        <form onSubmit={this.handleSubmit}>
          <input
            name="schoolName"
            type="text"
            placeholder="Type School Name..."
            value={schoolName}
            onChange={this.handleChange}
          />
          <input
            name="address"
            type="text"
            placeholder="Type School Address..."
            value={address}
            onChange={this.handleChange}
          />
          <button type="submit" onSubmit={This.setstate({schoolName: "", address: ""})}>Add</button>
        </form>
      </div>
    );
  }
}
