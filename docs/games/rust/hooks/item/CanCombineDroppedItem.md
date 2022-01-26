---
hide_table_of_contents: true
---

# CanCombineDroppedItem

## Usage

* Called when an item is dropped on another item
* Returning a non-null value overwrites command arguments

## Examples

```csharp title=""
object CanCombineDroppedItem(DroppedItem item, DroppedItem targetItem)
{
    Puts("CanCombineDroppedItem works!");
    return null;
}
```
