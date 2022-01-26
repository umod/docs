---
hide_table_of_contents: true
---

# OnNpcGiveSoldItem

## Usage

* Called before a non-player controlled vending machine (at outpost etc.) gives the player the item they purchased.
* Returning a non-null value overrides default behaviour.

## Examples

```csharp title=""
object OnNpcGiveSoldItem(NPCVendingMachine machine, Item soldItem, BasePlayer buyer)
{
    Puts("OnNpcGiveSoldItem works!");
    return null;
}
```
