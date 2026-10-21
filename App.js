// App.js
// Indgangspunkt for "Digital Guide" (iteration 2).
// Nyt i denne version: tab-navigation i bunden med to faner, ligesom i øvelse 05.
//  - Fanen "Guides" indeholder en stack med forside -> liste -> guide
//  - Fanen "Ønsk en guide" er den nye skærm, hvor brugeren kan sende et ønske ind

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import GuideListScreen from "./screens/GuideListScreen";
import GuideDetailScreen from "./screens/GuideDetailScreen";
import OenskGuideScreen from "./screens/OenskGuideScreen";
import { Farver } from "./styles/farver";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Fælles udseende for headeren (stor skrift pga. målgruppen)
const headerOptions = {
  headerStyle: { backgroundColor: Farver.moerkeblaa },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: { fontSize: 20, fontWeight: "700" },
};

// Stacken med de tre skærme fra første version
function GuideStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Digital Guide" }} />
      <Stack.Screen name="GuideList" component={GuideListScreen} options={{ title: "Vælg en guide" }} />
      <Stack.Screen name="GuideDetail" component={GuideDetailScreen} options={{ title: "Sådan gør du" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: Farver.moerkeblaa,
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 14 },
            // vælg ikon ud fra fanens navn
            tabBarIcon: ({ color, size }) => {
              const ikon = route.name === "Guides" ? "book" : "add-circle";
              return <Ionicons name={ikon} size={size} color={color} />;
            },
          })}
        >
          {/* headerShown false, fordi stacken selv har en header */}
          <Tab.Screen name="Guides" component={GuideStack} options={{ headerShown: false }} />
          <Tab.Screen
            name="Ønsk en guide"
            component={OenskGuideScreen}
            options={headerOptions}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
