// const middleware = require("./middleware")
const path = require("path");


module.exports = app => {
//=====================================================================================================
// HTML ROUTES
//   we only need one this route, since the remainder of our files will be served as static files from 
//   the express server, including our stylesheets and our image files.
//=====================================================================================================
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });

}