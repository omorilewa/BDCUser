/* eslint-disable no-console */
import { AsyncStorage } from 'react-native';

export const setItem = async(key, value) => {
  try {
    const operation = await AsyncStorage.setItem(key, value);
    return operation;
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async(item) => {
  try {
    const operation = await AsyncStorage.getItem(item);
    return operation;
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = async(item) => {
  try {
    const operation = await AsyncStorage.removeItem(item);
    return operation;
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = async() => {
  try {
    const operation = await AsyncStorage.clear();
    return operation;
  } catch (error) {
    console.log(error);
  }
};
