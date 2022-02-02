---
hide_table_of_contents: true
---

# OnPhoneNameUpdate

## Usage

* Called when a player tries to update a phone name
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPhoneNameUpdate(PhoneController phoneController, string newPhoneName, BasePlayer player)
{
    Puts("OnPhoneNameUpdate works!");
    return null;
}
```
