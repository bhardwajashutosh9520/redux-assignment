import React from 'react'
import { Field, reduxForm} from 'redux-form'

class SimpleForm extends React.Component {
  constructor(props){
    super(props);
    this.save = this.save.bind(this);
    this.state = {
      message: ""
    } ;
  }
  save(values) {
    this.props.submitForm(values);
  }
  render() {
    console.log(" ---- " , this.props.items );
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(this.save)}>
        <div>
        <label>Select Movie
        <Field name="movie" component="select">
            <option />
            <option>Artical 15</option>
            <option value="Bharat">Bharat</option>
            <option>URI</option>
            <option>Total Dhamaal</option>
            <option>Badla</option>
            <option>Kesari</option>
            <option>Kalank</option>
            <option>Gulli Boy</option>
            <option>Kabir Singh</option>
            <option>Super 30</option>
        </Field></label>
        </div>
        <button type="submit">Check Rating</button>
      </form>
      <h2> {this.state.message} </h2>
    </div>
    );
  }
}

export default reduxForm({
  form:'form',
})(SimpleForm)