import * as types from './../types';

const navigate = (dispatch, title) => {
    dispatch({
        type: types.SET_PAGE,
        title,
    })
}
const setData = (dispatch, data) => {
    dispatch({
        type: types.SET_DATA,
        data,
    })
}
export { navigate, setData };