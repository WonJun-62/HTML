window.onload = pageLoad;
function pageLoad(){
    var b1 = document.getElementById("create");
    b1.onclick = createTable;
}
function createTable(){
    var table = document.getElementById("tablehere");
    var tableChild = document.createElement("table");
    tableChild.setAttribute("border","2");
    tableChild.innerHTML = maketable();
    table.appendChild(tableChild);
}
function maketable(){
    var tableHTML = '<table border="2">';
    tableHTML += '<tr style="background-color: blue">';
    for(var a=2; a<10; a++){
        tableHTML += `<th> ${a}단 </th>`;
    }
    tableHTML += '</tr>';
    for(var i=1; i<10; i++){
        tableHTML += '<tr>';
        for(var j=2; j<10; j++){
            tableHTML += `<td>${j}x${i}=${j*i}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
}