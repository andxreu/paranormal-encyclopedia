// utils/haptics.ts
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

// ──────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────
const HAPTICS_SUPPORTED = Platform.OS === 'ios' || Platform.OS === 'android';
const DEFAULT_PATTERN_DELAY = 100;

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
type HapticPattern = ('light' | 'medium' | 'heavy' | 'soft')[];

/**
 * Haptic feedback helper class for consistent haptic responses across the app
 * Provides unified interface for haptic feedback on iOS and Android
 * Automatically skips haptics on web platform
 * 
 * @example
 * // Simple usage
 * HapticFeedback.light();
 * 
 * // Success feedback
 * HapticFeedback.success();
 * 
 * // Custom pattern
 * HapticFeedback.pattern(['light', 'medium', 'heavy'], 50);
 */
export class HapticFeedback {
  private static isEnabled = true;
  private static readonly isHapticsSupported = HAPTICS_SUPPORTED;

  // ────────────────────────────────────────────────────────────
  // State Management
  // ────────────────────────────────────────────────────────────

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
    console.log('[Haptics] ✓ Enabled');
  }

  /**
   * Disables haptic feedback globally
   */
  static disable(): void {
    this.isEnabled = false;
    console.log('[Haptics] ✗ Disabled');
  }

  /**
   * Checks if haptics are currently enabled
   * @returns True if haptics are enabled
   */
  static getEnabled(): boolean {
    return this.isEnabled;
  }

  /**
   * Toggles haptic feedback on/off
   * @returns New enabled state
   */
  static toggle(): boolean {
    this.isEnabled = !this.isEnabled;
    console.log(`[Haptics] ${this.isEnabled ? '✓ Enabled' : '✗ Disabled'}`);
    return this.isEnabled;
  }

  // ────────────────────────────────────────────────────────────
  // Internal Helper
  // ────────────────────────────────────────────────────────────

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

  // ────────────────────────────────────────────────────────────
  // Basic Impact Haptics
  // ────────────────────────────────────────────────────────────

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
   * Rigid impact haptic feedback (iOS only, falls back to heavy on Android)
   * Best for: End-of-scroll boundaries, collision effects
   */
  static async rigid(): Promise<void> {
    await this.execute(() => 
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid)
    );
  }

  // ────────────────────────────────────────────────────────────
  // Notification Haptics
  // ────────────────────────────────────────────────────────────

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

  // ────────────────────────────────────────────────────────────
  // Selection Haptic
  // ────────────────────────────────────────────────────────────

  /**
   * Selection haptic feedback
   * Best for: Picker changes, slider adjustments, tab switches
   */
  static async selection(): Promise<void> {
    await this.execute(() => 
      Haptics.selectionAsync()
    );
  }

  // ────────────────────────────────────────────────────────────
  // Custom Patterns
  // ────────────────────────────────────────────────────────────

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
    pattern: HapticPattern,
    delay: number = DEFAULT_PATTERN_DELAY
  ): Promise<void> {
    if (!this.isEnabled || !this.isHapticsSupported) {
      return;
    }

    if (!pattern || pattern.length === 0) {
      console.warn('[Haptics] Empty pattern provided');
      return;
    }

    for (let i = 0; i < pattern.length; i++) {
      const hapticType = pattern[i];
      
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
      
      // Add delay between haptics (except for last one)
      if (delay > 0 && i < pattern.length - 1) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // ────────────────────────────────────────────────────────────
  // Predefined Patterns
  // ────────────────────────────────────────────────────────────

  /**
   * Celebration haptic pattern
   * Best for: Major achievements, level ups, special unlocks
   * Pattern: medium → heavy → medium with 50ms delay
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
   * Pattern: light → light with 80ms delay
   * @example
   * // User double-taps to favorite
   * await HapticFeedback.doubleTap();
   */
  static async doubleTap(): Promise<void> {
    await this.pattern(['light', 'light'], 80);
  }

  /**
   * Triple tap haptic pattern
   * Best for: Secret features, easter eggs
   * Pattern: light → light → light with 60ms delay
   * @example
   * // User discovers secret feature
   * await HapticFeedback.tripleTap();
   */
  static async tripleTap(): Promise<void> {
    await this.pattern(['light', 'light', 'light'], 60);
  }

  /**
   * Bounce haptic pattern
   * Best for: Pull-to-refresh, elastic interactions
   * Pattern: soft → medium → soft with 60ms delay
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
   * Pattern: light → soft with 150ms delay
   * @example
   * // During data sync
   * await HapticFeedback.pulse();
   */
  static async pulse(): Promise<void> {
    await this.pattern(['light', 'soft'], 150);
  }

  /**
   * Ramp up haptic pattern (increasing intensity)
   * Best for: Progress indicators, building tension
   * Pattern: soft → light → medium → heavy with 80ms delay
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
   * Pattern: heavy → medium → light → soft with 80ms delay
   * @example
   * // When task completes
   * await HapticFeedback.rampDown();
   */
  static async rampDown(): Promise<void> {
    await this.pattern(['heavy', 'medium', 'light', 'soft'], 80);
  }

  /**
   * Alert pattern for urgent notifications
   * Best for: Critical alerts, urgent notifications
   * Pattern: heavy → heavy with 200ms delay
   * @example
   * // Critical error occurred
   * await HapticFeedback.alert();
   */
  static async alert(): Promise<void> {
    await this.pattern(['heavy', 'heavy'], 200);
  }

  /**
   * Tick pattern for incremental changes
   * Best for: Counter increments, step-by-step progress
   * Pattern: single soft haptic
   * @example
   * // Counter incremented
   * await HapticFeedback.tick();
   */
  static async tick(): Promise<void> {
    await this.soft();
  }

  // ────────────────────────────────────────────────────────────
  // Convenience Aliases
  // ────────────────────────────────────────────────────────────

  /**
   * Alias for light() - most common haptic
   */
  static async tap(): Promise<void> {
    await this.light();
  }

  /**
   * Alias for medium() - standard press
   */
  static async press(): Promise<void> {
    await this.medium();
  }

  /**
   * Alias for success() - operation completed
   */
  static async complete(): Promise<void> {
    await this.success();
  }

  /**
   * Alias for error() - operation failed
   */
  static async fail(): Promise<void> {
    await this.error();
  }
}

// ──────────────────────────────────────────────────────────────
// Export for convenience
// ──────────────────────────────────────────────────────────────
export default HapticFeedback;