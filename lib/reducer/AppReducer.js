export const initialState = {
  config: {},
}

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONFIG':
      return {
        ...state,
        config: action.payload
      }
    default:
      return state
  }
}
