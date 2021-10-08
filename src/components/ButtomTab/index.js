import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {
  ILArchieveActive,
  ILArchieveInactive,
  ILAssetActive,
  ILAssetInactive,
  ILProgressActive,
  ILProgressInactive,
  ILProspekActive,
  ILProspekInactive,
  ILSearchActive,
  ILSearchInactive,
} from '../../asset';

const BottomTab = ({state, descriptors, navigation}) => {
  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Progress':
        return focus ? <ILProgressActive /> : <ILProgressInactive />;
      case 'Prospek':
        return focus ? <ILProspekActive /> : <ILProspekInactive />;
      case 'Search':
        return focus ? <ILSearchActive /> : <ILSearchInactive />;
      case 'Archieve':
        return focus ? <ILArchieveActive /> : <ILArchieveInactive />;
      case 'Asset':
        return focus ? <ILAssetActive /> : <ILAssetInactive />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabMenu}
            activeOpacity={0.3}>
            <Icon label={label} focus={isFocused} />
            <Text style={styles.label(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  label: isFocused => ({
    fontFamily: isFocused ? 'Lato-Black' : 'Lato-Regular',
    fontSize: 12,
    color: isFocused ? '#23A1F5' : '#B2ACAC',
    marginTop: 8,
    textAlign: 'center',
  }),
  tabMenu: {
    alignItems: 'center',
    flex: 1,
  },
});
