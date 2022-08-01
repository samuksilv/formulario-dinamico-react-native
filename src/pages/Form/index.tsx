import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FormContextProvider, useFormContext } from "../../contexts/form.context";
import { TipoPerguntaEnum } from "../../enums/tipo-pergunta.enum";
import FormPerguntaAberta from "../../components/FormPerguntaAberta";
import FormPerguntaSimNao from "../../components/FormPerguntaSimNao";
import FormInformacoesPessoa from "../../components/FormInformacoesPessoa";

const Stack = createStackNavigator();

const Form: React.FC = () => {
  return (
    <FormContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="FormInformacoesPessoa"
          component={FormInformacoesPessoa}
        />
        <Stack.Screen
          name="FormPerguntaAberta"
          component={FormPerguntaAberta}
        />
        <Stack.Screen
          name="FormPerguntaSimNao"
          component={FormPerguntaSimNao}
        />
      </Stack.Navigator>
    </FormContextProvider>
  );
};

export default Form;
