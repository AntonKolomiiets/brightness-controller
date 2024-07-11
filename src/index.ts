import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to BrightnessController.web.ts
// and on native platforms to BrightnessController.ts
import BrightnessControllerModule from './BrightnessControllerModule';
import BrightnessControllerView from './BrightnessControllerView';
import { ChangeEventPayload, BrightnessControllerViewProps } from './BrightnessController.types';

// Get the native constant value.
export const PI = BrightnessControllerModule.PI;

export function hello(): string {
  return BrightnessControllerModule.hello();
}

export async function setValueAsync(value: string) {
  return await BrightnessControllerModule.setValueAsync(value);
}

const emitter = new EventEmitter(BrightnessControllerModule ?? NativeModulesProxy.BrightnessController);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BrightnessControllerView, BrightnessControllerViewProps, ChangeEventPayload };
