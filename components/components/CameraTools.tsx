 import { View } from "react-native";
import IconButton from "./IconButton";
import { FlashMode } from "expo-camera";
import React from "react";

interface CameraToolsProps {
  cameraZoom: number;
  cameraFlash: FlashMode;
  cameraTorch: boolean;
  setCameraZoom: React.Dispatch<React.SetStateAction<number>>;
  setCameraFacing: React.Dispatch<React.SetStateAction<"front" | "back">>;
  setCameraTorch: React.Dispatch<React.SetStateAction<boolean>>;
  setCameraFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
}

export default function CameraTools({
  cameraZoom,
  cameraFlash,
  cameraTorch,
  setCameraZoom,
  setCameraFacing,
  setCameraTorch,
  setCameraFlash,
}: CameraToolsProps) {
  return (
    <View
      style={{
        position:"absolute",
        right: 10,
        zIndex: 1,
        gap: 16,
        top: 20,
      }}
    >
      <IconButton
        onPress={() => setCameraTorch((prevValue) => !prevValue)}
        iosName={
          cameraTorch ? "flashlight.off.circle" : "flashlight.slash.circle"
        }
        androidName="flash"
      />

      <IconButton
        onPress={() =>
          setCameraFacing((prevValue) =>
            prevValue === "back" ? "front" : "back"
          )
        }
        iosName="arrow.triangle.2.circlepath.camera"
        androidName="camera-reverse"
        width={25}
        height={21}
      />

      <IconButton
        onPress={() =>
          setCameraFlash((prevValue) => (prevValue === "off" ? "on" : "off"))
        }
        iosName={cameraFlash === "on" ? "bolt.circle" : "bolt.slash.circle"}
        androidName="flash"
      />

      <IconButton
        onPress={() => {
          if (cameraZoom < 1) {
            setCameraZoom((prevValue) => prevValue + 0.05);
          }
        }}
        iosName="plus.magnifyingglass"
        androidName="add"
      />

      <IconButton
        onPress={() => {
          if (cameraZoom > 0) {
            setCameraZoom((prevValue) => prevValue - 0.05);
          }
        }}
        iosName="minus.magnifyingglass"
        androidName="remove"
      />
    </View>
  );
}


