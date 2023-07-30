import express from 'express';
import cors from 'cors';

console.log('hola funciona el backend');

const app = express();
app.set("PORT", process.env.PORT || 4000) // PUERTO PROVISORIO de trabajo

app.listen(app.get('PORT'), ()=>{
console.log('puerto de trabajo   ' + app.get('PORT'))
});
// express.raw()
// express.Router()
// express.static()
// express.text()
// express.urlencoded()
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());