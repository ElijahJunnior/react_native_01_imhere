import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou em Adicionar.");
  }

  function handleParticipantRemove(name: string) {
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
      <Participant
        name="Elias Junior"
        onRemove={() => handleParticipantRemove("Elias Junior")}
      />
      <Participant
        name="Rodrigo Bonfim"
        onRemove={() => handleParticipantRemove("Rodrigo Bonfim")}
      />
      <Participant
        name="Adriano Mauricio"
        onRemove={() => handleParticipantRemove("Adriano Mauricio")}
      />
      <Participant
        name="Davi Leonardo"
        onRemove={() => handleParticipantRemove("Davi Leonardo")}
      />
    </View>
  );
}
