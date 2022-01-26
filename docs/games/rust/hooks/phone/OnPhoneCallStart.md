---
hide_table_of_contents: true
---

# OnPhoneCallStart

## Usage

* Called after a phone has been answered, right before voice communication is established
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPhoneCallStart(PhoneController phone, PhoneController otherPhone, BasePlayer player)
{
    Puts("OnPhoneCallStart works!");
    return null;
}
```
