# Certificate images

Drop your certificate images/scans here using these exact names — the
Achievements page already points at these paths:

- `bnsp-junior-web-programmer.png`
- `toeic-760.png`
- `oracle-applied-database-systems.png`
- `oracle-database-design.png`
- `oracle-database-programming-sql.png`
- `redhat-system-administration-1.png`
- `redhat-openshift-developer-1.png`
- `cisco-intro-networking.png`
- `cisco-packet-tracer.png`
- `dicoding-backend-development.png`
- `dicoding-data-visualization.png`
- `dicoding-javascript-programming.png`
- `dicoding-project-management-fundamentals.png`
- `sololearn-sql.png`

Any image works (JPG or PNG, `.jpg`/`.jpeg` also fine — just update the
extension in `data/profile.ts` if you don't use `.png`). Until a file exists,
that achievement automatically shows a branded placeholder instead — nothing
breaks if you leave some out.

Want a `Credential ID` row to show in the popup? Add a `credentialId` field
to that achievement's entry in `data/profile.ts` — it's optional and hidden
when not set.

To add/rename entries, edit `data/profile.ts` → `achievements`.
