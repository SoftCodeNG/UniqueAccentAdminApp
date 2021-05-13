import { State, Selector, Action, StateContext } from '@ngxs/store';
import {SetFileManagerState, SetHeaderVisibility} from './app.action';
import {Injectable} from '@angular/core';

export class AppStateModel {
  headerVisibility: string;
  showFileManager: boolean;
}

@Injectable()
@State<AppStateModel>({
  name: 'App',
  defaults: {
    headerVisibility: 'visible',
    showFileManager: false
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

}
