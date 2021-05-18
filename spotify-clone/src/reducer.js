export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE AFTER FINISHED DEVELOPING ----- change back to null
  // token: "BQCPm9cm_2_EM356E36KJ1qEmY056GrL67kgTcmWlZBR2_mDj3mrvpfl3fiLBVcao0nLLKlTwC4YCL7hp8S7U__UZWusF4jIbDH8LCIjHR54kLp2MY2ZUgTqvzkMUuOADAcq1UfqQOnx7FTjllIEfIMCIiAgXr7qYA",
}

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };
    default:
      return state;
  }
}

export default reducer;