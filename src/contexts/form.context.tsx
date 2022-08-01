import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { createContext, useContext, useEffect, useState } from "react";
import { TipoPerguntaEnum } from "../enums/tipo-pergunta.enum";
import { InformacoesPessoaModel } from "../models/informacoes-pessoa.model";
import { PerguntaModel } from "../models/pergunta.model";
import { RespostaPerguntaModel } from "../models/resposta.model";

export interface FormContextProps {
  perguntas: PerguntaModel[];
  respostas: RespostaPerguntaModel[];
  informacoesPessoa?: InformacoesPessoaModel;
  setInformacoesPessoa: React.Dispatch<
    React.SetStateAction<InformacoesPessoaModel | undefined>
  >;
  perguntaAtual?: PerguntaModel;
  navegarProximaPergunta: () => void;
  navegarPerguntaAnterior: () => void;
  addResposta: (resposta: RespostaPerguntaModel) => void;
  editaResposta: (resposta: RespostaPerguntaModel) => void;
}

const FormContext = createContext<FormContextProps>({} as FormContextProps);

const PERGUNTAS: PerguntaModel[] = [
  {
    id: "1",
    pergunta: "Você lê?",
    tipoPergunta: TipoPerguntaEnum.FECHADA,
  },
  {
    id: "2",
    pergunta: "Quais bandas você gosta?",
    tipoPergunta: TipoPerguntaEnum.ABERTA,
  },
  {
    id: "3",
    pergunta: "Você escuta musica?",
    tipoPergunta: TipoPerguntaEnum.FECHADA,
  },
];

export const FormContextProvider: React.FC = ({ children }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [perguntas, setPerguntas] = useState<PerguntaModel[]>(PERGUNTAS);
  const [perguntaAtual, setPerguntaAtual] = useState<PerguntaModel>();
  const [respostas, setRespostas] = useState<RespostaPerguntaModel[]>([]);
  const [informacoesPessoa, setInformacoesPessoa] =
    useState<InformacoesPessoaModel>();

  const addResposta = (resposta: RespostaPerguntaModel) => {
    setRespostas((res) => [...res, resposta]);
  };

  const editaResposta = (resposta: RespostaPerguntaModel) => {
    const novoValor = respostas.map((res) =>
      res.pergunta.id === resposta.pergunta.id ? resposta : res
    );
    setRespostas(novoValor);
  };

  const obterProximaPergunta = () => {
    if (!perguntaAtual) {
      setPerguntaAtual(perguntas[0]);
      return perguntas[0];
    }

    const index = perguntas.findIndex((p) => p.id === perguntaAtual?.id);

    if (index === undefined || index + 1 === perguntas.length) {
      setPerguntaAtual(undefined);
      return undefined;
    } else {
      setPerguntaAtual(perguntas[index + 1]);
      return perguntas[index + 1];
    }
  };

  const obterPerguntaAnterior = () => {
    if (!perguntaAtual) {
      setPerguntaAtual(perguntas[0]);
      return perguntas[0];
    }

    const index = perguntas.findIndex((p) => p.id === perguntaAtual?.id);

    if (index === undefined || index - 1 < 0) {
      setPerguntaAtual(undefined);
      return undefined;
    } else {
      setPerguntaAtual(perguntas[index - 1]);
      return perguntas[index - 1];
    }
  };

  const navegarParaPergunta = (pergunta?: PerguntaModel) => {
    if (pergunta?.tipoPergunta === TipoPerguntaEnum.ABERTA) {
      navigation.navigate("Form", { screen: "FormPerguntaAberta" });
    } else {
      navigation.navigate("Form", { screen: "FormPerguntaSimNao" });
    }
  };

  const navegarProximaPergunta = () => {
    const proxPergunta = obterProximaPergunta();

    navegarParaPergunta(proxPergunta);
  };

  const navegarPerguntaAnterior = () => {
    const perguntaAnt = obterPerguntaAnterior();

    navegarParaPergunta(perguntaAnt);
  };

  const state = {
    perguntas,
    respostas,
    informacoesPessoa,
    setInformacoesPessoa,
    perguntaAtual,
    navegarProximaPergunta,
    navegarPerguntaAnterior,
    addResposta,
    editaResposta,
  };

  return <FormContext.Provider value={state}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextProps => {
  const {
    perguntas,
    respostas,
    informacoesPessoa,
    setInformacoesPessoa,
    perguntaAtual,
    navegarProximaPergunta,
    navegarPerguntaAnterior,
    addResposta,
    editaResposta,
  } = useContext(FormContext);

  return {
    perguntas,
    respostas,
    informacoesPessoa,
    setInformacoesPessoa,
    perguntaAtual,
    navegarProximaPergunta,
    navegarPerguntaAnterior,
    addResposta,
    editaResposta,
  };
};
