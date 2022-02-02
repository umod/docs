---
hide_table_of_contents: true
---

# OnRecycleItem

## Usage

* Called when an item is recycled in a recycler
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnRecycleItem(Recycler recycler, Item item)
{
    Puts("OnRecycleItem works!");
    return null;
}
```
