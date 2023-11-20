window.onload= function(){
    
    //note to self
    //variable "country" ends up empty in both event listeners if they dont have their own local initialization
    //probably due to the country initialization in the js code happening before the user can fill out the form on the HTML?

    var countryButton = document.getElementById("lookup");
    var cityButton = document.getElementById("cityLookup");
    var country= document.getElementById('country').value.trim();
    //const Url= "http://localhost/info2180-lab5/world.php?country=";

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
        Request.open("GET","http://localhost/info2180-lab5/world.php?country="+ country);
        Request.send();
    })

    cityButton.addEventListener("click", function(event){
        event.preventDefault();
        //debuggin
        //alert('CITY BUTTON HAS BEEN CLICKED!');

        var country= document.getElementById('country').value.trim();
        
        if (country==""){
            document.getElementById("result").innerText= "Please enter The name of a country before pressing!!"
        }
        else{
         

            const Request= new XMLHttpRequest();

            Request.onreadystatechange= function(){
                //debugging
                //console.log('Ready state is achieved!!');
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
            Request.open("GET","http://localhost/info2180-lab5/world.php?country="+ country + "&lookup=cities");
            Request.send();
            
        }
        
        
    })

    
}
