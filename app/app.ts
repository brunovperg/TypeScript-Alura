import { Negociação } from "./models/negociacao.js";

const negociacao = new Negociação(new Date())
console.log(negociacao.volume)