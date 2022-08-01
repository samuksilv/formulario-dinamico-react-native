import { PerguntaModel } from "./pergunta.model";

export interface RespostaPerguntaModel {
  pergunta: PerguntaModel;
  resposta: string | boolean;
}
