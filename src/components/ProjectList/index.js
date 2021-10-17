import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ILProjectDFR,
  ILProjectEngineering,
  ILProjectSprecher,
} from '../../asset';

const ProjectList = ({
  title,
  customer,
  category,
  startdate,
  enddate,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      {category === 'DFR' ? (
        <ILProjectDFR />
      ) : category == 'Sprecher' ? (
        <ILProjectSprecher />
      ) : (
        <ILProjectEngineering />
      )}
      <View style={styles.projectInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.categoryCustomer}>
          {category} • {customer}
        </Text>
        <Text style={styles.date}>
          {startdate} - {enddate}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectList;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 12,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FCFF',
    borderRadius: 2,
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 4,
  },
  projectInfo: {
    marginLeft: 12,
  },
  title: {
    fontFamily: 'Lato-Bold',
    color: '#404040',
    fontSize: 14,
    marginBottom: 12,
  },
  categoryCustomer: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    marginBottom: 12,
  },
  date: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: '#FF4242',
  },
});
