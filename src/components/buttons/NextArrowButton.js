import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    TouchableHighlight,
    StyleSheet,
    Button
} from 'react-native';

import colors from '../../styles/colors';


export default class NextArrowButton extends Component {

    

    render() {

        const { disabled,handleNextButton } = this.props;
        const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255,0.2)' }: { backgroundColor: 'rgba(255,255,255,0.6)'};
        return (
            <TouchableHighlight style={[opacityStyle, styles.button]}
             onPress={ handleNextButton }
            >
            
                <Icon
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableHighlight>

        );                                                                                                   
    }
}

NextArrowButton.PropTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,

};
const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
    }
});