---
hide_table_of_contents: true
---

# OnPermissionRegistered

## Usage

* Called after a permission has been registered by a plugin
* No return behavior

## Examples

```csharp
void OnPermissionRegistered(string permissionName, Plugin plugin)
{
    Puts($"Permission '{permissionName}' has been registered {(plugin != null ? $"by {plugin.Title}" : "")}");
}
```
