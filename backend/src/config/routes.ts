import { Router, Request, Response }from "express";
import { CarroController} from "../controllers/CarroController";

//pega as requisições http
const router = Router();
const carroController = new CarroController();


router.post("/carro/cadastrar",carroController.cadastrar);
router.get("/carro/buscar/:placa",carroController.buscarPlaca);
router.get("/carro/listar",carroController.listar);
router.post("/carro/alterar",carroController.alterar);
router.get("/carro/remover/:placa",carroController.remover);



export { router };