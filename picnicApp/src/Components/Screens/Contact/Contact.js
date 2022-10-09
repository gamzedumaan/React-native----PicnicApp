import {Text, View, Modal, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import styles from './Contact.style';

function Contact() {
  const [Thanks, setThanks] = useState(false);
  const [Advice, setAdvice] = useState(false);
  const [Request, setRequest] = useState(false);
  const [Complaint, setComplaint] = useState(false);
  const [Selected, setSelection] = useState();
  const[Content, setContent] =useState();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const positive = () => {
    setThanks(true);
    setAdvice(false);
    setRequest(false);
    setComplaint(false);
    setSelection(true);
  };

  const Sende = () => {
    Alert.alert('Thank you for your feedback');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.Header}>Subject</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.Text}>Thank</Text>

        {/*Box 1*/}
        <View>
          <CheckBox
            disabled={false}
            value={Thanks}
            onValueChange={newValue => setThanks(newValue)}
            tintColors={{true: 'black'}}
          />
        </View>
        <Text style={styles.Text}>Advice</Text>

        {/*Box 2*/}
        <View>
          <CheckBox
            disabled={false}
            value={Advice}
            onValueChange={newValue => setAdvice(newValue)}
            onPress={Thanks}
            tintColors={{true: 'black'}}
          />
        </View>
        <Text style={styles.Text}>Request</Text>

        {/*Box 3*/}
        <View>
          <CheckBox
            disabled={false}
            value={Request}
            onValueChange={newValue => setRequest(newValue)}
            tintColors={{true: 'black'}}
          />
        </View>
        <Text style={styles.Text}>Complaint</Text>
        <View>
          {/*Box 4*/}
          <CheckBox
            disabled={false}
            value={Complaint}
            onValueChange={newValue => setComplaint(newValue)}
            tintColors={{true: 'black'}}
          />
        </View>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.InputText}
          placeholder="Adding a description .." 
          placeholderTextColor={'black'}
          value={Content}
          onChangeText={text => setContent(text)}
        />
      </View>

      <View style={styles.containerButton}>
        <Button title="SEND" color="#EBCB7F" onPress={Sende} />
      </View>
    </View>
  );
}

export default Contact;
