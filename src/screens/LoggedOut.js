import React from 'react';
import colors from '../styles/colors';

import { StyleSheet, 
          Text, 
          View, 
          Image,
          TouchableHighlight,
           } 
          from 'react-native';


import RoundeButton from '../components/buttons/RoundeButton';


export default class LoggedOut extends React.Component {
  onFacebookPress() {
    alert('Facebook button pressed');
  }
  onCreateAccountPress() {
    alert('CreateAccountPress');
  }

  onMoreOptionPress() {
    alert('More option button pressed');
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
            <Image source ={require('../img/airbnb-logo.png')}
            style={styles.logo}/>
            <Text style={styles.welcomeText}>Welcom to airbnb</Text>
            <RoundeButton
                text="Continue with Facebook"
                textColor={colors.green01}
                background={colors.white}
                handleOnPress={this.onFacebookPress}
                
            />

            <RoundeButton
                text="Create Account"
                textColor={colors.white}
                background={colors.green01}
                handleOnPress={this.onCreateAccountPress}
                
            />

            <TouchableHighlight style={styles.moreOptionsButton}
              onPress={this.onMoreOptionPress}
            >
                <Text style={styles.moreOptionsButtonText}>
                  More option
                </Text>
            </TouchableHighlight>

              <View style={styles.termsAndConditions}>
                  <Text style={styles.termText}>
                      By tapping Continue, Create Account or More
                      options,
                  </Text >
                  
                  <Text style={styles.termText}>
                      I agree to airbnb'
                  </Text>
                  

                  <TouchableHighlight style={styles.linkButton}>
                      <Text style={styles.termText}>
                        Terms of Service
                      </Text>

                  </TouchableHighlight>

                  <Text style={styles.termText}>,</Text>
                  <TouchableHighlight style={styles.linkButton}>
                      <Text style={styles.termText}>
                        Paymenets Terms of Service
                      </Text>

                  </TouchableHighlight>
                  <TouchableHighlight style={styles.linkButton}>
                      <Text style={styles.termText}>
                        Privacy Policy
                      </Text>

                  </TouchableHighlight>
                  <Text style={styles.termText}>, and</Text>

                  <TouchableHighlight style={styles.linkButton}>
                      <Text style={styles.termText}>
                        Nondiscrimination Policy
                      </Text>

                  </TouchableHighlight>
                
                  <Text style={styles.termText}>, </Text>

              </View>
        </View>
      </View>
    );


  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,

  },

  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
    marginLeft: 70
  },
  moreOptionsButton: {
    marginTop: 10,


  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,

  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,

  },
  termText: {
    color:colors.white,
    fontSize: 13,
    fontWeight: '600'
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  }
 



})
