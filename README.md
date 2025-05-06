# rn-marquee-text

A highly customizable package for smooth, auto-scrolling marquee text components in React Native apps. Works seamlessly in both React Native CLI and Expo environments.

![npm version](https://img.shields.io/npm/v/rn-marquee-text.svg)
![license](https://img.shields.io/npm/l/rn-marquee-text.svg)
![downloads](https://img.shields.io/npm/dm/rn-marquee-text.svg)

## 🚀 Features

- ⚡ Smooth scrolling powered by React Native Reanimated
- 🧩 Fully compatible with React Native & Expo
- 🔁 Supports loop and bounce animation modes
- 🎛️ Customizable speed, delay, and styles
- 📱 No dependencies except Reanimated
- 📏 Auto-detects overflow for auto-scrolling
- ↔️ Supports horizontal and vertical scrolling
- 📰 Built-in MarqueeText for ticker-style effects

## 📦 Installation

```bash
# React Native CLI
npm install rn-marquee-text react-native-reanimated

# OR using yarn
yarn add rn-marquee-text react-native-reanimated
```

### Expo Users

```bash
expo install react-native-reanimated
```

Then update your `babel.config.js`:

```js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
};
```

## 🧱 Components

### 1️⃣ AutoScroll — Scroll any overflowed content

#### Basic Usage

```tsx
import AutoScroll, { AnimationMode } from 'rn-marquee-text';

const Example = () => (
  <AutoScroll 
    style={{ height: 100, width: '100%' }}
    mode={AnimationMode.LOOP}
    speed={40}
  >
    This is a long text that will scroll if it overflows its container.
  </AutoScroll>
);
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | (required) | Content to scroll |
| mode | 'loop' \| 'bounce' | 'loop' | Animation type |
| speed | number | 30 | Speed in px/sec |
| delay | number | 1500 | Delay before animation starts |
| endPauseDuration | number | 1000 | Pause time at edges (for bounce mode) |
| style | ViewStyle | {} | Container styling |
| textStyle | TextStyle | {} | Text styling (when children is string) |
| enabled | boolean | true | Enable or disable animation |
| direction | 'horizontal' \| 'vertical' | 'vertical' | Scroll direction |

### 2️⃣ MarqueeText — For ticker-style text

#### Basic Usage

```tsx
import { MarqueeText } from 'rn-marquee-text';
import { View, Text } from 'react-native';

const Example = () => (
  <View style={{ width: '100%', borderRadius: 8, overflow: 'hidden' }}>
    <MarqueeText
      speed={100}
      backgroundColor="#1a365d"
      textColor="#f0f4f8"
      fontSize={14}
      direction="horizontal"
    >
      <Text>
        Breaking News: This is a marquee text scrolling horizontally!
      </Text>
    </MarqueeText>
  </View>
);
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | (required) | Text to display (alternative to children) |
| speed | number | 80 | Speed in px/sec |
| backgroundColor | string | #000 | Marquee background color |
| textColor | string | #fff | Text color |
| fontSize | number | 16 | Font size |
| paddingVertical | number | 8 | Vertical padding |
| paddingHorizontal | number | 12 | Horizontal padding |
| delay | number | 1000 | Delay before animation starts |
| bounceMode | boolean | false | Whether to bounce at edges |
| endPauseDuration | number | 2000 | Pause at each end (only in bounce mode) |

## 💡 Advanced Examples

### 🔁 AutoScroll with Custom Content

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AutoScroll from 'rn-marquee-text';

const CardScroller = () => (
  <AutoScroll style={styles.scrollContainer} direction="horizontal">
    <View style={styles.contentContainer}>
      {[1, 2, 3, 4, 5].map((item) => (
        <View key={item} style={styles.card}>
          <Text style={styles.cardText}>Card {item}</Text>
        </View>
      ))}
    </View>
  </AutoScroll>
);

const styles = StyleSheet.create({
  scrollContainer: {
    height: 120,
    width: '100%',
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
```

### 📰 News Ticker with MarqueeText

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MarqueeText } from 'rn-marquee-text';

const NewsTicker = () => (
  <View style={styles.tickerContainer}>
    <MarqueeText speed={70} bounceMode={false}>
      <Text style={styles.cardText}>
        BREAKING NEWS: Latest updates on global events. Markets reach all-time high.
      </Text>
    </MarqueeText>
  </View>
);

const styles = StyleSheet.create({
  tickerContainer: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 10,
  },
  cardText: {
    fontSize: 14,
    paddingHorizontal: 10,
  },
});
```

## 🛠️ Tips for Optimal Performance

- Match speed with content length for readability
- Use delays to give users time to read before scrolling
- Bounce mode is more attention-grabbing (e.g., for alerts)
- Limit concurrent scroll components to avoid frame drops
- Test on low-end devices for smooth performance

## 🧩 Troubleshooting

### ❌ Text Not Scrolling?

- Ensure content overflows the container
- Confirm `enabled` is set to `true`
- Use `overflow: 'hidden'` on container

### 🐢 Choppy Animations?

- Leverage `useNativeDriver` if supported
- Minimize simultaneous animations
- Simplify nested component structure

## 📄 License

MIT

## 🤝 Contributing

Pull requests welcome!

Steps:

1. Fork the repo
2. Create a branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
