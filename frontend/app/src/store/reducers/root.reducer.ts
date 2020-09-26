const initState = {
  title: 'Super value!',
};

export const rootReducer = (state: any = initState, action: any) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>