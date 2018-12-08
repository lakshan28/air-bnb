import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Button
} from 'react-native';
import colors from '../../styles/colors';

export default class RoundeButton extends Component {
    render() {

        const { text, textColor, background, handleOnPress} = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableHighlight style={[{backgroundColor},styles.wrapper]}
                onPress={handleOnPress}
            >
                <View>
                    
                    <Text style={[{color},styles.buttonText]}>
                        {text}
                    </Text>
                </View>    
            </TouchableHighlight>
        );
    }
}

RoundeButton.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    background: PropTypes.string,
    
    handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
        wrapper: {
            display: 'flex',
            padding: 15,
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.white,
            marginBottom: 15,
            alignItems: 'center',

        },

        buttonText: {
            fontSize: 16,
            width: '100%',
            textAlign: 'center'
        }
})