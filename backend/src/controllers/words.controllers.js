import {pool} from "../db.js"

export const getWords = async (req,res) => {
    try {  
          
        const[rows]=await pool.query("SELECT * FROM palabras")
        res.send({rows})

    } catch (error) {
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }

    }

export const getWord = async (req,res) => {

    try {
            
        const[rows]=await pool.query("SELECT * FROM palabras WHERE id = ?",[req.params.id])

        if (rows.length <=0) return res.status(404).json({
            message: "word not found"
        })
    
        console.log(rows) 
        res.send(rows[0]) 

    } catch (error) {

        return res.status(500).json({
            message:"Something goes wrong"
        })
        
    }


    }    

export const createWords = async (req,res) => {

    try {
        const {palabra,significado}= req.body
        const [rows]=await pool.query('INSERT INTO palabras (palabra,significado) VALUES (?, ?)',[palabra,significado])
        res.send({
            id:rows.insertId,
            palabra,
            significado
            })
    } catch (error) {
        
        return res.status(500).json({
            message:"Something goes wrong"
        })

    }

    
}

export const updateWords = async (req,res) => {

    try {
        const {id} = req.params
        const {palabra,significado}=req.body
        const [result] = await pool.query('UPDATE palabras SET palabra = IFNULL(?) , significado = IFNULL(?) where id = ?',[palabra,significado,id])
        
        if (result.affectedRows === 0 ) return res.status(404).json({
            message:"Id no encontrado"
        })

        const [newWord] = await pool.query("SELECT * FROM palabras where id = ?",[id])
        console.log(id,palabra,significado)
        res.json(newWord[0])        
    } catch (error) {
        return res.status(500).json({
            message:"Something goes wrong"
        })        
    }
    

}

export const deleteWords= async (req,res) => {

    try {
        const [result] =await  pool.query("DELETE FROM palabras WHERE id = ?",[req.params.id])
        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Word not found"
        })
    
        console.log(result)
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:"Something goes wrong"
        })
    }


}