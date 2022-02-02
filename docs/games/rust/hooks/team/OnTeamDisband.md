---
hide_table_of_contents: true
---

# OnTeamDisband

## Usage

* Useful for canceling team disbandment
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTeamDisband(RelationshipManager.PlayerTeam team)
{
    Puts("OnTeamDisband works!");
    return null;
}
```
