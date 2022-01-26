---
hide_table_of_contents: true
---

# OnTeamUpdate

## Usage

* Called when player's team is updated
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamUpdate(ulong currentTeam, ulong newTeam, BasePlayer player)
{
    Puts("OnTeamUpdate works!");
    return null;
}
```
