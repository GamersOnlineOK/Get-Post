var array=[];
const urlPost='https://jsonplaceholder.typicode.com/posts';
const urlGet="https://jsonplaceholder.typicode.com/comments";
$("#btnEnviar").click(function (e) { 
    e.preventDefault();
    var titulo=document.getElementById("title").value;
    var cuerpo=document.getElementById("body").value;
    const dataPost={title:titulo,body:cuerpo};
    console.log(dataPost);
    
    $.ajax({
    type: "POST",
    url: urlPost,
    data: dataPost,
    dataType: "json",
    success: function (data,estado) {
        console.log(estado);
        console.log("genial");
        console.log(data.title);
        console.log(data.body);
        $("#post-body").prepend(`
        <div class="card mt-2 col-6 m-1 " style="width: 18rem;">
            <div  class="card-body">
            <h6>Respuesta ID:${data.id}</h6>
            <h5 class="card-title" id="title-post">${data.title} </h5>
            <p class="card-text" id="body-post">${data.body}</p>
            </div>
        </div>`);
    }
    });

});

$("#btnGet").click(function (e) { 
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: urlGet,
        dataType: "json",
        success: function (response) {
            for (const data of response) {
             $("#post-body").prepend(`
            
            <div class="card mt-2 col-6 m-1" style="width: 18rem;">
                <div  class="card-body">
                <h6>Respuesta ID:${data.id}</h6>
                <h5 class="card-title" id="title-post">${data.name} </h5>
                <p class="card-text" id="body-post">${data.body}</p>
                </div>
            </div>`);
               
            }
            
            
        }
    });

});

