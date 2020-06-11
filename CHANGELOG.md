
# 2.5.4 (2020-04-12)

- Fix: visibleIf returns turn even if only part of the value matches the expression (compare number to string fix)
=======
# 2.5.3 (2020-06-02)

- Add extendable TypeScript interfaces for JSON Schema objects (artonio)


# 2.5.2 (2020-04-09)

- Fix: visibleIf returns turn even if only part of the value matches the expression

#2.5.1 (2020-03-22)

- Allow "VisibleIf" to work with numeric values

# 2.5.0 (2020-02-28)

- Upgrade to Angular 9 (ebrehault)

# 2.4.4 (2020-02-26)

- Expose more classes in Public API (anotherpit)

# 2.4.3 (2020-01-24)

- Setup auto-tagging and auto-release on NPM (ebrehault)

# 2.4.2 (2020-01-16)

- fix template when no rootProperty (ebrehault)
- fix disabled state for reactive forms by using directive. fix #287 (daniele-pecora)

# 2.4.1 (2019-09-11)

- Fix circular dependency in models (ebrehault)

# 2.4.0 (2019-07-29)

- Feature #228: add support for expression in visibleIf condition (daniele-pecora)
- Fix #293: hide or disable array widget add and remove button in relation to the settings of 'maxItems' and 'minItems' in schema (daniele-pecora)

# 2.3.5 (2019-07-04)

(fix build)

# 2.3.4 (2019-07-01)

- Upgrade to Angular 8 (ebrehault)

# 2.3.3 (2019-06-14)

- Update angular to 7.2 (mathilde-pellerin)

# 2.3.2 (2018-12-17)

- Extend visibleIf condition with `oneOf` and `allOf` (daniele-pecora)
- Rename the `required` flag, fixed #263. (Invis1ble)
- Reset SchemaValidator (daniele-pecora)
- Fix disabled property (Jackson Vaughan)

# 2.3.1 (2018-11-14)

- Fix package.json to explicitly support Angular 6 and 7

# 2.3.0 (2018-11-14)

- Fix #233: do not emit modelChange twice (ebrehault)
- Fix array item remove (ebrehault)
- Angular 7 compliancy (ebrehault)
- Fix perr dependencies (akloeber)

# 2.2.0-beta.1 (2018-09-17)

- Support custom bindings (Daniele Pecora)
- Add normalizeExtensions to SchemaPreprocessor (WhileTrueEndWhile)

# 2.1.0-beta.1 (2018-07-11)

- Template schema form (Juan Manuel Verges)

# 2.0.0-beta.1

- Angular 6 compliancy
- Use default library project structure provided by Angular CLI 6

# 1.2.2 (2018-05-13)

# Bug fixes

- Fix model two-way data binding (Eric Brehault / Gavin Foley)

# 1.2.1 (2018-01-16)

# Bug fixes

- Render array properly after deletion (Eric Brehault)
- Fix AOT for Angular 5 (Andrea Accardo)


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
