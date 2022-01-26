---
hide_table_of_contents: true
---

# OnTeamKick

## Usage

* Useful for canceling kick of the player from the team
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamKick(RelationshipManager.PlayerTeam team, BasePlayer player, ulong target)
{
    Puts("OnTeamKick works!");
    return null;
}
```
