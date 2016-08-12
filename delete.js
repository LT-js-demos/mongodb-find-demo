exports.remove = function(request, response) {
    mongoose.connect("mongodb://localhost/mongodb-find-demo-db");
    App6.remove({
        id: 1
    }, function(e) {
        if (e) response.send(e.message);
        response.send("删除成功");
    });
}