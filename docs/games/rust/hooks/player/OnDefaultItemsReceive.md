---
hide_table_of_contents: true
---

# OnDefaultItemsReceived

## Usage

* Called when a player is about to receive default items
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnDefaultItemsReceive(PlayerInventory inventory)
{
    Puts("OnDefaultItemsReceive works!");
    return null;
}
```
