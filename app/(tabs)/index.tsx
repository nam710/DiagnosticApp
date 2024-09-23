import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DiagnosisCard from "@/components/DiagnosisCard";

const HomeScreen = () => {
  const img =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjaHZRg4pUboY-zyOOzkD0JDJkTZ65y9qPHfgtRWw6-pvx9cJn16o0Zzlpq05syUZY_s&usqp=CAU";
  const title = "Parkinson's Disease";
  const desc =
    "Parkinson's disease is a progressive nervous system disorder that affects movement.";
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <DiagnosisCard title={title} desc={desc} img={img} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
