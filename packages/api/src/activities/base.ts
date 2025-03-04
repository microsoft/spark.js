import {
  Account,
  ChannelData,
  ChannelID,
  CitationAppearance,
  ConversationAccount,
  ConversationReference,
  Entity,
} from '../models';

export interface ActivityBase<T extends string = string> {
  /**
   * Contains the type of the activity.
   */
  readonly type: T;

  /**
   * Contains an ID that uniquely identifies the activity on the channel.
   */
  id: string;

  /**
   * Contains the URL that specifies the channel's service endpoint. Set by the channel.
   */
  serviceUrl?: string;

  /**
   * Contains the date and time that the message was sent, in UTC, expressed in ISO-8601 format.
   */
  timestamp?: Date;

  /**
   * A locale name for the contents of the text field.
   * The locale name is a combination of an ISO 639 two- or three-letter culture code associated
   * with a language
   * and an ISO 3166 two-letter subculture code associated with a country or region.
   * The locale name can also correspond to a valid BCP-47 language tag.
   */
  locale?: string;

  /**
   * Contains the local date and time of the message, expressed in ISO-8601 format.
   *
   * For example, 2016-09-23T13:07:49.4714686-07:00.
   */
  localTimestamp?: Date;

  /**
   * Contains an ID that uniquely identifies the channel. Set by the channel.
   */
  channelId: ChannelID;

  /**
   * Identifies the sender of the message.
   */
  from: Account;

  /**
   * Identifies the conversation to which the activity belongs.
   */
  conversation: ConversationAccount;

  /**
   * A reference to another conversation or activity.
   */
  relatesTo?: ConversationReference;

  /**
   * Identifies the recipient of the message.
   */
  recipient: Account;

  /**
   * Contains the ID of the message to which this message is a reply.
   */
  replyToId?: string;

  /**
   * Represents the entities that were mentioned in the message.
   */
  entities?: Entity[];

  /**
   * Contains channel-specific content.
   */
  channelData?: ChannelData;
}

export abstract class ActivityBaseBuilder<ActivityType extends ActivityBase = ActivityBase> {
  abstract activity: Pick<ActivityType, 'type'> & Partial<Omit<ActivityType, 'type'>>;

  /**
   * Contains an ID that uniquely identifies the activity on the channel.
   */
  id(value: string) {
    this.activity.id = value;
    return this;
  }

  /**
   * A locale name for the contents of the text field.
   * The locale name is a combination of an ISO 639 two- or three-letter culture code associated
   * with a language
   * and an ISO 3166 two-letter subculture code associated with a country or region.
   * The locale name can also correspond to a valid BCP-47 language tag.
   */
  locale(value: string) {
    this.activity.locale = value;
    return this;
  }

  /**
   * Identifies the sender of the message.
   */
  from(value: Account) {
    this.activity.from = value;
    return this;
  }

  /**
   * Identifies the conversation to which the activity belongs.
   */
  conversation(value: ConversationAccount) {
    this.activity.conversation = value;
    return this;
  }

  /**
   * A reference to another conversation or activity.
   */
  relatesTo(value: ConversationReference) {
    this.activity.relatesTo = value;
    return this;
  }

  /**
   * Identifies the recipient of the message.
   */
  recipient(value: Account) {
    this.activity.recipient = value;
    return this;
  }

  /**
   * Contains the ID of the message to which this message is a reply.
   */
  replyToId(value: string) {
    this.activity.replyToId = value;
    return this;
  }

  /**
   * Add an entity.
   */
  entity(value: Entity) {
    if (!this.activity.entities) {
      this.activity.entities = [];
    }

    this.activity.entities.push(value);
    return this;
  }

  /**
   * Add the `Generated By AI` label.
   */
  aiGenerated() {
    return this.entity({
      type: 'https://schema.org/Message',
      '@type': 'Message',
      '@context': 'https://schema.org',
      additionalType: ['AIGeneratedContent'],
    });
  }

  /**
   * Enable message feedback
   */
  feedback() {
    if (!this.activity.channelData) {
      this.activity.channelData = {};
    }

    this.activity.channelData.feedbackLoopEnabled = true;
    return this;
  }

  /**
   * Add citations
   */
  citation(position: number, appearance: CitationAppearance) {
    return this.entity({
      type: 'https://schema.org/Message',
      '@type': 'Claim',
      position,
      appearance: {
        '@type': 'DigitalDocument',
        abstract: appearance.abstract,
        name: appearance.name,
        encodingFormat: 'application/vnd.microsoft.card.adaptive',
        image: appearance.icon
          ? {
              '@type': 'ImageObject',
              name: appearance.icon,
            }
          : undefined,
        keywords: appearance.keywords,
        text: appearance.text,
        url: appearance.url,
        usageInfo: appearance.usageInfo,
      },
    });
  }

  /**
   * Build the activity
   */
  build() {
    return this.activity;
  }
}
