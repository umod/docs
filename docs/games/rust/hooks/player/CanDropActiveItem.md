---
hide_table_of_contents: true
---

# CanDropActiveItem

## Usage

* Called when a player attempts to drop their active item
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanDropActiveItem(BasePlayer player)
{
    Puts("CanDropActiveItem works!");
    return null;
}
```
