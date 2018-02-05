export default function selectProduct(product){
    //selectProduct is an actioncreator and needs to return an action which is an object with type prpoertry 
    return {
        type:'BOOK_SELECTED',
        payLoad:product
    };
}