import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Purchases from "react-native-purchases";

import RevenueCatUI from "react-native-purchases-ui";

// Display current offering

const Subscription = () => {

    const [offers, setOffers] = useState([])

    useEffect(()=>{
        async function getOffer(){
            try {
                const offerings = await Purchases.getOfferings();
                console.log('====================================');
                console.log(offerings);
                console.log('====================================');
                setOffers(offerings)
                
            } catch (error) {
                console.log('====================================');
                console.log(error);
                console.log('====================================');
            }
        }

        getOffer()
    },[])
  return (
    <View style={{ flex: 1 }}>
      <RevenueCatUI.Paywall />
    </View>
  );
};

export default Subscription;
