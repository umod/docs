---
hide_table_of_contents: true
---

# OnGiveSoldItem

## Usage

* Called before a sold item is given
* Returning a non-null value cancels default behavior

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
