import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  return (
    <View style={styles.appContainer}>
      <GoalInput setCourseGoals={setCourseGoals} courseGoals={courseGoals} />
      <View style={styles.goalList}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
           return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalList: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "#ffffff",
  },
});
