---
hide_table_of_contents: true
---

# OnItemRefill

## Usage

* Called right before an item such as a diving tank is repaired without using a repair bench
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnItemRefill(Item item, BasePlayer player)
{
    Puts("OnItemRefill works!");
    return null;
}
```
