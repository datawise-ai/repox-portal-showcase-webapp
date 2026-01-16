import { ICollectionType } from "@/features/content/types/collection-type";
import { ICoverFile } from "@/features/content/types/cover-file";
import { IEntityProperty } from "@/features/content/types/property";

export interface IDatastream {
  tenant: string;
  uuid: string;
  label: string;
  type: ICollectionType;
  parent: IParent;
  publishedAt: string;
  coverFile: ICoverFile;
  tags: string[];
  properties: IEntityProperty[];
}

export interface IParent {
  uuid: string;
  label: string;
}
