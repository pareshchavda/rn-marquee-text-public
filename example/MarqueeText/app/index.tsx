import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AutoScroll, { AnimationMode } from 'rn-marquee-text';
import MarqueeText from 'rn-marquee-text';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16, gap: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Marquee Text Demo</Text>

      <View style={{ width: 250, borderRadius: 8, overflow: 'hidden' }}>
        <MarqueeText
          text="This is a long scrolling text that demonstrates the marquee functionality"
          speed={80}
        />
      </View>

      <View style={{ width: 200, borderRadius: 8, overflow: 'hidden' }}>
        <MarqueeText
          text="Faster scrolling example with different colors"
          speed={120}
          backgroundColor="#1a365d"
          textColor="#f0f4f8"
          fontSize={14}
        />
      </View>

      <View style={{ width: '100%', borderRadius: 8, overflow: 'hidden' }}>
        <MarqueeText
          text="Breaking News: This is a full-width marquee text component that scrolls horizontally"
          speed={100}
          backgroundColor="#7b341e"
          textColor="#fffaf0"
          fontSize={18}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <MarqueeText
          text="This text will scroll horizontally with bounce effect. It will pause for 2 seconds at each end."
          speed={50}
          backgroundColor="#fff"
          textColor="#0000ff"
          fontSize={16}
        />
      </View>

      <AutoScroll endPauseDuration={2000} style={styles.cardScroller} direction="horizontal">
        <View style={styles.contentContainer}>
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} style={styles.card}>
              <Text style={styles.cardText}>Card {item}</Text>
            </View>
          ))}
        </View>
      </AutoScroll>
      <AutoScroll endPauseDuration={2000} style={styles.cardScroller} direction="horizontal">
      <Text style={styles.cardText}>This text will scroll horizontally with bounce effect and pause for 2 seconds at each end 🎉</Text>
      </AutoScroll>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardScroller: {
    height: 120,
    width: '100%',
    marginTop: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});