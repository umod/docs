---
hide_table_of_contents: true
---

# OnTeamUpdated

## Usage

* Called before sending team info to player
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamUpdated(ulong currentTeam, PlayerTeam playerTeam, BasePlayer player)
{
    Puts("OnTeamUpdate works!");
    return null;
}
```
