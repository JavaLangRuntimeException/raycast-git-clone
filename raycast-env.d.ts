/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** GitHub Personal Access Token - Your GitHub Personal Access Token */
  "personalAccessToken": string,
  /** Default Clone Path - Default directory to clone repositories */
  "defaultClonePath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `git-clone` command */
  export type GitClone = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `git-clone` command */
  export type GitClone = {}
}


