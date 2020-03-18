import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Routes from './Routes';

const App = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => setTheme(!theme);

  let textColor = '#fff';
  let bgColor = theme ? '#222' : '#3b5998';
  let bgShade = theme ? '#333' : '#3b5398';

  return (
    <Routes
      textColor={textColor}
      bgColor={bgColor}
      bgShade={bgShade}
      theme={theme}
      toggleTheme={handleTheme}
    />
  );
};

export default App;
