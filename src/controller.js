import {pool} from './database.js';

class PersonaController{

   async getAll(req, res) {
        const [result] = await pool.query('SELECT * FROM personas');
        res.json(result);
    }
async add(req, res){
    const persona =req.body;
    const [result] = await pool.query(`INSERT INTO Personas(nombres, apellidos, dni) VALUES (?, ?, ?)`, [persona.nombres, persona.apellidos, persona.dni]);
    res.json({"Id insertado": result.insertId});
}
async delete(req, res){
    const persona = req.body;
    const [result] = await pool.query(`DELETE FROM Personas WHERE id=(?)`, [persona.id]);
    res.json({"Registros eliminados": result.affectedRows});
}
async update(req, res){
    const persona = req.body;
    
    const [result] = await pool.query(`UPDATE Personas SET nombres=(?), apellidos=(?), dni=(?) WHERE id=(?)`, [persona.nombres, persona.apellidos, persona.dni, persona.id]);
    res.json({"Registros actualizados": result.changedRows});
}
}

export const persona = new PersonaController();
