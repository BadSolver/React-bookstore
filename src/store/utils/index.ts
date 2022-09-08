import { AnyAction, AsyncThunk } from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;

export const isPendingAction = (action: AnyAction): action is PendingAction => {
  return action.type.endsWith("/pending");
};

export const isRejectedAction = (action: AnyAction) => {
  return action.type.endsWith("/rejected");
};
