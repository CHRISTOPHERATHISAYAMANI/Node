var RestClient =require('node-rest-client').Client;
var client = new RestClient();

var jsn ={
    "id" :6,
    "name" : "Vatsan",
    "Training" : "Mean"
}
var args =
{
    data :jsn,
    headers :{"Content-Type":"application/json"}
}
client.post("http://localhost:3000/jsondbServer",args, function(data,resp)
{
console.log(data);
console.log(resp.statusCode);
}
);