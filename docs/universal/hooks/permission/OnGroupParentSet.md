---
hide_table_of_contents: true
---

# OnGroupParentSet

## Usage

* Called after a group parent has been set or updated
* No return behavior

## Examples

```csharp
void OnGroupParentSet(string groupName, string parentGroupName)
{
    Puts($"Parent '{parentGroupName}' set on group '{groupName}'");
}
```
