import React from 'react';

class AddFishForm extends React.Component {
  constructor() {
    super();
    this.addFishForm = this.addFishForm.bind(this);
  }

  addFishForm(event) {
    event.preventDefault();
    console.log(this);

    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }

    this.props.addFish(fish);
  }


  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.addFishForm}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price" />
        <select ref={(input) => this.status = input} name="" id="">
          <option value="Available">Fresh</option>
          <option value="Unvailable">Sold out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Fish Desc" />
        <input ref={(input) => this.image = input} type="text" placeholder="Fish Image" />
        <button type="submit">Add fish</button>
      </form>
    )
  }
};

export default AddFishForm;
