import React from 'react';
import {connect} from 'react-redux';
import {submitForm} from '../modules/list'
import List from '../components/List'

const mapDispatchToProps = (dispatch) => {
  return {      
    submitForm: (data) => dispatch(submitForm(data))
  }
}

const mapStateToProps =(state) =>{
  return {
    items: state.student.items
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)