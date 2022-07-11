const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        
        // Connect DB
        this.connectDB();
        
        this.middlewares();
        this.routes();
    }
    
    async connectDB() {
        await dbConnection();
    }
    
    routes() {
        this.app.use('/api/user', require('../routes/user'));
    }
    
    
    listen() {
       this.app.listen(this.port, () => {
            console.log('Server running in port ', this.port);
        }) 
    }
    
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
}

module.exports = Server