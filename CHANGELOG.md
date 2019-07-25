# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
 - Improved click feedback ([#1] from @ybiquitous)
   - button becomes disabled after click
   - text includes notification that the command is pending
 - `@dependabot ignore this [patch|minor|major] version` will create 3 separate buttons inlined in the command ([2952a93] from @eps1lon)

### Fixed
 - Comment body is now cleared after submitting ([#1] from @ybiquitous)

[#1]: https://github.com/eps1lon/dependabot-clickable-commands/pull/1
[2952a93]: https://github.com/eps1lon/dependabot-clickable-commands/commit/2952a93cd12e70f7d27c77803626abdad3914209

[Unreleased]: https://github.com/eps1lon/dependabot-clickable-commands/compare/v0.2.0...HEAD