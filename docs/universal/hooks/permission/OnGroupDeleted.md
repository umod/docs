---
hide_table_of_contents: true
---

# OnGroupDeleted

## Usage

* Called after a group has been deleted successfully
* No return handling

## Examples

```csharp
void OnGroupDeleted(string groupName)
{
    Puts($"Group '{groupName}' has been deleted");
}
```
