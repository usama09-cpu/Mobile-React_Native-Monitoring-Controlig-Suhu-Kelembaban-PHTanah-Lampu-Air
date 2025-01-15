import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from './src/assets/color';
import Login from './src/component/General/Login';
import Home from './src/component/Admin/Home';
import Register from './src/component/General/Register';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({username: '', password: ''});
  const [isLogin, setIsLogin] = useState(false);

  const onLoginSuccess = (username, password) => {
    console.log('Login Success', username, password);
    setUser({username, password});
    setIsLogin(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}>
        {!isLogin ? (
          <>
            <Stack.Screen name="Login">
              {props => <Login {...props} onLoginSuccess={onLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <Stack.Screen name="Home">
            {props => (
              <Home {...props} user={user} onLogOut={() => setIsLogin(false)} />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
