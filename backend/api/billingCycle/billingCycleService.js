const BillingCycle = require('./billingCycle');
const _ = require('lodash');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after('post', sendErrosOrNext).after('put', sendErrosOrNext);

function sendErrosOrNext(req, res, next){
    const bundle = res.locals.bundle;
    if(bundle.errors){
        var errors = parserErrors(bundle.errors);
        res.status(500).json({errors});
    }else{
        next();
    }
}

function parserErrors(nodeRestfulErros){
    const errors = [];
    _.forIn(nodeRestfulErros, error => errors.push(error.message ))
    return errors;
}

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error) {
            res.status(500).json({ errors: [error] });
        } else {
            res.json({ value });
        }
    });
});

module.exports = BillingCycle;