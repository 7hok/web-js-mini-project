$("#btn-ask").attr("data-target","#myModal")
// #modalAskingQuestion#modalContactForm
$("#btn-logout").on("click",function () {
    current_user_name = null;
    $("#btn-ask").attr("data-target","#myModal");
});

var order = true;
var current_page = 0;
const newAsc = () => {
        if(order == false){
            main_question =  main_question.reverse();
            order =true;  
        }
           
            
        displayer(0);
}





const newDesc = () => {
    if(order ==true){
        main_question =  main_question.reverse();
        order = false;
    }

    displayer(0);
}



const paginator = (arrayLength) => {  
    let num = arrayLength / 10 + (arrayLength%10 == 0 ? 0 : 1) ;
    let numberList = `<li class="page-item"><a class="page-link">Previous</a></li>`;
    for (let i = 1; i <= num; i++) {
        numberList += `<li class="page-item"><a class="page-link link-number" data-id="${i}">${i}</a></li>`;
    }
    numberList += ` <li class="page-item"><a class="page-link">Next</a></li>`;
    
    $("#paginator").html(numberList);
}

$(function(){
    $(".link-number").on("click",function(){
        current_page = parseInt($(this).attr("data-id"));
        displayer(parseInt($(this).attr("data-id"))-1)
    })
})


/*
function call element to reload



navigation
function call element to reload  */