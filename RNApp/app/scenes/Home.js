import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import styles from '../styles/PageStyle';

import {
    View,
    Text,
    ContainerWithMenu,
    Navbar
} from '../components';

// Verbose way to create Presentational components
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        // console.log('Home', this.props);

        const left = {
            role: "login",
            onPress: Actions.login
        };

        const right = {
            role: "sidebar",
        };

        return (
            <ContainerWithMenu>
                <Navbar role="header" title="Home Page" left={left} right={right} />
                <View style={styles.content}>
                    <View style={styles.subContainer}>
                        <Text style={styles.heading}>Welcome to MeteorNative!</Text>
                    </View>
                    <View style={styles.subContainer}>
                        <Text style={styles.heading}>{this.props.user && this.props.user.username}</Text>
                    </View>
                    <View style={[styles.subContainer, {justifyContent: 'flex-end'}]}>
                        <Text style={[styles.text, {backgroundColor: '#b3b3b3', padding: 5}]}>This is a boilerplate that aims to integrate together Meteor as backend, React Native as frontend and Redux for managing state.</Text>
                        <Text style={[styles.text, {marginTop: 10, padding: 4, backgroundColor: '#000000'}]}>Login with: test / test</Text>
                    </View>
                </View>
            </ContainerWithMenu>
        );
    }
 }

export default Home;