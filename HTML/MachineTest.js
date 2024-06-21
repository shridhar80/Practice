$(document).ready(function () {
    $('#field').change(function () {
        const selectedOption = $(this).val();
        const $inputBox = $('#value');
       
        switch (selectedOption) {
            
            case 'EmpName':
                $inputBox.attr('type', 'text');
                $inputBox.val(''); 
                $inputBox.removeAttr('pattern'); 
                $inputBox.removeAttr('title'); 
                $inputBox.prop('disabled', false);
                break;
            case 'EmpId':
                $inputBox.attr('type', 'text');
                $inputBox.val(''); 
                $inputBox.attr('pattern', '\\d*'); 
                $inputBox.attr('title', 'Please enter a valid integer');
                $inputBox.prop('disabled', false);
                break;

            case 'Salary':
                $inputBox.attr('type', 'text');
                $inputBox.val(''); 
                $inputBox.attr('pattern', '\\d*'); 
                $inputBox.attr('title', 'Please enter a valid integer');
                $inputBox.prop('disabled', false);
                break;    

            case 'Joining Date':
                $inputBox.attr('type', 'date');
                $inputBox.val('');
                $inputBox.removeAttr('pattern'); 
                $inputBox.removeAttr('title'); 
                $inputBox.prop('disabled', false);
                break;
            default:
                $inputBox.attr('type', 'text');
                $inputBox.val(''); 
                $inputBox.removeAttr('pattern'); 
                $inputBox.removeAttr('title'); 
                $inputBox.prop('disabled', false); 
        }
    });
});
let srNo = 1;
let editingRow = null;
function addDetails() {

    let tableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    let field = document.getElementById('field').value;
    let operator = document.getElementById('operator').value;
    let value = document.getElementById('value').value;


    let newRow = tableBody.insertRow();
    let srNoCell = newRow.insertCell(0);

    let fieldCell = newRow.insertCell(1);
    let operatorCell = newRow.insertCell(2);
    let valueCell = newRow.insertCell(3);
    let actionCell = newRow.insertCell(4);

    srNoCell.textContent = srNo++;
    fieldCell.textContent = field;
    operatorCell.textContent = operator;
    valueCell.textContent = value;

    let actionContainer = document.createElement('div');
    actionContainer.classList.add('action-container');

    let editAnchor = document.createElement('a');
    editAnchor.href = "#";
    editAnchor.textContent = 'Edit';
    editAnchor.onclick = function (event) {
        event.preventDefault();
        editRow(newRow);
    };

    let deleteAnchor = document.createElement('a');
    deleteAnchor.href = "#";
    deleteAnchor.textContent = 'Delete';
    deleteAnchor.onclick = function (event) {
        event.preventDefault();
        deleteRow(newRow);
    };


    actionContainer.appendChild(editAnchor);
    actionContainer.appendChild(document.createTextNode("    |    "));
    actionContainer.appendChild(deleteAnchor);

    actionCell.appendChild(actionContainer);

    document.getElementById('detailsForm').reset();
}

function editRow(row) {

    let fieldCell = row.cells[1];
    let operatorCell = row.cells[2];
    let valueCell = row.cells[3];


    document.getElementById('field').value = fieldCell.textContent;
    document.getElementById('operator').value = operatorCell.textContent;
    document.getElementById('value').value = valueCell.textContent;


    editingRow = row;

    document.getElementById('addButton').classList.add('hidden');
    document.getElementById('saveButton').classList.remove('hidden');
}

function saveDetails() {
    if (editingRow) {

        let updatedField = document.getElementById('field').value;
        let updatedOperator = document.getElementById('operator').value;
        let updatedValue = document.getElementById('value').value;

        editingRow.cells[1].textContent = updatedField;
        editingRow.cells[2].textContent = updatedOperator;
        editingRow.cells[3].textContent = updatedValue;

        document.getElementById('detailsForm').reset();

        document.getElementById('saveButton').classList.add('hidden');
        document.getElementById('addButton').classList.remove('hidden');

        editingRow = null;
    }
}

function deleteRow(row) {

    row.parentNode.removeChild(row);

    let tableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].textContent = i + 1;
     }

    srNo = rows.length + 1;
}

function getTableData() {

    let tableData = [];

    let tableBody = document.getElementById('detailsTable').getElementsByTagName('tbody')[0];

    for (let i = 0; i < tableBody.rows.length; i++) {
        let row = tableBody.rows[i];
        let rowData = {
            srNo: row.cells[0].textContent,
            fieldName: row.cells[1].textContent,
            operator: row.cells[2].textContent,
            value: row.cells[3].textContent
        };
        tableData.push(rowData);
    }

    let jsonData = JSON.stringify(tableData);
    console.log(jsonData);
}
