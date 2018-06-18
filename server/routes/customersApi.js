const express = require('express');
const router = express.Router();
const customers = require('../../dataAccess/customersModel');
const companies = require('../../dataAccess/companiesModel');



// const newCustomer = { 
//     firstName: 'Joe', 
//     lastName: 'Shmoe', 
//     companyId: 2, 
//     email: 'jshmoe@gmail.com', 
//     customerId: 1,
//     comments: "comments, commments, more comments"
// }

router.get('/customers-info', (req, res) => {
      customers.findAll({include:[companies]}).then(data => {
        console.log('foo')
        console.log(data);
            res.send(JSON.stringify(data));
        }, err => {
          console.error(err);
        });
    })

    // router.get('/customers/:id', (req, res) => {
    //     customers.findById(req.params.id).then(data => {
    //       res.send(data);
    //     }, err => {
    //         console.error(err);
    //       });
    // })

    router.post('/new', (req, res) => {
        console.log(req.body)
         customers.create(req.body).then(data => {
             console.log(data)
                res.send(data);
              }, err => {
                  console.error(err);
                }); 
        });


        module.exports = router;
