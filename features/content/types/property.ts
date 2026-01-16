export interface IProperty {
  uuid: string;
  name: string;
  slug: string;
}

export interface ISchemaProperty {
  uuid: string;
  schemaGroup: ISchemaGroup;
}

export interface ISchemaGroup {
  uuid: string;
  name: string;
}

export interface IEntityProperty {
  uuid: string;
  property: IProperty;
  schemaProperty: ISchemaProperty;
  valueAsText: string;
}
