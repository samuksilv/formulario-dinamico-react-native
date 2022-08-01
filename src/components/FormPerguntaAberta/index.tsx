import React from "react";
import { Text, View } from "react-native";
import { useFormContext } from "../../contexts/form.context";

const FormPerguntaAberta: React.FC = () => {
  const { perguntaAtual } = useFormContext();

  return <Text>FormPerguntaAberta: {perguntaAtual?.pergunta}S</Text>;
};

export default FormPerguntaAberta;
