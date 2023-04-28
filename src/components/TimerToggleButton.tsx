import React from "react";
import { View, Pressable, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
type Props = {
    isTimerRunning: boolean;
    onStartPress: () => void;
    onStopPress: () => void;
}



export const TimerToggleButton: React.FC<Props> = ({ isTimerRunning, onStopPress, onStartPress }) => {
    return (

        <Pressable onPress={isTimerRunning ? onStopPress : onStartPress}>
            <View style={styles.container}>
                <AntDesign
                    name={isTimerRunning ? "pause" : "play"}
                    size={50}
                    color="black"
                    style={styles.icon}
                />
            </View>

        </Pressable>

    )
}

const styles = StyleSheet.create({
    icon: {
        alignSelf: 'center',
        color: 'black',

    },
    container: {
        borderWidth: 5,
        width: 100,
        height: 100,
        borderRadius: 250 / 2,
        justifyContent: 'center',
        borderColor: 'black',
        marginVertical: 50,
        textAlign: 'center',

    }
})
