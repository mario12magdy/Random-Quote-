var nemeInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteURL")

var siteList =[];
if(localStorage.getItem("siteList")!= null){
siteList = JSON.parse(localStorage.getItem("siteList"))
display();
}
function addSite(){
    var site = {
        name:nemeInput.value,
        url:urlInput.value,
       
    }
    siteList.push(site)
    localStorage.setItem("siteList", JSON.stringify(siteList));
    display();

}
function visit(x){
    location.href=x[urlInput.value];
}
function deleteSite(x){
    siteList.splice(x,1)
    localStorage.setItem("siteList", JSON.stringify(siteList));    
    display();
}
function display(){
    var temp = "";
    for(var i = 0;i<siteList.length;i++){
        temp += `<tr>
        <td>${i}</td>
        <td>${siteList[i].name}</td>
      
        <td> <button onclick = "window.open('${siteList[i].url}', '_blank');" target = "_blank"  class="btn btn-warning"> Visit</button> </td>
        <td> <button onclick ="deleteSite(${i})" class="btn btn-danger"> Delete</button> </td>
    </tr> `
    
    }
    document.getElementById("myData").innerHTML = temp;
    
}
