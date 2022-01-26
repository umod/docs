---
hide_table_of_contents: true
---

# OnUserPermissionGranted

## Usage

* Called after a permission has been granted to a player
* No return behavior

## Examples

```csharp
void OnUserPermissionGranted(string playerId, string permissionName)
{
    Puts($"Permission '{permissionName}' granted to player: {playerId}");
}
```
