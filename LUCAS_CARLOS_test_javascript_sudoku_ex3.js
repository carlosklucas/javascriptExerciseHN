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

let anamoliesObj = {};

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
    convertToNumArr = tableTwoDimensions.map((x, i) => {

        return x.map((y, j) => {
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

    let anomaliesArr = [];
    let invalidLine = true;
    let invalidColumn = true;

    convertToNumArr.forEach((line, i) => {
        line.forEach((orig, j) => {
            line.forEach((next, k) => {

                if (k !== j && orig === next && invalidLine) {
                    tableIsValid = false;
                    invalidLine = false;
                    anomaliesArr.push(`Line ${i + 1} incorrect:`);
                    for (let y = 0; y < line.length; y++) {
                        anomaliesArr.push(convertToNumArr[i][y]);
                    }
                    //Ex3.1 Create a new function "F31" which calls the previous function "F21" for each line of the table "to_check". Display a relevant error message in the event of an anomaly, indicating in particular the line number in error and the values of the stations on the line. (see question n ° 4 and example of the anomaly table in the annex)
                    console.log(`Different line numbers check: element at row ${i + 1}, column ${j} and ${k}; diferent elements? ${orig} and ${next} is ${tableIsValid}`);
                }

                if (j !== k && convertToNumArr[j][i] === convertToNumArr[k][i] && invalidColumn) {
                    tableIsValid = false;
                    invalidColumn = false;
                    anomaliesArr.push(`Column ${i + 1} incorrect:`);
                    for (let z = 0; z < line.length; z++) {
                        anomaliesArr.push(convertToNumArr[z][i]);
                    }
                    //Ex3.1 Create a new function "F31" which calls the previous function "F21" for each line of the table "to_check". Display a relevant error message in the event of an anomaly, indicating in particular the line number in error and the values of the stations on the line. (see question n ° 4 and example of the anomaly table in the annex)
                    console.log(`Different columns numbers check: element at column ${i + 1}, index ${j} and ${k}: diferent elements? ${convertToNumArr[j][i]} and ${convertToNumArr[k][i]} is ${tableIsValid}`);
                }
            }
            )
        }
        )
        invalidColumn = true;
        invalidLine = true;
    }
    );

    //Ex3.2 Repeat the operation again with a function "F33" which deals with each region of the table "checkbox". (see question n ° 4 and example of the anomaly table in the annex)
    regionErrors = testRegion(convertToNumArr);

    if (!regionErrors.isRegionValid) {
        tableIsValid = regionErrors.isRegionValid;
    }
    let regionResultMsg = regionErrors.regArr;

    anamoliesObj = {
        tableValidation: tableIsValid,
        tableAnomalies: anomaliesArr,
        regionAnomalies: regionResultMsg
    }
    // Ex2.3 The function must return true if the input array is good, false otherwise .
    return tableIsValid;
}

// Ex3.4 "F21" accepting an array as input, for each of questions 1 to 3 you will need to find a simple algorithm allowing you to put the values of the boxes to be checked in the form of a table of 9 positions before calling this function.
function tableCheckAnomalies(getTableCheck) {

    if (!getTableCheck && !anamoliesObj.tableValidation) {

        var buildAnomaliesTable = document.getElementById("anomalies");

        var text = '<table>';

        anamoliesObj.tableAnomalies.forEach((x, ind) => {

            if (typeof x === 'string') {
                text += '<tr style="border: 3px solid black;"> <td style="border: 3px solid black;">' + x + '</td>';
            } else {
                if (x.length - 1 === ind) {
                    text += '<td style="border: 1px solid black;">' + x + '</td></tr>';
                } else {
                    text += '<td style="border: 1px solid black;">' + x + '</td>';
                }
            }
        }
        )

        anamoliesObj.regionAnomalies.forEach(x => {
            x.forEach((y, ind) => {

                if (typeof y === 'string') {
                    text += '<tr style="border: 3px solid black;"> <td style="border: 3px solid black;">' + y + '</td>';
                } else {

                    if (x.length - 1 === ind) {
                        text += '<td style="border: 1px solid black;">' + y + '</td></tr>';
                    } else {
                        text += '<td style="border: 1px solid black;">' + y + '</td>';
                    }
                }
            })

        })

        return buildAnomaliesTable.innerHTML = text;

    } else {

        return document.getElementById("tableOk").innerText = "the table is correct";
    }
}
// Ex3.5 Execute these functions via your HTML file "Main" which will use the 3 functions and check the display. (also leave the call to the functions created in exercise 1).
tableCheckAnomalies(acceptsTable(array_number));


function testRegion(regionTable) {

    let regionErrorMsgArr = [];
    let regionNumbers = 0;
    let regionIsValid = true;
    let isRegionReported = -1;

    for (let regionChangeColumnCount = 0; regionChangeColumnCount < regionTable.length / 3; regionChangeColumnCount++) {
        const changeRegion = 3;

        for (let regionChangeLineCount = 0; regionChangeLineCount < regionTable.length / 3; regionChangeLineCount++) {
            if (regionNumbers !== isRegionReported) {

                for (let regionCount = 0; regionCount < regionTable.length / 3; regionCount++) {
                    for (let lineRegion = 0; lineRegion < regionTable.length / 3; lineRegion++) {


                        for (let colRegion = 0; colRegion < regionTable.length / 3; colRegion++) {
                            for (let elemCount = 0; elemCount < regionTable.length / 3; elemCount++) {

                                let newElem = regionTable[regionCount + regionChangeColumnCount * changeRegion][lineRegion + regionChangeLineCount * changeRegion];
                                let colNewElem = regionCount + regionChangeColumnCount * changeRegion;
                                let rowNewElem = lineRegion + regionChangeLineCount * changeRegion;
                                let nextElem = regionTable[colRegion + regionChangeColumnCount * changeRegion][elemCount + regionChangeLineCount * changeRegion];
                                let colNextElem = colRegion + regionChangeColumnCount * changeRegion;
                                let rowNextElem = elemCount + regionChangeLineCount * changeRegion;

                                if (newElem === nextElem && !(colNewElem === colNextElem && rowNewElem === rowNextElem)) {

                                    regionIsValid = false;

                                    if (!regionIsValid && isRegionReported !== regionNumbers) {

                                        isRegionReported = regionNumbers;
                                        regionErrorMsgArr.push(pushRegionNumbers(regionNumbers, regionTable));
                                    }

                                }
                            }
                        }

                    }
                }
            }
            regionNumbers++;
        }
    }

    objRegionTest = {
        isRegionValid: regionIsValid,
        regArr: regionErrorMsgArr
    }

    return objRegionTest;
}
testRegion(to_check_table_type(array_number));

function pushRegionNumbers(regionNumberError, getTableError) {

    let regionErrorMsg = [];
    let regionNumbersCheck = 0;
    const changeRegionFactor = 3;
    regionErrorMsg.push(`Region ${regionNumberError + 1} incorrect`);

    for (let regionChangeColumnCount = 0; regionChangeColumnCount < getTableError.length / 3; regionChangeColumnCount++) {
        for (let regionChangeLineCount = 0; regionChangeLineCount < getTableError.length / 3; regionChangeLineCount++) {
            if (regionNumberError === regionNumbersCheck) {

                for (let regionCount = 0; regionCount < getTableError.length / 3; regionCount++) {
                    for (let lineRegion = 0; lineRegion < getTableError.length / 3; lineRegion++) {

                        let newElem = getTableError[regionCount + regionChangeColumnCount * changeRegionFactor][lineRegion + regionChangeLineCount * changeRegionFactor];
                        regionErrorMsg.push(newElem);
                    }
                }
            }
            regionNumbersCheck++;
        }
    }

    return regionErrorMsg;
}
