---
hide_table_of_contents: true
---

# OnItemAction

## Usage

* Called when a button is clicked on an item in the inventory (drop, unwrap, ...)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnItemAction(Item item, string action, BasePlayer player)
{
    Puts("OnItemAction works!");
    return null;
}
```
