import express from 'express'
import multer from 'multer'

const router = express.Router()
const storage = multer.diskStorage({
    destination : function (req,file,cb){
        cb(null,'public/uploads/')
    },

    filename : function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage : storage})

router.post('/',upload.single('foto'), (req,res,next)=>{
    const file = req.file

    if(!file){
        const error = new Error('Error en la subida del archivo')
        error.httpStatuscode =400
        return next(error)
    }
    res.json({nombre: file.filename})
})


export default router


