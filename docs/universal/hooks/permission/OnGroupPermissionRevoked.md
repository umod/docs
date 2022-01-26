---
hide_table_of_contents: true
---

# OnGroupPermissionRevoked

## Usage

* Called after a permission has been revoked from a group
* No return behavior

## Examples

```csharp
void OnGroupPermissionRevoked(string groupName, string permissionName)
{
    Puts($"Permission '{permissionName}' revoked from group: {groupName}");
}
```
