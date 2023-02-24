import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TestExpo47.web.ts
// and on native platforms to TestExpo47.ts
import TestExpo47Module from './TestExpo47Module';
import TestExpo47View from './TestExpo47View';
import { ChangeEventPayload, TestExpo47ViewProps } from './TestExpo47.types';

// Get the native constant value.
export const PI = TestExpo47Module.PI;

export function hello(): string {
  return TestExpo47Module.hello();
}

export async function setValueAsync(value: string) {
  return await TestExpo47Module.setValueAsync(value);
}

const emitter = new EventEmitter(TestExpo47Module ?? NativeModulesProxy.TestExpo47);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TestExpo47View, TestExpo47ViewProps, ChangeEventPayload };
