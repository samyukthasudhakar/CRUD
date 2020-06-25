const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: String
    },
    id: {
        type: String
    }
});



mongoose.model('Employee', employeeSchema);