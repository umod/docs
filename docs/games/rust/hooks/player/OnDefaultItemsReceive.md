---
hide_table_of_contents: true
---

# OnDefaultItemsReceived

## Usage

* Called when a player is about to receive default items
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnDefaultItemsReceive(PlayerInventory inventory)
{
    Puts("OnDefaultItemsReceive works!");
    return null;
}
```
