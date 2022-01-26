---
hide_table_of_contents: true
---

# OnTeamPromote

## Usage

* Useful for canceling player's promotion in the team
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamPromote(RelationshipManager.PlayerTeam team, BasePlayer newLeader)
{
    Puts("OnTeamPromote works!");
    return null;
}
```
