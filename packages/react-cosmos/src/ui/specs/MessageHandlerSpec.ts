import { MessageType } from '../../utils/message';

export type MessageHandlerSpec = {
  name: 'messageHandler';
  methods: {
    postRendererRequest(msg: MessageType): unknown;
  };
  events: {
    serverMessage(msg: MessageType): void;
    rendererResponse(msg: MessageType): void;
  };
};
