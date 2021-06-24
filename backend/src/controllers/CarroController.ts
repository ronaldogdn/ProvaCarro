import { Request, Response }from "express";
import CarroSchema from "../models/CarroSchema";


class CarroController{
    async cadastrar(request: Request, response:Response){
        try{
            const { placa } = request.params;
            const carro = await CarroSchema.exists({ placa: placa });

            if(carro){
              response.status(404).json({ data: carro, error: false, msg: "Carro já cadastrado!" }); 
            }
                       
            const novoCarro = await CarroSchema.create(request.body);     
            
            response.status(201).json({
                data: novoCarro,
                error:false,
                msg:"Carro cadastrado."
            });            
        }
        catch(error){
            response.status(400).json({
                data: error,
                error: true,
                msg: "Não foi possível adicionar o novo carro",
            });
        }
    }

    async listar(request: Request, response:Response){
        try{
            const carros = await CarroSchema.find();
            response.status(200).json({
                data: carros,
                error:false,
                msg:"Lista de carros atualizada!"
            });
        }catch(error){
            response.status(404).json({
                data: error,
                error: true,
                msg: "Não foi possível listar os carros",
            });
        }
    }

    async buscarPlaca(request: Request, response: Response){
        try {
            const { placa } = request.params;
            const carro = await CarroSchema.findOne({ placa: placa });
          
            if (carro != null) {
              response.status(200).json({ data: carro, error: false, msg: "Carro encontrado!" });
            } else {
              response.status(404).json({ data: carro, error: false, msg: "Carro não encontrado!" });
            }
          } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para a placa!" });
          }
    }

    async remover(request: Request, response: Response){
        try {
            const { placa } = request.params;
            const carro = await CarroSchema.findOneAndDelete({ placa:placa});

            if (carro != null) {
              response.status(200).json({ data: carro, error: false, msg: "Carro apagado!" });
            } else {
              response.status(404).json({ data: carro, error: false, msg: "Carro não encontrado!" });
            }
          } catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para a placa!" });
          }
    }

    async alterar(request: Request, response: Response){
        try 
        {
            const { modelo,placa,ano } = request.body;
            
            const carro = await CarroSchema.findOneAndUpdate(
               {
                 placa:placa
               },
               {
                 modelo:modelo,
                 ano:ano
               },
               {
                 new:true,
                 useFindAndModify: false,
               }            
            );            
            
            if (carro != null) {
              response.status(200).json({ data: carro, error: false, msg: "Carro atualizado!" });
            } else {
              response.status(404).json({ data: carro, error: false, msg: "Carro não encontrado!" });
            }
           
        }
        catch (error) {
            response.status(400).json({ data: error, error: true, msg: "Esse não é um formato válido para a placa!" });
        }
    }

}

export { CarroController};