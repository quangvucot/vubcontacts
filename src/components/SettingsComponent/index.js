import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import colors from '../../assets/theme/colors';
import AppModal from '../common/AppModal';
import Icon from '../common/Icon';
const SettingsComponent = ({
  settingsOption,
  modalVisible,
  setModalVisible,
  prefArr,
}) => {
  return (
    <>
      <AppModal
        title="Sort Contacts By"
        modalVisible={modalVisible}
        closeOnTouchOutside={false}
        modalBody={
          <View>
            {prefArr.map(({name, selected, onPress}) => {
              return (
                <TouchableOpacity
                  onPress={onPress}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 5,
                    alignItems: 'center',
                  }}>
                  {selected && (
                    <Icon name="check" type="materialIcon" size={20} />
                  )}
                  <Text style={{fontSize: 16, paddingLeft: selected ? 15 : 33}}>
                    {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        }
        modalFotter={<></>}
        setModalVisible={setModalVisible}
      />
      <ScrollView style={{backgroundColor: colors.white}}>
        {settingsOption.map(({title, subTitle, onPress}) => {
          return (
            <TouchableOpacity key={title} onPress={onPress}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingBottom: 20,
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 17}}>{title}</Text>
                {subTitle ? (
                  <Text
                    style={{fontSize: 14, color: colors.gray, paddingTop: 5}}>
                    {subTitle}
                  </Text>
                ) : null}
              </View>
              <View style={{height: 0.5, backgroundColor: colors.gray}}></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};

export default SettingsComponent;
