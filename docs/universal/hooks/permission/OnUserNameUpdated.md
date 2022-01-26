---
hide_table_of_contents: true
---

# OnUserNameUpdated

## Usage

* Called after a player's stored name has been updated
* No return behavior

## Examples

```csharp
void OnUserNameUpdated(string groupName, int groupRank)
{
    Puts($"Rank '{groupRank}' set on group '{groupName}'");
}
```
