
const veiculoRoutes = (app, fs) => {

    // variables
    const dataPath = './data/vehicles.json';

    function removerID(id, arr) {
        return arr.map(function (obj) {
            if (obj.id != id) return obj;
            else return false;
        }).filter(Boolean);
    }
        

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
     
        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/veiculos', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/veiculos', (req, res) => {

        readFile(data => {
            const newveiculoId = Object.keys(data).length + 1;


            // add the new veiculo
            data[newveiculoId.toString()] = req.body;
            if(data[newveiculoId.toString()] !== null)
            {
                Object.keys(data).forEach(k => (!data[k] && data[k] !== undefined) && delete data[k]);
                data[data.length-1].id = newveiculoId;
                var str = JSON.stringify(data,null,2).replace('null,',"");
              


                console.log(str);
                writeFile(str, () => {
                    res.status(200).send('new veiculo added');
                });
            }
           
            
        },
            true);
    });


    // UPDATE
    app.put('/veiculos/:id', (req, res) => {

        readFile(data => {

            // add the new veiculo
            const veiculoId = req.params["id"];
            data[veiculoId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`veiculos id:${veiculoId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/veiculos/:id', (req, res) => {

        readFile(data => {

            // add the new veiculo
            const veiculoId = req.params["id"];
           
            data =  removerID(veiculoId,data)
            Object.keys(data).forEach(k => (!data[k] && data[k] !== undefined) && delete data[k]);
            console.log(veiculoId);

            writeFile(JSON.stringify(data, null, 2), () => {
               // $scope.message = "Removido com sucesso!";
             
               res.status(200).send(`veiculos id:${veiculoId} removed`);
            });
        },
            true);
    });
};

module.exports = veiculoRoutes;