import { Router} from "express";

const router = Router();

router.route('/prueba').get((req,res)=> {
    res.send("esta es una prueba de mi ruta get")
});

export default router;