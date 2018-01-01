# 1.2.0 (2018-01-01)

## New features

- Use angular-cli 1.5 for the test app (Sune Wøller)
- Model two way binding (Robert Wurm)

# Bug fixes

- Avoid circular imports (Sune Wøller)
- Fix SchemaValidatorFactory providing (Daniele Pecora)

# 1.1.0 (2017-11-06)

## New features

- Added support for multiple select (Gavin Foley)
- Angular5 and Typescript 2.4.2 support

# 1.0.1 (2017-09-12)

# Bug fixes

- FileWidget: fix file encoding (ebrehault)

# 1.0.0-beta.13 (2017-09-08)

## New features

- Expose form validity (thereiskeks)
- Checkbox widget support for array properties (ebrehault)
- Placeholder in textarea (ebrehault)
- Fill in minLenght and maxLength attributes (ebrehault)
- Compute unique error messages in widget (ebrehault)

## Bug fixes

- Make FileWidget properties accessible in derivated widget (ebrehault)
- Do not repeat description in checkbox (ebrehault)

# 1.0.0-beta.12 (2017-09-05)

## New features

- Manage input type="file" properly (ebrehault)

# 1.0.0-beta.11 (2017-08-29)

## New features

- isValid and onErrorChange event emitters added (mrpanky)
- forRoot() now able to change default providers (mrpanky)
- deep $ref support for definitions (Gabor Pankotay)

## Bug Fixes

- Fix export for ButtonWidget (Brian Glass)
- number and boolean fallback values fixed (mrpanky)
- legacy required property check removed, schemavalidator denormalizes object's required field paths, objectproper
ty extends subject field's errors (Gabor Pankotay)
- ArrayLayoutWidget, ObjectLayoutWidget implements AfterViewInit interface (Gabor Pankotay)

# 1.0.0-beta.10 (2017-08-17)

## Bug Fixes

- Fix ButtonWidgte import (Emmanuel Navarro)

# 1.0.0-beta.9 (2017-08-14)

## New features

- Manage required state for FormProperty (Daniele Pecora)

## Bug Fixes

- AOT fix for custom buttons (Daniele Pecora)

# 1.0.0-beta.8 (2017-08-13)

## New features

- Allow to customize action button rendering (Daniele Pecora)

## Bug Fixes

- Restore has-success/has-error class

# 1.0.0-beta.7 (2017-04-24)

## New features

- Upgrade to Angular 4

## Bug Fixes

- Clean up existing elements on schema changes
- Fix AOT build

# 1.0.0-beta.6 (2017-04-21)

## Bug Fixes

- Re-render form on schema change [ZheyangSong]

# 1.0.0-beta.5 (2017-03-18)

## Bug Fixes

- Use inline html

## BREAKING CHANGES

# 1.0.0-beta.4 (2017-03-17)

## Bug Fixes

- Make sure .html templates are part of the package

## BREAKING CHANGES

# 1.0.0-beta.3 (2017-03-16)

## Bug Fixes

- Clean up package content

## BREAKING CHANGES

- Now module, components and other elements must be imported from 'angular2-schema-form' and not 'angular2-schema-form/src'

# 1.0.0-beta.2 (2017-03-13)

Initial release

## Bug Fixes

## BREAKING CHANGES
