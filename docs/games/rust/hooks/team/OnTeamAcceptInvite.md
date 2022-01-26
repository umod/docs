---
hide_table_of_contents: true
---

# OnTeamAcceptInvite

## Usage

* Useful for canceling team invitation acceptation
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamAcceptInvite(RelationshipManager.PlayerTeam team, BasePlayer player)
{
    Puts("OnTeamAcceptInvite works!");
    return null;
}
```
