---
hide_table_of_contents: true
---

# OnTeamDisband

## Usage

* Useful for canceling team disbandment
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnTeamDisband(RelationshipManager.PlayerTeam team)
{
    Puts("OnTeamDisband works!");
    return null;
}
```
