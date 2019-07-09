export const SUBMIT_FORM =  'SUBMIT_FORM'
export const ITEM_LOCALSTORAGE ='ITEM_LOCALSTORAGE'
// ------------------------------------
// Actions
// ------------------------------------
export const submitForm = (values) => {
  return dispatch => {
    console.log(values.movie);
    //let x = values.movie;
    let sum = 0;
    let unum = 0;
    let avg = 0;
     let UserData = JSON.parse(localStorage.getItem('user'));
     console.log('afdsfds',UserData);
     console.log(sum);

    if(UserData != null) {
       UserData.map(function (item) {
         if(item.movie == values.movie) {
           unum+=1;
          sum = sum + Number(item.rating);      
        }
       });
     }

     console.log(unum,sum)
     avg = sum / unum;
     console.log(avg)
    if(unum != 0) {
      switch(avg) {
        case 1.5:
          avg = 1.5;
          break;
        case 2.5:
          avg = 2.5;
          break;
        case 3.5:
          avg = 3.5;
          break;
        case 4.5:
          avg = 4.5;
          break;
        default :
         avg = Math.round(avg);
      }
     console.log("Average",avg)
  } else {
    avg = 0
    console.log('sorry,There is no  rating of this movue ');
  }
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


export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
