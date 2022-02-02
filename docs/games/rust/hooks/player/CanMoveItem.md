---
hide_table_of_contents: true
---

# CanMoveItem

## Usage

* Called when moving an item from one inventory slot to another
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanMoveItem(Item item, PlayerInventory playerLoot, uint targetContainer, int targetSlot, int amount)
{
    Puts("CanMoveItem works!");
    return null;
}
```
