# InvoiceShelf AI Assistant

The official free AI Assistant module for InvoiceShelf 3.x. It provides the in-app assistant, read-only business-data tools, and rich-text generation while keeping AI dependencies out of the core application.

Users supply and fund their own OpenRouter API key. The module itself is free and open source under AGPL-3.0-only.

## Development

```bash
composer install
pnpm install --frozen-lockfile
composer run lint
composer run test
pnpm run build
vendor/bin/invoiceshelf-module validate-package .
```

Compiled assets in `dist/` are committed because InvoiceShelf installs immutable packages without running Composer or Node package managers.

## Data lifecycle

Disabling or uninstalling the module normally preserves conversations and configuration. If an administrator explicitly selects **Remove module data**, the cleanup hook removes legacy settings and the reversible migration removes the AI conversation tables.

## Releases

Push an exact SemVer tag matching `module.json`, such as `1.0.0`. The release workflow builds and validates a deterministic signed package before registering it with the InvoiceShelf marketplace.
