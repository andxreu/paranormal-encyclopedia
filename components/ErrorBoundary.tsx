// components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Clipboard, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as MailComposer from 'expo-mail-composer';

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of crashing.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  handleReportError = async () => {
    const errorMessage = this.state.error?.toString() || 'Unknown error';
    const errorStack = this.state.error?.stack || 'No stack trace available';
    const errorReport = `Error Report:\n\n${errorMessage}\n\nStack Trace:\n${errorStack}`;

    Clipboard.setString(errorReport);
    Alert.alert('Error Copied', 'Error details copied to clipboard');

    try {
      const isAvailable = await MailComposer.isAvailableAsync();
      if (isAvailable) {
        await MailComposer.composeAsync({
          recipients: ['feedback@paranormalencyclopedia.app'],
          subject: 'Paranormal Encyclopedia - Error Report',
          body: errorReport,
        });
      }
    } catch (error) {
      console.error('Error opening mail composer:', error);
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <LinearGradient
            colors={['#0a0118', '#1a0b2e', '#2d1b4e']}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.content}>
              <Text style={styles.emoji}>🌌</Text>
              <Text style={styles.title}>Cosmic Glitch</Text>
              <Text style={styles.message}>
                Something went wrong in the paranormal realm. Don't worry, we can try again!
              </Text>
              {__DEV__ && this.state.error && (
                <Text style={styles.errorText}>
                  {this.state.error.toString()}
                </Text>
              )}
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.handleRetry}
                  activeOpacity={0.8}
                  accessibilityLabel="Retry"
                  accessibilityRole="button"
                >
                  <LinearGradient
                    colors={['#8B5CF6', '#6366F1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonGradient}
                  >
                    <Text style={styles.buttonText}>Retry</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.reportButton}
                  onPress={this.handleReportError}
                  activeOpacity={0.8}
                  accessibilityLabel="Report error"
                  accessibilityRole="button"
                >
                  <Text style={styles.reportButtonText}>📋 Report Error</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
    marginBottom: 16,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#B0B0B0',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    gap: 12,
    width: '100%',
  },
  button: {
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 8,
  },
  buttonGradient: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
  reportButton: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
  },
  reportButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: 'SpaceMono',
  },
});