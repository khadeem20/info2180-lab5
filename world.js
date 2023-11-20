
window.onload= function(){
    
    var countryButton = document.getElementById("lookup");
    var cityButton = document.getElementById("cityLookup")
    var country= document.getElementById('country').value.trim();
    const Url= "http://localhost/info2180-lab5/world.php?country=";

    countryButton.addEventListener("click", function(event){
        event.preventDefault();
        var country= document.getElementById('country').value.trim();
        
        const Request= new XMLHttpRequest();

        Request.onreadystatechange= function(){
            console.log('Ready state is achieved!!');
            if (Request.readyState === XMLHttpRequest.DONE) {
                if (Request.status === 200) {
                    let response = Request.responseText;
                    //debug
                    //console.log(response);
                    document.getElementById("result").innerHTML = response;
                } 
                else{
                    let response = "YOUR CODE IS Rubbish Bruv!!";
                    document.getElementById("result").innerHTML = response;
                }
            }
        }
        Request.open("GET",Url + country);
        Request.send();
    })

    cityButton.addEventListener("click", function(event){
        event.preventDefault();

        if(country !== ""){
            const xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    document.getElementById("result").innerHTML = this.responseText;
                }
            }
            xhttp2.open("GET", Url + country + "&lookup=cities");
            xhttp2.send();
        }
    })



}