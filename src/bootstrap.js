import * as Font from 'expo-font';

export  const bootstrap = async ()  => {
    await Font.loadAsync({
        'OpenSans-Bold': '../assets/fonts/OpenSans-Bold.ttf',
        'OpenSans-Regular':'../assets/fonts/OpenSans-Regular.ttf'
    });
  }