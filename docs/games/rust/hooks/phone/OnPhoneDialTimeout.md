---
hide_table_of_contents: true
---

# OnPhoneNameUpdated

## Usage

* Called when a phone is about to automatically hang up because the receiver phone wasn't answered in time
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPhoneDialTimeout(PhoneController callerPhone, PhoneController receiverPhone, BasePlayer player)
{
    Puts("OnPhoneDialTimeout works!");
    return null;
}
```
