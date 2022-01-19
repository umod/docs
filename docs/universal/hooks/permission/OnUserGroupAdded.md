---
hide_table_of_contents: true
---

# OnUserGroupAdded

## Usage

* Called after a player has been added to a group
* No return handling

## Examples

```csharp
void OnUserGroupAdded(string playerId, string groupName)
{
    Puts($"Player '{playerId}' added to group: {groupName}");
}
```
