const express = require('express');
const pool = require('../utils/database');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try {
        const [rows] = await pool
        .promise()
        .query(`SELECT * from demo`);
    
        console.log(rows);

        res.render('index.njk', {
            title: 'Kursdemo',
            intro: 'En demosida för att ge ett litet smakprov på tekniken och vad den kan göra.',
            rows: rows
        });
    } catch (error) {
        console.log(error);
        next();
    }
});


router.get('/test', function(req, res){
    res.render('test.njk', {
        title: 'Chruch of 6P',
        intro: 'Welcome to the Chruch of 6P',
        breadtext: 'In 6P we trust',
        foot: 'Do not be tempted by the 2HS devil',
    });
})
    module.exports = router;