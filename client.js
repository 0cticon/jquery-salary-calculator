console.log('js');


$(readyNow);

function readyNow() {
    console.log('rn');
    $('#submit').on('click', submitEmployee);
    $('#delete').on('click', removeEmp);
    $('body').on('click', '#delete', removeEmp);
}
let firstName;
let lastName;
let idNumber;
let jobTitle;
let annualIncome;
totalMonthly = 0;



// creating function to add emp data to table, clear fields

function submitEmployee() {
    // console.log('clicked button');
    // naming variables 
    firstName = $('#first-name').val();
    lastName = $('#last-name').val();
    idNumber = $('#id-number').val();
    jobTitle = $('#title').val();
    annualIncome = Number($('#annual-salary').val());
    // $('#total-monthly').append(totalmonth / 12); //not correct, concatinates .val()
    appendTotalMonthly();

    // append to table
    $('#employee-data').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$${annualIncome}</td>
            <td><button id="delete">Delete</button></td>
            `)
    $('input').val('');
}

// remove employee from table
function removeEmp() {
    // console.log('remove employee');
    $(this).parent().parent().remove();
}

function appendTotalMonthly() {
    totalMonthly += annualIncome / 12;
    console.log(totalMonthly);
    $('#total-monthly').text('');
    $('#total-monthly').text(`Total Monthly: $${totalMonthly.toFixed(2)}`);
    if (totalMonthly >= 20000) {
        $('#total-monthly').css("background-color", "red");
    };
    // console.log('in totalMonthly');
    // console.log(annualIncome);



}


// wirte a funciton that takes in ${annualIncome}, adds it together, and devides by 12




