import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TestExpo47ViewProps } from './TestExpo47.types';

const NativeView: React.ComponentType<TestExpo47ViewProps> =
  requireNativeViewManager('TestExpo47');

export default function TestExpo47View(props: TestExpo47ViewProps) {
  return <NativeView {...props} />;
}
