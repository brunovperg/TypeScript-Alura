import { Negociação } from "./models/negociacao.js";

const negociacao = new Negociação(new Date(), 10, 100)
console.log(negociacao.volume)