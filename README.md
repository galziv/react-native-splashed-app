# react-native-splashed-app
react-native app container to support splash screen functionallity

## Usage
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
imageSource - require('image/file/path').

text - string to specify. will be used only if imageSource not supllied.

baseColor - image can take a moment to load. this will determine the base color for the container.

direction - splash slide direction. available values up,down,left,right.

duration - animation duration in miliseconds.

withFadeOut - boolean specifying should splash also fade out.

