import Usuario from "../models/usuario";
import generarJWT from "../helpers/token-sing";
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
      const { email, contraseña, nombreUsuario } = req.body;
  
      let usuarioEmail = await Usuario.findOne({ email });
      if (usuarioEmail) {
        return res.status(400).json({
          mensaje: "ya existe un usuario con el correo enviado",
        });
      }

      let usuarioNombre = await Usuario.findOne({ nombreUsuario });
      if (usuarioNombre) {
        return res.status(400).json({
          mensaje: "ya existe un usuario con el nombre enviado",
        });
      }
      const usuario = new Usuario(req.body);

      const salt = bcrypt.genSaltSync(10);
      usuario.contraseña = bcrypt.hashSync(contraseña,salt);
  
      await usuario.save();
      res.status(201).json({
        mensaje: "usuario creado",
        nombre: usuario.nombreUsuario,
        perfil: usuario.perfil,
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
        const {email, contraseña} = req.body;

        let usuario = await Usuario.findOne({email});
        if(!usuario){

          return res.status(404).json({
            mensaje: 'Correo o contraseña invalido - correo'
          })
        }
        const contraseñaValido = bcrypt.compareSync(contraseña, usuario.contraseña);
        if(!contraseñaValido){
          return res.status(404).json({
            mensaje: 'Correo o contraseña invalido - contraseña'
          })
        }

        const token = await generarJWT(usuario.nombreUsuario)

        res.status(200).json({
          mensaje: 'El usuario es correcto',
          nombreUsuario: usuario.nombreUsuario,
          perfil: usuario.perfil,
          estado: usuario.estado,
          token: usuario.token
        })
      } catch (error) {
        console.log(error);
        res.status(404).json({
          mensaje: "Usuario o contraseña incorrecto",
        });
      }
}

export const borrarUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "El usuario fue borrado",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se borro el usuario",
        });
    }
};

export const editarEstadoUsuario = async (req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "El estado del usuario fue actualizado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo actualizar el estado del usuario",
        });
    }
};