function addTodo(){
    const input = document.getElementById("todo-input");

    const text = input.value.trim(); //trim = 문자열 앞 뒤의 공백 제거

    addToServer(text);

    if(text !== ""){
        const list = document.getElementById("todo-list");
        const item = document.createElement("li");
        item.textContent = text;
        item.style.cursor = "pointer";
        item.addEventListener("click", function(){
            item.classList.toggle("complete");
        });

        const deleteBtn = document.createElement("Button");
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = "삭제";
        deleteBtn.onclick = function(){
            list.removeChild(item);
        };
        item.appendChild(deleteBtn);

        list.appendChild(item);
        input.value = "";
    }

    document.getElementById("todo-input").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            addTodo();
            event.preventDefault();
        }
    });
}

function addToServer(todo){
    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbwrV3URGdwTn3M-el_jnzd4dqsftGZnoZP9-Ky_CSiQ7ZEbKkjpu4hd44aM0lnU0who/exec",
        data: { 원준: todo },
        success: function(response){
            alert("신청이 성공적으로 접수되었습니다.");
        },
        error: function(){
            alert("서버 오류로 신청이 실패하였습니다.");
        },
    });
}