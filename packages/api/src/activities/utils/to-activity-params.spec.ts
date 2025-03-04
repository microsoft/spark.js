import { Card, CodeBlock } from '@microsoft/spark.cards';

import { MessageSendActivity } from '../message';
import { toActivityParams } from './to-activity-params';

describe('Activity Utils', () => {
  describe('toActivityParams', () => {
    it('should convert `string` to message activity', () => {
      const activity = toActivityParams('testing123');
      expect(activity).toEqual({
        type: 'message',
        text: 'testing123',
      });
    });

    it('should convert builder to message activity', () => {
      const activity = toActivityParams(MessageSendActivity('testing123'));
      expect(activity).toEqual({
        type: 'message',
        text: 'testing123',
      });
    });

    it('should convert card to message activity with card attachment', () => {
      const card = Card([
        CodeBlock({
          language: 'TypeScript',
          codeSnippet: 'let test = 1',
        }),
      ]);

      const activity = toActivityParams(card);

      expect(activity).toEqual(MessageSendActivity('').card('adaptive', card).build());
    });
  });
});
