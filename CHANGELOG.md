# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.4] - 2021-02-01

- Add github style classes to the command buttons ([#26] by @nathan815)

## [0.3.3] - 2021-01-26

- Host [firefox extension on their developer hub](https://addons.mozilla.org/en-US/firefox/addon/dependabot-clickable-commads/)
## [0.3.2] - 2021-01-26

- Re-publish previous version
   Attempting to fix firefox store issue "not compatible with Quantum"
## [0.3.1] - 2020-07-21
### Fixed
 - Considers automated security fixes from GitHub ([bfca7f7] by @eps1lon)

## [0.3.0] - 2019-07-25
### Changed
 - Improved click feedback ([#1] from @ybiquitous)
   - button becomes disabled after click
   - text includes notification that the command is pending
 - `@dependabot ignore this [patch|minor|major] version` will create 3 separate buttons inlined in the command ([2952a93] from @eps1lon)

### Fixed
 - Comment body is now cleared after submitting ([#1] from @ybiquitous)
 
[#26]: https://github.com/eps1lon/dependabot-clickable-commands/pull/26
[bfca7f7]: https://github.com/eps1lon/dependabot-clickable-commands/commit/bfca7f73280afa487315f65a4cac5ae0e93ac6bb
[#1]: https://github.com/eps1lon/dependabot-clickable-commands/pull/1
[2952a93]: https://github.com/eps1lon/dependabot-clickable-commands/commit/2952a93cd12e70f7d27c77803626abdad3914209

[Unreleased]: https://github.com/eps1lon/dependabot-clickable-commands/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/eps1lon/dependabot-clickable-commands/compare/v0.2.0...0.3.0