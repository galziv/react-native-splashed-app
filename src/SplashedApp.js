/**
 * Created by Gal on 21/10/2017.
 */

import React from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, Text, Image, View, Dimensions, Animated} from 'react-native';

const dimensions = Dimensions.get('window');
const moveZero = new Animated.Value(0);
const opacityOne = new Animated.Value(1);

const animate = (duration, direction, withFadeOut) => {
    let toValue;
    let animations = [];
    let durationClone = Number(duration || 3000); // without cloning the number the animation goes crazy when it ends

    switch (direction) {
        case "left":
            toValue = -dimensions.width;
            break;
        case "right":
            toValue = dimensions.width;
            break;
        case "down":
            toValue = dimensions.height;
            break;
        case "up":
        default:
            toValue = -dimensions.height;
            break;
    }

    let moveAnimation = Animated.timing(moveZero, {
        toValue,
        duration: durationClone
    });

    animations.push(moveAnimation);

    if (withFadeOut) {
        let fadeAnimation = Animated.timing(opacityOne, {toValue: 0, duration: durationClone});
        animations.push(fadeAnimation);
    }

    Animated.parallel(animations).start();
};

const selectContent = (imageSource, text) => {
    let content;

    if (imageSource) {
        content = <Image source={imageSource} style={[layout.spread]}/>;
    } else {
        content = <Text>{text || 'provide imageSource or text'}</Text>;
    }

    return content;
};

const getAnimationBaseStyle = (direction, withFadeOut) => {
    let styleObj = withFadeOut ? {opacity: opacityOne} : {};
    return ['left', 'right'].indexOf(direction) > -1 ? Object.assign(styleObj, {left: moveZero}) : Object.assign(styleObj, {top: moveZero});
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splash: {
        position: 'absolute'
    }
});

export const SplashedApp = ({imageSource, text, direction, children, duration, withFadeOut, baseColor}) => {
    setTimeout(() => animate(duration, direction, withFadeOut), 2000);

    return (
        <View style={styles.container}>
            {children}
            <Animated.View
                style={[styles.container, styles.splash, {backgroundColor: baseColor || 'lightgray'}, getAnimationBaseStyle(direction, withFadeOut)]}>
                {selectContent(imageSource, text)}
            </Animated.View>
        </View>
    );
};

SplashedApp.PropTypes = {
    imageSource: PropTypes.string,
    text: PropTypes.string,
    direction: PropTypes.string,
    baseColor: PropTypes.string,
    children: PropTypes.object,
    duration: PropTypes.number,
    withFadeOut: PropTypes.bool
};

export default SplashedApp;

