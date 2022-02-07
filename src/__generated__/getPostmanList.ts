/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PostmanFilter } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getPostmanList
// ====================================================

export interface getPostmanList_listPostmen_items_role {
  __typename: "Role";
  id: string;
  name: string;
}

export interface getPostmanList_listPostmen_items {
  __typename: "Postman";
  id: any;
  isActive: boolean;
  name: string;
  number: string;
  role: getPostmanList_listPostmen_items_role | null;
}

export interface getPostmanList_listPostmen {
  __typename: "PostmanPage";
  items: getPostmanList_listPostmen_items[];
  page: number;
  size: number;
  total: number;
}

export interface getPostmanList {
  listPostmen: getPostmanList_listPostmen;
}

export interface getPostmanListVariables {
  filterBy?: PostmanFilter | null;
  page?: number | null;
  size?: number | null;
}
