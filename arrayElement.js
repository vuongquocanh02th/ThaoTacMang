let x=0;
let arr=Array();
function themPhanTuVaoMang(){
    arr[x]=document.getElementById('txtValue').value;
    alert('Element '+arr[x]+' added at index '+x);
    x++;
    document.getElementById('txtValue').value='';
}
function displayArr(){
    let e='<hr/>';
    for(let i=0;i<arr.length;i++){
        e+='Element '+i+' = '+arr[i]+'<br/>';
    }
    document.getElementById('result').innerHTML=e;
}