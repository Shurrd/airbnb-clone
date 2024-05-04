import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Page = () => {
  return (
    <View>
      <Link href={'/(modals)/auth'}>Login</Link>
      <Link href={'/(modals)/booking'}>Booking</Link>
      <Link href={'/listing/3324'}>Listing Detail</Link>
    </View>
  );
};

export default Page;
