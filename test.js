var express = require('express');
const fs = require('fs');

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'


// First I want to read the file
fs.readFile('old-school.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    //console.log(content);   // Put all of the code here (not the best solution)
    processFile(content.toString());   // Or put the next step in a function and invoke it
});

function processFile(content) {
    // console.log("http://home"+content+".com");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

var request = require('request');
var options = {
  'method': 'GET',
  'url': ('https://3.112.229.60:55756/Acs/Api/TriggerFacade/ActivateDeactivateTrigger?{"triggerName":"'+content+'","deactivateAfterSeconds":"5"}'),
  'headers': {
    'Authorization': 'Basic QWRtaW5pc3RyYXRvcjpDdzg4Mzk2Mjk='
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

}

