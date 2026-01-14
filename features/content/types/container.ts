import { ICollectionType } from "@/features/content/types/collection-type";
import { IProperty, ISchemaProperty } from "@/features/content/types/property";

export interface IContainer {
  uuid: string;
  label: string;
  type: ICollectionType;
  parent: IParent;
  publishedAt: Date;
  coverFile: null | string;
  ancestorPath: IParent[];
  tags: string[];
  properties: IContainerProperty[];
}

export interface IParent {
  uuid: string;
  label: string;
}

export interface IContainerProperty {
  uuid: string;
  property: IProperty;
  schemaProperty: ISchemaProperty;
  valueAsText: string;
}
