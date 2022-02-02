---
hide_table_of_contents: true
---

# OnItemPickup

## Usage

* Called right after an item has been picked up
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnItemPickup(Item item, BasePlayer player)
{
    Puts("OnItemPickup works!");
    return null;
}
```
