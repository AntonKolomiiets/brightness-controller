import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BrightnessControllerViewProps } from './BrightnessController.types';

const NativeView: React.ComponentType<BrightnessControllerViewProps> =
  requireNativeViewManager('BrightnessController');

export default function BrightnessControllerView(props: BrightnessControllerViewProps) {
  return <NativeView {...props} />;
}
