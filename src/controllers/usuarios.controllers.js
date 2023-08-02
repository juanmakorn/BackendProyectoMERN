import Usuario from "../models/usuario";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      let usuario = await Usuario.findOne({ email });
      if (usuario) {

        return res.status(400).json({
          mensaje: "ya existe un usuario con el correo enviado",
        });
      }
      usuario = new Usuario(req.body);

      const salt = bcrypt.genSaltSync(10);
      usuario.password = bcrypt.hashSync(password,salt);
  
      await usuario.save();
      res.status(201).json({
        mensaje: "usuario creado",
        nombre: usuario.nombreUsuario,
        uid: usuario._id,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "El usuario no pudo ser creado",
      });
    }
  };

export const obtenerListaUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener los usuarios",
        });
    }
};

export const obtenerUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener el usuario",
        });
    }
};

export const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        let usuario = await Usuario.findOne({email});
        if(!usuario){

          return res.status(404).json({
            mensaje: 'Correo o password invalido - correo'
          })
        }

        const passwordValido = bcrypt.compareSync(password, usuario.password);

        if(!passwordValido){
          return res.status(404).json({
            mensaje: 'Correo o password invalido - password'
          })
        }

        res.status(200).json({
          mensaje: 'El usuario es correcto',
          nombreUsuario: usuario.nombreUsuario
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          mensaje: "Usuario o password incorrecto",
        });
      }
}