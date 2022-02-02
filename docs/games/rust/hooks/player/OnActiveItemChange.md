---
hide_table_of_contents: true
---

# OnActiveItemChange

## Usage

* Called when active item is attempting to update
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnActiveItemChange(BasePlayer player, Item oldItem, uint newItemId)
{
    Puts("OnActiveItemChange works!");
    return null;
}
```
