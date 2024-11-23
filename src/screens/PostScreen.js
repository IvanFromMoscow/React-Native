import React from "react";
import {View, Text, StyleSheet, Image, ScrollView, Button, Alert} from 'react-native';
import { DATA } from './../data';
import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from './../components/AppHeaderIcon';


export const PostScreen = ({route, navigation}) => {
    
    const {postId} = route.params;
    let post = DATA.find(post => post.id === postId)
    post = {
        ...post,
        date: new Date(post.date).toLocaleDateString()
    }
    navigation.setOptions({
        title: `Пост от ${post.date}`,
       headerRight:() => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take photo" iconName= {(post.booked) ? "star": "star-outline"} onPress={() => console.log('photo')}/>
        </HeaderButtons>),

    });
    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить этот пост?",
            [
              {
                text: "Отменить",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Удалить", style:'destructive', onPress: () => console.log("OK Pressed") }
            ]
          );
    }
    return (
        <ScrollView style={styles.center}>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                 <Text style={styles.text}>{post.text.repeat(1000)}</Text>
            </View>
            <Button onPress={removeHandler} title="Удалить" color={THEME.DANGER_COLOR}/>
        </ScrollView>

    );
}

styles = StyleSheet.create({
    center: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    text: {
        fontFamily: 'OpenSansCondensed_300Light'
    }
});