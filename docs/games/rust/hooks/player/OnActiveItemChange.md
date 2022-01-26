---
hide_table_of_contents: true
---

# OnActiveItemChange

## Usage

* Called when active item is attempting to update
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnActiveItemChange(BasePlayer player, Item oldItem, uint newItemId)
{
    Puts("OnActiveItemChange works!");
    return null;
}
```
