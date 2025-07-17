var meds=[];

function addMed(event){
    event.preventDefault();
    const newMed={
        "medName": document.getElementById("fname").value,
        "medQtd": document.getElementById("fqtd").value,
        "medClass": document.getElementById("fclass").value,
    
    }
    meds.push(newMed);

    renderTable();
    console.log(meds);

}

function renderTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = `<th>ID</th>
    <th>Nome do Medicamento</th>
    <th>Quantidade Dispnovel</th>
    <th>Classe</th>
    <th>Remover</th>`;
    ;``

    for(let i=0; i<meds.length; i++) {
    table.innerHTML += `<tr>
    <td>${i}</td>
    <td>${meds[i].medName}</td>
    <td>${meds[i].medQtd}</td>
    <td>${meds[i].medClass}</td>
    <td><img src="remove.png" onclick="removeMed(${i})</td>
    </tr>
    `
    }
}
