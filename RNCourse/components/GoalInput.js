import { TextInput, View, Button, StyleSheet, Modal } from "react-native";
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
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}> 
            <Button title="Cancel" color="red" onPress={props.onCancel} />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    padding: 16,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 16,
  }
});

export default GoalInput;
