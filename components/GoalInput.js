import { View, TextInput, StyleSheet, Button, Modal,Image } from "react-native";


function GoalInput(props) {
    return (
        <Modal  visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/image/goal.png')}/>
                <TextInput style={styles.textInput} placeholder='Your Today goal !' onChangeText={props.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={props.onAddGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>

            </View>
        </Modal>


    )

}

export default GoalInput;


const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        padding:16,
        backgroundColor:'#5DA3FA'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop:16
    },
    button: {
        width: '35%',
        marginHorizontal: 8
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    textInput:{
        width:'85%',
        borderWidth:1,
        borderColor:'#CAD5E2',
        borderRadius:10,
        backgroundColor:'#CAD5E2',
        color:'#120438',
        padding:8,
        
        


    }
});