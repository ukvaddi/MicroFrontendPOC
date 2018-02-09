

export function getProductDetails(pid){  
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
return responseron;
})
.catch((error) => {
console.error(error);
});
}