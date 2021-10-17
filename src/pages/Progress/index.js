import React, {useCallback, useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderMenu, ProjectList, ProspekList} from '../../components';

const Progress = () => {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => setRefresh(false), 1000);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderMenu />
      <ScrollView
        decelerationRate="normal"
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={styles.scroll}>
        <View style={styles.headerGap}></View>
        {/* Project Start */}
        <View style={styles.sectionWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Ongoing Project</Text>
            <TouchableOpacity onPress={() => alert('Lihat semua')}>
              <Text style={styles.link}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ProjectList
            category="DFR"
            title="Pengadaan dan Pemasangan DFR GI Tersebar"
            customer="PT. PLN (Persero) UIKL Sulawesi"
            startdate="12 Januari 2021"
            enddate="17 September 2021"
          />
          <ProjectList
            category="Sprecher"
            title="RTU (GI dan GH)"
            customer="PT. PLN (Persero) UP2D Sumatera Barat"
            startdate="12 November 2021"
            enddate="17 Januari 2022"
          />
          <ProjectList
            category="Engineering"
            title="Studi Kelistrikan MRT Jakarta"
            customer="PT. MRTJ"
            startdate="12 Januari 2021"
            enddate="17 September 2021"
          />
        </View>
        {/* Project End */}

        {/* Prospek Start */}
        <View style={styles.sectionWrapper}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Prospek</Text>
            <TouchableOpacity onPress={() => alert('Lihat semua')}>
              <Text style={styles.link}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <ProspekList
            title="RTU GI/GH"
            precustomer="PT. PLN (Persero) UP2D Sumatera Barat"
          />
          <ProspekList
            title="DFR Tersebar Kalimantan"
            precustomer="PT. PLN (Persero) UIKL Kalimantan"
          />
        </View>
        {/* Prospek End */}
      </ScrollView>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008AD8',
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  headerGap: {
    marginBottom: 20,
  },
  sectionWrapper: {
    // marginTop: 20,
    marginBottom: 20,
    padding: 12,
    // paddingBottom: -12,
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0,0,0,1)',
    elevation: 4,
  },
  label: {
    fontFamily: 'Lato-Bold',
    color: '#404040',
    fontSize: 20,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  link: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: '#0085FF',
  },
  calendarStrip: {
    paddingVertical: 8,
    backgroundColor: 'red',
    marginBottom: 8,
    height: 88,
  },
  agendaDetail: {
    backgroundColor: 'grey',
    flex: 1,
  },
  subsection: {
    fontFamily: 'Lato-BoldItalic',
    fontSize: 14,
    color: '#404040',
    marginBottom: 8,
  },
});
