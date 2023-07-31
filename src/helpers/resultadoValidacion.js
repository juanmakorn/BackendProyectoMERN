import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
    const errors = validationResult(req);

    //errors.isEmpty(), true:esta vacio, false:Tiene errores
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errores: errors.array(),
        });
    }
    //Continuar con la ejecucion
    next();    
}

export default resultadoValidacion