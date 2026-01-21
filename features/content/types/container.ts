import { ICollectionType } from "@/features/content/types/collection-type";
import { ICoverFile } from "@/features/content/types/cover-file";
import { IEntityProperty } from "@/features/content/types/property";

export interface IContainer {
  tenant: string;
  uuid: string;
  label: string;
  type: ICollectionType;
  parent: IParent;
  publishedAt: Date;
  coverFile: null | ICoverFile;
  ancestorPath: IParent[];
  tags: string[];
  properties: IEntityProperty[];
}

export interface IParent {
  uuid: string;
  label: string;
}
