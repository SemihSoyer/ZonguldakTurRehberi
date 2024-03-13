import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [coordinate, setCoordinate] = useState({ latitude: 0, longitude: 0 });

  const handleAddMarker = () => {
    setMarkers([...markers, coordinate]);
    setCoordinate({ latitude: 0, longitude: 0 });
  };

  const handleMarkerPress = (markerIndex) => {
    // Marker tıklandığında yapılacak işlemleri burada gerçekleştirin
    console.log('Tıklanan marker indeksi:', markerIndex);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.4565,
          longitude: 31.7987,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            onPress={() => handleMarkerPress(index)}
          />
        ))}
        <Polyline
          coordinates={markers}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Latitude"
          value={coordinate.latitude.toString()}
          onChangeText={(text) =>
            setCoordinate({ ...coordinate, latitude: parseFloat(text) })
          }
        />
        <TextInput
          placeholder="Longitude"
          value={coordinate.longitude.toString()}
          onChangeText={(text) =>
            setCoordinate({ ...coordinate, longitude: parseFloat(text) })
          }
        />

      </View>
    </View>
  );
};

export default MapScreen;