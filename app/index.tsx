import { Text, View } from "react-native";
import MapView from "react-native-maps";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ width: 200, height: 200 }}
          region={{
            latitude: 43.001,
            longitude: -81.2,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      </View>
    </View>
  );
}
