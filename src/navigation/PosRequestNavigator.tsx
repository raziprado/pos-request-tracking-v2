import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MarketingScreen } from '../screens/MarketingScreen';
import { MarketingScrollScreen } from '../screens/MarketingScrollScreen';
import { AddressScreen } from '../screens/AddressScreen';
import { NewAddressCepScreen } from '../screens/NewAddressCepScreen';
import { NewAddressCep2Screen } from '../screens/NewAddressCep2Screen';
import { NewAddressDetailsScreen } from '../screens/NewAddressDetailsScreen';
import { NewAddressDetails2Screen } from '../screens/NewAddressDetails2Screen';
import { AddressConfirmScreen } from '../screens/AddressConfirmScreen';
import { DeliveryDayScreen } from '../screens/DeliveryDayScreen';
import { DeliveryDay2Screen } from '../screens/DeliveryDay2Screen';
import { DeliveryTimeScreen } from '../screens/DeliveryTimeScreen';
import { QuantityScreen } from '../screens/QuantityScreen';
import { PaymentMethodScreen } from '../screens/PaymentMethodScreen';
import { ReviewScreen } from '../screens/ReviewScreen';
import { EditAddressScreen } from '../screens/EditAddressScreen';
import { EditAddress2Screen } from '../screens/EditAddress2Screen';
import { EditDeliveryScreen } from '../screens/EditDeliveryScreen';
import { EditDelivery2Screen } from '../screens/EditDelivery2Screen';
import { EditPaymentScreen } from '../screens/EditPaymentScreen';
import { EditPayment2Screen } from '../screens/EditPayment2Screen';
import { EditPayment3Screen } from '../screens/EditPayment3Screen';
import { PinCodeScreen } from '../screens/PinCodeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { SuccessScreen } from '../screens/SuccessScreen';
import { TrackingScreen } from '../screens/TrackingScreen';

export type RootStackParamList = {
  Marketing: undefined;
  Marketing_1_2: undefined;
  Address_2_1: undefined;
  NewAddress_2_2: undefined;
  NewAddress_2_3: undefined;
  NewAddress_2_4: undefined;
  NewAddress_2_5: undefined;
  Address_2_6: undefined;
  DeliveryDay_3_1: undefined;
  DeliveryDay_3_2: undefined;
  DeliveryTime_3_3: undefined;
  Quantity_4_1: undefined;
  PaymentMethod_5_1: undefined;
  Review_6: undefined;
  EditAddress_6_3: undefined;
  EditAddress_6_4: undefined;
  EditDelivery_6_5: undefined;
  EditDelivery_6_6: undefined;
  EditPayment_6_7: undefined;
  EditPayment_6_8: undefined;
  EditPayment_6_9: undefined;
  PinCode_7_1: undefined;
  Loading: undefined;
  Success_7_5: undefined;
  Tracking: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PosRequestNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="Marketing" component={MarketingScreen} />
      <Stack.Screen name="Marketing_1_2" component={MarketingScrollScreen} options={{ animation: 'slide_from_bottom' }} />
      <Stack.Screen name="Address_2_1" component={AddressScreen} />
      <Stack.Screen name="NewAddress_2_2" component={NewAddressCepScreen} />
      <Stack.Screen name="NewAddress_2_3" component={NewAddressCep2Screen} />
      <Stack.Screen name="NewAddress_2_4" component={NewAddressDetailsScreen} />
      <Stack.Screen name="NewAddress_2_5" component={NewAddressDetails2Screen} />
      <Stack.Screen name="Address_2_6" component={AddressConfirmScreen} />
      <Stack.Screen name="DeliveryDay_3_1" component={DeliveryDayScreen} />
      <Stack.Screen name="DeliveryDay_3_2" component={DeliveryDay2Screen} />
      <Stack.Screen name="DeliveryTime_3_3" component={DeliveryTimeScreen} />
      <Stack.Screen name="Quantity_4_1" component={QuantityScreen} />
      <Stack.Screen name="PaymentMethod_5_1" component={PaymentMethodScreen} />
      <Stack.Screen name="Review_6" component={ReviewScreen} />
      <Stack.Screen name="EditAddress_6_3" component={EditAddressScreen} />
      <Stack.Screen name="EditAddress_6_4" component={EditAddress2Screen} />
      <Stack.Screen name="EditDelivery_6_5" component={EditDeliveryScreen} />
      <Stack.Screen name="EditDelivery_6_6" component={EditDelivery2Screen} />
      <Stack.Screen name="EditPayment_6_7" component={EditPaymentScreen} />
      <Stack.Screen name="EditPayment_6_8" component={EditPayment2Screen} />
      <Stack.Screen name="EditPayment_6_9" component={EditPayment3Screen} />
      <Stack.Screen name="PinCode_7_1" component={PinCodeScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} options={{ animation: 'fade' }} />
      <Stack.Screen name="Success_7_5" component={SuccessScreen} options={{ animation: 'fade' }} />
      <Stack.Screen name="Tracking" component={TrackingScreen} options={{ animation: 'slide_from_right' }} />
    </Stack.Navigator>
  );
}
