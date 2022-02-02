---
hide_table_of_contents: true
---

# OnPhoneDialFail

## Usage

* Called when a phone call is about to end or fail to start
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPhoneDialFail(PhoneController phone, Telephone.DialFailReason reason, BasePlayer player)
{
    Puts("OnPhoneDialFail works!");
    return null;
}
```
