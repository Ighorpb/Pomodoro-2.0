import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TimerCountDownDisplay } from "../../src/components/TimerCountDownDisplay";
import { TimerToggleButton } from "../../src/components/TimerToggleButton";

export function Home() {
    const [timerSecInit, setSecInit] = useState<number>(0);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timer | null>(null);
    const [isTimerRunning, setTimerRunning] = useState<boolean>(false);
    const [timerMinInit, setTimerMinInit] = useState<string>("");

    const handleMinTimeChange = (text: string) => {
        setTimerMinInit(text);
    };

    const startTimer = () => {
        setTimerRunning(true);
        const id = setInterval(
            () =>
                setSecInit((prev) => {
                    if (prev <= 0) {
                        clearInterval(timerInterval!);
                        setTimerInterval(null);
                        setTimerRunning(false);
                        return 0;
                    }
                    return prev - 1000;
                }),
            1000
        );
        setTimerInterval(id);
    };

    const stopTimer = () => {
        if (timerInterval != null) {
            clearInterval(timerInterval);
        }
        setTimerRunning(false);
    };

    const handleStartPress = () => {
        const timeInMs = parseInt(timerMinInit) * 60 * 1000;
        if (timeInMs > 0) {
            setSecInit(timeInMs);
            startTimer();
        }
    };

    const handleStopPress = () => {
        stopTimer();
        setSecInit(0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Pomodoro Timer!</Text>
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Qual o tempo que deseja definir?"
                placeholderTextColor="black"
                keyboardType="numeric"
                onChangeText={handleMinTimeChange}
            />
            <TimerToggleButton
                isTimerRunning={isTimerRunning}
                onStartPress={handleStartPress}
                onStopPress={handleStopPress}
            />
            <TimerCountDownDisplay
                timerDate={new Date(timerSecInit)}
                onStartPress={handleStartPress}
                onStopPress={handleStopPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // centraliza verticalmente
        paddingTop: 20,
        paddingBottom: 50,
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20,
    },
    textInput: {
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        paddingHorizontal: 10,
        width: "80%",
        borderRadius: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});