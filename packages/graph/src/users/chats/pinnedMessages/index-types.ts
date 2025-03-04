// DO NOT EDIT THIS FILE
import type { Operation } from './../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'delete'
  >;
  /**
   * A collection of all the pinned messages in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/pinnedMessages': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    'get'
  >;
  /**
   * A collection of all the pinned messages in the chat. Nullable.
   */
  'GET /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'get'
  >;
  /**
   */
  'PATCH /users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages/{pinnedChatMessageInfo-id}',
    'patch'
  >;
  /**
   */
  'POST /users/{user-id}/chats/{chat-id}/pinnedMessages': Operation<
    '/users/{user-id}/chats/{chat-id}/pinnedMessages',
    'post'
  >;
}
