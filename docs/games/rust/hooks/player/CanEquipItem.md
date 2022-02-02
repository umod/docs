---
hide_table_of_contents: true
---

# CanEquipItem

## Usage

* Called when the player attempts to equip an item
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanEquipItem(PlayerInventory inventory, Item item, int targetPos)
{
    Puts("CanEquipItem works!");
    return null;
}
```
