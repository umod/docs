---
hide_table_of_contents: true
---

# OnDefaultItemsReceived

## Usage

* Called after a player has received default items
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
void OnDefaultItemsReceived(PlayerInventory inventory)
{
    Puts("OnDefaultItemsReceived works!");
}
```
