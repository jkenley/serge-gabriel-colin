# Security Policy

## Supported Versions

| Version | Supported |
|---|---|
| 1.0.x | Yes |

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

**Do not open a public issue.** Instead, email: **contact@sergegabrielcollin.com**

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge receipt within 48 hours and provide a resolution timeline within 5 business days.

## Security Practices

- No sensitive data stored in the repository
- Environment variables used for all secrets
- Dependencies regularly audited via `bun audit`
- Pre-commit hooks enforce code quality via Biome
- All external links use `rel="noopener noreferrer"`
