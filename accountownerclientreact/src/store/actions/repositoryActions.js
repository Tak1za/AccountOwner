import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

//GET DATA
const getDataSuccess = data =>{
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}

export const getData = (url, props) =>{
    console.log(url);
    return (dispatch) =>{
        axios.get(url).then(response => {
            dispatch(getDataSuccess(response.data));
        })
        .catch(error => {
            //handle the error when implemented
        })
    }
}

//POST DATA
const postDataSuccess = response => {
    return{
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}

export const postData = (url, obj, props) => {
    return (dispatch) => {
        axios.post(url, obj).then(response => {
            dispatch(postDataSuccess(response));
        })
        .catch(error => {
            //handle the error when implemented
        })
    }
}

//PUT DATA
const putDataSuccess = response =>{
    return{
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}

export const putData = (url, obj, props) =>{
    return (dispatch) => {
        axios.put(url, obj).then(response => {
            dispatch(putDataSuccess(response))
        })
        .catch(error => {
            //handle the error when implemented
        })
    }
}

//DELETE DATA
const deleteDataSuccess = response => {
    return{
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}

export const deleteData = (url, props) =>{
    return (dispatch) => {
        axios.delete(url).then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            //handle the error when implemented
        })
    }
}