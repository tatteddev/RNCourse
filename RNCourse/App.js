import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  function deleteGoalHandler(goalId) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#8843e2"
          onPress={() => setIsAddMode(true)}
        />
        <GoalInput
          setCourseGoals={setCourseGoals}
          courseGoals={courseGoals}
          visible={isAddMode}
          onCancel={() => setIsAddMode(false)}
        />
        <View style={styles.goalList}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  deleteGoalHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
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
});
