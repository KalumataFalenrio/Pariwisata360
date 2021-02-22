import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {Apploading} from "expo";
// import firebase from 'firebase';
// import { useFonts, Roboto_400Regular, Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
import SocialButton from '../screen/SocialButton';

export default LoginMenu=()=>{

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View styles={styles.headerWrapper}>
                    <Image
                     source={require('../assets/images/beach.png')}
                     style={styles.loginImage}/>
                </View>
            </SafeAreaView>
                <View style={styles.titlesWrapper}>
                    <Text style={{fontWeight: "bold",fontSize : 24 }}>SIGN IN</Text>
                </View>

                {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            // onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            // onPress={() => googleLogin()}
          />
        </View>
      ) : null}
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex : 1,
    },
    loginImage:{
        width : 415,
        height: 250,
        paddingTop: 100,
    },
    titlesWrapper:{
        marginTop : 70,
        paddingHorizontal : 150,
    },
}) ;