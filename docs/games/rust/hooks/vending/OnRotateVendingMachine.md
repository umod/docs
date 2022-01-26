---
hide_table_of_contents: true
---

# OnRotateVendingMachine

## Usage

* Called when a player attempts to rotate a vending machine
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRotateVendingMachine(VendingMachine machine, BasePlayer player)
{
    Puts("OnRotateVendingMachine works!");
    return null;
}
```
