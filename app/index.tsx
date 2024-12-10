import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Index() {
	const data = [...new Array(6).keys()];

	return (
		<View
			style={{
				flex: 1,
				alignSelf: "center",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100%",
			}}
		>
			<Text>Hello world, from One</Text>

			<Carousel
				width={Dimensions.get("window").width}
				height={Dimensions.get("window").width / 2}
				data={data}
				renderItem={({ index }) => (
					<View
						style={{
							flex: 1,
							borderWidth: 1,
							justifyContent: "center",
						}}
					>
						<Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
					</View>
				)}
			/>
		</View>
	);
}
