
const vehicleRoutes = require('./vehicles');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Servidor: APIs');
    });

    // //Outras rotas 
    vehicleRoutes(app, fs);

};

module.exports = appRouter;