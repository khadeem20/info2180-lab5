
window.onload= function(){
    
    var button = document.getElementById("lookup");

    var country= document.getElementById('country').value.trim();

    button.addEventListener("click", function(event){
        event.preventDefault();
        var country= document.getElementById('country').value.trim();
        const Url= "http://localhost/info2180-lab5/world.php?country=";
        const Request= new XMLHttpRequest();

        Request.onreadystatechange= function(){
            console.log('Ready state is achieved!!');
            if (Request.readyState === XMLHttpRequest.DONE) {
                if (Request.status === 200) {
                    let response = Request.responseText;
                    console.log(response);
                    document.getElementById("result").innerText = response;
                } 
                else{
                    let response = "YOUR CODE IS Rubbish Bruv!!";
                    document.getElementById("result").innerText = response;
                }
            }
        }
        Request.open("GET",Url + country);
        Request.send();
    })


}