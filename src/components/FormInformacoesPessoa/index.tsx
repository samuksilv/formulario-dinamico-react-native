import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { useFormContext } from "../../contexts/form.context";
import { InformacoesPessoaModel } from "../../models/informacoes-pessoa.model";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TipoPerguntaEnum } from "../../enums/tipo-pergunta.enum";

const info: InformacoesPessoaModel = {
  cidade: "Ribeirão Preto",
  nome: "Samuel",
  sobrenome: "Silva",
};

const FormInformacoesPessoa: React.FC = () => {
  const { perguntas, setInformacoesPessoa, navegarProximaPergunta } =
    useFormContext();

  const handleClick = () => {
    if (perguntas.length) {
      setInformacoesPessoa(info);
      navegarProximaPergunta();
    }
  };

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        backgroundColor: "#22668a",
      }}
      onPress={handleClick}
    >
      <Text>Enviar Info. pessoa</Text>
    </TouchableOpacity>
  );
};

export default FormInformacoesPessoa;
