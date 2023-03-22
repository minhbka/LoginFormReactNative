import {
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import React from 'react';

const KeyboardAvoidingContainer = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}
      style={{flex: 1, backgroundColor: 'transparent'}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingContainer;
