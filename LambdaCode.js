
var AWS = require('aws-sdk');


exports.handler = async (event) => {
    // TODO implement
    
    console.log(JSON.stringify(event));
    
    var vmName = event.queryStringParameters.name;
    var vmType = event.queryStringParameters.type;
    
    console.log(JSON.stringify(vmName));
    console.log(JSON.stringify(vmType));
    
    await saveToS3(vmName, vmType);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
    
    return response;
};

 function saveToS3(name, type)
    {
        var bucket = "iac-bucket";
        var data = JSON.stringify(type);
        
        

    console.log("got into putObject")
    var s3 = new AWS.S3();
        var params = {
            Bucket: bucket,
            Key: name,
            Body: data
        }
        console.log(params);
        
        return s3.putObject(params, function(err, data)
        {
        
          if (err) {
             console.log("error callback");
              console.log(err, err.stack); // an error occurred
          }
          else     
          console.log("success");
          console.log(data);           // successful response
        }).promise();
}
