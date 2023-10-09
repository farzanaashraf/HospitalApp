create a node/express server
create a json file data.json
write a module called data.js which have 2 functions 
    - read data.json and parse the json data
    - write function takes an object, stringify it and write it to data.json

hint - use `fs` in node

create router
    router has 4 routes
        - get hospitals (read the json file and send)
        - post add hospitals
        - put update hospital
        - delete delet hospital
    After each post/put/delete operations write the data to josn file
