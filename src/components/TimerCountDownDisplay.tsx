import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type Props = {
    timerDate: Date;
    onStartPress: () => void;
    onStopPress: () => void;
}

export const TimerCountDownDisplay: React.FC<Props> = ({ timerDate }) => {
    return (
        <View>
            <Text style={styles.TimerCountDownText}>
                {timerDate.getMinutes().toString().padStart(2, "0")}:
                {timerDate.getSeconds().toString().padStart(2, "0")}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    TimerCountDownText: {
        fontSize: 30,
        fontWeight: '700',
    }
})