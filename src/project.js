"use strict";

import { MetaJSONLexer, MetaJSONParser } from "occam-grammars";

import Entries from "./entries";
import bnfMixins from "./mixins/bnf";
import filesMixins from "./mixins/files";
import Dependencies from "./dependencies";
import entriesMixins from "./mixins/entries";
import patternMixins from "./mixins/pattern";

import { metaJSONFIleFromFiles } from "./utilities/files";
import { repositoryFromNode, dependenciesFromNode } from "./utilities/metaJSON";

const metaJSONLexer = MetaJSONLexer.fromNothing(),
      metaJSONParser = MetaJSONParser.fromNothing();

class Project {
  constructor(name, entries, repository, dependencies) {
    this.name = name;
    this.entries = entries;
    this.repository = repository;
    this.dependendies = dependencies;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getRepository() {
    return this.repository;
  }

  getDependencies() {
    return this.dependendies;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          dependenciesJSON = this.dependendies.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          repository = this.repository,
          dependencies = dependenciesJSON,  ///
          json = {
            name,
            entries,
            repository,
            dependencies
          };

    return json;
  }

  static fromJSON(json) {
    let { entries, dependencies } = json;

    const { name, repository } = json,
          entriesJSON = entries,  ///
          dependenciesJSON = dependencies; ///

    json = entriesJSON; ///

    entries = Entries.fromJSON(json); ///

    json = dependenciesJSON; ///

    dependencies = Dependencies.fromJSON(json);

    const release = new Release(name, entries, repository, dependencies);

    return release;
  }

  static fromName(name) {
    const entries = Entries.fromNothing(),
          repository = null,  ///
          dependencies = Dependencies.fromNothing(),
          project = new Project(name, entries, repository, dependencies);

    return project;
  }

  static fromNameAndEntries(name, entries) {
    const repository = repositoryFromEntries(entries),
          dependencies = dependenciesFromEntries(entries),
          project = new Project(name, entries, repository, dependencies);

    return project;
  }
}

Object.assign(Project.prototype, bnfMixins);
Object.assign(Project.prototype, filesMixins);
Object.assign(Project.prototype, entriesMixins);
Object.assign(Project.prototype, patternMixins);

export default Project;

function repositoryFromEntries(entries) {
  let repository = null;

  const metaJSONFileNode = metaJSONFileNodeFromEntries(entries)

  if (metaJSONFileNode !== null) {
    const node = metaJSONFileNode;///

    repository = repositoryFromNode(node);
  }

  return repository;
}

function dependenciesFromEntries(entries) {
  let dependencies = [];

  const metaJSONFileNode = metaJSONFileNodeFromEntries(entries)

  if (metaJSONFileNode !== null) {
    const node = metaJSONFileNode;///

    dependencies = dependenciesFromNode(node);
  }

  return dependencies;
}

function metaJSONFileNodeFromEntries(entries) {
  let metaJSONFileNode = null;

  const files = entries.getFiles(),
        metaJSONFile = metaJSONFIleFromFiles(files);

  if (metaJSONFile !== null) {
    const content = metaJSONFile.getContent(),
        tokens = metaJSONLexer.tokenise(content),
        node = metaJSONParser.parse(tokens);

    metaJSONFileNode = node;  ///
  }

  return metaJSONFileNode;
}
