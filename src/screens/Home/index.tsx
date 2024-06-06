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
  const participants = [
    "Elias Junior",
    "Rodrigo Bonfim",
    "Adriano Mauricio",
    "Davi Leonardo",
    "Maria da Penha",
    "Alex Monteiro",
    "Bruna Queiroz",
    "Allan Pereira",
    "Gustavo Wong",
    "William Barreira",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Elias Junior")) {
      Alert.alert(
        "Erro ao adicionar participante",
        "Já existe um participante com o nome informado!"
      );
    }

    console.log("Você clicou em Adicionar.");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Você confirma a remoção do participante ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => Alert.alert(`O participante ${name} foi removido!`),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );

    console.log(`Você tentou remover o participante: ${name}`);
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
