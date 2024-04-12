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

    if (!checkTableType.length === 9) {
        console.log(`The size should be with 9 lines but instead has ${checkTableType.length}. Please, correct.`);
        tableIsValid = false;
    }
    console.log(`Size check if is 9: ${tableIsValid}`);

    for (var i = 0; i < checkTableType.length; i++) {

        let line = checkTableType[i].split(' ');

        // Columns box check
        if (!line.length === 9) {
            console.log(`Line index ${i} is not correct. It has ${line.length} columns. Please, correct.`);
            tableIsValid = false;
        }
    }
    console.log(`Columns check within lines to see if there are 9 positions: ${tableIsValid}`);

    let tableTwoDimensions = to_check_table_type(checkTableType);

    // convert string to numbers
    let convertToNumArr = [];
    convertToNumArr = tableTwoDimensions.map((x,i) => {

        return x.map((y,j) => {
            // convert string into a number in a variable to check if is a number
            let convertString = parseInt(y);
            // check if is a number after parse
            if (typeof convertString !== "number") {
                console.log(`We have an issue at line ${i} position ${j}, element ${convert}: is ${typeof isNum !== "number"}, it's not a number.`);
                tableIsValid = false;
            }
            return convertString;
        })
    }
    )

    convertToNumArr.forEach((line, i) => {
        line.forEach((orig, j) => {
            line.forEach((next, k) => {

                if (k !== j && orig === next) {
                    tableIsValid = false;
                    //Ex3.1 Create a new function "F31" which calls the previous function "F21" for each line of the table "to_check". Display a relevant error message in the event of an anomaly, indicating in particular the line number in error and the values of the stations on the line. (see question n ° 4 and example of the anomaly table in the annex)
                    console.log(`Different line numbers check: element at row ${i}, column ${j} and ${k}; diferent elements? ${orig} and ${next} is ${tableIsValid}`);
                }

                if (j !== k && convertToNumArr[j][i] === convertToNumArr[k][i]) {
                    tableIsValid = false;
                    //Ex3.1 Create a new function "F31" which calls the previous function "F21" for each line of the table "to_check". Display a relevant error message in the event of an anomaly, indicating in particular the line number in error and the values of the stations on the line. (see question n ° 4 and example of the anomaly table in the annex)
                    console.log(`Different columns numbers check: element at column ${i}, index ${j} and ${k}: diferent elements? ${convertToNumArr[j][i]} and ${convertToNumArr[k][i]} is ${tableIsValid}`);
                }
            }
            )
        }
        )
    }

    );
    console.log(tableIsValid);
    // Ex2.3 The function must return true if the input array is good, false otherwise .
    return tableIsValid;
}

acceptsTable(array_number);