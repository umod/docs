---
hide_table_of_contents: true
---

# OnPhoneNameUpdate

## Usage

* Called when a player tries to update a phone name
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPhoneNameUpdate(PhoneController phoneController, string name, BasePlayer player)
{
    Puts("OnPhoneNameUpdate works!");
    return null;
}
```
