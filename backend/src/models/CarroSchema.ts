import { model, Schema } from 'mongoose';

const CarroSchema = new Schema(
    {
        modelo:{
            type:String,
            required:[true,"O campo modelo é obrigatório!"],
        },
        placa:{
            type:String,
            required:[true,"O campo placa é obrigatório!"],
        },
        ano:{
            type:Number,
            min:[1,"Valor mínimo é 1900"],
            required:[true,"O campo ano é obrigatório!"],
        }
    },
    {
        timestamps:true,
    }
);

export default model("carros",CarroSchema);