"use strict";

import Entries from "./entries";
import Version from "./version";
import bnfMixins from "./mixins/bnf";
import filesMixins from "./mixins/files";
import Dependencies from "./dependencies";
import entriesMixins from "./mixins/entries";
import patternMixins from "./mixins/pattern";

class Release {
  constructor(name, entries, version, repository, dependencies) {
    this.name = name;
    this.entries = entries;
    this.version = version;
    this.repository = repository;
    this.dependendies = dependencies;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getVersion() {
    return this.version;
  }

  getRepository() {
    return this.repository;
  }

  getDependencies() {
    return this.dependendies;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          versionJSON = this.version.toJSON(),
          dependenciesJSON = this.dependendies.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          version = versionJSON,  ///
          repository = this.repository,
          dependencies = dependenciesJSON,  ///
          json = {
            name,
            entries,
            version,
            repository,
            dependencies
          };

    return json;
  }

  static fromJSON(json) {
    let { entries, version, dependencies } = json;

    const { name, repository } = json,
          entriesJSON = entries,  ///
          versionJSOM = version,  ///
          dependenciesJSON = dependencies; ///

    json = entriesJSON; ///

    entries = Entries.fromJSON(json); ///

    json = versionJSOM; ///

    version = Version.fromJSON(json);

    json = dependenciesJSON; ///

    dependencies = Dependencies.fromJSON(json);

    const release = new Release(name, entries, version, repository, dependencies);

    return release;
  }

  static fromNameEntriesAndVersion(name, entries, version) {
    const repository = repository,
          dependencies = Dependencies.fromNothing(),
          release = new Release(name, entries, version, repository, dependencies);

    return release;
  }
}

Object.assign(Release.prototype, bnfMixins);
Object.assign(Release.prototype, filesMixins);
Object.assign(Release.prototype, entriesMixins);
Object.assign(Release.prototype, patternMixins);

export default Release;
