import React from 'react';
import { 
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import { colors } from '../common/theme';
import { Input, CheckBox } from 'react-native-elements';
import i18n from 'i18n-js';
var { width, height } = Dimensions.get('window');
export const MAIN_COLOR = colors.BLACK;

export default function OtherPerson(props){
    const { t } = i18n;
    const isRTL = i18n.locale.indexOf('he') === 0 || i18n.locale.indexOf('ar') === 0;
    const { style, auth, otherPerson, setInstructionData, setOtherPerson, instructionData } = props;
    return (
        <View style={[auth && auth.profile && auth.profile.firstName && auth.profile.lastName && auth.profile.email ? styles.vew : styles.bottomContainer1, {flexDirection: 'column', width: '100%'}]} >
        <CheckBox
            center
            checkedColor={colors.MAIN_COLOR}
            uncheckedColor='black'
            title={t('for_other_person')}
            checked={otherPerson}
            onPress={() => setOtherPerson(!otherPerson)}
            textStyle={{fontSize: 16, color: colors.BLACK}}
        />
        {otherPerson ?
        <View style={{flexDirection: 'column', width: '100%'}} >
            <View style={{ width: '100%' }}>
                <Input
                    editable={true}
                    underlineColorAndroid={colors.TRANSPARENT}
                    placeholder={t('otherPerson')}
                    placeholderTextColor={colors.DRIVER_TRIPS_TEXT}
                    value={instructionData.otherPerson}
                    keyboardType={'email-address'}
                    inputStyle={[styles.inputTextStyle,{textAlign:isRTL?"right":'left'}]}
                    onChangeText={(text) => { setInstructionData({ ...instructionData, otherPerson: text }) }}
                    inputContainerStyle={styles.inputContainerStyle}
                />
            </View>
            <View style={{ width: '100%' }}>
                <Input
                    editable={true}
                    underlineColorAndroid={colors.TRANSPARENT}
                    placeholder={t('otherPersonPhone')}
                    placeholderTextColor={colors.DRIVER_TRIPS_TEXT}
                    value={instructionData.otherPersonPhone}
                    keyboardType={'number-pad'}
                    inputStyle={[styles.inputTextStyle,{textAlign:isRTL?"right":'left'}]}
                    onChangeText={(text) => { setInstructionData({ ...instructionData, otherPersonPhone: text }) }}
                    inputContainerStyle={styles.inputContainerStyle}
                />
            </View>
        </View>
        : null }
    </View>
    );
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        borderRadius:10
    },
    textStyle:{
        width:"100%",
        textAlign: "center",
    },
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: colors.BACKGROUND_PRIMARY
    },
    bottomContainer1: { 
        alignItems: 'center',
        overflow: 'hidden',
        // backgroundColor: colors.RED 
    },
    vew: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: colors.WHITE,
        // padding: 10,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: -4 },
        // shadowOpacity:Platform.OS == 'ios'? 0.1: 0.8,
        // shadowRadius: 3,
        // elevation:Platform.OS == 'ios'? 2: 8,
        marginTop: 5
    }
});