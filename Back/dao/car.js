const db = require("../infra/connection");
const { ulid } = require("ulid");

class Car {
    
    createOne(data, callback) {
        const { plate, model, brand, year } = data;
        const sql = `INSERT INTO cars 
                    (id, plate, model, brand, year) 
                VALUES 
                    ('${ulid()}', '${plate}', '${model}', '${brand}', '${year}')`;

        db.run(sql, callback);
    };

    getAll(callback) {
        const sql = "SELECT * FROM cars";
        
        db.all(sql, callback)
    };

    getOne(id, callback) {
        const sql = `SELECT * FROM cars WHERE id = '${id}'`;
        db.get(sql, callback);
    };

    changeOne(id, data, callback) {
        
        let carData = Object.entries(data);
        let fields = [];
        for(let i=0; i < carData.length; i++){
            fields.push(`${carData[i][0]} = '${carData[i][1]}'`);
        }

        const sql = `UPDATE cars SET
                        ${fields.join(",")}
                    WHERE
                        id = '${id}'`

        db.run(sql, callback)
    };

    removeOne(id, callback) {
        const sql = `DELETE FROM cars WHERE id = '${id}'`;

        db.run(sql, callback);
    };
}

module.exports = new Car();