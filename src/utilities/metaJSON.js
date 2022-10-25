"use strict";

import Version from "../version";
import Dependency from "../dependency";
import ShortenedVersion from "../shortenedVersion";

import { trimDoubleQuotes } from "../utilities/content";
import { nodeQuery, nodesQuery } from "../utilities/query";

const dependencyNodesQuery = nodesQuery("//dependencies/dependency"),
      repositoryTerminalNodeQuery = nodeQuery("//repository!/@*!"),
      versionNumberTerminalNodeQuery = nodeQuery("//version!/versionNumber!/@*!"),
      dependencyNameTerminalNodeQuery = nodeQuery("/dependency/name!/@*!"),
      shortenedVersionNumberTerminalNodeQuery = nodeQuery("//dependency/shortenedVersionNumber/@*!");

export function versionFromNode(node) {
  let version = null;

  if (node !== null) {
    const versionNumberTerminalNode = versionNumberTerminalNodeQuery(node),
          versionNumberTerminalNodeContent = versionNumberTerminalNode.getContent(),
          versionNumber = trimDoubleQuotes(versionNumberTerminalNodeContent); //

    version = Version.fromVersionNumber(versionNumber);
  }

  return version;
}

export function repositoryFromNode(node) {
  let repository = null;

  if (node !== null) {
    const repositoryTerminalNode = repositoryTerminalNodeQuery(node),
          repositoryTerminalNodeContent = repositoryTerminalNode.getContent();

    repository = trimDoubleQuotes(repositoryTerminalNodeContent); //
  }

  return repository;
}

export function dependenciesFromNode(node) {
  const dependencies = [];

  if (node !== null) {
    const dependencyNodes = dependencyNodesQuery(node);

    dependencyNodes.forEach((dependencyNode) => {
      const dependencyNameTerminalNode = dependencyNameTerminalNodeQuery(dependencyNode),
            shortenedVersionNumberTerminalNode = shortenedVersionNumberTerminalNodeQuery(dependencyNode),
            dependencyNameTerminalNodeContent = dependencyNameTerminalNode.getContent(),
            shortenedVersionNumberTerminalNodeContent = shortenedVersionNumberTerminalNode.getContent(),
            string = trimDoubleQuotes(shortenedVersionNumberTerminalNodeContent),  ///
            name = trimDoubleQuotes(dependencyNameTerminalNodeContent),///
            shortenedVersion = ShortenedVersion.fromString(string),
            dependency = Dependency.fromNameAndShortenedVersion(name, shortenedVersion);

      dependencies.push(dependency);
    });
  }

  return dependencies;
}

export function dependencyNamesFromNode(node) {
  const dependencies = this.dependenciesFromNode(node),
        dependencyNames = dependencies.map((dependency) => {
          const dependencyName = dependency.getName();

          return dependencyName;
        })

  return dependencyNames;
}

export default {
  versionFromNode,
  repositoryFromNode,
  dependenciesFromNode,
  dependencyNamesFromNode
};
