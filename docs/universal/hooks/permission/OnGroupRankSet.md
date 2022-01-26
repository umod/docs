---
hide_table_of_contents: true
---

# OnGroupRankSet

## Usage

* Called after a group rank has been set or updated
* No return behavior

## Examples

```csharp
void OnGroupRankSet(string groupName, int groupRank)
{
    Puts($"Rank '{groupRank}' set on group '{groupName}'");
}
```
