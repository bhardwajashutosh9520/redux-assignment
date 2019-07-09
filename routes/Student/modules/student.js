  export const SUBMIT_FORM =  'SUBMIT_FORM'
  export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
// ------------------------------------
// Actions
// ------------------------------------
export const submitForm = (values) => {
  return dispatch => {
    let UserData =  JSON.parse(localStorage.getItem('user'));
    let array = [];
    if(UserData!=null) {
      UserData.map(function (v) {
        array.push(v);
      });
    }
    array.push(values);
    console.log(array);
    // array.sort(function(a,b){
    //   return a.rating - b.rating;
    // });
    localStorage.setItem('user',JSON.stringify(array));

    // localStorage.setItem('key',JSON.stringify(values));
    // dispatch(setItems(values));
  }
}
export const setItems = (values)=>{
  return {
    type: SUBMIT_FORM,
    items: values
  }
}

export const actions = {
  // submitForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
export const ACTION_HANDLERS = {

  [SUBMIT_FORM]:(state,action) => {
    return{
      ...state,
      items: action.items
    }
  }
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  items : []
}


export default function studentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
