// components/button.tsx
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  ViewStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { appleBlue, zincColors } from "@/constants/Colors";

type ButtonVariant = "filled" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 300,
} as const;

export const Button: React.FC<ButtonProps> = ({
  onPress,
  variant = "filled",
  size = "md",
  disabled = false,
  loading = false,
  children,
  style,
  textStyle,
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  // ✅ FIX: Add animation for smooth interactions
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const sizeStyles: Record<
    ButtonSize,
    { height: number; fontSize: number; padding: number }
  > = {
    sm: { height: 36, fontSize: 14, padding: 12 },
    md: { height: 44, fontSize: 16, padding: 16 },
    lg: { height: 55, fontSize: 18, padding: 20 },
  };

  const getVariantStyle = () => {
    const baseStyle: ViewStyle = {
      borderRadius: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    };

    switch (variant) {
      case "filled":
        return {
          ...baseStyle,
          backgroundColor: isDark ? zincColors[50] : zincColors[900],
        };
      case "outline":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: isDark ? zincColors[700] : zincColors[300],
        };
      case "ghost":
        return {
          ...baseStyle,
          backgroundColor: "transparent",
        };
    }
  };

  const getTextColor = () => {
    if (disabled) {
      return isDark ? zincColors[500] : zincColors[400];
    }

    switch (variant) {
      case "filled":
        return isDark ? zincColors[900] : zincColors[50];
      case "outline":
      case "ghost":
        return appleBlue;
    }
  };

  const handlePressIn = () => {
    if (!disabled && !loading) {
      scale.value = withSpring(0.96, SPRING_CONFIG);
    }
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, SPRING_CONFIG);
  };

  // ✅ FIX: Update opacity when disabled/loading changes
  React.useEffect(() => {
    opacity.value = withTiming(disabled ? 0.5 : 1, { duration: 200 });
  }, [disabled, opacity]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      style={[
        getVariantStyle(),
        {
          height: sizeStyles[size].height,
          paddingHorizontal: sizeStyles[size].padding,
        },
        style,
      ]}
    >
      <Animated.View style={[animatedStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
        {loading ? (
          <ActivityIndicator color={getTextColor()} />
        ) : (
          <Text
            style={StyleSheet.flatten([
              {
                fontSize: sizeStyles[size].fontSize,
                color: getTextColor(),
                textAlign: "center",
                marginBottom: 0,
                fontWeight: "700",
              },
              textStyle,
            ])}
          >
            {children}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default Button;