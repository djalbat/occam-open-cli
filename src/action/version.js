"use strict";

import { packageUtilities } from "necessary";

import { OCCAM_OPEN_CLI } from "../constants";

const { getVersion } = packageUtilities;

export default function versionAction() {
  const version = getVersion(); ///

  console.log(`${OCCAM_OPEN_CLI} version ${version}`);
}
