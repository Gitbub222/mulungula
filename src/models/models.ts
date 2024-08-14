// src/models/index.ts
import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

type ContactInfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ContactInfo {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly mobile: string;
  readonly country?: string | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly region?: string | null;
  readonly postalCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ContactInfo, ContactInfoMetaData>);
  static copyOf(source: ContactInfo, mutator: (draft: MutableModel<ContactInfo, ContactInfoMetaData>) => MutableModel<ContactInfo, ContactInfoMetaData> | void): ContactInfo;
}
