---
hide_table_of_contents: true
---

# OnTeamUpdate

## Usage

* Called when player's team is updated
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTeamUpdate(ulong currentTeam, ulong newTeam, BasePlayer player)
{
    Puts("OnTeamUpdate works!");
    return null;
}
```
