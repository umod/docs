---
hide_table_of_contents: true
---

# OnItemResearched

## Usage

* Called right before an item is repaired
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnItemRepair(BasePlayer player, Item item)
{
    Puts("OnItemRepair works!");
    return null;
}
```
