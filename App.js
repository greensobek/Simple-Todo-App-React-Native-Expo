import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList, Button, Image } from 'react-native';
import { useState } from "react";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [todayGoal, setTodayGoal] = useState([])
  const [modelIsVisible, setModalIsVisible] = useState(false)

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    // setTodayGoal([...todayGoal,enteredGoalText])
    //better way
    setTodayGoal(currentTodayGoals => [...currentTodayGoals,
    { text: enteredGoalText, id: Math.random().toString() }])
    endAddGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setTodayGoal(currentTodayGoals => {
      return currentTodayGoals.filter((goal) => goal.id !== id)
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color={'#1B98F5'} onPress={startAddGoalHandler} />
        <GoalInput
          showModal={modelIsVisible}
          input={goalInputHandler}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler} />
        {/* <View style={styles.goalContainer} >
        <ScrollView >
          {todayGoal.map((goal) => {
            return( 
            <View style={styles.goalItem} key={goal} >
              <Text style={{ color: 'white' }}>{goal}</Text>
            </View>)
           })}
        </ScrollView>
      </View> */}
        {/* better way to do this */}
        <View style={styles.goalContainer} >
          <FlatList data={todayGoal} renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id} />);

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
    padding: 40,
    backgroundColor: '#5DA3FA'
  },
  goalContainer: {
    flex: 4,
  },


});
