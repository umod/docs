---
hide_table_of_contents: true
---

# OnTeamLeave

## Usage

* Useful for canceling the leave from the team
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTeamLeave(RelationshipManager.PlayerTeam team, BasePlayer player)
{
    Puts("OnTeamLeave works!");
    return null;
}
```
