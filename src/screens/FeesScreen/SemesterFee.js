import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import SemeFee from '../../Components/Fees/SemeFee';
import {GlobalContext} from '../../services/GlobalContext';


const SemesterFee = () => {
  const {State, StateDispatch} = React.useContext(GlobalContext);
  return (
    <ScrollView style={styles.feeContainer}>
        <SemeFee semster={'VI'} />
        <SemeFee semster={'V'} />
        <SemeFee semster={'IV'} />
        <SemeFee semster={'III'} />
        <SemeFee semster={'II'} />
        <SemeFee semster={'I'} />
    </ScrollView>
  );
};

export default SemesterFee;

const styles = StyleSheet.create({
  feeContainer: {
    flex: 1,
    backgroundColor:'#ffa500'
  },
});
