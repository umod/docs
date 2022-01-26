---
hide_table_of_contents: true
---

# OnGroupPermissionGranted

## Usage

* Called after a permission has been granted to a group
* No return behavior

## Examples

```csharp
void OnGroupPermissionGranted(string groupName, string permissionName)
{
    Puts($"Permission '{permissionName}' granted to group: {groupName}");
}
```
