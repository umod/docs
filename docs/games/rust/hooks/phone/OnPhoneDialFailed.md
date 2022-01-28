---
hide_table_of_contents: true
---

# OnPhoneDialFailed

## Usage

* Called after a phone call has ended or failed to start
* No return behavior

## Examples

```csharp title=""
void OnPhoneDialFailed(PhoneController phone, Telephone.DialFailReason reason, BasePlayer player)
{
    Puts("OnPhoneDialFailed works!");
}
```
