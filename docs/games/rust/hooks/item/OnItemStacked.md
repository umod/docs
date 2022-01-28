---
hide_table_of_contents: true
---

# OnItemStacked

## Usage

* Called after an item has been stacked
* No return behavior

## Examples

```csharp title=""
void OnItemStacked(Item destinationItem, Item sourceItem, ItemContainer destinationContainer)
{
    Puts("OnItemStacked works!");
}
```
