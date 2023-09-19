import formidable from "formidable";

export function formidableMD (req,res,next){
    formidable({multiples: false}).parse(req, (err, fields, files) => {
        if(err) return next(err);
        req.files = files;
        const claves= Object.keys(fields);
        claves.forEach(clave=>{
            if(fields[clave].length === 1){
                fields[clave] = fields[clave][0];
            }
        })
        req.body=fields

        next();
    })
  
} 