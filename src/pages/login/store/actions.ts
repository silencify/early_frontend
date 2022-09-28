const actions = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',

    login: (data: Record<string, string>, resolve: (value: string) => void, reject: (value: string) => void) => ({
        type: actions.LOGIN,
        data,
        resolve,
        reject
    })
}

export default actions;
