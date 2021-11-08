

                  const getUsers = () => {
                    axios.get('https://curd-assig.herokuapp.com//users')
                        .then(response => {
                            showData(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }


                var rIndex,
                table = document.getElementById("main");
var getUser = ()=>{

if(!emptyUser()){ 
 var
   name = document.getElementById("name").value,
   email = document.getElementById("email").value,
   address = document.getElementById("add").value,
   newrow = table.insertRow(table.length);

 cel1= newrow.insertCell(0),
 cel2= newrow.insertCell(1),
 cel3= newrow.insertCell(2);

cel1.innerHTML=name;
cel2.innerHTML=email;
cel3.innerHTML=address;
 putUser();
}
}

emptyUser = () =>{
    var empty = false,
      name= document.getElementById("name").value 
      email= document.getElementById("email").value
      add= document.getElementById("add").value
   
   if(name === ""){
       alert("Name cannot be empty");
       empty=true
   }
  else if(email === ""){
       alert("Email cannot be empty");
       empty=true
   }
   else if(add === ""){
       alert("Address cannot be empty");
       empty=true
   }    
   return empty;
   }



 putUser =()=>{
   
    for(var i=1 ; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex;

            console.log(rIndex)
            document.getElementById("name").value = this.cells[0].innerHTML;
            document.getElementById("email").value = this.cells[1].innerHTML;
            document.getElementById("add").value = this.cells[2].innerHTML;
        }
    }
}
putUser();

editUser = ()=>{
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        add = document.getElementById("add").value;

        if(!emptyUser()){
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = email;
        table.rows[rIndex].cells[2].innerHTML = add;
}
}

delUser = () =>{
    table.deleteRow(rIndex);

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("add").value = ""
}



