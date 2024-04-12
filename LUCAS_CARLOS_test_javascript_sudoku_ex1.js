var array_number = new Array(9);
array_number[0] = "4 2 7 3 5 1 9 8 6";
array_number[1] = "9 8 3 7 6 2 5 1 4";
array_number[2] = "1 5 6 8 9 4 7 2 3";
array_number[3] = "2 3 9 1 8 5 4 6 7";
array_number[4] = "7 4 1 6 3 9 2 5 8";
array_number[5] = "5 6 8 2 4 7 1 3 9";
array_number[6] = "8 7 2 9 1 3 6 4 5";
array_number[7] = "3 9 5 4 2 6 8 7 1";
array_number[8] = "6 1 4 5 7 8 3 9 6";

// Ex1.1 -In this script, create a "to_verify" JAVASCRIPT table of 9 boxes out of 9
function to_verify(table) {

    let isValidTable = true;

    // Lines box check
    if (table.length === 9) {
        console.log('This table has 9 lines.');
    } else {
        console.log(`The size should be with 9 lines but instead has ${table.length}. Please, correct.`);
    }
    console.log('Columns check within lines:')
    for (var i = 0; i < table.length; i++) {

        let line = table[i].split(' ');

        // Columns box check
        if (line.length === 9) {
            console.log(`Line ${i + 1} is correct. It has 9 columns.`)
        } else {
            console.log(`Line ${i + 1} is not correct. It has ${line.length} columns. Please, correct.`);
            return false;
        }
        return true;
    }
}

to_verify(array_number);

// Ex1.2 Then insert a function "F12" allowing to display the content of the table "to be verified", in the form of an HTML table (9x9).
function to_check(table) {

    arrTowDimensions = [];

    for (var i = 0; i < table.length; i++) {

        let line = table[i].split(' ');
        arrTowDimensions.push(line);
    }

    //console.log(arrTowDimensions[0]);
    return arrTowDimensions;
}
to_check(array_number);

// Ex1.3 Then insert a function "F12" allowing to display the content of the table "to be verified", in the form of an HTML table (9x9)
function to_be_verified(twoDimensionTable) {

    // to access in HTML
    var buildTable = document.getElementById("myTable");

    //console.log(twoDimensionTable[0]);
    // iterates the inner arrays one by one with 9 elements (x as argument of each array)
    twoDimensionTable.forEach(x => {

        // create one row after each innner array (x)
        var row = buildTable.insertRow();

        // we iterate in each array each elements (y as the argument of each element in each array)
        return x.forEach(y => {

            // we create a position in the row with the element y
            var cell = row.insertCell();
            // return the values
            return cell.textContent = y;
        });
    });
}

to_be_verified(to_check(array_number));