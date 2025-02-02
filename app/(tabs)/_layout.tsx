import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import { Smile, Heart, Compass, MessageCircleMore, AlignRight, CircleEllipsis, Badge } from 'lucide-react-native';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  const iconStyle = {
    strokeWidth: 1.5,
    size: 28,
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          'borderTopWidth': 0,
          'paddingTop': 1,
          'borderRadius': 30,
          'width': '80%',
          'height': 60,
          'margin': 'auto',  
          'marginBottom': 20,     
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <Badge color={color} {...iconStyle}/>,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <CircleEllipsis
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

       <Tabs.Screen
        name="shortlist"
        options={{
          title: 'Shortlist',
          tabBarIcon: ({ color }) => <Heart color={color} {...iconStyle}  />,
        }}
      />
       <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <MessageCircleMore color={color} {...iconStyle} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <AlignRight color={color} {...iconStyle} />,
        }}
      />
    </Tabs>
  );
}
