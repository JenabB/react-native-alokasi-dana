import { ActionReducerMapBuilder, isAnyOf } from "@reduxjs/toolkit";
import * as AuthModels from "./AuthModels";
import * as AuthActions from "./AuthActions";

const cases = (builder: ActionReducerMapBuilder<AuthModels.AuthState>) => {
  builder.addCase(AuthActions.clearAuth, (state: any, action) => {
    state.register = action.payload;
    state.login = action.payload;
  });
};

const matchers = (builder: ActionReducerMapBuilder<AuthModels.AuthState>) => {
  builder
    .addMatcher(
      isAnyOf(AuthActions.registerUser.pending, AuthActions.loginUser.pending),
      (state, action) => {
        state.isLoading = true;
      }
    )
    .addMatcher(
      isAnyOf(
        AuthActions.registerUser.rejected,
        AuthActions.registerUser.fulfilled
      ),
      (state: any, action) => {
        state.isLoading = false;
        state.register = action.payload;
      }
    )
    .addMatcher(
      isAnyOf(AuthActions.loginUser.rejected, AuthActions.loginUser.fulfilled),
      (state: any, action) => {
        state.isLoading = false;
        state.login = action.payload;
      }
    );
};

const AuthReducer = { cases, matchers };

export default AuthReducer;
