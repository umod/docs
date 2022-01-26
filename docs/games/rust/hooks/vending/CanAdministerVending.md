---
hide_table_of_contents: true
---

# CanAdministerVending

## Usage

* Called when a player attempts to administer a vending machine
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanAdministerVending(BasePlayer player, VendingMachine machine)
{
    Puts("CanAdministerVending works!");
    return true;
}
```
