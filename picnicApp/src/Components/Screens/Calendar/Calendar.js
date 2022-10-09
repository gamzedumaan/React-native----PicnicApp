import * as React from 'react';
import {List} from 'react-native-paper';
import styles from './Calendar.style';

const Calendar = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section style={styles.container}>
      <List.Accordion
        titleNumberOfLines={1}
        style={styles.Header}
        title="Tuzla Station"
        left={props => <List.Icon {...props} icon="equal" />}>
        <List.Item title=" Date : 07.09.2022    " />
        <List.Item title=" Opening Time : 10:00 " />
        <List.Item title=" Close Date : 00.00 " />
      </List.Accordion>

      <List.Accordion
        style={styles.Header}
        title="Caddebostan Station"
        left={props => <List.Icon {...props} icon="equal" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title=" Date : 07.09.2022    " />
        <List.Item title=" Opening Time : 10:00 " />
        <List.Item title=" Close Date : 00.00 " />
      </List.Accordion>
    </List.Section>
  );
};

export default Calendar;
