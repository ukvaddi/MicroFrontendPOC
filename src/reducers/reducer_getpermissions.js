
  import { GET_USER_PERMISSIONS, PRODUCT_SELECTED, ADD_USER_PERMISSION } from '../constants/ActionTypes'
  import * as actions from '../actions/index';
  import { createStore } from 'redux'

  const initialState = {
    
  }

  const userPermissions=[
    {user:1, permissions:{
        name:'H',
        price:'R',
        sku:'R',
        status:'W',
        code:'W',
        decs:'R'
    }},
    {user:2, permissions:{
        name:'H',
        price:'R',
        sku:'W',
        status:'R',
        code:'W',
        decs:'R'
    }}
];

export default function permission(state = initialState, action) {
    switch (action.type) {
      case GET_USER_PERMISSIONS:
        return action.payLoad
      default:
        return state
    }
  }

  