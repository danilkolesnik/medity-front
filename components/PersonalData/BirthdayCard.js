
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const BirthdayCard = ({birthdayDate}) => {
    const [birthday, setBirthday] = useState(birthdayDate);

    const handleDateInput = (input) => {
        // Remove any non-digit characters
        let cleanedInput = input.replace(/[^\d]/g, '');
    
        // Format input as dd.mm.yyyy
        if (cleanedInput.length > 2 && cleanedInput.length <= 4) {
          cleanedInput = `${cleanedInput.slice(0, 2)}.${cleanedInput.slice(2)}`;
        } else if (cleanedInput.length > 4) {
          cleanedInput = `${cleanedInput.slice(0, 2)}.${cleanedInput.slice(2, 4)}.${cleanedInput.slice(4, 8)}`;
        }
    
        setBirthday(cleanedInput); // Set the formatted date
      };

      const formatDate = (dateString) => {
        const dateParts = dateString.split('.');
        if (dateParts.length === 3 && dateParts[2].length === 4) {
          const [day, month, year] = dateParts.map(part => parseInt(part));
          const dateObject = new Date(year, month - 1, day);
          return dateObject.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
        }
        return '';
      };

    return (
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="13.09.2024"
          placeholderTextColor="#fff"
          keyboardType="numeric"
          value={birthday}
          onChangeText={handleDateInput} // Handle input with formatting
          maxLength={10} // Max length for dd.mm.yyyy format
        />
       
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
     
    },
    label: {
      fontSize: 18,
      color: '#ccc', // Light gray text
  
    },
    input: {
     backgroundColor: "rgba(255, 255, 255, 0.15)",
      color: '#fff', 
      paddingHorizontal:18,
      paddingVertical:18,
      borderRadius: 8,
      width: '100%',
      
    },
  
    dateText: {
      color: '#fff', 
      fontSize:14,
      fontWeight:'400',
      fontFamily:'Urbanist-Regular',
    },
  });

export default BirthdayCard