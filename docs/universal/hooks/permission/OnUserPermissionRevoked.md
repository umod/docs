---
hide_table_of_contents: true
---

# OnUserPermissionRevoked

## Usage

* Called after a permission has been granted to a player
* No return handling

## Examples

```csharp
void OnUserPermissionRevoked(string playerId, string permissionName)
{
    Puts($"Permission '{permissionName}' revoked from player: {playerId}");
}
```
