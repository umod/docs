---
hide_table_of_contents: true
---

# CanRecycle

## Usage

* Called when the recycler attempts to recycle an item
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanRecycle(Recycler recycler, Item item)
{
    Puts("CanRecycle works!");
    return true;
}
```
