---
hide_table_of_contents: true
---

# CanUseVending

## Usage

* Called when a player attempts to use a vending machine
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanUseVending(VendingMachine machine, BasePlayer player)
{
    Puts("CanUseVending works!");
    return true;
}
```
