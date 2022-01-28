---
hide_table_of_contents: true
---

# OnPhoneDialTimedOut

## Usage

* Called right after a phone was automatically hung up because the receiver phone wasn't answered in time
* No return behavior

## Examples

```csharp title=""
void OnPhoneDialTimedOut(PhoneController callerPhone, PhoneController receiverPhone, BasePlayer player)
{
    Puts("OnPhoneDialTimedOut works!");
}
```
