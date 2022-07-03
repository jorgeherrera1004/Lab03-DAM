import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const AgeValidator = () => {
	const [errorMessage, setErrorMessage] = useState(false);
	const [age, setAge] = useState("");

	const validator = (age) => {
		setAge(age);
		if (age < 18) {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Age Validator</Text>
			<TextInput
				style={styles.input}
				onChangeText={(text) => validator(text)}
				value={age}
			/>
			{errorMessage && (
				<Text style={styles.errorMessage}>You are too young!</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		backgroundColor: "#88FCF6",
		padding: 20,
	},
	text: {
		fontSize: 20,
		margin: 10,
		flex: 1,
	},
	input: {
		borderWidth: 1,
		borderColor: "black",
		padding: 10,
		margin: 10,
		borderRadius: 30,
	},
	errorMessage: {
		color: "red",
		fontSize: 12,
	},
});

export default AgeValidator;
