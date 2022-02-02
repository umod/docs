---
hide_table_of_contents: true
---

# CanUseVending

## Usage

* Called when a player attempts to use a vending machine
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanUseVending(VendingMachine machine, BasePlayer player)
{
    Puts("CanUseVending works!");
    return null;
}
```
