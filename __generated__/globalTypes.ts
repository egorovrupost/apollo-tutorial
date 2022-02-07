/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum PostmanFilterEnum {
  AVAILABLE = "AVAILABLE",
  CASH_NEEDED = "CASH_NEEDED",
  IN_PROGRESS = "IN_PROGRESS",
  PREPARING = "PREPARING",
}

export interface PostmanFilter {
  search?: string | null;
  state?: PostmanFilterEnum | null;
  role?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
