---
hide_table_of_contents: true
---

# OnPhoneDial

## Usage

* Called when a player places a phone call
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPhoneDial(PhoneController callerPhone, PhoneController receiverPhone, BasePlayer player)
{
    Puts("OnPhoneDial works!");
    return null;
}
```
