var table_digits = new Array(9);
table_digits[0] = "4 2 7 3 5 1 9 8 6";
table_digits[1] = "9 8 3 7 6 2 5 1 4";
table_digits[2] = "1 5 6 8 9 4 7 2 3";
table_digits[3] = "2 3 9 1 8 5 4 6 7";
table_digits[4] = "7 4 1 6 3 9 2 5 8";
table_digits[5] = "5 6 8 2 4 7 1 3 9";
table_digits[6] = "8 7 2 9 1 3 6 4 5";
table_digits[7] = "3 9 5 4 2 6 8 7 1";
table_digits[8] = "6 1 4 5 7 8 3 9 6";

// Ex2.2 -checks if numbers are correct in each line and column
function to_check(table) {

    let isValidLine = true;

    // line check
    for (let i = 0; i < table.length; i++) {
        let line = table[i].split(' ');
        for (let j = 0; j < line.length - 1; j++) {
            for (let k = 0 + j; k < 8; k++) {

                if (line[j] !== line[k + 1]) {

                    isValidLine = true;
                } else {
                    console.log('Line with duplicated numbers:');
                    console.log(line[j]);
                    console.log(line[k + 1]);
                    return isValidLine = false;
                }
            }
        }
    }

        // column check
        for (let z = 0; z < 9; z++) {
            for (let y = 0; y < table[z].split(' ').length - 1; y++) {
                console.log('mudou de coluna');
                for (let x = 0+y; x < 8; x++) {
                
                    if (table[y].split(' ')[z] !== table[x + 1].split(' ')[z]) {
                        isValidColumn = true;
                    } else {
                        console.log('Column with duplicated numbers:');
                        console.log(table[y].split(' ')[z]);
                        console.log(table[x + 1].split(' ')[z]);
                        return isValidColumn = false;
                    }
                }
            }
        }
}

// Ex1.1 - Table to be verified but displayed
function to_be_verified() {

    var table_digits_test_display = new Array(9);
    table_digits_test_display[0] = "4 2 7 3 5 1 9 8 6";
    table_digits_test_display[1] = "9 8 3 7 6 2 5 1 4";
    table_digits_test_display[2] = "1 5 6 8 9 4 7 2 3";
    table_digits_test_display[3] = "2 3 9 1 8 5 4 6 7";
    table_digits_test_display[4] = "7 4 1 6 3 9 2 5 8";
    table_digits_test_display[5] = "5 6 8 2 4 7 1 3 9";
    table_digits_test_display[6] = "8 7 2 9 1 3 6 4 5";
    table_digits_test_display[7] = "3 9 5 4 2 6 8 7 1";
    table_digits_test_display[8] = "6 1 4 5 7 8 3 9 6";

// to access in HTML
    var buildTable = document.getElementById("tableDisplay");

    for (var i = 0; i < table_digits_test_display.length; i++) {

        var row = buildTable.insertRow();
        var num = table_digits_test_display[i].split(' ');

        for (var j = 0; j < num.length; j++) {

            var cell = row.insertCell();

            cell.textContent = num[j];
        }
    }
}

to_check(table_digits);
//to_be_verified();

export { to_be_verified };