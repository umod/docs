---
hide_table_of_contents: true
---

# OnPhoneCallStarted

## Usage

* Called right after a phone call has been answered and voice communication has been established

## Examples

```csharp title=""
void OnPhoneCallStarted(PhoneController phone, PhoneController otherPhone, BasePlayer player)
{
    Puts("OnPhoneCallStarted works!");
}
```
