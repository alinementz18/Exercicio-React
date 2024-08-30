import React from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/file.png';
import { FontAwesome } from '@expo/vector-icons';
import { themas } from "../../global/themas";

export default function Presentation() {

    function openInstagram() {
        const instagramUrl = 'https://www.instagram.com/seu_usuario_instagram';
        Linking.openURL(instagramUrl).catch(err => console.error("Couldn't load page", err));
    }

    function openLinkedIn() {
        const linkedInUrl = 'https://www.linkedin.com/in/seu_usuario_linkedin';
        Linking.openURL(linkedInUrl).catch(err => console.error("Couldn't load page", err));
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
            </View>
            <View style={style.boxMid}>
                <Text style={style.text}>ALINE MENTZ</Text>
                <Text style={style.titleInput}>
                    Olá! Sou Aline Mentz, desenvolvedora de software apaixonada por tecnologia e inovação. 
                    Tenho experiência em React Native, React e desenvolvimento web. Sempre busco aprender novas 
                    tecnologias e desafios para crescer profissionalmente.
                </Text>
                <View style={style.socialIcons}>
                    <TouchableOpacity onPress={openInstagram} style={style.socialButton}>
                        <FontAwesome
                            name='instagram'
                            size={30}
                            color={themas.colors.gray}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openLinkedIn} style={style.socialButton}>
                        <FontAwesome
                            name='linkedin'
                            size={30}
                            color={themas.colors.gray}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.boxBottom}>
                <Text style={style.textBottom}>Entre em contato para mais informações!</Text>
            </View>
        </View>
    );
}
