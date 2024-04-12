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

function to_check_table_type(table) {

    let arrTowDimensions = [];

    for (var i = 0; i < table.length; i++) {

        let line = table[i].split(' ');
        arrTowDimensions.push(line);
    }

    return arrTowDimensions;
}
to_check_table_type(array_number);

// Ex2.1 - Create a JAVASCRIPT "F21" function which accepts 1 input parameter "A" of table type with 9 positions as input.
function acceptsTable(checkTableType) {

    let tableIsValid = true;

    // size check of 9
    if (!checkTableType.length === 9) {
        tableIsValid = false;
    }

    for (var i = 0; i < checkTableType.length; i++) {

        let line = checkTableType[i].split(' ');

        // Columns box check
        if (!line.length === 9) {
            tableIsValid = false;
        }
    }

    let tableTwoDimensions = to_check_table_type(checkTableType);

    //convert string to numbers
    let convertToNumArr = [];
    convertToNumArr = tableTwoDimensions.map((x,i) => {

        return x.map((y,j) => {
            // convert string into a number in a variable to check if is a number
            let convertString = parseInt(y);
            // check if is a number after parse
            if (typeof convertString !== "number") {
                tableIsValid = false;
            }
            return convertString;
        })
    }
    );

    // check if there are different numbers in each line and column
    convertToNumArr.forEach((line, i) => {
        line.forEach((orig, j) => {
            line.forEach((next, k) => {

                // lines check for equal numbers and change to false
                if (k !== j && orig === next) {
                    tableIsValid = false;
                }

                // columns check for equal numbers and change to false
                if (j !== k && convertToNumArr[j][i] === convertToNumArr[k][i]) {
                    tableIsValid = false;
                }
            }
            )
        }
        )
    }
    );

    // Ex2.3 The function must return true if the input array is good, false otherwise .
    console.log(tableIsValid);
    return tableIsValid;
}

acceptsTable(array_number);