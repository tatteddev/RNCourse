import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    props.setCourseGoals((courseGoals) => [
      ...props.courseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setEnteredGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#9357e0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f21283" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 6,
    width: "100%",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
