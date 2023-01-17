import { StyleSheet, View, Text, Pressable } from 'react-native'


function GoalItem(props) {
    return (
        <View style={styles.goalItem} >
            <Pressable android_ripple={{color:'#FF6263'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={{ color: 'white' ,padding:8}}>{props.text}</Text>
            </Pressable>
        </View >


    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginTop: 16,
        borderRadius: 6,
        backgroundColor: '#120E43',
    }
});
