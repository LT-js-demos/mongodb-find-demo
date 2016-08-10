mongodb-find-demo
=================

In this demo,you can insert some `{name,password}` into database,

after that you can find `name` and `password` by `name` from database.

Not only `console.log()`,I used `response.send`


Start server
------------
```
1.npm install

2.node app.js

3.open another terminal

```

Insert Something
----------------
```
curl http://localhost:3000/insert
```

Find by name
------------
```
curl http://localhost:3000/find
```

