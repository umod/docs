---
hide_table_of_contents: true
---

# CanWearItem

## Usage

* Called when the player attempts to equip an item
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanWearItem(PlayerInventory inventory, Item item, int targetSlot)
{
    Puts("CanWearItem works!");
    return null;
}
```
