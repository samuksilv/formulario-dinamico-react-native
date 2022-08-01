import React from "react";
import { Text, View } from "react-native";
import { useFormContext } from "../../contexts/form.context";

// import { Container } from './styles';

const FormPerguntaSimNao: React.FC = () => {
  const { perguntaAtual } = useFormContext();

  return <Text> FormPerguntaSimNao: {perguntaAtual?.pergunta}</Text>;
};

export default FormPerguntaSimNao;
