// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   * Delete a registration question from a webinar. The question can either be a predefined registration question or a custom registration question.
   */
  'DELETE /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'delete'
  >;
  /**
   * Get a list of all registration questions for a webinar. The list can include either predefined registration questions or custom registration questions.
   */
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'get'
  >;
  /**
   * Registration questions.
   */
  'GET /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'get'
  >;
  /**
   */
  'PATCH /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions/{virtualEventRegistrationQuestionBase-id}',
    'patch'
  >;
  /**
   * Create a registration question for a webinar. You can create either a predefined registration question or a custom registration question.
   */
  'POST /solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions': Operation<
    '/solutions/virtualEvents/webinars/{virtualEventWebinar-id}/registrationConfiguration/questions',
    'post'
  >;
}
