# react-native-splashed-app
react-native app container to support splash screen functionallity

## Usage
First add package:
`npm install react-native-splashed-app --save`

In your App.js

```javascript
import SplashApp from 'react-native-splashed-app'

// more code

<SplashedApp imageSource={require('./App/Images/splash.jpg')} direction="up" duration="2000" withFadeOut>
   <App></App>
</SplashedApp>
```

If you use redux
```javascript
<Provider store={store}>
   <SplashedApp imageSource={require('./App/Images/splash.jpg')} direction="up" duration="2000" withFadeOut>
      <App></App>
   </SplashedApp>
</Provider>
```

## API
parameter|type|optional(default)
|---|---|---|
imageSource|require('image/file/path')|if text supplied
text|string|yes
baseColor|string|yes
direction|string|yes (up)
duration|number|yes (3000)
withFadeOut|bool|yes (false)

