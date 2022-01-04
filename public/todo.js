//Ingresa nuevas tareas a partir del evento "enter"

$(".txtb").on("keyup", (e)=> {
    if(e.keyCode == 13 && $(".txtb").val() != ""){
        let task = $("<div class= 'task'></div>").text($(".txtb").val());
        value= $(".txtb").val();

        pushing();
        storaging();

        del = $("<i class= 'fas fa-trash-alt'></i>").click(function(){
                let p = $(this).parent();
                p.fadeOut(()=>{
                    p.remove();
                    deleteEntry();
                });
        });

        task.append(del);
        $(".notcomp").append(task);
        $(".txtb").val("");
    }
});

//Trae del local storage la información guardada
const a = localStorage.getItem("activities");

const activities = JSON.parse (a) || [];

window.onload = showActivities(activities);

//Muestra las tareas almacenadas en el storage
function showActivities(list) {
    list.forEach(item =>{

        const entry = $(`<div class= 'task'></div>`).text(item);
        value= item;
        let del = $("<i class= 'fas fa-trash-alt'></i>").click(function(){
            entry.fadeOut(()=>{
                entry.remove();
                deleteEntry(item);
            })
        })
        entry.append(del);
        $(".notcomp").append(entry);
        $(".txtb").val("");
    })
}

function pushing(){
    activities.push(value);
}
function storaging(){
    localStorage.setItem("activities", JSON.stringify(activities));
}
function deleteEntry(event){
    let index = activities.indexOf(event);
    activities.splice(index,1);
    storaging();
}



