import React from 'react';
import { TSX, Prop, Emit, Component, Vue, toNative } from 'vue-facing-decorator';

interface Props {
  propString: string;
}

interface Events {
  myEvent: Function;
  myEvent2: string;
}

@Component
class TextFaceField extends TSX<Props, Events>()(Vue) {
  @Prop({
    required: true,
  })
  propString!: string;

  @Emit('myEvent')
  triggerMyEvent() {
    return 'event value';
  }

  @Emit('myEvent2')
  triggerMyEvent2() {
    return 'event2 value';
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button onClick={this.triggerMyEvent}>Trigger Event 1</button>
        <button onClick={this.triggerMyEvent2}>Trigger Event 2</button>
      </div>
    );
  }
}

const Comp = toNative(TextFaceField);

// Exporting as default
export default Comp;
