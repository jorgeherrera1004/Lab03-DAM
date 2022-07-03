import React, { useState } from "react";
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Doge",
		description: "A very cute doge",
		image: require("../assets/doge.jpg"),
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Corgi",
		description: "A very cute corgi",
		image: require("../assets/corgi.jpg"),
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Cat",
		description: "A very cute cat",
		image: require("../assets/cat.jpg"),
	},
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
	<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
		<View style={styles.items}>
			<View style={styles.infoContainer}>
				<Text style={[styles.title, textColor]}>{item.title}</Text>
				<Text style={[styles.description, textColor]}>{item.description}</Text>
			</View>
			<Image source={item.image} style={styles.image} />
		</View>
	</TouchableOpacity>
);

const MyList = () => {
	const [selectedId, setSelectedId] = useState(null);

	const renderItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? "#2D808F" : "#88FCF6";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				backgroundColor={{ backgroundColor }}
				textColor={{ color }}
			/>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
				style={styles.list}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: StatusBar.currentHeight || 0,
		width: "80%",
	},
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 50,
		flex: 1,
		margin: 3,
	},
	image: {
		height: 100,
		flex: 3,
		margin: 7,
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		padding: 2,
		backgroundColor: "white",
	},
	list: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		width: "800px",
	},
	description: {
		fontSize: 15,
		flex: 5,
		margin: 3,
	},
	items: {
		display: "flex",
		flexDirection: "row",
		flex: 1,
		width: "100%",
		padding: 10,
	},
	infoContainer: {
		display: "flex",
		flexDirection: "column",
		flex: 10,
	},
});

export default MyList;
