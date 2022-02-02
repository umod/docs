---
hide_table_of_contents: true
---

# OnTeamRejectInvite

## Usage

* Useful for canceling the invitation rejection
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTeamRejectInvite(BasePlayer rejector, RelationshipManager.PlayerTeam team)
{
    Puts("OnTeamRejectInvite works!");
    return null;
}
```
