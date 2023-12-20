var nemeInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteURL")

var productList =[];
if(localStorage.getItem("productData")!= null){
productList = JSON.parse(localStorage.getItem("productData"))
display();
}
function addProduct(){
    var product = {
        name:nemeInput.value,
        url:urlInput.value,
       
    }
    productList.push(product)
    localStorage.setItem("productData", JSON.stringify(productList));
    display();

}
function visit(x){
    location.href=x[urlInput.value];
}
function deleteProduct(x){
    productList.splice(x,1)
    localStorage.setItem("productData", JSON.stringify(productList));    
    display();
}
function display(){
    var temp = "";
    for(var i = 0;i<productList.length;i++){
        temp += `<tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
      
        <td> <button onclick = "window.open('${productList[i].url}', '_blank');" target = "_blank"  class="btn btn-warning"> Visit</button> </td>
        <td> <button onclick ="deleteProduct(${i})" class="btn btn-danger"> Delete</button> </td>
    </tr> `
    
    }
    document.getElementById("myData").innerHTML = temp;
    
}
//"location.href = '${productList[i].url}'"