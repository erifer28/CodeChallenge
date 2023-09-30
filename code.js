    const url="https://jsonplaceholder.typicode.com/users"
    let boton = document.getElementById("boton");
    boton.addEventListener("click",function (){
        let nombre=document.getElementById("nombre");
        let apellido=document.getElementById("apellido");
        let fecha=document.getElementById("fecha");
   

        let data= {
            nombre: nombre.value, 
            apellido: apellido.value,
            fecha: fecha.value,
        }

        fetch(url,{
            method:'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json ; charset=utf-8', }, 
            body: JSON.stringify(data)
        })
    });


