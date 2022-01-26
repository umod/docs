---
hide_table_of_contents: true
---

# OnUserGroupRemoved

## Usage

* Called after a player has been removed from a group
* No return behavior

## Examples

```csharp
void OnUserGroupRemoved(string playerId, string groupName)
{
    Puts($"Player '{playerId}' removed from group: {groupName}");
}
```
