---
hide_table_of_contents: true
---

# OnTeamRejectInvite

## Usage

* Useful for canceling the invitation rejection
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamRejectInvite(BasePlayer rejector, RelationshipManager.PlayerTeam team)
{
    Puts("OnTeamRejectInvite works!");
    return null;
}
```
