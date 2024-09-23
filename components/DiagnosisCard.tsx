import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

interface DiagnosisCardProps {
  title: string;
  desc: string;
  img: string;
}

const DiagnosisCard: React.FC<DiagnosisCardProps> = ({ title, desc, img }) => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={{ uri: img }} resizeMode='contain' style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Button title={"Detect"} color={'gray'} />
      </View>
    </View>
  );
};

export default DiagnosisCard;

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "teal",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1/0.5, // Adjust this value based on your image's aspect ratio
    borderRadius: 10,
  },
  textContainer: {
    gap: 5,
  },
  title: {
    fontSize: 20,
  },
  description:{
    textAlign: 'justify',
  }
});