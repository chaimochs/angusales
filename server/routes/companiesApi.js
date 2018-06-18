const express = require('express');
const router = express.Router();
const companies = require('../../dataAccess/companiesModel');


const newCompany = { 
    companyId: 2, 
    address: '234 Maple Street', 
    country: 'Ivory Coast',
    companyName: "Banana Republic"
}

router.get('/companies', (req, res) => {
      companies.findAll().then(data => {
            res.send(data);
        }, err => {
          console.error(err);
        });
    })

    router.get('/companies/:id', (req, res) => {
        companies.findById(req.params.id).then(data => {
          res.send(data);
        }, err => {
            console.error(err);
          });
    })

        router.post('/companies', function (req, res) {
            companies.create(newCompany).then(data => {
                res.send(data);
              }, err => {
                  console.error(err);
                }); 
        });

        module.exports = router;
