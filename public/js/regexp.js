function RegFunction() {
    // Calls values of the id from the input field 'string'
    const str = document.getElementById("string").value;
    // Calls the values of the id from the input field 'regexp'
    const reg = new RegExp(document.getElementById("regexp").value);

    // performs RegExp and saves to constant 'result'
    const result = reg.test(str);

    //Sends result value to element 'result' on html page.
    document.getElementById("result").value = result;

}