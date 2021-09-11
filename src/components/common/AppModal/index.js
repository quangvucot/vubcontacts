import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Icon from '../Icon/';
const AppModal = ({
  title,
  modalVisible,
  modalBody,
  modalFotter,
  setModalVisible,
  closeOnTouchOutside,
}) => {
  return (
    <Modal visible={modalVisible}>
      <TouchableOpacity
        primary
        onPress={() => {
          if (closeOnTouchOutside) {
            setModalVisible(false);
          }
        }}
        style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Icon size={20} type="evilIcon" name="close" />
              </TouchableOpacity>

              <Text style={styles.title}>{title || 'Contacts'}</Text>
              <View></View>
            </View>
            <View style={styles.footerSeparate} />
            <View style={styles.body}>{modalBody}</View>
            {!modalFotter && (
              <View>
                <View style={styles.footerSeparate} />
                <View style={styles.footerItems}>
                  <View style={styles.footer}>
                    <Text style={styles.footerText}>Privacy Policy </Text>
                    <View style={styles.termsView}></View>
                    <Text style={styles.footerText}>Terms of privacy</Text>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
PropTypes.propTypes = {
  closeOnTouchOutside: PropTypes.bool,
};
PropTypes.defaultProps = {
  closeOnTouchOutside: true,
};

export default AppModal;
