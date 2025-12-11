
// utils/haptics.ts
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * Haptic feedback helper class for consistent haptic responses across the app
 * Provides unified interface for haptic feedback on iOS and Android
 * Automatically skips haptics on web platform
 */
export class HapticFeedback {
  private static isEnabled = true;
  private static readonly isHapticsSupported = Platform.OS === 'ios' || Platform.OS === 'android';

  /**
   * Checks if haptics are supported on the current platform
   * @returns True if platform supports haptics (iOS or Android)
   */
  static isSupported(): boolean {
    return this.isHapticsSupported;
  }

  /**
   * Enables haptic feedback globally
   */
  static enable(): void {
    this.isEnabled = true;
    console.log('[Haptics] Enabled');
  }

  /**
   * Disables haptic feedback globally
   */
  static disable(): void {
    this.isEnabled = false;
    console.log('[Haptics] Disabled');
  }

  /**
   * Checks if haptics are currently enabled
   * @returns True if haptics are enabled
   */
  static getEnabled(): boolean {
    return this.isEnabled;
  }

  /**
   * Internal helper to execute haptic feedback if enabled and supported
   * @param hapticFn - The haptic function to execute
   */
  private static async execute(hapticFn: () => Promise<void>): Promise<void> {
    if (!this.isEnabled || !this.isHapticsSupported) {
      return;
    }

    try {
      await hapticFn();
    } catch (error) {
      console.warn('[Haptics] Feedback failed:', error);
    }
  }

  /**
   * Light impact haptic feedback
   * Best for: Button taps, toggle switches, minor UI interactions
   */
  static async light(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    );
  }

  /**
   * Medium impact haptic feedback
   * Best for: Standard button presses, confirmations, card selections
   */
  static async medium(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    );
  }

  /**
   * Heavy impact haptic feedback
   * Best for: Important actions, deletions, major confirmations
   */
  static async heavy(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    );
  }

  /**
   * Soft impact haptic feedback
   * Best for: Subtle interactions, hover states, gentle notifications
   */
  static async soft(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)
    );
  }

  /**
   * Success notification haptic feedback
   * Best for: Successful operations, achievements unlocked, saves completed
   */
  static async success(): Promise<void> {
    await this.execute(() => 
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    );
  }

  /**
   * Warning notification haptic feedback
   * Best for: Warnings, cautions, reversible errors
   */
  static async warning(): Promise<void> {
    await this.execute(() => 
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
    );
  }

  /**
   * Error notification haptic feedback
   * Best for: Failed operations, validation errors, critical issues
   */
  static async error(): Promise<void> {
    await this.execute(() => 
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
    );
  }

  /**
   * Selection haptic feedback
   * Best for: Picker changes, slider adjustments, tab switches
   */
  static async selection(): Promise<void> {
    await this.execute(() => 
      Haptics.selectionAsync()
    );
  }

  /**
   * Rigid impact haptic feedback (iOS only, falls back to heavy on Android)
   * Best for: End-of-scroll boundaries, collision effects
   */
  static async rigid(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
    );
  }

  /**
   * Custom haptic pattern for special interactions
   * Combines multiple haptics for complex feedback
   * @param pattern - Array of haptic types to execute in sequence
   * @param delay - Milliseconds between each haptic (default: 100ms)
   * @example
   * // Create a triple-tap pattern
   * await HapticFeedback.pattern(['light', 'light', 'light'], 50);
   */
  static async pattern(
    pattern: ('light' | 'medium' | 'heavy' | 'soft')[],
    delay: number = 100
  ): Promise<void> {
    if (!this.isEnabled || !this.isHapticsSupported || !pattern || pattern.length === 0) {
      return;
    }

    for (const hapticType of pattern) {
      switch (hapticType) {
        case 'light':
          await this.light();
          break;
        case 'medium':
          await this.medium();
          break;
        case 'heavy':
          await this.heavy();
          break;
        case 'soft':
          await this.soft();
          break;
        default:
          console.warn(`[Haptics] Unknown haptic type: ${hapticType}`);
      }
      
      if (delay > 0 && pattern.indexOf(hapticType) < pattern.length - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  /**
   * Celebration haptic pattern
   * Best for: Major achievements, level ups, special unlocks
   * @example
   * // User unlocks achievement
   * await HapticFeedback.celebrate();
   */
  static async celebrate(): Promise<void> {
    await this.pattern(['medium', 'heavy', 'medium'], 50);
  }

  /**
   * Double tap haptic pattern
   * Best for: Quick confirmations, double-tap actions
   * @example
   * // User double-taps to favorite
   * await HapticFeedback.doubleTap();
   */
  static async doubleTap(): Promise<void> {
    await this.pattern(['light', 'light'], 80);
  }

  /**
   * Bounce haptic pattern
   * Best for: Pull-to-refresh, elastic interactions
   * @example
   * // User pulls to refresh
   * await HapticFeedback.bounce();
   */
  static async bounce(): Promise<void> {
    await this.pattern(['soft', 'medium', 'soft'], 60);
  }

  /**
   * Pulse haptic pattern
   * Best for: Ongoing processes, loading states
   * @example
   * // During data sync
   * await HapticFeedback.pulse();
   */
  static async pulse(): Promise<void> {
    await this.pattern(['light', 'soft'], 150);
  }

  /**
   * Triple tap haptic pattern
   * Best for: Secret features, easter eggs
   * @example
   * // User discovers secret feature
   * await HapticFeedback.tripleTap();
   */
  static async tripleTap(): Promise<void> {
    await this.pattern(['light', 'light', 'light'], 60);
  }

  /**
   * Ramp up haptic pattern (increasing intensity)
   * Best for: Progress indicators, building tension
   * @example
   * // As progress bar fills
   * await HapticFeedback.rampUp();
   */
  static async rampUp(): Promise<void> {
    await this.pattern(['soft', 'light', 'medium', 'heavy'], 80);
  }

  /**
   * Ramp down haptic pattern (decreasing intensity)
   * Best for: Completion, winding down
   * @example
   * // When task completes
   * await HapticFeedback.rampDown();
   */
  static async rampDown(): Promise<void> {
    await this.pattern(['heavy', 'medium', 'light', 'soft'], 80);
  }
}
