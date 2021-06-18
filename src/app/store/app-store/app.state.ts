import { State, Selector, Action, StateContext } from '@ngxs/store';
import {
  SetUserProfile,
  SetFileManagerState,
  SetHeaderVisibility,
  SetRefreshToken,
  SetToken,
  SetTitle
} from './app.action';
import {Injectable} from '@angular/core';

export class AppStateModel {
  headerVisibility: string;
  showFileManager: boolean;
  token: string;
  refreshToken: string;
  userProfile: any;
  title: string;
}

@Injectable()
@State<AppStateModel>({
  name: 'App',
  defaults: {
    headerVisibility: 'visible',
    showFileManager: false,
    token: '',
    refreshToken: '',
    userProfile: {},
    title: ''
  },
})

export class AppState {
  @Selector()
  static getHeaderState(state: AppStateModel): string {
    return state.headerVisibility;
  }
  @Selector()
  static getFileManagerState(state: AppStateModel): boolean {
    console.log('QQQQQQQ: ', state.showFileManager);
    return state.showFileManager;
  }

  @Selector()
  static getToken(state: AppStateModel): string {
    return state.token;
  }

  @Selector()
  static getRefreshToken(state: AppStateModel): string {
    return state.refreshToken;
  }

  @Selector()
  static getUserProfile(state: AppStateModel): string {
    return state.userProfile;
  }

  @Selector()
  static getTitle(state: AppStateModel): string {
    return state.title;
  }

  //   actions
  @Action(SetHeaderVisibility)
  setHeaderVisibility({ getState, setState }: StateContext<AppStateModel>, { headerVisibility }: SetHeaderVisibility): void {
    const state = getState();
    setState({
      ...state,
      headerVisibility,
    });
  }

  @Action(SetFileManagerState)
  setFileManagerState({ getState, setState }: StateContext<AppStateModel>, { fileManagerState }: SetFileManagerState): void {
    const state = getState();
    setState({
      ...state,
      showFileManager: fileManagerState,
    });
  }


  @Action(SetToken)
  setToken({ getState, setState }: StateContext<AppStateModel>, { token }: SetToken): void {
    const state = getState();
    setState({
      ...state,
      token,
    });
  }

  @Action(SetRefreshToken)
  setRefreshToken({ getState, setState }: StateContext<AppStateModel>, { refreshToken }: SetRefreshToken): void {
    const state = getState();
    setState({
      ...state,
      refreshToken,
    });
  }

  @Action(SetUserProfile)
  setUserProfile({ getState, setState }: StateContext<AppStateModel>, { userProfile }: SetUserProfile): void {
    const state = getState();
    setState({
      ...state,
      userProfile,
    });
  }

  @Action(SetTitle)
  setTitle({ getState, setState }: StateContext<AppStateModel>, { title }: SetTitle): void {
    const state = getState();
    setState({
      ...state,
      title,
    });
  }
}
