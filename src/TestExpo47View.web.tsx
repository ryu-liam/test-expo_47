import * as React from 'react';

import { TestExpo47ViewProps } from './TestExpo47.types';

export default function TestExpo47View(props: TestExpo47ViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
