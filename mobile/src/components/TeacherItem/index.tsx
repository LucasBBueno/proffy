import React from 'react';
import { View, Image, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whastappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const TeacherItem: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://avatars0.githubusercontent.com/u/45021630?s=460&u=25d45893c9bdbb8680f7271fec8cf32c2f26a20c&v=4' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        Lucas Bueno
                    </Text>
                    <Text style={styles.subject}>
                        Matemática
                    </Text>
                </View>
            </View>

            
            <Text style={styles.bio}>
                    Entusista das melhores tecnologias de desenvolvimento mobile.
                    {'\n'}{'\n'}
                    Apaixonado por construir aplicações que irão mudar a vida das pessoas.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>
                        R$ 20,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */} 
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whastappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>            
        </View>
    );
};

export default TeacherItem;