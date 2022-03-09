const _ = require("lodash");
module.exports = async function (context, req) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(_.nth(nums, 3));
    console.log(_.nth(nums, -3));
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}