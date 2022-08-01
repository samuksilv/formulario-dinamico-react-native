import { TipoPerguntaEnum } from "../enums/tipo-pergunta.enum";

export interface PerguntaModel {
  id: string;
  pergunta: string;
  tipoPergunta: TipoPerguntaEnum;
}
