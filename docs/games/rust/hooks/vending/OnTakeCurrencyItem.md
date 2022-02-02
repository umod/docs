---
hide_table_of_contents: true
---

# OnSleepingBagDestroyed

## Usage

* Called before currency item is taken
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTakeCurrencyItem(VendingMachine vending, Item item)
{
    Puts("OnTakeCurrencyItem works!");
    return null;
}
```
