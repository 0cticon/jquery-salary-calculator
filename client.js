console.log('js');

$(readyNow);

function readyNow() {
    console.log('rn');
    $('#submit').on('click', submitEmployee);
}

// creating function to add emp data to table, clear fields
function submitEmployee() {
    // console.log('clicked button');
    // naming variables 
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#title').val();
    let annualIncome = $('#annual-salary').val();

    // append to table
    $('#employee-data').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${jobTitle}</td>
        <td>${annualIncome}</td>
        <td><button id="delete">Delete</button></td>
    `)
    $('input').val('');


}

