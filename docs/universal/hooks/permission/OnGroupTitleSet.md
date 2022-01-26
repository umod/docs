---
hide_table_of_contents: true
---

# OnGroupTitleSet

## Usage

* Called after a group title has been set or updated
* No return behavior

## Examples

```csharp
void OnGroupTitleSet(string groupName, string groupTitle)
{
    Puts($"Title '{groupTitle}' set on group '{groupName}'");
}
```
