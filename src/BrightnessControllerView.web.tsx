import * as React from 'react';

import { BrightnessControllerViewProps } from './BrightnessController.types';

export default function BrightnessControllerView(props: BrightnessControllerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
