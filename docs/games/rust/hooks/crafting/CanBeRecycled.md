---
hide_table_of_contents: true
---

# CanBeRecycled

## Usage

* Called when checking if an item can be recycled
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanBeRecycled(Item item, Recycler recycler)
{
    Puts("CanRecycle works!");
    return null;
}
```
