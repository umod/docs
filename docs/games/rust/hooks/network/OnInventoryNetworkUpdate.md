---
hide_table_of_contents: true
---

# OnInventoryNetworkUpdate

## Usage

* Called after a player's inventory contents have changed, before it is sent over the network to one or more clients
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnInventoryNetworkUpdate(PlayerInventory inventory, ItemContainer container, ProtoBuf.UpdateItemContainer updateItemContainer, PlayerInventory.Type inventoryType, bool broadcast)
{
    Puts("OnInventoryNetworkUpdate works!");
    return null;
}
```
