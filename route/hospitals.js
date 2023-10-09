const express = require('express');
const router = express.Router();
const dataStore = require('../data');
const idGenerator = require("../id-generator");

router.use(express.json());

router.get('/',(req, res) => {
    dataStore.readData((data) => res.send(data));
});

router.get('/:id',(req, res) => {
    const hospId = parseInt(req.params.id);
    dataStore.readData((data) => {   
        for(var i  = 0 ;i< data.length ;i++){
            if(data[i].id === hospId){
                res.send(data[i]);
                return;
            }
        }
        res.status(404).send('not found');
        // res.send('error');
    })  
});

router.post('/', (req, res) => {
    dataStore.readData((data) => {
        const lastEle = data[data.length - 1];
        const newId = lastEle.id + 1;
        // // console.log(data);
        const input = req.body;
        input.id = newId;
        data.push(input);
        dataStore.writeData(data);
        res.status(201);
        res.send(input);
    })
});

router.put('/:id', (req, res) => {
    dataStore.readData((data) => {
       const id= parseInt(req.params.id);
       const updatedValues = req.body;
       const index = data.findIndex( i => i.id === id );
       if(index !== -1){
            data[index] = { ...data[index], ...updatedValues };
            dataStore.writeData(data);
            res.send("Success");
       }else{
            res.send('error');
       }
    })
});

router.delete('/:id', (req, res) => {
    dataStore.readData((data) => {
        const id= parseInt(req.params.id);
        const index = data.findIndex( i => i.id === id );
        if(index  !== -1){
            data.splice(index,1);
            dataStore.writeData(data);
            res.send(data);
        }
        else{
            res.status(404).send('error');
        }
    })
})


module.exports = router;