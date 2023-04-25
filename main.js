
var data = document.getElementById('data');
var submit = document.getElementById('submit');
var list = document.querySelector(".list-area");

submit.addEventListener('click', function() {
    if(data.value == "") {
        console.log("no data invoked");
    }else{
        addList(data);
        data.value = "";
    }
})

var addList = (data) => {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
    ${data.value}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener("click",
     function () {
        this.classList.toggle("done");
     }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )
    list.appendChild(listItem);
}
