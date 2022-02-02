---
hide_table_of_contents: true
---

# OnGiveSoldItem

## Usage

* Called before a sold item is given
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnGiveSoldItem(NPCVendingMachine vending, Item soldItem, BasePlayer buyer)
{
    Puts("OnGiveSoldItem works!");
    return null;
}
```
```csharp title=""
object OnGiveSoldItem(VendingMachine vending, Item soldItem, BasePlayer buyer)
{
    Puts("OnGiveSoldItem works!");
    return null;
}
```
