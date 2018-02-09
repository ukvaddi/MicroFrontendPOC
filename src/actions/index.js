import { GET_USER_PERMISSIONS, PRODUCT_SELECTED, ADD_USER_PERMISSION } from '../constants/ActionTypes'
import * as productApi from '../api/product'
import { getProductDetails } from '../api/product';

export function getUserPermission(permission){
    return {
        type:GET_USER_PERMISSIONS,
        payLoad:permission
    };
}

export const selectProduct = product => (dispatch, getState) => {
    var state=getState();
    const { userpermissions } = getState();
    console.dir(userpermissions);
    if(userpermissions.length < 1){
        userpermissions.push({user:userpermissions.length + 1, permissions:{
            name:'H',
            price:'R',
            sku:'R',
            status:'W',
            code:'W',
            decs:'R'
        }});
        dispatch({
            type:ADD_USER_PERMISSION,
            payLoad:userpermissions})
    }
    
    fetch('http://test-container.hyd.ftd.com:6080/apis/v3/getacls', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    formName: 'myForm',
                    role: 'ADMIN',
                    siteId: 'FTD'
                })
                }).then((response) => response.json())
                .then((responseron) => {
console.dir(responseron.hashmap)
                    var permission=state.userpermissions.find(x=>x.user==1).permissions;
                    dispatch({
                        type:GET_USER_PERMISSIONS,
                        payLoad:permission})
                
                })
                .catch((error) => {
                console.error(error);
                });

            
                fetch('http://test-container.hyd.ftd.com:6085/apis/v1/getproduct', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pid: 'P1'
                })
                }).then((response) => response.json())
                .then((responseron) => {
                    dispatch({
                        type:PRODUCT_SELECTED,
                        payLoad:responseron.product})
                
                })
                .catch((error) => {
                console.error(error);
                });
                
    };
  

export function addUserPermission(userPermissions){
    return {
        type:ADD_USER_PERMISSION,
        payLoad:userPermissions
    };
}