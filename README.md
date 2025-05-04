# React Native Marquee Text

A highly customizable package for implementing smooth auto-scrolling and marquee text components in React Native applications. This package works seamlessly in both React Native and Expo environments.

## Features
- 🚀 Smooth scrolling animations powered by React Native Reanimated
- 💯 Works perfectly in both React Native and Expo environments
- 🔄 Multiple animation modes (continuous loop and bounce)
- ⚙️ Customizable speed, delay, and styling options
- 📱 No external dependencies other than React Native Reanimated
- ⚡ Optimized performance with native animations
- 📏 Auto-detects when scrolling is needed (text larger than container)
- ↔️ Supports both horizontal and vertical scrolling
- 📰 Includes a dedicated MarqueeText component for text tickers

## Installation

```bash
# Using npm
npm install rn-marquee-text react-native-reanimated

# Using yarn
yarn add rn-marquee-text react-native-reanimated
```

### Expo Projects
For Expo projects, make sure you have Reanimated installed:

```bash
expo install react-native-reanimated
```

Then, add the Babel plugin to your babel.config.js:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
};
```

## Components

### 1. AutoScroll
A versatile component for scrolling any content (text or components) that overflows its container.

#### Basic Usage
```jsx
import AutoScroll, { AnimationMode } from 'rn-marquee-text';

const Example = () => (
  <AutoScroll 
    style={{ height: 100, width: '100%' }}
    mode={AnimationMode.LOOP}
    speed={40}
  >
    This is a long text that will automatically scroll when it's larger than 
    the container. The component automatically detects if scrolling is needed.
  </AutoScroll>
);
```

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | (required) | Content to be scrolled |
| mode | AnimationMode or string | 'loop' | Animation mode: 'loop' or 'bounce' |
| speed | number | 30 | Speed of scrolling in pixels per second |
| delay | number | 1500 | Delay in milliseconds before starting the animation |
| endPauseDuration | number | 1000 | Duration to pause at the ends (only for bounce mode) |
| style | ViewStyle | {} | Style for the container |
| textStyle | TextStyle | {} | Style for the text (when children is a string) |
| enabled | boolean | true | Whether to enable the animation |
| direction | string | 'vertical' | Direction of scroll: 'horizontal' or 'vertical' |

### 2. MarqueeText
A specialized component for creating ticker/marquee text effects, perfect for news tickers, announcements, or notifications.

#### Basic Usage
```jsx
import { MarqueeText } from 'rn-marquee-text';

const Example = () => (
  <View style={{ width: '100%', borderRadius: 8, overflow: 'hidden' }}>
    <MarqueeText
      text="Breaking News: This is a full-width marquee text component that scrolls horizontally"
      speed={100}
      backgroundColor="#7b341e"
      textColor="#fffaf0"
      fontSize={18}
    />
  </View>
);
```

#### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | (required) | Text content to scroll |
| speed | number | 80 | Speed of scrolling in pixels per second |
| backgroundColor | string | '#000' | Background color of the marquee container |
| textColor | string | '#fff' | Text color |
| fontSize | number | 16 | Font size of the text |
| paddingVertical | number | 8 | Vertical padding inside the marquee |
| paddingHorizontal | number | 12 | Horizontal padding inside the marquee |
| delay | number | 1000 | Delay in milliseconds before starting animation |
| bounceMode | boolean | false | Whether to use bounce animation |
| endPauseDuration | number | 2000 | Pause duration at each end (only when bounceMode is true) |

## Advanced Examples

### AutoScroll with Custom Content
```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AutoScroll from 'rn-marquee-text';

const CardScroller = () => {
  return (
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
};

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

### News Ticker with MarqueeText
```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MarqueeText } from 'rn-marquee-text';

const NewsTicker = () => {
  return (
    <View style={styles.tickerContainer}>
      <MarqueeText
        text="BREAKING NEWS: Latest updates on global events. Markets reach all-time high. New technological breakthroughs announced."
        speed={70}
        backgroundColor="#1a365d"
        textColor="#ffffff"
        fontSize={16}
        bounceMode={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tickerContainer: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 10,
  },
});
```

## Tips for Optimal Performance
- Adjust speed based on content length: Longer content might benefit from faster speeds.
- Use appropriate delays: Give your users time to notice the content before it starts scrolling.
- Consider bounce mode for important information: The back-and-forth animation can draw more attention.
- Limit the number of simultaneous scrolling components: Too many can impact performance.
- Test on lower-end devices: Ensure smooth animations across various device capabilities.

## Troubleshooting

### Text Not Scrolling
- Make sure the text is actually larger than its container
- Check that enabled prop is not set to false
- Try increasing the container's overflow: 'hidden' style

### Animation Feels Choppy
- Use the useNativeDriver: true option if available
- Reduce the number of simultaneously animating components
- Simplify your component tree structure

## License
MIT

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request