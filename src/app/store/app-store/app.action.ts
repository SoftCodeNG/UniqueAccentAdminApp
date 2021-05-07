
export class SetHeaderVisibility {
  static readonly type = '[App] SetHeaderVisibility';
  constructor(public headerVisibility: string) {}
}

export class SetFileManagerState {
  static readonly type = '[App] SetFileManagerState';
  constructor(public fileManagerState: boolean) {}
}
