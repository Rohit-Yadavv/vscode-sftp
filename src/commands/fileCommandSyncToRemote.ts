import { UResource, FileService } from '../core';
import { COMMAND_SYNC_TO_REMOTE } from '../constants';
import { sync2Remote } from '../fileHandlers';
import FileCommand from './abstract/fileCommand';
import { selectFolderFallbackToConfigContext, refreshRemoteExplorer } from './shared';

export default class SyncToRemote extends FileCommand {
  static id = COMMAND_SYNC_TO_REMOTE;
  static option = {
    requireTarget: true,
  };
  static getFileTarget = selectFolderFallbackToConfigContext;

  async handleFile(uResource: UResource, fileService: FileService) {
    await sync2Remote(uResource, fileService);
    refreshRemoteExplorer(uResource, true);
  }
}
