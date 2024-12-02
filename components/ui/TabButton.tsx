import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TabButtonProps {
  title: string;
  onPress: () => void;
  isActive: boolean;
}

export function TabButton({ title, onPress, isActive }: TabButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        isActive && styles.activeTabButton,
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.tabButtonText,
        isActive && styles.activeTabButtonText,
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 9999,
  },
  activeTabButton: {
    backgroundColor: '#E0E0E0',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: '#000',
  },
});

