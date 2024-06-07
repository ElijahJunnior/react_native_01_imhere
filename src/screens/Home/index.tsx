import { useState } from "react";
import {
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participant, setParticipant] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participant)) {
      return Alert.alert(
        "Erro ao adicionar participante",
        "Já existe um participante com o nome informado!"
      );
    }

    setParticipants((previewValue) => [participant, ...previewValue]);
    setParticipant("");
  }

  function handleParticipantRemove(name: string) {
    const removeParticipant = () => {
      setParticipants((previewValue) => [
        ...previewValue.filter((cur) => cur !== name),
      ]);
    };

    Alert.alert(
      "Remover participante",
      `Você confirma a remoção do participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: removeParticipant,
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          // onChangeText={(text) => setParticipant(text)}
          onChangeText={setParticipant}
          value={participant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença.
          </Text>
        )}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
