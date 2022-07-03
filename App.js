import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyList from "./app/components/myList";
import AgeValidator from "./app/components/ageValidator";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<MyList />
			<AgeValidator />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
