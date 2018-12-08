import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Easing,
    Animated,
    
} from 'react-native';
import colors from '../styles/colors';

export default class Notification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            positionValue: new Animated.Value(60),
        };
        this.closeNotification = this.closeNotification.bind(this);
        this.animateNotification = this.animateNotification.bind(this);
    }

    animateNotification( Value ) {
        const { positionValue } = this.state;
        Animated.timing(
              positionValue,
              {
                  toValue: Value,
                  duration: 1000,
                  velocity: 3,
                  tension: 2,
                  friction: 8,
                  easing: Easing.easeOutBack,
              }
        ).start();
    }

    closeNotification() {
        this.props.handleCloseNotification();
    }

    render() {
        
        const { type, firstLine, secondLine, showNotification  } = this.props;
        showNotification ? this.animateNotification(0) : this.animateNotification(60);
        const { positionValue } = this.state;
        //alert(showNotification);
       

        return (
            <Animated.View style={[{ transform: [{ translateY: positionValue }]}, styles.wrapper]}> 

                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}> {type} </Text>
                    <Text style={styles.errorMessage}> {firstLine} </Text>
                    <Text style={styles.errorMessage}> {secondLine} </Text>
                </View>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={this.closeNotification}

                >
                    <Icon
                        name="times"
                        size={20}
                        color={colors.lightGray}
                    />
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

Notification.PropTypes = {
    showNotification: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine: PropTypes.string,
    secondLine: PropTypes.string,
    handleCloseNotification: PropTypes.func,

};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        padding: 10,
    },
    notificationContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize:14,
        marginBottom: 2,
    },
    errorMessage: {
       marginBottom: 2,
       fontSize: 14, 

    },
    closeButton: {
        position: "absolute",
        right: 10,
        top: 10,

    },

});