window.onload = function(){


    document.getElementById("btn").addEventListener("click", function(){
        
        //Get the id of product the user entered
       productId = document.getElementById("ListId").value;
        fetchData(showdata);

       // document.getElementById("productName").innerHTML = //The product name received from API
    
      insertName = document.getElementById("name").innerText;

      nameFound = document.getElementById("nameFound").innerText;


    });





function fetchData() {
    console.log('entered fetchdata')
    var name = $("#name").val();
    console.log(name);
   fetch("https://api.github.com/search/users?q="+ name)
   .then(function(response) {
    return response.json()
   }).then(function(data){
       showdata(data);
    console.log(data.items)
   })


};

function showdata(data){

// var list = "List of people with the same name" + data.items

 for(var i =0 ; i < data.items.length ; i++ ){
    
$("#nameFound").append("<tr><td>"+ "ID : "+ data.items[i].id + " //////////// " + "Username : " + data.items[i].login+"</td></tr>");


}
 }




}