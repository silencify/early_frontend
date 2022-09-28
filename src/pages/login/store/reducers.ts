import actions from './actions';

interface InitialState {
    loading: boolean
}

const initialState: InitialState = {
    loading: false,
}

const reducer = (state: InitialState = initialState, action: Record<string, string | number>) => {
    switch (action.type) {
        case actions.LOGIN:
            return { ...state, loading: true }

        case actions.LOGIN_SUCCESS:
            return { ...state, loading: false }

        default:
            return { ...state }
    }
}

export default reducer;

